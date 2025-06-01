import { writable } from 'svelte/store'
import type { Model } from '../types/model'

// Example model data
const modelData: Model[] = [
  {
    id: '2G01',
    name: '哪吒',
    description: '哪吒',
    url: '/Chan Chung Ching 2G01.gltf',
    thumbnailUrl: '/Chan Chung Ching 2G01.png',
    designer: 'Chan Chung Ching',
    category: '哪吒'
  },
  {
    id: '2R01',
    name: '牛魔王',
    description: '牛魔王',
    url: '/Chan Long Him 2R01.gltf',
    thumbnailUrl: '/Chan Long Him 2R01.png',
    designer: 'Chan Long Him',
    category: '牛魔王'
  },
  {
    id: '2R02',
    name: '哪吒',
    description: '哪吒',
    url: '/Chan Yau Ching 2R02.gltf',
    thumbnailUrl: '/Chan Yau Ching 2R02.png',
    designer: 'Chan Yau Ching',
    category: '哪吒'
  },
]

export const models = writable<Model[]>(modelData)
export const currentModelIndex = writable<number>(Math.floor(Math.random() * modelData.length))

export const nextModel = () => {
  currentModelIndex.update(n => Math.floor(Math.random() * modelData.length))
}