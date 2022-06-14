import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'
import type { SidebarConfig } from 'vuepress-theme-mix'
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
  "API-for-Other-Mods",
  "Implementation-Details",

]

const sidebarConfigEn: SidebarConfig = {
  '/': [],
  '/wiki': contents.map((entry) => '/wiki/' + entry)
}



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
  theme: mixTheme({
    title: "Immersive Portals",
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
        title: "沉浸传送门",
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
        toggleThemeModeAriaLabel: '切换主题',
      },
    },



  }),


  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ]
})