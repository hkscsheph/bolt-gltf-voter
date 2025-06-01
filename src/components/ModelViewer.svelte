<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  import { gsap } from 'gsap'
  import type { Model } from '../types/model'
  
  export let model: Model
  
  let container: HTMLElement
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let renderer: THREE.WebGLRenderer
  let controls: OrbitControls
  let currentModel: THREE.Object3D | null = null
  let loadingProgress = 0
  let mixer: THREE.AnimationMixer
  let isModelLoaded = false
  let clock: THREE.Clock
  
  const initThree = () => {
    // Scene
    clock = new THREE.Clock();
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1e293b)
    
    // Camera
    const aspectRatio = container.clientWidth / container.clientHeight
    camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000)
    camera.position.set(0, 0, -5)
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, .9)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, -1)
    scene.add(directionalLight)
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    
    // Controls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    
    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      mixer?.update( clock.getDelta() );
      
      if (currentModel) {
        currentModel.rotation.y -= 0.002
      }
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (renderer) {
        renderer.dispose()
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }
  
  const loadModel = (modelUrl: string) => {
    isModelLoaded = false
    loadingProgress = 0
    
    // Clear previous model
    if (currentModel) {
      scene.remove(currentModel)
      currentModel = null
    }
    
    const loader = new GLTFLoader()
    
    loader.load(
      modelUrl,
      (gltf) => {
        currentModel = gltf.scene
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(currentModel)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2 / maxDim
        currentModel.scale.set(scale, scale, scale)
        
        currentModel.position.x = -center.x * scale
        currentModel.position.y = -center.y * scale
        currentModel.position.z = -center.z * scale
        
        scene.add(currentModel)
        
        mixer = new THREE.AnimationMixer( gltf.scene );
        
        gltf.animations.forEach( ( clip ) => {
            mixer.clipAction( clip ).play();
        } );
        
        // Animate model entrance
        gsap.from(currentModel.rotation, {
          y: Math.PI,
          duration: 1,
          ease: "power2.out"
        })
        
        isModelLoaded = true
      },
      (progress) => {
        loadingProgress = progress.total ? Math.floor((progress.loaded / progress.total) * 100) : 0
      },
      (error) => {
        console.error('Error loading model:', error)
      }
    )
  }
  
  onMount(() => {
    const cleanup = initThree()
  
    return () => {
      cleanup()
    }
  })
  
  $: if (model && scene) {
    loadModel(model.url)
  }
</script>

<div 
  class="model-container"
  bind:this={container}
>
  {#if !isModelLoaded}
    <div class="absolute inset-0 flex flex-col items-center justify-center bg-primary-900 bg-opacity-70 z-10">
      <div class="w-32 h-2 bg-primary-700 rounded-full overflow-hidden mb-4">
        <div class="h-full bg-accent-500 transition-all duration-300" style="width: {loadingProgress}%"></div>
      </div>
      <p class="text-white">Loading {model.name}... {loadingProgress}%</p>
    </div>
  {/if}
  
  <div class="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
    <div class="bg-primary-900 bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg">
      <h2 class="font-bold text-white">{model.name}</h2>
    </div>
  </div>
</div>

<style>
  .model-container {
    touch-action: none;
  }
</style>