import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '58e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6a0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd5c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fe8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '56f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e5b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cdb'),
    exact: true
  },
  {
    path: '/donation',
    component: ComponentCreator('/donation', '519'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '634'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '60d'),
    exact: true
  },
  {
    path: '/temp_index',
    component: ComponentCreator('/temp_index', 'c8a'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', '017'),
    routes: [
      {
        path: '/docs/next/basics',
        component: ComponentCreator('/docs/next/basics', '5da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/basics/markdown-features',
        component: ComponentCreator('/docs/next/basics/markdown-features', 'eac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/category/basics',
        component: ComponentCreator('/docs/next/category/basics', '48a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/category/instructions',
        component: ComponentCreator('/docs/next/category/instructions', 'a64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/fermentation-composting',
        component: ComponentCreator('/docs/next/fermentation-composting', '5fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/festival-diy',
        component: ComponentCreator('/docs/next/festival-diy', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/goldeimer-diy',
        component: ComponentCreator('/docs/next/goldeimer-diy', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/how-to-stoolbox',
        component: ComponentCreator('/docs/next/how-to-stoolbox', '346'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/instructions/trenneinsatz-diy',
        component: ComponentCreator('/docs/next/instructions/trenneinsatz-diy', 'c84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/next/why-open-source-hardware',
        component: ComponentCreator('/docs/next/why-open-source-hardware', 'e56'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '47c'),
    routes: [
      {
        path: '/docs/basics',
        component: ComponentCreator('/docs/basics', '671'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/basics',
        component: ComponentCreator('/docs/category/basics', 'dd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/instructions',
        component: ComponentCreator('/docs/category/instructions', 'a4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fermentation-composting',
        component: ComponentCreator('/docs/fermentation-composting', 'a50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/goldeimer-diy',
        component: ComponentCreator('/docs/goldeimer-diy', 'c60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/how-to-stoolbox',
        component: ComponentCreator('/docs/how-to-stoolbox', 'f29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/instructions/trenneinsatz-diy',
        component: ComponentCreator('/docs/instructions/trenneinsatz-diy', '24f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/why-open-source-hardware',
        component: ComponentCreator('/docs/why-open-source-hardware', 'f42'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'af0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
