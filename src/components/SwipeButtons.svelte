<script lang="ts">
  import { gsap } from 'gsap'
  
  export let onLike = () => {}
  export let onDislike = () => {}
  export let onSkip = () => {}
  
  const animateButton = (element: HTMLElement) => {
    gsap.to(element, {
      scale: 0.9,
      duration: 0.1,
      onComplete: () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.2,
          ease: "back.out(1.5)"
        })
      }
    })
  }
  
  const handleLike = (e: MouseEvent) => {
    animateButton(e.currentTarget as HTMLElement)
    onLike()
  }
  
  const handleDislike = (e: MouseEvent) => {
    animateButton(e.currentTarget as HTMLElement)
    onDislike()
  }
  
  const handleSkip = (e: MouseEvent) => {
    animateButton(e.currentTarget as HTMLElement)
    onSkip()
  }
</script>

<div class="fixed bottom-0 left-0 right-0 flex justify-center items-center p-6 gap-4 bg-gradient-to-t from-primary-900 to-transparent z-20">
  <button 
    on:click={handleDislike}
    class="flex items-center justify-center w-14 h-14 bg-error-500 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
    aria-label="Dislike"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
  
  <button 
    on:click={handleSkip}
    class="flex items-center justify-center w-12 h-12 bg-primary-700 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
    aria-label="Skip"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
  
  <button 
    on:click={handleLike}
    class="flex items-center justify-center w-14 h-14 bg-success-500 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
    aria-label="Like"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  </button>
</div>