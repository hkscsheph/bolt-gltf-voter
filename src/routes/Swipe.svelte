<script lang="ts">
  import { onMount } from 'svelte'
  import { models, currentModelIndex, nextModel } from '../stores/models'
  import { submitVote } from '../services/voting'
  import ModelViewer from '../components/ModelViewer.svelte'
  import SwipeButtons from '../components/SwipeButtons.svelte'
  import Header from '../components/Header.svelte'
  import type { Vote } from '../types/model'
  
  let currentModel = $models[$currentModelIndex]
  let voted = false
  
  const handleVote = async (vote: Vote) => {
    if (voted) return
    try {
      voted = true
      await submitVote({
        modelId: currentModel.id,
        vote
      })
      
      // Move to next model
      nextModel()
      currentModel = $models[$currentModelIndex]
      voted = false
    } catch (error) {
      console.error('Error submitting vote:', error)
      // Still move to next model even if there's an error
      nextModel()
      currentModel = $models[$currentModelIndex]
      voted = false
    }
  }
  
  const handleLike = () => handleVote('like')
  const handleDislike = () => handleVote('dislike')
  const handleSkip = () => handleVote('skip')
  
  // Update current model when the index changes
  $: currentModel = $models[$currentModelIndex]
</script>

<div class="relative h-screen bg-primary-900">
  <Header title={currentModel.name} showBack={true} />
  
  <ModelViewer model={currentModel} />
  
  <SwipeButtons 
    onLike={handleLike}
    onDislike={handleDislike}
    onSkip={handleSkip}
    voted={voted}
  />
</div>