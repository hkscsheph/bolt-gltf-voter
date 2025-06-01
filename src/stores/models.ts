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
  {
    id: '2R03',
    name: '哪吒',
    description: '哪吒',
    url: '/Chang Pui Ting 2R03.gltf',
    thumbnailUrl: '/Chang Pui Ting 2R03.png',
    designer: 'Chang Pui Ting',
    category: '哪吒'
  },
  {
    id: '2R04',
    name: '刑天',
    description: '刑天',
    url: '/Cheng Ho Hin 2R04.gltf',
    thumbnailUrl: '/Cheng Ho Hin 2R04.png',
    designer: 'Cheng Ho Hin',
    category: '刑天'
  },
]

export const models = writable<Model[]>(modelData)
export const currentModelIndex = writable<number>(Math.floor(Math.random() * modelData.length))

export const nextModel = () => {
  currentModelIndex.update(n => {
    let nxt 
    do {
      nxt = Math.floor(Math.random() * modelData.length)
    } while (n == nxt)
    return nxt
  })
}