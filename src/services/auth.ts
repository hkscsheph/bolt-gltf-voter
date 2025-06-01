import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signOut as firebaseSignOut
} from 'firebase/auth'
import { user } from '../stores/auth'

export const signInWithGoogle = async () => {
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result.user
  } catch (error) {
    console.error('Error signing in with Google:', error)
    throw error
  }
}

export const signOut = async () => {
  try {
    const auth = getAuth()
    await firebaseSignOut(auth)
    user.set(null)
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}