import { writable } from 'svelte/store'
import type { Model } from '../types/model'

// Example model data
const modelData: Model[] = [
  {
    id: '2G01',
    name: '哪吒',
    description: '哪吒',
    url: '/Chan Chung Ching 2G01.gltf',
    reference: null,
    thumbnailUrl: '/Chan Chung Ching 2G01.png',
    designer: 'Chan Chung Ching',
    category: '哪吒'
  },
  {
    id: '2R01',
    name: '牛魔王',
    description: '牛魔王',
    url: '/Chan Long Him 2R01.gltf',
    reference: null,
    thumbnailUrl: '/Chan Long Him 2R01.png',
    designer: 'Chan Long Him',
    category: '牛魔王'
  },
  {
    id: '2R02',
    name: '哪吒',
    description: '哪吒',
    url: '/Chan Yau Ching 2R02.gltf',
    reference: null,
    thumbnailUrl: '/Chan Yau Ching 2R02.png',
    designer: 'Chan Yau Ching',
    category: '哪吒'
  },
  {
    id: '2R03',
    name: '哪吒',
    description: '哪吒',
    url: '/Chang Pui Ting 2R03.gltf',
    reference: null,
    thumbnailUrl: '/Chang Pui Ting 2R03.png',
    designer: 'Chang Pui Ting',
    category: '哪吒'
  },
  {
    id: '2R04',
    name: '刑天',
    description: '刑天',
    url: '/Cheng Ho Hin 2R04.gltf',
    reference: null,
    thumbnailUrl: '/Cheng Ho Hin 2R04.png',
    designer: 'Cheng Ho Hin',
    category: '刑天'
  },
  {
    id: '2B01',
    name: '哪吒',
    description: '哪吒',
    url: '/Cheng Tsz Ki 2B01.gltf',
    reference: null,
    thumbnailUrl: '/Cheng Tsz Ki 2B01.png',
    designer: 'Cheng Tsz Ki',
    category: '哪吒'
  },
  {
    id: '2G03',
    name: '哪吒',
    description: '哪吒',
    url: '/Cheung Ka Kiu Carly 2G03.gltf',
    reference: null,
    thumbnailUrl: '/Cheung Ka Kiu Carly 2G03.png',
    designer: 'Cheung Ka Kiu Carly',
    category: '哪吒'
  },
  {
    id: '2B02',
    name: '面具',
    description: '面具',
    url: '/Cheung Kai Long 2B02.gltf',
    reference: null,
    thumbnailUrl: '/Cheung Kai Long 2B02.png',
    designer: 'Cheung Kai Long',
    category: '面具'
  },
  {
    id: '2B03',
    name: '嫦娥',
    description: '嫦娥',
    url: '/Chu Pat Chin 2B03.gltf',
    reference: null,
    thumbnailUrl: '/Chu Pat Chin 2B03.png',
    designer: 'Chu Pat Chin',
    category: '嫦娥'
  },
  {
    id: '2R05',
    name: '女媧',
    description: '女媧',
    url: '/Chui Cheuk Tung 2R05.gltf',
    reference: null,
    thumbnailUrl: '/Chui Cheuk Tung 2R05.png',
    designer: 'Chui Cheuk Tung',
    category: '女媧'
  },
  {
    id: '2B04',
    name: '哪吒',
    description: '哪吒',
    url: '/Chung Cheryl 2B04.gltf',
    reference: null,
    thumbnailUrl: '/Chung Cheryl 2B04.png',
    designer: 'Chung Cheryl',
    category: '哪吒'
  },
  {
    id: '2G05',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Chung Keith 2G05.gltf',
    reference: null,
    thumbnailUrl: '/Chung Keith 2G05.png',
    designer: 'Chung Keith',
    category: '孫悟空'
  },
  {
    id: '2R06',
    name: '財神',
    description: '財神',
    url: '/Ho Wing Hei 2R06.gltf',
    reference: null,
    thumbnailUrl: '/Ho Wing Hei 2R06.png',
    designer: 'Ho Wing Hei',
    category: '財神'
  },
  {
    id: '2B05',
    name: '凡人',
    description: '凡人',
    url: '/Hooi Arus Sz Wun 2B05.gltf',
    reference: null,
    thumbnailUrl: '/Hooi Arus Sz Wun 2B05.png',
    designer: 'Hooi Arus Sz Wun',
    category: '凡人'
  },
  {
    id: '2R07',
    name: '媽祖',
    description: '媽祖',
    url: '/Lam Tung Yan 2R07.gltf',
    reference: null,
    thumbnailUrl: '/Lam Tung Yan 2R07.png',
    designer: 'Lam Tung Yan',
    category: '媽祖'
  },
  {
    id: '2B06',
    name: '觀音',
    description: '觀音',
    url: '/Lau Qian Yu Casey 2B06.gltf',
    reference: null,
    thumbnailUrl: '/Lau Qian Yu Casey 2B06.png',
    designer: 'Lau Qian Yu Casey',
    category: '觀音'
  },
  {
    id: '2B07',
    name: '忍者',
    description: '忍者',
    url: '/Lee Tze Yun 2B07.gltf',
    reference: null,
    thumbnailUrl: '/Lee Tze Yun 2B07.png',
    designer: 'Lee Tze Yun',
    category: '忍者'
  },
  {
    id: '2B08',
    name: '哪吒',
    description: '哪吒',
    url: '/Lee Yuet Hei Allison 2B08.gltf',
    reference: null,
    thumbnailUrl: '/Lee Yuet Hei Allison 2B08.png',
    designer: 'Lee Yuet Hei Allison',
    category: '哪吒'
  },
  {
    id: '2R08',
    name: '東海龍王',
    description: '東海龍王',
    url: '/Leung Beavis 2R08.gltf',
    reference: null,
    thumbnailUrl: '/Leung Beavis 2R08.png',
    designer: 'Leung Beavis',
    category: '東海龍王'
  },
  {
    id: '2B09',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Lin Ling Yan 2B09.gltf',
    reference: null,
    thumbnailUrl: '/Lin Ling Yan 2B09.png',
    designer: 'Lin Ling Yan',
    category: '孫悟空'
  },
  {
    id: '2B10',
    name: '嫦娥',
    description: '嫦娥',
    url: '/Liu Sophie 2B10.gltf',
    reference: null,
    thumbnailUrl: '/Liu Sophie 2B10.png',
    designer: 'Liu Sophie',
    category: '嫦娥'
  },
  {
    id: '2B11',
    name: '唐三藏',
    description: '唐三藏',
    url: '/Lo Julie Wing Ching 2B11.gltf',
    reference: null,
    thumbnailUrl: '/Lo Julie Wing Ching 2B11.png',
    designer: 'Lo Julie Wing Ching',
    category: '唐三藏'
  },
  {
    id: '2B12',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Maggio Emanuela Tsz Yu 2B12.gltf',
    reference: null,
    thumbnailUrl: '/Maggio Emanuela Tsz Yu 2B12.png',
    designer: 'Maggio Emanuela Tsz Yu',
    category: '孫悟空'
  },
  {
    id: '2B13',
    name: '哪吒',
    description: '哪吒',
    url: '/Mak Chi Ching 2B13.gltf',
    reference: null,
    thumbnailUrl: '/Mak Chi Ching 2B13.png',
    designer: 'Mak Chi Ching',
    category: '哪吒'
  },
  {
    id: '2G08',
    name: '女人',
    description: '女人',
    url: '/Man Wing Hei Jessy May 2G08.gltf',
    reference: null,
    thumbnailUrl: '/Man Wing Hei Jessy May 2G08.png',
    designer: 'Man Wing Hei Jessy May',
    category: '女人'
  },
  {
    id: '2R10',
    name: '渾沌',
    description: '渾沌',
    url: '/Meng Wong Hei 2R10.gltf',
    reference: null,
    thumbnailUrl: '/Meng Wong Hei 2R10.png',
    designer: 'Meng Wong Hei',
    category: '渾沌'
  },
  {
    id: '2G09',
    name: '悟空',
    description: '悟空',
    url: '/Mok Chun Hei 2G09.gltf',
    reference: null,
    thumbnailUrl: '/Mok Chun Hei 2G09.png',
    designer: 'Mok Chun Hei',
    category: '悟空'
  },
  {
    id: '2G10',
    name: '哪吒',
    description: '哪吒',
    url: '/Mok Tsz Man 2G10.gltf',
    reference: null,
    thumbnailUrl: '/Mok Tsz Man 2G10.png',
    designer: 'Mok Tsz Man',
    category: '哪吒'
  },
  {
    id: '2R11',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Shek Man Sik 2R11.gltf',
    reference: null,
    thumbnailUrl: '/Shek Man Sik 2R11.png',
    designer: 'Shek Man Sik',
    category: '孫悟空'
  },
  {
    id: '2G11',
    name: '敖丙',
    description: '敖丙',
    url: '/So Fei Sophia 2G11.gltf',
    reference: null,
    thumbnailUrl: '/So Fei Sophia 2G11.png',
    designer: 'So Fei Sophia',
    category: '敖丙'
  },
  {
    id: '2B14',
    name: '忍者',
    description: '忍者',
    url: '/Tang Chit Yu 2B14.gltf',
    reference: null,
    thumbnailUrl: '/Tang Chit Yu 2B14.png',
    designer: 'Tang Chit Yu',
    category: '忍者'
  },
  {
    id: '2G13',
    name: '唐三藏',
    description: '唐三藏',
    url: '/Tong Kai Shun 2G13.gltf',
    reference: '/Tong Kai Shun 2G13.jpg',
    thumbnailUrl: '/Tong Kai Shun 2G13.png',
    designer: 'Tong Kai Shun',
    category: '唐三藏'
  },
  {
    id: '2R13',
    name: '唐三藏',
    description: '唐三藏',
    url: '/Tong Kin Wing 2R13.gltf',
    reference: null,
    thumbnailUrl: '/Tong Kin Wing 2R13.png',
    designer: 'Tong Kin Wing',
    category: '唐三藏'
  },
]

export const models = writable<Model[]>(modelData)
export const currentModelIndex = writable<number>(Math.floor(Math.random() * modelData.length))
// export const currentModelIndex = writable<number>(modelData.length-2)

export const nextModel = () => {
  currentModelIndex.update(n => {
    let nxt 
    do {
      nxt = Math.floor(Math.random() * modelData.length)
    } while (n == nxt)
    return nxt
  })
}