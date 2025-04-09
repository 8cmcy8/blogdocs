import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
        { text: '环境配置', link: '/notes/环境配置/README.md' },
        { text: '基础知识', link: '/notes/基础知识/README.md' },
    ]
  },
])
