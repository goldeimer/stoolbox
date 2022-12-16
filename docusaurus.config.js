// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sToolbox',
  tagline: 'powered by Goldeimer',
  url: 'https://stoolbox.org',
  baseUrl: '/stoolbox',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'goldeimer', // Usually your GitHub org/user name.
  projectName: 'stoolbox', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {  customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
      navbar: {
        title: 'sToolbox',
        logo: {
          alt: 'sToolbox Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
	    to: '/blog',
	    label: 'Blog',
            position: 'left'
	  },
	  {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/goldeimer/stoolbox',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
    	logo: {
		alt: 'Goldeimer gGmbH Logo',
		src: 'img/goldeimer_logo.png',
		href: 'https://goldeimer.com',
		width: 160,
		height: 51,
	      },
    	logo: {
		alt: 'Netsan Logo',
		src: 'img/netsan_logo.png',
		href: 'https://www.netsan.org/',
		width: 160,
		height: 51,
	      },
    	logo: {
		alt: 'DSEE Logo',
		src: 'img/dsee_logo.png',
		href: 'https://www.deutsche-stiftung-engagement-und-ehrenamt.de/',
		width: 160,
		height: 51,
	      },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Informationen',
            items: [
              {
                label: 'Impressum',
                to: 'https://goldeimer.de/policies/legal-notice',
              },
              {
                label: 'Datenschutzerklärung',
                href: 'https://goldeimer.de/policies/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Goldeimer gGmbH, Netzwerk für nachhaltige Sanitärsysteme e.V.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
