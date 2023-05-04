import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  '/en/',
  '/en/page/about/',
  {
    text: 'Dropdown menu on hover',
    children: [
      {
        text: 'A link',
        link: '/en/#link-1',
      },
      {
        text: 'Another link',
        link: '/en/#link-2',
      },
      {
        text: 'One last link',
        link: '/en/#link-3',
      },
    ],
  },
  { text: 'Link to contact page', link: '/en/page/contact-us/' },
]);
