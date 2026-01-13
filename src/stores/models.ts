import { writable } from 'svelte/store'
import type { Model } from '../types/model'

// Example model data
const modelData: Model[] = [
  {
    id: '2G06_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Ho Cheuk Lam 2G06.gltf',
    reference: null,
    thumbnailUrl: '/2425/Ho Cheuk Lam 2G06.png',
    designer: 'Ho Cheuk Lam',
    category: '哪吒'
  },
  {
    id: '2R12_2425',
    name: '關公',
    description: '關公',
    url: '/2425/Sze Hei Man 2R12.gltf',
    reference: '/2425/Sze Hei Man 2R12.jpg',
    thumbnailUrl: '/2425/Sze Hei Man 2R12.png',
    designer: 'Sze Hei Man',
    category: '關公'
  },
  {
    id: '2R18_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Yeung Ho Lai Conrad 2R18.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yeung Ho Lai Conrad 2R18.png',
    designer: 'Yeung Ho Lai Conrad',
    category: '孫悟空'
  },
  {
    id: '2R09_2425',
    name: '仙女',
    description: '仙女',
    url: '/2425/Loo Yui Chi 2R09.gltf',
    reference: null,
    thumbnailUrl: '/2425/Loo Yui Chi 2R09.png',
    designer: 'Loo Yui Chi',
    category: '仙女'
  },
  {
    id: '2G01_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Chan Chung Ching 2G01.gltf',
    reference: null,
    thumbnailUrl: '/2425/Chan Chung Ching 2G01.png',
    designer: 'Chan Chung Ching',
    category: '哪吒'
  },
  {
    id: '2R01_2425',
    name: '牛魔王',
    description: '牛魔王',
    url: '/2425/Chan Long Him 2R01.gltf',
    reference: null,
    thumbnailUrl: '/2425/Chan Long Him 2R01.png',
    designer: 'Chan Long Him',
    category: '牛魔王'
  },
  {
    id: '2R02_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Chan Yau Ching 2R02.gltf',
    reference: '/2425/Chan Yau Ching 2R02.jpg',
    thumbnailUrl: '/2425/Chan Yau Ching 2R02.png',
    designer: 'Chan Yau Ching',
    category: '哪吒'
  },
  {
    id: '2R03_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Chang Pui Ting 2R03.gltf',
    reference: '/2425/Chang Pui Ting 2R03.jpg',
    thumbnailUrl: '/2425/Chang Pui Ting 2R03.png',
    designer: 'Chang Pui Ting',
    category: '哪吒'
  },
  {
    id: '2R04_2425',
    name: '刑天',
    description: '刑天',
    url: '/2425/Cheng Ho Hin 2R04.gltf',
    reference: '/2425/Cheng Ho Hin 2R04.jpg',
    thumbnailUrl: '/2425/Cheng Ho Hin 2R04.png',
    designer: 'Cheng Ho Hin',
    category: '刑天'
  },
  {
    id: '2B01_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Cheng Tsz Ki 2B01.gltf',
    reference: '/2425/Chan Yau Ching 2R02.jpg',
    thumbnailUrl: '/2425/Cheng Tsz Ki 2B01.png',
    designer: 'Cheng Tsz Ki',
    category: '哪吒'
  },
  {
    id: '2G03_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Cheung Ka Kiu Carly 2G03.gltf',
    reference: null,
    thumbnailUrl: '/2425/Cheung Ka Kiu Carly 2G03.png',
    designer: 'Cheung Ka Kiu Carly',
    category: '哪吒'
  },
  {
    id: '2B02_2425',
    name: '怪人',
    description: '怪人',
    url: '/2425/Cheung Kai Long 2B02.gltf',
    reference: null,
    thumbnailUrl: '/2425/Cheung Kai Long 2B02.png',
    designer: 'Cheung Kai Long',
    category: '怪人'
  },
  {
    id: '2B03_2425',
    name: '嫦娥',
    description: '嫦娥',
    url: '/2425/Chu Pat Chin 2B03.gltf',
    reference: '/2425/Chu Pat Chin 2B03.jpg',
    thumbnailUrl: '/2425/Chu Pat Chin 2B03.png',
    designer: 'Chu Pat Chin',
    category: '嫦娥'
  },
  {
    id: '2R05_2425',
    name: '女媧',
    description: '女媧',
    url: '/2425/Chui Cheuk Tung 2R05.gltf',
    reference: '/2425/Chui Cheuk Tung 2R05.jpg',
    thumbnailUrl: '/2425/Chui Cheuk Tung 2R05.png',
    designer: 'Chui Cheuk Tung',
    category: '女媧'
  },
  {
    id: '2B04_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Chung Cheryl 2B04.gltf',
    reference: null,
    thumbnailUrl: '/2425/Chung Cheryl 2B04.png',
    designer: 'Chung Cheryl',
    category: '哪吒'
  },
  {
    id: '2G05_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Chung Keith 2G05.gltf',
    reference: '/2425/Chung Keith 2G05.jpg',
    thumbnailUrl: '/2425/Chung Keith 2G05.png',
    designer: 'Chung Keith',
    category: '孫悟空'
  },
  {
    id: '2R06_2425',
    name: '財神',
    description: '財神',
    url: '/2425/Ho Wing Hei 2R06.gltf',
    reference: '/2425/Ho Wing Hei 2R06.jpg',
    thumbnailUrl: '/2425/Ho Wing Hei 2R06.png',
    designer: 'Ho Wing Hei',
    category: '財神'
  },
  {
    id: '2B05_2425',
    name: '凡人',
    description: '凡人',
    url: '/2425/Hooi Arus Sz Wun 2B05.gltf',
    reference: null,
    thumbnailUrl: '/2425/Hooi Arus Sz Wun 2B05.png',
    designer: 'Hooi Arus Sz Wun',
    category: '凡人'
  },
  {
    id: '2R07_2425',
    name: '媽祖',
    description: '媽祖',
    url: '/2425/Lam Tung Yan 2R07.gltf',
    reference: '/2425/Lam Tung Yan 2R07.jpg',
    thumbnailUrl: '/2425/Lam Tung Yan 2R07.png',
    designer: 'Lam Tung Yan',
    category: '媽祖'
  },
  {
    id: '2B06_2425',
    name: '觀音',
    description: '觀音',
    url: '/2425/Lau Qian Yu Casey 2B06.gltf',
    reference: '/2425/Lau Qian Yu Casey 2B06.jpg',
    thumbnailUrl: '/2425/Lau Qian Yu Casey 2B06.png',
    designer: 'Lau Qian Yu Casey',
    category: '觀音'
  },
  {
    id: '2B07_2425',
    name: '忍者',
    description: '忍者',
    url: '/2425/Lee Tze Yun 2B07.gltf',
    reference: null,
    thumbnailUrl: '/2425/Lee Tze Yun 2B07.png',
    designer: 'Lee Tze Yun',
    category: '忍者'
  },
  {
    id: '2B08_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Lee Yuet Hei Allison 2B08.gltf',
    reference: '/2425/Lee Yuet Hei Allison 2B08.jpg',
    thumbnailUrl: '/2425/Lee Yuet Hei Allison 2B08.png',
    designer: 'Lee Yuet Hei Allison',
    category: '哪吒'
  },
  {
    id: '2R08_2425',
    name: '東海龍王',
    description: '東海龍王',
    url: '/2425/Leung Beavis 2R08.gltf',
    reference: null,
    thumbnailUrl: '/2425/Leung Beavis 2R08.png',
    designer: 'Leung Beavis',
    category: '東海龍王'
  },
  {
    id: '2B09_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Lin Ling Yan 2B09.gltf',
    reference: null,
    thumbnailUrl: '/2425/Lin Ling Yan 2B09.png',
    designer: 'Lin Ling Yan',
    category: '孫悟空'
  },
  {
    id: '2B10_2425',
    name: '嫦娥',
    description: '嫦娥',
    url: '/2425/Liu Sophie 2B10.gltf',
    reference: '/2425/Liu Sophie 2B10.jpg',
    thumbnailUrl: '/2425/Liu Sophie 2B10.png',
    designer: 'Liu Sophie',
    category: '嫦娥'
  },
  {
    id: '2B11_2425',
    name: '唐三藏',
    description: '唐三藏',
    url: '/2425/Lo Julie Wing Ching 2B11.gltf',
    reference: '/2425/Lo Julie Wing Ching 2B11.jpg',
    thumbnailUrl: '/2425/Lo Julie Wing Ching 2B11.png',
    designer: 'Lo Julie Wing Ching',
    category: '唐三藏'
  },
  {
    id: '2B12_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Maggio Emanuela Tsz Yu 2B12.gltf',
    reference: null,
    thumbnailUrl: '/2425/Maggio Emanuela Tsz Yu 2B12.png',
    designer: 'Maggio Emanuela Tsz Yu',
    category: '孫悟空'
  },
  {
    id: '2B13_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Mak Chi Ching 2B13.gltf',
    reference: '/2425/Mak Chi Ching 2B13.jpg',
    thumbnailUrl: '/2425/Mak Chi Ching 2B13.png',
    designer: 'Mak Chi Ching',
    category: '哪吒'
  },
  {
    id: '2G08_2425',
    name: '女媧',
    description: '女媧',
    url: '/2425/Man Wing Hei Jessy May 2G08.gltf',
    reference: '/2425/Man Wing Hei Jessy May 2G08.jpg',
    thumbnailUrl: '/2425/Man Wing Hei Jessy May 2G08.png',
    designer: 'Man Wing Hei Jessy May',
    category: '女媧'
  },
  {
    id: '2G09_2425',
    name: '悟空',
    description: '悟空',
    url: '/2425/Mok Chun Hei 2G09.gltf',
    reference: '/2425/Mok Chun Hei 2G09.jpg',
    thumbnailUrl: '/2425/Mok Chun Hei 2G09.png',
    designer: 'Mok Chun Hei',
    category: '悟空'
  },
  {
    id: '2G10_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Mok Tsz Man 2G10.gltf',
    reference: null,
    thumbnailUrl: '/2425/Mok Tsz Man 2G10.png',
    designer: 'Mok Tsz Man',
    category: '哪吒'
  },
  {
    id: '2R11_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Shek Man Sik 2R11.gltf',
    reference: null,
    thumbnailUrl: '/2425/Shek Man Sik 2R11.png',
    designer: 'Shek Man Sik',
    category: '孫悟空'
  },
  {
    id: '2G11_2425',
    name: '敖丙',
    description: '敖丙',
    url: '/2425/So Fei Sophia 2G11.gltf',
    reference: null,
    thumbnailUrl: '/2425/So Fei Sophia 2G11.png',
    designer: 'So Fei Sophia',
    category: '敖丙'
  },
  {
    id: '2B14_2425',
    name: '忍者',
    description: '忍者',
    url: '/2425/Tang Chit Yu 2B14.gltf',
    reference: null,
    thumbnailUrl: '/2425/Tang Chit Yu 2B14.png',
    designer: 'Tang Chit Yu',
    category: '忍者'
  },
  {
    id: '2G13_2425',
    name: '唐三藏',
    description: '唐三藏',
    url: '/2425/Tong Kai Shun 2G13.gltf',
    reference: '/2425/Tong Kai Shun 2G13.jpg',
    thumbnailUrl: '/2425/Tong Kai Shun 2G13.png',
    designer: 'Tong Kai Shun',
    category: '唐三藏'
  },
  {
    id: '2R13_2425',
    name: '唐三藏',
    description: '唐三藏',
    url: '/2425/Tong Kin Wing 2R13.gltf',
    reference: null,
    thumbnailUrl: '/2425/Tong Kin Wing 2R13.png',
    designer: 'Tong Kin Wing',
    category: '唐三藏'
  },
  {
    id: '2G14_2425',
    name: '女人',
    description: '女人',
    url: '/2425/Tse Hoi Tung 2G14.gltf',
    reference: null,
    thumbnailUrl: '/2425/Tse Hoi Tung 2G14.png',
    designer: 'Tse Hoi Tung',
    category: '女人'
  },
  {
    id: '2B16_2425',
    name: '修女',
    description: '修女',
    url: '/2425/Tse Wai Cheng 2B16.gltf',
    reference: '/2425/Tse Wai Cheng 2B16.jpg',
    thumbnailUrl: '/2425/Tse Wai Cheng 2B16.png',
    designer: 'Tse Wai Cheng',
    category: '修女'
  },
  {
    id: '2R14_2425',
    name: '怪人',
    description: '怪人',
    url: '/2425/Tse Yu Ki 2R14.gltf',
    reference: null,
    thumbnailUrl: '/2425/Tse Yu Ki 2R14.png',
    designer: 'Tse Yu Ki',
    category: '怪人'
  },
  {
    id: '2B17_2425',
    name: '玉皇大帝',
    description: '玉皇大帝',
    url: '/2425/Tse Yu Yan 2B17.gltf',
    reference: null,
    thumbnailUrl: '/2425/Tse Yu Yan 2B17.png',
    designer: 'Tse Yu Yan',
    category: '玉皇大帝'
  },
  {
    id: '2G15_2425',
    name: '骷髏兵',
    description: '骷髏兵',
    url: '/2425/Wong Chi Yin 2G15.gltf',
    reference: null,
    thumbnailUrl: '/2425/Wong Chi Yin 2G15.png',
    designer: 'Wong Chi Yin',
    category: '骷髏兵'
  },
  {
    id: '2R15_2425',
    name: '和尚',
    description: '和尚',
    url: '/2425/Wong Chor Wing 2R15.gltf',
    reference: null,
    thumbnailUrl: '/2425/Wong Chor Wing 2R15.png',
    designer: 'Wong Chor Wing',
    category: '和尚'
  },
  {
    id: '2R16_2425',
    name: '諸葛孔明',
    description: '諸葛孔明',
    url: '/2425/Wong Miu 2R16.gltf',
    reference: null,
    thumbnailUrl: '/2425/Wong Miu 2R16.png',
    designer: 'Wong Miu',
    category: '諸葛孔明'
  },
  {
    id: '2B18_2425',
    name: '銀角',
    description: '銀角',
    url: '/2425/Wong Nozomi 2B18.gltf',
    reference: null,
    thumbnailUrl: '/2425/Wong Nozomi 2B18.png',
    designer: 'Wong Nozomi',
    category: '銀角'
  },
  {
    id: '2G22_2425',
    name: '仙女',
    description: '仙女',
    url: '/2425/Wong Oi Kiu 2G22.gltf',
    reference: null,
    thumbnailUrl: '/2425/Wong Oi Kiu 2G22.png',
    designer: 'Wong Oi Kiu',
    category: '仙女'
  },
  {
    id: '2R17_2425',
    name: '戰神呂布',
    description: '戰神呂布',
    url: '/2425/Wong Yin Nam 2R17.gltf',
    reference: null,
    thumbnailUrl: '/2425/Wong Yin Nam 2R17.png',
    designer: 'Wong Yin Nam',
    category: '戰神呂布'
  },
  {
    id: '2B19_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Yeung Joreson 2B19.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yeung Joreson 2B19.png',
    designer: 'Yeung Joreson',
    category: '孫悟空'
  },
  {
    id: '2B20_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Yeung Ngai Tung 2B20.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yeung Ngai Tung 2B20.png',
    designer: 'Yeung Ngai Tung',
    category: '哪吒'
  },
  {
    id: '2G17_2425',
    name: '美杜莎',
    description: '美杜莎',
    url: '/2425/Yeung Tsz Yau 2G17.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yeung Tsz Yau 2G17.png',
    designer: 'Yeung Tsz Yau',
    category: '美杜莎'
  },
  {
    id: '2G18_2425',
    name: '門神',
    description: '門神',
    url: '/2425/Yip Dick Yar Naddy 2G18.gltf',
    reference: '/2425/Yip Dick Yar Naddy 2G18.jpg',
    thumbnailUrl: '/2425/Yip Dick Yar Naddy 2G18.png',
    designer: 'Yip Dick Yar Naddy',
    category: '門神'
  },
  {
    id: '2G19_2425',
    name: '女人',
    description: '女人',
    url: '/2425/Yip Macy Chung Kiu 2G19.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yip Macy Chung Kiu 2G19.png',
    designer: 'Yip Macy Chung Kiu',
    category: '女人'
  },
  {
    id: '2B21_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Yiu Sze Nga 2B21.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yiu Sze Nga 2B21.png',
    designer: 'Yiu Sze Nga',
    category: '哪吒'
  },
  {
    id: '2B23_2425',
    name: '豬八戒',
    description: '豬八戒',
    url: '/2425/Yuen Cheuk Ling 2B23.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yuen Cheuk Ling 2B23.png',
    designer: 'Yuen Cheuk Ling',
    category: '豬八戒'
  },
  {
    id: '2G21_2425',
    name: '守財奴',
    description: '守財奴',
    url: '/2425/Yuen Ching Hin 2G21.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yuen Ching Hin 2G21.png',
    designer: 'Yuen Ching Hin',
    category: '守財奴'
  },
  {
    id: '2R19_2425',
    name: '老鼠精',
    description: '老鼠精',
    url: '/2425/Yung Ho Muhammad Numan 2R19.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yung Ho Muhammad Numan 2R19.png',
    designer: 'Yung Ho Muhammad Numan',
    category: '老鼠精'
  },
  {
    id: '2R20_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Zhou Ching Hin Angus 2R20.gltf',
    reference: null,
    thumbnailUrl: '/2425/Zhou Ching Hin Angus 2R20.png',
    designer: 'Zhou Ching Hin Angus',
    category: '孫悟空'
  },
  {
    id: '2B24_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Yu Hei Yiu 2B24.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yu Hei Yiu 2B24.png',
    designer: 'Yu Hei Yiu',
    category: '孫悟空'
  },
  {
    id: '2B22_2425',
    name: '孫悟空',
    description: '孫悟空',
    url: '/2425/Yu Chun Lok 2B22.gltf',
    reference: null,
    thumbnailUrl: '/2425/Yu Chun Lok 2B22.png',
    designer: 'Yu Chun Lok',
    category: '孫悟空'
  },
  {
    id: '2R10_2425',
    name: '渾沌',
    description: '渾沌',
    url: '/2425/Meng Wong Hei 2R10.gltf',
    reference: '/2425/Meng Wong Hei 2R10.jpg',
    thumbnailUrl: '/2425/Meng Wong Hei 2R10.png',
    designer: 'Meng Wong Hei',
    category: '渾沌'
  },
  {
    id: '2B15_2425',
    name: '哪吒',
    description: '哪吒',
    url: '/2425/Tsang Kai Ho 2B15.gltf',
    reference: null,
    thumbnailUrl: '/2425/Tsang Kai Ho 2B15.png',
    designer: 'Tsang Kai Ho',
    category: '哪吒'
  },
  // 2526 Class entries
  {
    id: '2R01_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Chan Hei Yin 2R01.gltf',
    reference: '/2526/Chan Hei Yin 2R01.jpg',
    thumbnailUrl: '/2526/Chan Hei Yin 2R01.png',
    designer: 'Chan Hei Yin',
    category: '兔'
  },
  {
    id: '2R02_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Chan Tsz Kiu 2R02.gltf',
    reference: '/2526/Chan Tsz Kiu 2R02.jpg',
    thumbnailUrl: '/2526/Chan Tsz Kiu 2R02.png',
    designer: 'Chan Tsz Kiu',
    category: '兔'
  },
  {
    id: '2R03_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Chan Tsz Lam 2R03.gltf',
    reference: '/2526/Chan Tsz Lam 2R03.jpg',
    thumbnailUrl: '/2526/Chan Tsz Lam 2R03.png',
    designer: 'Chan Tsz Lam',
    category: '兔'
  },
  {
    id: '2R04_2526',
    name: '蛇',
    description: '蛇',
    url: '/2526/Chan Tsz Yau 2R04.gltf',
    reference: '/2526/Chan Tsz Yau 2R04.jpg',
    thumbnailUrl: '/2526/Chan Tsz Yau 2R04.png',
    designer: 'Chan Tsz Yau',
    category: '蛇'
  },
  {
    id: '2R05_2526',
    name: '羊',
    description: '羊',
    url: '/2526/Chau Ka Wing 2R05.gltf',
    reference: '/2526/Chau Ka Wing 2R05.jpg',
    thumbnailUrl: '/2526/Chau Ka Wing 2R05.png',
    designer: 'Chau Ka Wing',
    category: '羊'
  },
  {
    id: '2R06_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Cheung Hong Ching 2R06.gltf',
    reference: '/2526/Cheung Hong Ching 2R06.jpg',
    thumbnailUrl: '/2526/Cheung Hong Ching 2R06.png',
    designer: 'Cheung Hong Ching',
    category: '龍'
  },
  {
    id: '2R07_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Choi Chin Yau 2R07.gltf',
    reference: '/2526/Choi Chin Yau 2R07.jpg',
    thumbnailUrl: '/2526/Choi Chin Yau 2R07.png',
    designer: 'Choi Chin Yau',
    category: '兔'
  },
  {
    id: '2R08_2526',
    name: '鼠',
    description: '鼠',
    url: '/2526/Choi Ching Nga 2R08.gltf',
    reference: '/2526/Choi Ching Nga 2R08.jpg',
    thumbnailUrl: '/2526/Choi Ching Nga 2R08.png',
    designer: 'Choi Ching Nga',
    category: '鼠'
  },
  {
    id: '2R09_2526',
    name: '豬',
    description: '豬',
    url: '/2526/Chow Sze Yin 2R09.gltf',
    reference: '/2526/Chow Sze Yin 2R09.jpg',
    thumbnailUrl: '/2526/Chow Sze Yin 2R09.png',
    designer: 'Chow Sze Yin',
    category: '豬'
  },
  {
    id: '2R10_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Fung Hui Yeung Nathan 2R10.gltf',
    reference: '/2526/Fung Hui Yeung Nathan 2R10.jpg',
    thumbnailUrl: '/2526/Fung Hui Yeung Nathan 2R10.png',
    designer: 'Fung Hui Yeung Nathan',
    category: '龍'
  },
  {
    id: '2R11_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Ho Ho Ming 2R11.gltf',
    reference: '/2526/Ho Ho Ming 2R11.jpg',
    thumbnailUrl: '/2526/Ho Ho Ming 2R11.png',
    designer: 'Ho Ho Ming',
    category: '龍'
  },
  {
    id: '2R12_2526',
    name: '虎',
    description: '虎',
    url: '/2526/Kong Tsz Hin 2R12.gltf',
    reference: '/2526/Kong Tsz Hin 2R12.jpg',
    thumbnailUrl: '/2526/Kong Tsz Hin 2R12.png',
    designer: 'Kong Tsz Hin',
    category: '虎'
  },
  {
    id: '2R14_2526',
    name: '猴',
    description: '猴',
    url: '/2526/Lam Oi Yin Chloe 2R14.gltf',
    reference: '/2526/Lam Oi Yin Chloe 2R14.jpg',
    thumbnailUrl: '/2526/Lam Oi Yin Chloe 2R14.png',
    designer: 'Lam Oi Yin Chloe',
    category: '猴'
  },
  {
    id: '2R15_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Lau Cheuk Yat 2R15.gltf',
    reference: '/2526/Lau Cheuk Yat 2R15.jpg',
    thumbnailUrl: '/2526/Lau Cheuk Yat 2R15.png',
    designer: 'Lau Cheuk Yat',
    category: '兔'
  },
  {
    id: '2R16_2526',
    name: '馬',
    description: '馬',
    url: '/2526/Lee Hiu Ching 2R16.gltf',
    reference: '/2526/Lee Hiu Ching 2R16.jpg',
    thumbnailUrl: '/2526/Lee Hiu Ching 2R16.png',
    designer: 'Lee Hiu Ching',
    category: '馬'
  },
  {
    id: '2R17_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Lei Tik Sum 2R17.gltf',
    reference: '/2526/Lei Tik Sum 2R17.jpg',
    thumbnailUrl: '/2526/Lei Tik Sum 2R17.png',
    designer: 'Lei Tik Sum',
    category: '龍'
  },
  {
    id: '2R18_2526',
    name: '狗',
    description: '狗',
    url: '/2526/Li Sum Ying 2R18.gltf',
    reference: '/2526/Li Sum Ying 2R18.jpg',
    thumbnailUrl: '/2526/Li Sum Ying 2R18.png',
    designer: 'Li Sum Ying',
    category: '狗'
  },
  {
    id: '2R19_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Liang Gwai Fei Lea 2R19.gltf',
    reference: '/2526/Liang Gwai Fei Lea 2R19.jpg',
    thumbnailUrl: '/2526/Liang Gwai Fei Lea 2R19.png',
    designer: 'Liang Gwai Fei Lea',
    category: '龍'
  },
  {
    id: '2R20_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Liu Cham Cho 2R20.gltf',
    reference: '/2526/Liu Cham Cho 2R20.jpg',
    thumbnailUrl: '/2526/Liu Cham Cho 2R20.png',
    designer: 'Liu Cham Cho',
    category: '兔'
  },
  {
    id: '2R21_2526',
    name: '豬',
    description: '豬',
    url: '/2526/Mak Ka Yu 2R21.gltf',
    reference: '/2526/Mak Ka Yu 2R21.jpg',
    thumbnailUrl: '/2526/Mak Ka Yu 2R21.png',
    designer: 'Mak Ka Yu',
    category: '豬'
  },
  {
    id: '2R22_2526',
    name: '狗',
    description: '狗',
    url: '/2526/Tai Chun Lok 2R22.gltf',
    reference: '/2526/Tai Chun Lok 2R22.jpg',
    thumbnailUrl: '/2526/Tai Chun Lok 2R22.png',
    designer: 'Tai Chun Lok',
    category: '狗'
  },
  {
    id: '2R23_2526',
    name: '鼠',
    description: '鼠',
    url: '/2526/Tong Wang Long Timmus 2R23.gltf',
    reference: '/2526/Tong Wang Long Timmus 2R23.jpg',
    thumbnailUrl: '/2526/Tong Wang Long Timmus 2R23.png',
    designer: 'Tong Wang Long Timmus',
    category: '鼠'
  },
  {
    id: '2R24_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Wong Chit Yin Nathen 2R24.gltf',
    reference: '/2526/Wong Chit Yin Nathen 2R24.jpg',
    thumbnailUrl: '/2526/Wong Chit Yin Nathen 2R24.png',
    designer: 'Wong Chit Yin Nathen',
    category: '龍'
  },
  {
    id: '2R25_2526',
    name: '龍',
    description: '龍',
    url: '/2526/Yan Wai Kit 2R25.gltf',
    reference: '/2526/Yan Wai Kit 2R25.jpg',
    thumbnailUrl: '/2526/Yan Wai Kit 2R25.png',
    designer: 'Yan Wai Kit',
    category: '龍'
  },
  {
    id: '2R26_2526',
    name: '豬',
    description: '豬',
    url: '/2526/Yiu Lok Tung 2R26.gltf',
    reference: '/2526/Yiu Lok Tung 2R26.jpg',
    thumbnailUrl: '/2526/Yiu Lok Tung 2R26.png',
    designer: 'Yiu Lok Tung',
    category: '豬'
  },
  {
    id: '2R27_2526',
    name: '兔',
    description: '兔',
    url: '/2526/Yung Lok Muhammad Rahan Abbasi 2R27.gltf',
    reference: '/2526/Yung Lok Muhammad Rahan Abbasi 2R27.jpg',
    thumbnailUrl: '/2526/Yung Lok Muhammad Rahan Abbasi 2R27.png',
    designer: 'Yung Lok Muhammad Rahan Abbasi',
    category: '兔'
  },
]

