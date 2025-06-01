<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'
  
  let logoElement: HTMLElement
  
  onMount(() => {
    if (logoElement) {
      gsap.to(logoElement, { 
        rotation: 360, 
        duration: 2, 
        repeat: -1, 
        ease: "power1.inOut" 
      })
    }
  })
</script>

<div class="flex flex-col items-center justify-center h-full bg-primary-900 text-white">
  <div bind:this={logoElement} class="mb-8">
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
    </svg>
  </div>
  <h1 class="text-2xl font-bold mb-4">ModelSwipe</h1>
  <p class="text-primary-300">Loading amazing 3D models...</p>
</div>