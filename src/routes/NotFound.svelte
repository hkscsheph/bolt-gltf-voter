<script lang="ts">
  import { push } from 'svelte-spa-router'
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-primary-900 px-4 text-center">
  <h1 class="text-6xl font-bold text-white mb-4">404</h1>
  <p class="text-2xl text-primary-300 mb-8">Page not found</p>
  <button 
    on:click={() => push('/')}
    class="bg-accent-500 hover:bg-accent-600 text-white py-2 px-6 rounded-lg transition-colors"
  >
    Go Home
  </button>
</div>