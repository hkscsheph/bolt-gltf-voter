<script lang="ts">
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import Header from '../components/Header.svelte'
  import { gsap } from 'gsap'
  
  let cards: HTMLElement[] = []
  
  onMount(() => {
    // Animate cards when component mounts
    gsap.from(cards, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    })
  })
  
  const navigateTo = (path: string) => {
    push(path)
  }
</script>

<div class="min-h-screen bg-primary-900">
  <Header title="ModelSwipe" />
  
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold text-white mb-8">Welcome to ModelSwipe</h1>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div 
        bind:this={cards[0]}
        class="bg-primary-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
        on:click={() => navigateTo('/swipe')}
      >
        <div class="relative h-48">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900"></div>
          <img 
            src="https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Start swiping" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <h2 class="text-2xl font-bold text-white">Start Swiping</h2>
            <p class="text-primary-300">Discover amazing 3D models</p>
          </div>
        </div>
        <div class="p-4">
          <p class="text-white">Swipe through a curated collection of stunning 3D models and vote on your favorites.</p>
          <button class="mt-4 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors">
            Start Swiping
          </button>
        </div>
      </div>
      
      <div 
        bind:this={cards[1]}
        class="bg-primary-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
        on:click={() => navigateTo('/profile')}
      >
        <div class="relative h-48">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900"></div>
          <img 
            src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Your profile" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <h2 class="text-2xl font-bold text-white">Your Profile</h2>
            <p class="text-primary-300">View your activity</p>
          </div>
        </div>
        <div class="p-4">
          <p class="text-white">See your voting history and preferences. Track which models you've liked and disliked.</p>
          <button class="mt-4 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</div>