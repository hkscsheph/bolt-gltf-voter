import { writable } from 'svelte/store'
import type { Model } from '../types/model'

// Example model data
const modelData: Model[] = [
  {
    id: '1',
    name: 'Modern Chair',
    description: 'A sleek modern chair design',
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf',
    thumbnailUrl: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    designer: 'Design Studio A',
    category: 'Furniture'
  },
  {
    id: '2',
    name: 'Sci-Fi Helmet',
    description: 'Futuristic helmet concept',
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SciFiHelmet/glTF/SciFiHelmet.gltf',
    thumbnailUrl: 'https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    designer: 'Future Concepts',
    category: 'Concept Art'
  },
  {
    id: '3',
    name: 'Vintage Camera',
    description: 'Detailed vintage camera model',
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AntiqueCamera/glTF/AntiqueCamera.gltf',
    thumbnailUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    designer: 'Retro Designs',
    category: 'Vintage'
  }
]

export const models = writable<Model[]>(modelData)
export const currentModelIndex = writable<number>(0)

export const nextModel = () => {
  currentModelIndex.update(n => (n + 1) % modelData.length)
}

export const prevModel = () => {
  currentModelIndex.update(n => (n - 1 + modelData.length) % modelData.length)
}