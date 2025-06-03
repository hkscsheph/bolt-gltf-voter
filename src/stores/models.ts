import { writable } from 'svelte/store'
import type { Model } from '../types/model'

// Example model data
const modelData: Model[] = [
  {
    id: '2R12',
    name: '關公',
    description: '關公',
    url: '/Sze Hei Man 2R12.gltf',
    reference: '/Sze Hei Man 2R12.jpg',
    thumbnailUrl: '/Sze Hei Man 2R12.png',
    designer: 'Sze Hei Man',
    category: '關公'
  },
  {
    id: '2R18',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Yeung Ho Lai Conrad 2R18.gltf',
    reference: null,
    thumbnailUrl: '/Yeung Ho Lai Conrad 2R18.png',
    designer: 'Yeung Ho Lai Conrad',
    category: '孫悟空'
  },
  {
    id: '2R09',
    name: '仙女',
    description: '仙女',
    url: '/Loo Yui Chi 2R09.gltf',
    reference: null,
    thumbnailUrl: '/Loo Yui Chi 2R09.png',
    designer: 'Loo Yui Chi',
    category: '仙女'
  },
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
    reference: '/Chan Yau Ching 2R02.jpg',
    thumbnailUrl: '/Chan Yau Ching 2R02.png',
    designer: 'Chan Yau Ching',
    category: '哪吒'
  },
  {
    id: '2R03',
    name: '哪吒',
    description: '哪吒',
    url: '/Chang Pui Ting 2R03.gltf',
    reference: '/Chang Pui Ting 2R03.jpg',
    thumbnailUrl: '/Chang Pui Ting 2R03.png',
    designer: 'Chang Pui Ting',
    category: '哪吒'
  },
  {
    id: '2R04',
    name: '刑天',
    description: '刑天',
    url: '/Cheng Ho Hin 2R04.gltf',
    reference: 'Cheng Ho Hin 2R04.jpg',
    thumbnailUrl: '/Cheng Ho Hin 2R04.png',
    designer: 'Cheng Ho Hin',
    category: '刑天'
  },
  {
    id: '2B01',
    name: '哪吒',
    description: '哪吒',
    url: '/Cheng Tsz Ki 2B01.gltf',
    reference: '/Chan Yau Ching 2R02.jpg',
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
    name: '怪人',
    description: '怪人',
    url: '/Cheung Kai Long 2B02.gltf',
    reference: null,
    thumbnailUrl: '/Cheung Kai Long 2B02.png',
    designer: 'Cheung Kai Long',
    category: '怪人'
  },
  {
    id: '2B03',
    name: '嫦娥',
    description: '嫦娥',
    url: '/Chu Pat Chin 2B03.gltf',
    reference: '/Chu Pat Chin 2B03.jpg',
    thumbnailUrl: '/Chu Pat Chin 2B03.png',
    designer: 'Chu Pat Chin',
    category: '嫦娥'
  },
  {
    id: '2R05',
    name: '女媧',
    description: '女媧',
    url: '/Chui Cheuk Tung 2R05.gltf',
    reference: '/Chui Cheuk Tung 2R05.jpg',
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
    reference: '/Chung Keith 2G05.jpg',
    thumbnailUrl: '/Chung Keith 2G05.png',
    designer: 'Chung Keith',
    category: '孫悟空'
  },
  {
    id: '2R06',
    name: '財神',
    description: '財神',
    url: '/Ho Wing Hei 2R06.gltf',
    reference: '/Ho Wing Hei 2R06.jpg',
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
    reference: '/Lam Tung Yan 2R07.jpg',
    thumbnailUrl: '/Lam Tung Yan 2R07.png',
    designer: 'Lam Tung Yan',
    category: '媽祖'
  },
  {
    id: '2B06',
    name: '觀音',
    description: '觀音',
    url: '/Lau Qian Yu Casey 2B06.gltf',
    reference: '/Lau Qian Yu Casey 2B06.jpg',
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
    reference: '/Lee Yuet Hei Allison 2B08.jpg',
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
    reference: '/Liu Sophie 2B10.jpg',
    thumbnailUrl: '/Liu Sophie 2B10.png',
    designer: 'Liu Sophie',
    category: '嫦娥'
  },
  {
    id: '2B11',
    name: '唐三藏',
    description: '唐三藏',
    url: '/Lo Julie Wing Ching 2B11.gltf',
    reference: '/Lo Julie Wing Ching 2B11.jpg',
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
    reference: '/Mak Chi Ching 2B13.jpg',
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
    id: '2G09',
    name: '悟空',
    description: '悟空',
    url: '/Mok Chun Hei 2G09.gltf',
    reference: '/Mok Chun Hei 2G09.jpg',
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
  {
    id: '2G14',
    name: '女人',
    description: '女人',
    url: '/Tse Hoi Tung 2G14.gltf',
    reference: null,
    thumbnailUrl: '/Tse Hoi Tung 2G14.png',
    designer: 'Tse Hoi Tung',
    category: '女人'
  },
  {
    id: '2B16',
    name: '修女',
    description: '修女',
    url: '/Tse Wai Cheng 2B16.gltf',
    reference: '/Tse Wai Cheng 2B16.jpg',
    thumbnailUrl: '/Tse Wai Cheng 2B16.png',
    designer: 'Tse Wai Cheng',
    category: '修女'
  },
  {
    id: '2R14',
    name: '怪人',
    description: '怪人',
    url: '/Tse Yu Ki 2R14.gltf',
    reference: null,
    thumbnailUrl: '/Tse Yu Ki 2R14.png',
    designer: 'Tse Yu Ki',
    category: '怪人'
  },
  {
    id: '2B17',
    name: '玉皇大帝',
    description: '玉皇大帝',
    url: '/Tse Yu Yan 2B17.gltf',
    reference: null,
    thumbnailUrl: '/Tse Yu Yan 2B17.png',
    designer: 'Tse Yu Yan',
    category: '玉皇大帝'
  },
  {
    id: '2G15',
    name: '骷髏兵',
    description: '骷髏兵',
    url: '/Wong Chi Yin 2G15.gltf',
    reference: null,
    thumbnailUrl: '/Wong Chi Yin 2G15.png',
    designer: 'Wong Chi Yin',
    category: '骷髏兵'
  },
  {
    id: '2R15',
    name: '和尚',
    description: '和尚',
    url: '/Wong Chor Wing 2R15.gltf',
    reference: null,
    thumbnailUrl: '/Wong Chor Wing 2R15.png',
    designer: 'Wong Chor Wing',
    category: '和尚'
  },
  {
    id: '2R16',
    name: '諸葛孔明',
    description: '諸葛孔明',
    url: '/Wong Miu 2R16.gltf',
    reference: null,
    thumbnailUrl: '/Wong Miu 2R16.png',
    designer: 'Wong Miu',
    category: '諸葛孔明'
  },
  {
    id: '2B18',
    name: '銀角',
    description: '銀角',
    url: '/Wong Nozomi 2B18.gltf',
    reference: null,
    thumbnailUrl: '/Wong Nozomi 2B18.png',
    designer: 'Wong Nozomi',
    category: '銀角'
  },
  {
    id: '2G22',
    name: '仙女',
    description: '仙女',
    url: '/Wong Oi Kiu 2G22.gltf',
    reference: null,
    thumbnailUrl: '/Wong Oi Kiu 2G22.png',
    designer: 'Wong Oi Kiu 2G22',
    category: '仙女'
  },
  {
    id: '2R17',
    name: '戰神呂布',
    description: '戰神呂布',
    url: '/Wong Yin Nam 2R17.gltf',
    reference: null,
    thumbnailUrl: '/Wong Yin Nam 2R17.png',
    designer: 'Wong Yin Nam',
    category: '戰神呂布'
  },
  {
    id: '2B19',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Yeung Joreson 2B19.gltf',
    reference: null,
    thumbnailUrl: '/Yeung Joreson 2B19.png',
    designer: 'Yeung Joreson',
    category: '孫悟空'
  },
  {
    id: '2B20',
    name: '哪吒',
    description: '哪吒',
    url: '/Yeung Ngai Tung 2B20.gltf',
    reference: null,
    thumbnailUrl: '/Yeung Ngai Tung 2B20.png',
    designer: 'Yeung Ngai Tung',
    category: '哪吒'
  },
  {
    id: '2G17',
    name: '美杜莎',
    description: '美杜莎',
    url: '/Yeung Tsz Yau 2G17.gltf',
    reference: null,
    thumbnailUrl: '/Yeung Tsz Yau 2G17.png',
    designer: 'Yeung Tsz Yau',
    category: '美杜莎'
  },
  {
    id: '2G18',
    name: '門神',
    description: '門神',
    url: '/Yip Dick Yar Naddy 2G18.gltf',
    reference: '/Yip Dick Yar Naddy 2G18.jpg',
    thumbnailUrl: '/Yip Dick Yar Naddy 2G18.png',
    designer: 'Yip Dick Yar Naddy',
    category: '門神'
  },
  {
    id: '2G19',
    name: '女人',
    description: '女人',
    url: '/Yip Macy Chung Kiu 2G19.gltf',
    reference: null,
    thumbnailUrl: '/Yip Macy Chung Kiu 2G19.png',
    designer: 'Yip Macy Chung Kiu',
    category: '女人'
  },
  {
    id: '2B21',
    name: '哪吒',
    description: '哪吒',
    url: '/Yiu Sze Nga 2B21.gltf',
    reference: null,
    thumbnailUrl: '/Yiu Sze Nga 2B21.png',
    designer: 'Yiu Sze Nga',
    category: '哪吒'
  },
  {
    id: '2B23',
    name: '豬八戒',
    description: '豬八戒',
    url: '/Yuen Cheuk Ling 2B23.gltf',
    reference: null,
    thumbnailUrl: '/Yuen Cheuk Ling 2B23.png',
    designer: 'Yuen Cheuk Ling',
    category: '豬八戒'
  },
  {
    id: '2G21',
    name: '守財奴',
    description: '守財奴',
    url: '/Yuen Ching Hin 2G21.gltf',
    reference: null,
    thumbnailUrl: '/Yuen Ching Hin 2G21.png',
    designer: 'Yuen Ching Hin',
    category: '守財奴'
  },
  {
    id: '2R19',
    name: '老鼠精',
    description: '老鼠精',
    url: '/Yung Ho Muhammad Numan 2R19.gltf',
    reference: null,
    thumbnailUrl: '/Yung Ho Muhammad Numan 2R19.png',
    designer: 'Yung Ho Muhammad Numan',
    category: '老鼠精'
  },
  {
    id: '2R20',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Zhou Ching Hin Angus 2R20.gltf',
    reference: null,
    thumbnailUrl: '/Zhou Ching Hin Angus 2R20.png',
    designer: 'Zhou Ching Hin Angus',
    category: '孫悟空'
  },
  {
    id: '2B24',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Yu Hei Yiu 2B24.gltf',
    reference: null,
    thumbnailUrl: '/Yu Hei Yiu 2B24.png',
    designer: 'Yu Hei Yiu',
    category: '孫悟空'
  },
  {
    id: '2B22',
    name: '孫悟空',
    description: '孫悟空',
    url: '/Yu Chun Lok 2B22.gltf',
    reference: null,
    thumbnailUrl: '/Yu Chun Lok 2B22.png',
    designer: 'Yu Chun Lok',
    category: '孫悟空'
  },
  {
    id: '2R10',
    name: '渾沌',
    description: '渾沌',
    url: '/Meng Wong Hei 2R10.gltf',
    reference: '/Meng Wong Hei 2R10.jpg',
    thumbnailUrl: '/Meng Wong Hei 2R10.png',
    designer: 'Meng Wong Hei',
    category: '渾沌'
  },
  {
    id: '2B15',
    name: '哪吒',
    description: '哪吒',
    url: '/Tsang Kai Ho 2B15.gltf',
    reference: null,
    thumbnailUrl: '/Tsang Kai Ho 2B15.png',
    designer: 'Tsang Kai Ho',
    category: '哪吒'
  },
]

export const models = writable<Model[]>(modelData)
export const currentModelIndex = writable<number>(Math.floor(Math.random() * modelData.length))
// export const currentModelIndex = writable<number>(modelData.length-1)

export const nextModel = () => {
  currentModelIndex.update(n => {
    let nxt 
    do {
      nxt = Math.floor(Math.random() * modelData.length)
    } while (n == nxt)
    return nxt
  })
}