---
sidebar_position: 1
---

import Giscus from '@giscus/react';
<script src="https://giscus.app/client.js"
                data-repo="goldeimer/poopeefy"
                data-repo-id="R_kgDOH_PhSw"
                data-category="Q&A"
                data-category-id="DIC_kwDOH_PhS84CRaE4"
                data-mapping="pathname"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="1"
                data-input-position="top"
                data-theme="preferred_color_scheme"
                data-lang="de"
                data-loading="lazy"
                crossorigin="anonymous"
                async>
        </script>

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
