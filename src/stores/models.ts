import { writable } from 'svelte/store'
import type { Model } from '../types/model'

// Example model data
const modelData: Model[] = [
  {
    id: '2B03',
    name: '仙女',
    description: '仙女',
    url: '/Chu Pat Chin.gltf',
    thumbnailUrl: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    designer: 'Chu Pat Chin',
    category: '仙女'
  },
]

export const models = writable<Model[]>(modelData)
export const currentModelIndex = writable<number>(0)

export const nextModel = () => {
  currentModelIndex.update(n => (n + 1) % modelData.length)
}

export const prevModel = () => {
  currentModelIndex.update(n => (n - 1 + modelData.length) % modelData.length)
}