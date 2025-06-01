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
  {
    id: '2B01',
    name: '哪吒',
    description: '哪吒',
    url: '/Cheng Tsz Ki 2B01.gltf',
    thumbnailUrl: '/Cheng Tsz Ki 2B01.png',
    designer: 'Cheng Tsz Ki',
    category: '哪吒'
  },
  {
    id: '2G03',
    name: '哪吒',
    description: '哪吒',
    url: '/Cheung Ka Kiu Carly 2G03.gltf',
    thumbnailUrl: '/Cheung Ka Kiu Carly 2G03.png',
    designer: 'Cheung Ka Kiu Carly',
    category: '哪吒'
  },
  {
    id: '2B02',
    name: '面具',
    description: '面具',
    url: '/Cheung Kai Long 2B02.gltf',
    thumbnailUrl: '/Cheung Kai Long 2B02.png',
    designer: 'Cheung Kai Long',
    category: '面具'
  },
  {
    id: '2B03',
    name: '嫦娥',
    description: '嫦娥',
    url: '/Chu Pat Chin 2B03.gltf',
    thumbnailUrl: '/Chu Pat Chin 2B03.png',
    designer: 'Chu Pat Chin ',
    category: '嫦娥'
  },
  {
    id: '2R05',
    name: '女媧',
    description: '女媧',
    url: '/Chui Cheuk Tung 2R05.gltf',
    thumbnailUrl: '/Chui Cheuk Tung 2R05.png',
    designer: 'Chui Cheuk Tung',
    category: '女媧'
  },
  {
    id: '2B04',
    name: '哪吒',
    description: '哪吒',
    url: '/Chung Cheryl 2B04.gltf',
    thumbnailUrl: '/Chung Cheryl 2B04.png',
    designer: 'Chung Cheryl',
    category: '哪吒'
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