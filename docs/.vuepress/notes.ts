import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const environment = defineNoteConfig({
  dir: '环境配置',
  link: '/环境配置/',
  sidebar: 'auto'
})

const basicknowledge = defineNoteConfig({
  dir: '基础知识',
  link: '/基础知识/',
  sidebar: 'auto'
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [environment,basicknowledge],
})
