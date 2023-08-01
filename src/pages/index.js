import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Hero, ImageAndText, CtaCards, TextCards, FeatureShowcase, CtaImageButton, icons } from '@infinum/docusaurus-theme';

import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';


/*function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/basics">
            <Translate>Plane deine eigene Trockentoillete⚒️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}
*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Hero
				title='Goldeimer sToolbox'
				subtitle='Alles was du brauchst, um deine eigene Trockentoiltte zu bauen, ob für Festivals oder Privat'
				buttonLabel='Jetzt loslegen'
				buttonUrl='#basics'
				imageUrl='/img/justus-truhe.svg'
				gray
			/>

			<ImageAndText
				title='Anleitungen, Workshops?, Wissen von uns für dich!'
				imageUrl='/img/homepage/block-cards.svg'
				gray
			>
				Die Goldeimer Toolbox schafft dir einen ersten eindruck welche Toilette du brauchst.
				<br /> <br />
				Nutze und Erweitere diese Toolbox um das Trenntrockentoillengame Weltweit unserer Vision "Alle für Klos! - Klos für Alle!" näher zu bringen. Melde dich einfach über Github an und leg los! Eine genaue erklärung wie du selsbt Inhalte beisteuern kannst, findest du <a href="#">hier</a>. 
				<br /> <br />
				Rock on!
			</ImageAndText>

		    {/* <div id='get-started'>
				<CtaCards
					title='Get started in minutes, not hours'
					subtitle="Boilerplate your project in a few simple steps. Get instructions for setting up an Eightshift DevKit theme or plugin, run a command (or two) and start coding. It's that easy!"
					cards={[
						{
							icon: icons.frontendDevelopment,
							text: 'I want a new WordPress theme',
							buttonLabel: 'New theme',
							buttonUrl: '/docs/theme',
						},
						{
							icon: icons.puzzleOpenJob,
							text: 'I want a new WordPress plugin',
							buttonLabel: 'New plugin',
							buttonUrl: '/docs/plugin',
						}
					]}
				/>
			</div> */}

			<TextCards
				title='Wo brauchst du Infos'
				subtitle="Wir haben verschiedene Themen aufgenommen und beschrieben, klick dich durch!"
				cards={[
					{
						title: 'Trockentoilette für den Garten',
						subtitle: 'In einer Welt, so umweltbewusst und klar, Erscheint die Trenntrockentoilette wunderbar. Kein Wasserverbrauch, kein Gifthauch entweicht, Der Natur zuliebe, sie unsre Herzen erreicht.',
					},
					{
						title: 'Trockentoilette für eine Veranstaltung',
						subtitle: 'Getrennt die Wege von Wasser und Dung, Im stillen Örtchen wird Nachhaltigkeit gesungen.'
					},
					{
						title: 'Das Einstreu',
						subtitle: 'Die Erde lächelt, wenn wir s benutzen, Ein Schritt voran, um sie zu schützen.'
					},
					{
						title: 'Der Trenneinsatz',
						subtitle: 'Die Kompostierung, ein natürlicher Tanz, Verwandelt alles in fruchtbaren Glanz.'
					},
					{
						title: 'Die Tonnengröße',
						subtitle: 'Aus Fäkalien wird kostbare Erde, Kein Grund zur Eile, hier entsteht keine Beschwerde.'
					},
					{
						title: 'Die Kompostierung',
						subtitle: 'So lasst uns loben, was uns vereint, Die Trenntrockentoilette, die uns dient.'
					},
					{
						title: 'Der Urin',
						subtitle: 'Für die Zukunft, ein ökologischer Pakt, Der uns zeigt, wie man nachhaltig die Umwelt bewacht.'
					}
				]}
			/>

			{/* <FeatureShowcase
				title='An editing experience content editors will love'
				text='Provide the ease of use and flexibility that your content editors crave for. Rely on our user-friendly default blocks or use plug&play editor components to build great experiences.'
				imageUrl='/img/homepage/block-editor.webp'
				gray
			/> */}
      </main>
    </Layout>
  );
}
