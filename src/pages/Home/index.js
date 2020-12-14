import React from 'react'
import css from './styles.module.css'
import Menu from '../../components/Menu/Menu'
import HorizontalPanel from '../../components/HorizontalPanel/HorizontalPanel'
import VerticalPanels from '../../components/VerticalPanels/VerticalPanels'
import { HomeCarousel } from '../../components/HomeCarousel/HomeCarousel'
import HorizontalPanelNoBack from '../../components/HorizontalPanelNoBack/HorizontalPanelNoBack'
import VerticalPanelsV2 from '../../components/VerticalPanelsV2/VerticalPanelsV2'

export default function Home() {
  return (
    <>
      <Menu />

      <HorizontalPanel
        h1paragraph="We Simplify the Words"
        firstParagraph=" Professional translation service guaranteed by International Translators
        and"
        secParagraph="Reviewers specialized in different areas with many years of experience"
        txtButton="Request a quote"
      />

      <div className={css.allCards}>
        <VerticalPanels
          titleCard="TRANSLATION"
          paragraph="We are able to translate and proofread any kind of document, from
        the simplest to technical or corporative content."
          backgroudColor="#27BED5"
          iconColor="white"
          icon="article"
          linkPage="/"
        />

        <VerticalPanels
          titleCard="TRANSCRIPTION"
          paragraph="Our professional native translators have many years of experience in
          different areas."
          backgroudColor="#E80E9F"
          iconColor="white"
          icon="create"
          linkPage="/"
        />

        <VerticalPanels
          titleCard="LOCALIZATION"
          paragraph="Why simply translate the information, Websites or Apps, if you can
          count on us to be professional, timely, efficient and ensure that your
          target customers are being approached in the best way?"
          backgroudColor="#EDEDED"
          iconColor="black"
          icon="location_on"
          linkPage="/"
        />

        <VerticalPanels
          titleCard="INTERPRETER"
          paragraph="Nowadays technology allows us to communicate with everyone. Let us be
          your voice and help you interact with your clients, no matter what
          language they speak."
          backgroudColor="#FF9A00"
          iconColor="white"
          icon="textsms"
          linkPage="/"
        />
      </div>

      <HomeCarousel />

      <HorizontalPanelNoBack
        h1paragraph="Do you have a special project?"
        firstParagraph="So, this is the right place for you. Get in touch, we can help you set up all kind of translation you may need."
        txtButton="Get in Touch"
      />

      <div className={css.allCards}>
        <VerticalPanelsV2
          titleCard="The Staff works very fast and has a very professional attitude. I would hire them again for other projects"
          paragraph="Upwork client, Nov 2015 - Dec 2015"
          backgroudColor="#27BED5"
          iconColor="white"
          icon="format_quote"
        />
        <VerticalPanelsV2
          titleCard="Renata has confirmed her language knowledge, and has shown professionalism, flexibility and responsibility. Our team has had positive experiences from this collaboration since 2013, and she has become a valuable member of our staff of freelance translators."
          paragraph="Silvia Bongirolami - Community Manager - Translated Dec.2019"
          backgroudColor="#E80E9F"
          iconColor="white"
          icon="format_quote"
        />
        <VerticalPanelsV2
          titleCard="Localization of a Personality App Completed Successfully!"
          paragraph="Upwork client, Mar 2020 - Apr 2020"
          backgroudColor="#FCB434"
          iconColor="white"
          icon="format_quote"
        />
      </div>
    </>
  )
}
