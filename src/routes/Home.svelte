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
  <Header title="VoxEdit 作品" />
  
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold text-white mb-8">歡迎瀏覽 HKSC 人類們的 VoxEdit 作品</h1>
    
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
            alt="瀏覽作品" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <h2 class="text-2xl font-bold text-white">點此開始</h2>
            <p class="text-primary-300">每一份作品都經過一點一點創作而成</p>
          </div>
        </div>
        <div class="p-4">
          <p class="text-white">不要吝嗇你的回應，每次 Like / Dislike 都會成為下一次創作的養份。</p>
          <button class="mt-4 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors">
            點此開始
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
            alt="我的記錄" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <h2 class="text-2xl font-bold text-white">我的記錄</h2>
            <p class="text-primary-300">每一票都是認真的回饋</p>
          </div>
        </div>
        <div class="p-4">
          <p class="text-white">學習成為好的觀眾，為你最喜歡的作品留下記錄。</p>
          <button class="mt-4 bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors">
            瀏覽記錄
          </button>
        </div>
      </div>
    </div>
  </div>
</div>