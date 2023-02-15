import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div dangerouslySetInnerHTML={{__html: `
        <!-- twingle -->
        <script type="text/javascript">
          (function() {
            var u="https://spenden.twingle.de/embed/goldeimer/stoolbox/tw63eb739b2cebb/form";
            var id = '_' + Math.random().toString(36).substr(2, 9);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            document.write('<div id="twingle-public-embed-' + id + '"></div>');
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'/'+id; s.parentNode.insertBefore(g,s);
          })();
        </script>
        <!-- twingle -->
        `}} />
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
