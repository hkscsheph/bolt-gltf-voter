<script lang="ts">
  import { onMount } from 'svelte';
  import { user } from '../stores/auth';
  import { models, filteredModels, currentModelIndex, selectedYear } from '../stores/models';
  import { signOut } from '../services/auth';
  import { push } from 'svelte-spa-router';
  import Header from '../components/Header.svelte';
  import { gsap } from 'gsap';
  import axios from 'axios';

  let isLoading = false;
  let isSigningOut = false;
  let error = '';
  let stats = { liked: 0, disliked: 0, skipped: 0 };
  let lastModelId = '';

  const API_URL = 'https://script.google.com/macros/s/AKfycbymlVWpIe8yWqTOWJMw2MPUIHlc6xXcrLojSku_WHoPhb9jsfQyWENOYCM6VwiD0Ry2/exec'; // Replace with your deployed Google Apps Script web app URL

  async function fetchVoteStats() {
    if (!$user) return;
    isLoading = true;
    try {
      const response = await axios.get(API_URL);
      const userData = response.data.data.find(row => row.userEmail === $user.email) || {};
      stats.liked = userData.like || 0;
      stats.disliked = userData.dislike || 0;
      stats.skipped = userData.skip || 0;
      lastModelId = userData.last || '';
    } catch (e) {
      error = 'Failed to load vote stats. Please try again.';
      console.error(e);
    } finally {
      isLoading = false;
    }
  }

  const handleSignOut = async () => {
    isSigningOut = true;
    try {
      await signOut();
      push('/login');
    } catch (e) {
      error = 'Failed to sign out. Please try again.';
      console.error(e);
    } finally {
      isSigningOut = false;
    }
  };

  const handleLastModel = () => {
    if (lastModelId) {
      // First, find the model in all models to determine which year it belongs to
      const allModels = $models;
      const modelIndex = allModels.findIndex(model => model.id === lastModelId);
      
      if (modelIndex !== -1) {
        const model = allModels[modelIndex];
        
        // Set the appropriate year filter based on the model
        if (model.id.includes('_2526')) {
          selectedYear.set('2526');
        } else {
          selectedYear.set('2425');
        }
        
        // Wait for the filtered models to update, then find the index in filtered models
        setTimeout(() => {
          const filteredIndex = $filteredModels.findIndex(model => model.id === lastModelId);
          if (filteredIndex !== -1) {
            currentModelIndex.set(filteredIndex);
          }
        }, 100);
      }
    }
    push('/swipe');
  };

  onMount(() => {
    fetchVoteStats();
    const elements = document.querySelectorAll('.animate-in');
    gsap.from(elements, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    });
  });
</script>

<div class="min-h-screen bg-primary-900">
  <Header title="Your Profile" showBack={true} showProfile={false} />

  <div class="container mx-auto px-4 py-6">
    {#if $user}
      <div class="bg-primary-800 rounded-xl p-6 mb-6 animate-in">
        <div class="flex items-center">
          {#if $user.photoURL}
            <img src={$user.photoURL} alt="Profile" class="w-16 h-16 rounded-full mr-4" />
          {:else}
            <div class="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold mr-4">
              {$user.displayName ? $user.displayName[0].toUpperCase() : '?'}
            </div>
          {/if}
          <div>
            <h2 class="text-xl font-bold text-white">{$user.displayName || 'User'}</h2>
            <p class="text-primary-300">{$user.email}</p>
          </div>
        </div>
      </div>

      <div class="bg-primary-800 rounded-xl p-6 mb-6 animate-in">
        <h3 class="text-lg font-semibold text-white mb-4">Your Stats</h3>
        {#if isLoading}
          <div class="text-center text-primary-300">Loading stats...</div>
        {:else}
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-primary-700 rounded-lg p-4 text-center">
              <span class="block text-2xl font-bold text-accent-400">{stats.liked}</span>
              <span class="text-sm text-primary-300">Liked</span>
            </div>
            <div class="bg-primary-700 rounded-lg p-4 text-center">
              <span class="block text-2xl font-bold text-error-500">{stats.disliked}</span>
              <span class="text-sm text-primary-300">Disliked</span>
            </div>
            <div class="bg-primary-700 rounded-lg p-4 text-center">
              <span class="block text-2xl font-bold text-primary-300">{stats.skipped}</span>
              <span class="text-sm text-primary-300">Skipped</span>
            </div>
          </div>
        {/if}
        {#if lastModelId}
          <div class="mt-4 text-center">
            <button
              on:click={handleLastModel}
              class="bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              View Last Like
            </button>
          </div>
        {/if}
      </div>

      <div class="animate-in">
        {#if error}
          <div class="bg-error-500 bg-opacity-20 border border-error-500 text-white p-3 rounded-lg mb-4">
            {error}
          </div>
        {/if}
        <button
          on:click={handleSignOut}
          disabled={isSigningOut}
          class="w-full bg-primary-800 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          {#if isSigningOut}
            <div class="inline-block animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full mr-2"></div>
            Signing out...
          {:else}
            Sign Out
          {/if}
        </button>
      </div>
    {:else}
      <div class="text-center py-12">
        <p class="text-white">Please sign in to view your profile</p>
        <button
          on:click={() => push('/login')}
          class="mt-4 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Sign In
        </button>
      </div>
    {/if}
  </div>
</div>