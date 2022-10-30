import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url);

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
          '/wiki/': "structure"
        },
      },
      '/zh/': {
        sidebar: {
          '/zh/': [],
          '/zh/wiki/': "structure"
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
    docsearchPlugin({
      appId:"4R90CQPOL8",
      apiKey:"d7bd74f803f425f70304eb0ad74cab7d",
      indexName:"qouteall", // seems that the docsearch index cannot be renamed
    }),
  ]
})