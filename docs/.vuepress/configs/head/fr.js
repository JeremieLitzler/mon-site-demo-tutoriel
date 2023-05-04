const localeShort = 'fr';
const localeFull = 'fr-FR';
const websiteDomain = 'mon-site-demo-tutoriel.madebyjeremie.fr';
const titleDefault = 'Un site de démo pour tutoriel VuePress';
const descriptionDefault =
  'Ce site a été créé lors de la rédaction du tutoriel pour créer son site VuePress.';
const themeColor = '#2d55c1';
const repoLink = 'https://github.com/JeremieLitzler/mon-site-demo-tutoriel';

export const frHeadConfig = {
  lang: localeFull,
  title: titleDefault,
  description: descriptionDefault,
  repo: repoLink,
  //https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    ['meta', { property: 'og:title', content: titleDefault }],
    [
      'meta',
      {
        property: 'og:url',
        content: `https://${websiteDomain}/`,
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: descriptionDefault,
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      { property: 'og:image', content: '/icons/android-chrome-512x512.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: themeColor }],
    ['meta', { name: 'theme-color', content: themeColor }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: themeColor,
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.fr.webmanifest' }],
  ],
};
