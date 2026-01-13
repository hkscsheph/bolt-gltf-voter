<script lang="ts">
  import { onMount } from 'svelte'
  import { filteredModels, currentModelIndex, nextModel, selectedYear } from '../stores/models'
  import { submitVote } from '../services/voting'
  import ModelViewer from '../components/ModelViewer.svelte'
  import SwipeButtons from '../components/SwipeButtons.svelte'
  import Header from '../components/Header.svelte'
  import type { Vote } from '../types/model'
  
  let currentModel = $filteredModels[$currentModelIndex]
  let voted = false
  
  const handleVote = async (vote: Vote) => {
    if (voted || !currentModel) return
    try {
      voted = true
      await submitVote({
        modelId: currentModel.id,
        vote
      })
      
      // Move to next model
      nextModel()
      if ($filteredModels.length > 0 && $currentModelIndex < $filteredModels.length) {
        currentModel = $filteredModels[$currentModelIndex]
      }
      voted = false
    } catch (error) {
      console.error('Error submitting vote:', error)
      // Still move to next model even if there's an error
      nextModel()
      if ($filteredModels.length > 0 && $currentModelIndex < $filteredModels.length) {
        currentModel = $filteredModels[$currentModelIndex]
      }
      voted = false
    }
  }
  
  const handleLike = () => handleVote('like')
  const handleDislike = () => handleVote('dislike')
  const handleSkip = () => handleVote('skip')
  
  // Update current model when the index or filtered models change
  $: {
    if ($filteredModels.length > 0 && $currentModelIndex < $filteredModels.length) {
      currentModel = $filteredModels[$currentModelIndex]
    }
  }
</script>

<div class="relative h-screen bg-primary-900">
  <Header title={currentModel?.name || 'Loading...'} showBack={true} link={currentModel?.reference} />
  
  <!-- Year Filter - Stylish Checkbox Style -->
  <div class="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1 flex items-center space-x-1">
      <button
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {$selectedYear === '2526' ? 'bg-accent-500 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}"
        on:click={() => selectedYear.set('2526')}
      >
        2526 生肖化身
      </button>
      <button
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {$selectedYear === '2425' ? 'bg-accent-500 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}"
        on:click={() => selectedYear.set('2425')}
      >
        2425 中國神話
      </button>
      <button
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {$selectedYear === 'all' ? 'bg-accent-500 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}"
        on:click={() => selectedYear.set('all')}
      >
        所有 VoxEdit
      </button>
    </div>
  </div>
  
  {#if currentModel}
    <ModelViewer model={currentModel} />
    
    <SwipeButtons 
      onLike={handleLike}
      onDislike={handleDislike}
      onSkip={handleSkip}
      voted={voted}
    />
  {:else}
    <div class="flex items-center justify-center h-full">
      <p class="text-white text-lg">No models available for this year</p>
    </div>
  {/if}
</div>