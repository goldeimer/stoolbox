import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/stoolbox/__docusaurus/debug',
    component: ComponentCreator('/stoolbox/__docusaurus/debug', '7b4'),
    exact: true
  },
  {
    path: '/stoolbox/__docusaurus/debug/config',
    component: ComponentCreator('/stoolbox/__docusaurus/debug/config', '953'),
    exact: true
  },
  {
    path: '/stoolbox/__docusaurus/debug/content',
    component: ComponentCreator('/stoolbox/__docusaurus/debug/content', '9cb'),
    exact: true
  },
  {
    path: '/stoolbox/__docusaurus/debug/globalData',
    component: ComponentCreator('/stoolbox/__docusaurus/debug/globalData', 'ac5'),
    exact: true
  },
  {
    path: '/stoolbox/__docusaurus/debug/metadata',
    component: ComponentCreator('/stoolbox/__docusaurus/debug/metadata', '5f7'),
    exact: true
  },
  {
    path: '/stoolbox/__docusaurus/debug/registry',
    component: ComponentCreator('/stoolbox/__docusaurus/debug/registry', 'a96'),
    exact: true
  },
  {
    path: '/stoolbox/__docusaurus/debug/routes',
    component: ComponentCreator('/stoolbox/__docusaurus/debug/routes', '478'),
    exact: true
  },
  {
    path: '/stoolbox/blog',
    component: ComponentCreator('/stoolbox/blog', 'd07'),
    exact: true
  },
  {
    path: '/stoolbox/blog/archive',
    component: ComponentCreator('/stoolbox/blog/archive', '217'),
    exact: true
  },
  {
    path: '/stoolbox/blog/first-blog-post',
    component: ComponentCreator('/stoolbox/blog/first-blog-post', '77a'),
    exact: true
  },
  {
    path: '/stoolbox/blog/long-blog-post',
    component: ComponentCreator('/stoolbox/blog/long-blog-post', '7ad'),
    exact: true
  },
  {
    path: '/stoolbox/blog/mdx-blog-post',
    component: ComponentCreator('/stoolbox/blog/mdx-blog-post', 'f34'),
    exact: true
  },
  {
    path: '/stoolbox/blog/tags',
    component: ComponentCreator('/stoolbox/blog/tags', 'e62'),
    exact: true
  },
  {
    path: '/stoolbox/blog/tags/docusaurus',
    component: ComponentCreator('/stoolbox/blog/tags/docusaurus', '8a3'),
    exact: true
  },
  {
    path: '/stoolbox/blog/tags/facebook',
    component: ComponentCreator('/stoolbox/blog/tags/facebook', 'db4'),
    exact: true
  },
  {
    path: '/stoolbox/blog/tags/hello',
    component: ComponentCreator('/stoolbox/blog/tags/hello', 'ad2'),
    exact: true
  },
  {
    path: '/stoolbox/blog/tags/hola',
    component: ComponentCreator('/stoolbox/blog/tags/hola', '6cd'),
    exact: true
  },
  {
    path: '/stoolbox/blog/welcome',
    component: ComponentCreator('/stoolbox/blog/welcome', '274'),
    exact: true
  },
  {
    path: '/stoolbox/markdown-page',
    component: ComponentCreator('/stoolbox/markdown-page', 'c1c'),
    exact: true
  },
  {
    path: '/stoolbox/docs',
    component: ComponentCreator('/stoolbox/docs', '8d2'),
    routes: [
      {
        path: '/stoolbox/docs/basics',
        component: ComponentCreator('/stoolbox/docs/basics', 'e1c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/basics/markdown-features',
        component: ComponentCreator('/stoolbox/docs/basics/markdown-features', 'a4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/category/basics',
        component: ComponentCreator('/stoolbox/docs/category/basics', '964'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/category/instructions',
        component: ComponentCreator('/stoolbox/docs/category/instructions', '8de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/fermentation-composting',
        component: ComponentCreator('/stoolbox/docs/fermentation-composting', '040'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/goldeimer-diy',
        component: ComponentCreator('/stoolbox/docs/goldeimer-diy', '22b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/how-to-stoolbox',
        component: ComponentCreator('/stoolbox/docs/how-to-stoolbox', '821'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/instructions/trenneinsatz-diy',
        component: ComponentCreator('/stoolbox/docs/instructions/trenneinsatz-diy', 'a72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/intro',
        component: ComponentCreator('/stoolbox/docs/intro', '40c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/stoolbox/docs/why-open-source-hardware',
        component: ComponentCreator('/stoolbox/docs/why-open-source-hardware', '87a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/stoolbox/',
    component: ComponentCreator('/stoolbox/', '94c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
