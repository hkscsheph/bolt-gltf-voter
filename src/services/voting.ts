import { APPS_SCRIPT_URL } from '../config/appscript'
import type { VoteData } from '../types/model'
import { getAuth } from 'firebase/auth'

export const submitVote = async (voteData: Omit<VoteData, 'userId' | 'userEmail' | 'timestamp'>) => {
  try {
    const auth = getAuth()
    const currentUser = auth.currentUser
    
    if (!currentUser || !currentUser.email) {
      throw new Error('User not authenticated')
    }
    
    const completeVoteData: VoteData = {
      ...voteData,
      userId: currentUser.uid,
      userEmail: currentUser.email,
      timestamp: Date.now()
    }
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(completeVoteData),
      mode: 'no-cors' // Google Apps Script requires this
    })
    
    // Due to no-cors mode, we can't access the response body
    // We'll assume success if no error is thrown
    return true
    
  } catch (error) {
    console.error('Error submitting vote:', error)
    throw error
  }
}