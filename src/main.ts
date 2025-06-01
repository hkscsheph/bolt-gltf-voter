import './app.css'
import App from './App.svelte'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './config/firebase'

// Initialize Firebase
initializeApp(firebaseConfig)

const app = new App({
  target: document.getElementById('app')!,
})

export default app