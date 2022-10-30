import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

let contents = [
  '',
  'Portals',
  "Portal-Customization",
  "Spatial-Transformation",
  "Datapack-Based-Custom-Portal-Generation",
  "Dimension-Management",
  "Dimension-Stack",
  "Config-Options",
  "Commands-Reference",
  "Portal-Attributes",
  "Miscellaneous",
  "MiniScaled",
  "API-for-Other-Mods",
  "Implementation-Details",

]

export default defineUserConfig({
  // ……

  base: "/immptl/",

  // the website icon in tab
  head: [['link', { rel: 'icon', href: '/immptl/images/immptl.png' }]],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Immersive Portals', // for broswer tabs
      description: 'See through portals and teleport seamlessly.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '沉浸传送门',
      description: '透视传送门，无缝传送',
    },
  },

  // 主题配置
  theme: hopeTheme({
    hostname: "https://qouteall.fun",
    logo: "/images/immptl.png",
    lastUpdated: false,
    contributors: false,

    locales: {
      '/': {
        sidebar: {
          '/': [],
          '/wiki': contents.map((entry) => '/wiki/' + entry)
        },
      },
      '/zh/': {
        sidebar: {
          '/zh/': [],
          '/zh/wiki': contents.map((entry) => '/zh/wiki/' + entry)
        },
        home: '/zh/',
      },
    },

    pageInfo: false,

    plugins: {
      externalLinkIcon: false,
    }


  }),


  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ]
})