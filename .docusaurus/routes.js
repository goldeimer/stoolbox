import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ls/__docusaurus/debug',
    component: ComponentCreator('/ls/__docusaurus/debug', 'c67'),
    exact: true
  },
  {
    path: '/ls/__docusaurus/debug/config',
    component: ComponentCreator('/ls/__docusaurus/debug/config', '203'),
    exact: true
  },
  {
    path: '/ls/__docusaurus/debug/content',
    component: ComponentCreator('/ls/__docusaurus/debug/content', 'ef6'),
    exact: true
  },
  {
    path: '/ls/__docusaurus/debug/globalData',
    component: ComponentCreator('/ls/__docusaurus/debug/globalData', '26b'),
    exact: true
  },
  {
    path: '/ls/__docusaurus/debug/metadata',
    component: ComponentCreator('/ls/__docusaurus/debug/metadata', 'a9b'),
    exact: true
  },
  {
    path: '/ls/__docusaurus/debug/registry',
    component: ComponentCreator('/ls/__docusaurus/debug/registry', '913'),
    exact: true
  },
  {
    path: '/ls/__docusaurus/debug/routes',
    component: ComponentCreator('/ls/__docusaurus/debug/routes', '52c'),
    exact: true
  },
  {
    path: '/ls/donation',
    component: ComponentCreator('/ls/donation', '8f9'),
    exact: true
  },
  {
    path: '/ls/markdown-page',
    component: ComponentCreator('/ls/markdown-page', '4b0'),
    exact: true
  },
  {
    path: '/ls/search',
    component: ComponentCreator('/ls/search', '880'),
    exact: true
  },
  {
    path: '/ls/temp_index',
    component: ComponentCreator('/ls/temp_index', '8ae'),
    exact: true
  },
  {
    path: '/ls/docs/next',
    component: ComponentCreator('/ls/docs/next', 'a0c'),
    routes: [
      {
        path: '/ls/docs/next/basics',
        component: ComponentCreator('/ls/docs/next/basics', '0c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/basics/markdown-features',
        component: ComponentCreator('/ls/docs/next/basics/markdown-features', '72a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/category/basics',
        component: ComponentCreator('/ls/docs/next/category/basics', 'b8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/category/instructions',
        component: ComponentCreator('/ls/docs/next/category/instructions', '4e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/changelog',
        component: ComponentCreator('/ls/docs/next/changelog', '3a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/fermentation-composting',
        component: ComponentCreator('/ls/docs/next/fermentation-composting', '32a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/festival-diy',
        component: ComponentCreator('/ls/docs/next/festival-diy', 'd92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/goldeimer-diy',
        component: ComponentCreator('/ls/docs/next/goldeimer-diy', '0fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/how-to-stoolbox',
        component: ComponentCreator('/ls/docs/next/how-to-stoolbox', '0b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/instructions/trenneinsatz-diy',
        component: ComponentCreator('/ls/docs/next/instructions/trenneinsatz-diy', 'afb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/next/why-open-source-hardware',
        component: ComponentCreator('/ls/docs/next/why-open-source-hardware', 'f0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ls/docs',
    component: ComponentCreator('/ls/docs', 'e3e'),
    routes: [
      {
        path: '/ls/docs/basics',
        component: ComponentCreator('/ls/docs/basics', '608'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/category/basics',
        component: ComponentCreator('/ls/docs/category/basics', 'e18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/category/instructions',
        component: ComponentCreator('/ls/docs/category/instructions', 'f7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/changelog',
        component: ComponentCreator('/ls/docs/changelog', '788'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/fermentation-composting',
        component: ComponentCreator('/ls/docs/fermentation-composting', '912'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/goldeimer-diy',
        component: ComponentCreator('/ls/docs/goldeimer-diy', '331'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/how-to-stoolbox',
        component: ComponentCreator('/ls/docs/how-to-stoolbox', 'e55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/instructions/trenneinsatz-diy',
        component: ComponentCreator('/ls/docs/instructions/trenneinsatz-diy', '384'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/instructions/uebersicht',
        component: ComponentCreator('/ls/docs/instructions/uebersicht', 'a89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ls/docs/why-open-source-hardware',
        component: ComponentCreator('/ls/docs/why-open-source-hardware', 'c9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ls/',
    component: ComponentCreator('/ls/', '102'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
