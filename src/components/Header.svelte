<script lang="ts">
  import { user } from '../stores/auth'
  import { push } from 'svelte-spa-router'
  
  export let title = "ModelSwipe"
  export let link = ''
  export let showProfile = true
  export let showBack = false
  
  const goBack = () => {
    window.history.back()
  }
  
  const goToProfile = () => {
    push('/profile')
  }
</script>

<header class="fixed top-0 left-0 right-0 bg-primary-900 bg-opacity-90 backdrop-blur-sm z-20 p-4 flex justify-between items-center">
  <div class="flex items-center">
    {#if showBack}
      <button 
        on:click={goBack}
        class="mr-3 p-2 rounded-full hover:bg-primary-800"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    {/if}
    
    <h1 class="text-xl font-bold text-white">
      {title}
      {#if link}
        <a target="_blank" href={link}>(參考圖片)</a>
      {/if}
    </h1>
  </div>
  
  {#if showProfile && $user}
    <button 
      on:click={goToProfile}
      class="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-accent-500"
      aria-label="Profile"
    >
      {#if $user.photoURL}
        <img src={$user.photoURL} alt="Profile" class="w-full h-full object-cover" />
      {:else}
        <div class="w-full h-full bg-accent-500 flex items-center justify-center text-white font-bold">
          {$user.displayName ? $user.displayName[0].toUpperCase() : '?'}
        </div>
      {/if}
    </button>
  {/if}
</header>

<!-- Add padding to prevent content from going under the header -->
<div class="h-16"></div>