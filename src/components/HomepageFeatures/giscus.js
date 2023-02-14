import React from 'react';
import Giscus from '@giscus/react';

export default function Home() {
  return (
    <Giscus
      id="comments"
      repo="goldeimer/stoolbox"
      repoId="R_kgDOH_PhSw"
      category="General"
      categoryId="DIC_kwDOH_PhS84CRaE3"
      mapping="title"
      term="Component section!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="de"
      loading="lazy"
    />
  );
}