// Year filter store
export const selectedYear = writable<string>('2526') // Default to 2526

// Filtered models based on selected year
export const filteredModels = writable<Model[]>([])

// All models store
export const models = writable<Model[]>(modelData)

// Current model index for filtered models
export const currentModelIndex = writable<number>(0)

// Initialize filtered models
const updateFilteredModels = (year: string) => {
  let filtered: Model[]
  if (year === 'all') {
    filtered = modelData
  } else {
    // Filter by year - 2526 models have "_2526" suffix, 2425 models don't
    if (year === '2526') {
      filtered = modelData.filter(model => model.id.includes('_2526'))
    } else if (year === '2425') {
      filtered = modelData.filter(model => !model.id.includes('_2526'))
    } else {
      filtered = modelData
    }
  }
  
  filteredModels.set(filtered)
  
  // Reset to first model when filter changes
  if (filtered.length > 0) {
    currentModelIndex.set(Math.floor(Math.random() * filtered.length))
  }
}

// Subscribe to year changes and update filtered models
selectedYear.subscribe(updateFilteredModels)

// Initialize with default year
updateFilteredModels('2526')

export const nextModel = () => {
  filteredModels.subscribe(filtered => {
    if (filtered.length === 0) return
    
    currentModelIndex.update(n => {
      let nxt 
      do {
        nxt = Math.floor(Math.random() * filtered.length)
      } while (n === nxt && filtered.length > 1)
      return nxt
    })
  })()
}