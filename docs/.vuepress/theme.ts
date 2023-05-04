//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope';

import { enNavBarConfig, frNavBarConfig } from './configs/navbar';

export default hopeTheme({
  //path.resolve(__dirname, './theme'),
  hostname: 'https://example.com',
  author: {
    name: 'Jeremie Litzler',
    url: 'https://example.com',
  },
  repo: 'GitHubUsername/GitRepoName',
  docsRepo: 'https://github.com/GitHubUsername/GitRepoName',
  docsBranch: 'main',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
  logo: '/icons/favicon-32x32.png',
  logoDark: '/icons/dark-favicon-32x32.png',
  darkmode: "enable",
  locales: {
    '/': {
      navbar: enNavBarConfig,
      sidebar: false,
    },
    '/fr/': {
      navbar: frNavBarConfig,
      sidebar: false,
    },
  },
  displayFooter: true,
  footer:
    'GPLv3 Licensed | <a href="https://example.com/page/terms" title="Read terms and conditions of this website">Terms</a>',
  plugins: {
    blog: true,
    comment: {
      provider: 'Giscus',
      repo: 'GitHubUsername/GitRepoName',
      repoId: '[[Giscus-repo-id]]',
      category: 'Comments',
      categoryId: '[[Giscus-category-id]]',
      mapping: 'title',
    },
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
