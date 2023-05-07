//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope';

import { enNavBarConfig, frNavBarConfig } from './configs/navbar';

export default hopeTheme({
  //path.resolve(__dirname, './theme'),
  hostname: 'https://mon-site-demo-tutoriel.madebyjeremie.fr',
  author: {
    name: 'Jeremie Litzler',
    url: 'https://mon-site-demo-tutoriel.madebyjeremie.fr',
  },
  repo: 'JeremieLitzler/mon-site-demo-tutoriel',
  docsRepo: 'https://github.com/JeremieLitzler/mon-site-demo-tutoriel',
  docsBranch: 'main',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
  logo: '/icons/favicon-32x32.png',
  logoDark: '/icons/dark-favicon-32x32.png',
  darkmode: 'enable',
  locales: {
    '/': {
      navbar: frNavBarConfig,
      sidebar: false,
    },
    '/en/': {
      navbar: enNavBarConfig,
      sidebar: false,
    },
  },
  displayFooter: true,
  footer:
    'Licence GPLv3 | <a href="https://mon-site-demo-tutoriel.madebyjeremie.fr/page/mentions-legales" title="Lire les mentions légales">Mentions légales</a>',
  plugins: {
    blog: true,
    // comment: {
    //   provider: 'Giscus',
    //   repo: 'JeremieLitzler/mon-site-demo-tutoriel',
    //   repoId: '[[Giscus-repo-id]]',
    //   category: 'Comments',
    //   categoryId: '[[Giscus-category-id]]',
    //   mapping: 'title',
    // },
    mdEnhance: {
      linksCheck: 'always',
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html
      align: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html
      attrs: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html
      //chart: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html
      container: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html
      echarts: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html
      //See also https://echarts.apache.org/en/index.html
      footnote: true,
      //use the figure, figureCaption to wrap an image
      figure: true,
      //load image lazily with native method
      imgLazyload: true,
      //Syntax: ==this text is marked==
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html
      mark: true,
      //Supports RevealJS
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html
      //presentation: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html
      //I'm not sure I need it for now
      //stylize: []
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html
      tabs: true,
    },
    pwa: {
      cacheHTML: true,
      //caching pictures is too heavy...
      //cachePic: true
    },
  },
});
