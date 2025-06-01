<script lang="ts">
  import Router from 'svelte-spa-router'
  import { onMount } from 'svelte'
  import { wrap } from 'svelte-spa-router/wrap'
  import { user } from './stores/auth'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { push } from 'svelte-spa-router'
  
  import Login from './routes/Login.svelte'
  import Home from './routes/Home.svelte'
  import NotFound from './routes/NotFound.svelte'
  import LoadingScreen from './components/LoadingScreen.svelte'
  
  const auth = getAuth()
  let isLoading = true
  
  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      $user = currentUser
      isLoading = false
      
      // Redirect to login if not authenticated
      if (!currentUser && window.location.pathname !== '/login') {
        push('/login')
      }
    })
    
    return () => unsubscribe()
  })
  
  const routes = {
    '/': wrap({
      component: Home,
      conditions: [
        () => !isLoading && !!$user
      ]
    }),
    '/login': Login,
    '/swipe': wrap({
      asyncComponent: () => import('./routes/Swipe.svelte'),
      conditions: [
        () => !isLoading && !!$user
      ]
    }),
    '/profile': wrap({
      asyncComponent: () => import('./routes/Profile.svelte'),
      conditions: [
        () => !isLoading && !!$user
      ]
    }),
    '*': NotFound
  }
</script>

<div class="app-container w-full h-full">
  {#if isLoading}
    <LoadingScreen />
  {:else}
    <Router {routes} />
  {/if}
</div>