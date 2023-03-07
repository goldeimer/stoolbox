// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sToolbox',
  tagline: 'powered by Goldeimer',
  url: 'http://www.stoolbox.de',
  baseUrl: '/',
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
    locales: ['de','ls-de', 'en', 'es', 'fr'],
    localeConfigs: {
	de: {
	 	label: 'Deutsch',
	},
	lsde: {
 		label: 'Deutsch (Leichte Sprache)',
    	},
	en: {
		label: 'English',
	},
	es: {
	  	label: 'Español',
	},
	fr: {
	  	label: 'Français',
	},
     }
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
            'https://github.com/goldeimer/stoolbox',
        },
        theme: {  customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
   'docusaurus-plugin-matomo',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
      id: 'support_us',
      content:
        'Wir wollen eine DIY Trockenklo Community Plattform aufbauen, <a target="_blank" rel="noopener noreferrer" href="#">kontaktiert uns</a>, wenn ihr euch beteiligen wollt!',
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
            docId: 'basics/basic',
            position: 'left',
            label: 'Tutorial',
          },
          {
	    to: '/donation',
	    label: 'Spenden',
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
      matomo: {
      matomoUrl: 'https://goldi.uber.space/matomo/',
      siteId: '3',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Basics',
                to: '/basics/basic',
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
	{
	  title: 'Powered by',
	  items: [
	    {
	      html: `
		<a href="https://goldeimer.com" target="_blank" rel="noreferrer noopener" aria-label="Goldeimer gGmbH Logo">
		  <img src="/img/goldeimer_logo.png" alt="Goldeimer gGmbH Logo" height="70px"/>
		</a>
		<a href="https://www.netsan.org/" target="_blank" rel="noreferrer noopener" aria-label="Netsan e.V. Logo">
		  <img src="/img/netsan_logo.png" alt="Netsan e.V. Logo" height="70px"/>
		</a>
	      `,
	    },
	  ],
	},
	{
	  title: 'Gefördert durch',
	  items: [
	    {
	      html: `
		<a href="https://www.deutsche-stiftung-engagement-und-ehrenamt.de/" target="_blank" rel="noreferrer noopener" aria-label="Deutsche-Stiftung-Engagement-und-Ehrenamt Logo">
		  <img src="/img/dsee_logo.png" alt="Deutsche-Stiftung-Engagement-und-Ehrenamt Logo" height="70px" />
		</a>
	      `,
	    },
	  ],
	},


        ],
        copyright: `sToolbox © ${new Date().getFullYear()} powered by Goldeimer gGmbH & Netzwerk für nachhaltige Sanitärsysteme e.V.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
