import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/__docusaurus/debug',
    component: ComponentCreator('/fr/__docusaurus/debug', '288'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/config',
    component: ComponentCreator('/fr/__docusaurus/debug/config', '701'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/content',
    component: ComponentCreator('/fr/__docusaurus/debug/content', '596'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/globalData',
    component: ComponentCreator('/fr/__docusaurus/debug/globalData', '06b'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/metadata',
    component: ComponentCreator('/fr/__docusaurus/debug/metadata', 'a7a'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/registry',
    component: ComponentCreator('/fr/__docusaurus/debug/registry', '51b'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/routes',
    component: ComponentCreator('/fr/__docusaurus/debug/routes', '48c'),
    exact: true
  },
  {
    path: '/fr/blog',
    component: ComponentCreator('/fr/blog', '89b'),
    exact: true
  },
  {
    path: '/fr/blog/archive',
    component: ComponentCreator('/fr/blog/archive', 'b1c'),
    exact: true
  },
  {
    path: '/fr/blog/first-blog-post',
    component: ComponentCreator('/fr/blog/first-blog-post', '228'),
    exact: true
  },
  {
    path: '/fr/blog/long-blog-post',
    component: ComponentCreator('/fr/blog/long-blog-post', '87a'),
    exact: true
  },
  {
    path: '/fr/blog/mdx-blog-post',
    component: ComponentCreator('/fr/blog/mdx-blog-post', 'fb6'),
    exact: true
  },
  {
    path: '/fr/blog/tags',
    component: ComponentCreator('/fr/blog/tags', '2f7'),
    exact: true
  },
  {
    path: '/fr/blog/tags/docusaurus',
    component: ComponentCreator('/fr/blog/tags/docusaurus', '39d'),
    exact: true
  },
  {
    path: '/fr/blog/tags/facebook',
    component: ComponentCreator('/fr/blog/tags/facebook', '47b'),
    exact: true
  },
  {
    path: '/fr/blog/tags/hello',
    component: ComponentCreator('/fr/blog/tags/hello', '16c'),
    exact: true
  },
  {
    path: '/fr/blog/tags/hola',
    component: ComponentCreator('/fr/blog/tags/hola', 'b26'),
    exact: true
  },
  {
    path: '/fr/blog/welcome',
    component: ComponentCreator('/fr/blog/welcome', '952'),
    exact: true
  },
  {
    path: '/fr/markdown-page',
    component: ComponentCreator('/fr/markdown-page', '42e'),
    exact: true
  },
  {
    path: '/fr/docs',
    component: ComponentCreator('/fr/docs', '98b'),
    routes: [
      {
        path: '/fr/docs/basics',
        component: ComponentCreator('/fr/docs/basics', 'f5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/basics/markdown-features',
        component: ComponentCreator('/fr/docs/basics/markdown-features', '0fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/category/basics',
        component: ComponentCreator('/fr/docs/category/basics', '68c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/category/instructions',
        component: ComponentCreator('/fr/docs/category/instructions', 'f23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/fermentation-composting',
        component: ComponentCreator('/fr/docs/fermentation-composting', 'f01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/goldeimer-diy',
        component: ComponentCreator('/fr/docs/goldeimer-diy', 'cc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/how-to-stoolbox',
        component: ComponentCreator('/fr/docs/how-to-stoolbox', '248'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/instructions/trenneinsatz-diy',
        component: ComponentCreator('/fr/docs/instructions/trenneinsatz-diy', 'c9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/intro',
        component: ComponentCreator('/fr/docs/intro', 'f86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/why-open-source-hardware',
        component: ComponentCreator('/fr/docs/why-open-source-hardware', '10c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/fr/',
    component: ComponentCreator('/fr/', '60d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
