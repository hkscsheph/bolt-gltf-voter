<script lang="ts">
  import { signInWithGoogle } from '../services/auth'
  import { push } from 'svelte-spa-router'
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'
  
  let isLoading = false
  let error = ''
  let logoElement: HTMLElement
  
  const handleLogin = async () => {
    isLoading = true
    error = ''
    
    try {
      await signInWithGoogle()
      push('/')
    } catch (e) {
      error = 'Failed to sign in. Please try again.'
      console.error(e)
    } finally {
      isLoading = false
    }
  }
  
  onMount(() => {
    if (logoElement) {
      gsap.from(logoElement, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      })
    }
    
    const buttons = document.querySelectorAll('.animate-in')
    gsap.from(buttons, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.5,
      ease: "power2.out"
    })
  })
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-primary-900 px-4">
  <div bind:this={logoElement} class="mb-10 text-center">
    <div class="inline-block mb-4">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
      </svg>
    </div>
    <h1 class="text-3xl font-bold text-white mb-2">ModelSwipe</h1>
    <p class="text-primary-300 max-w-md">Discover and vote on amazing 3D models</p>
  </div>
  
  <div class="w-full max-w-md bg-primary-800 rounded-xl p-6 shadow-lg">
    <h2 class="text-xl font-semibold text-white mb-6 text-center animate-in">Sign in to continue</h2>
    
    {#if error}
      <div class="bg-error-500 bg-opacity-20 border border-error-500 text-white p-3 rounded-lg mb-4">
        {error}
      </div>
    {/if}
    
    <button 
      on:click={handleLogin} 
      disabled={isLoading}
      class="animate-in w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary-900 font-medium py-3 px-4 rounded-lg transition-colors"
    >
      {#if isLoading}
        <div class="animate-spin h-5 w-5 border-t-2 border-b-2 border-primary-900 rounded-full"></div>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Continue with Google
      {/if}
    </button>
  </div>
  
  <p class="text-primary-400 text-sm mt-6 animate-in">By signing in, you agree to our Terms and Privacy Policy</p>
</div>