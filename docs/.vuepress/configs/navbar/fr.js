import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/',
  '/page/a-propos/',
  {
    text: 'Menu déroulante sur passage de la souris',
    children: [
      {
        text: 'Un lien',
        link: '/#lien-1',
      },
      {
        text: 'Un autre lien',
        link: '/#lien-2',
      },
      {
        text: 'Un dernier lien',
        link: '/#lien-3',
      },
    ],
  },
  { text: 'Lien vers page de contact', link: '/page/contactez-nous/' },
]);
