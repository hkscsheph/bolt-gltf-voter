<script lang="ts">
  import { onMount } from 'svelte'
  import { user } from '../stores/auth'
  import { signOut } from '../services/auth'
  import { push } from 'svelte-spa-router'
  import Header from '../components/Header.svelte'
  import { gsap } from 'gsap'
  
  let isLoading = false
  let error = ''
  
  const handleSignOut = async () => {
    isLoading = true
    try {
      await signOut()
      push('/login')
    } catch (e) {
      error = 'Failed to sign out. Please try again.'
      console.error(e)
    } finally {
      isLoading = false
    }
  }
  
  onMount(() => {
    const elements = document.querySelectorAll('.animate-in')
    gsap.from(elements, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    })
  })
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
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-primary-700 rounded-lg p-4 text-center">
            <span class="block text-2xl font-bold text-accent-400">12</span>
            <span class="text-sm text-primary-300">Liked</span>
          </div>
          <div class="bg-primary-700 rounded-lg p-4 text-center">
            <span class="block text-2xl font-bold text-error-500">8</span>
            <span class="text-sm text-primary-300">Disliked</span>
          </div>
          <div class="bg-primary-700 rounded-lg p-4 text-center">
            <span class="block text-2xl font-bold text-primary-300">3</span>
            <span class="text-sm text-primary-300">Skipped</span>
          </div>
        </div>
      </div>
      
      <div class="animate-in">
        {#if error}
          <div class="bg-error-500 bg-opacity-20 border border-error-500 text-white p-3 rounded-lg mb-4">
            {error}
          </div>
        {/if}
        
        <button 
          on:click={handleSignOut}
          disabled={isLoading}
          class="w-full bg-primary-800 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          {#if isLoading}
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