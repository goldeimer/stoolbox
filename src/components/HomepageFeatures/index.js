import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';


const FeatureList = [
  {
    title: <Translate>Sharing Knowledge</Translate>,
    Svg: require('@site/static/img/undraw_sharing_knowledge_03vp.svg').default,
    description: (
      <>
        <Translate>
          Das Teilen von Wissen fördert Innovation und unterstützt kollektives Lernen.
          Gemeinsam für eine Sanitärwende und gegen die globale Sanitärkriese!
        </Transalate>
      </>
    ),
  },
  {
    title: <Translate>Guides & How-Tos</Translate>,
    Svg: require('@site/static/img/undraw_writer_q06d.svg').default,
    description: (
      <>
        <Translate>
        Klick jetzt auf <code>Tutorial</code>, und starte dein eigenes WASH-Projekt!.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Webinare</Translate>,
    Svg: require('@site/static/img/undraw_online_test_re_kyfx.svg').default,
    description: (
      <>
        <Translate>
        Coming Soon: In kürze wirst du hier noch weitere Infomaterialien und Webinare finden.
        <Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
