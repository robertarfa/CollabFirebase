import React, { useEffect, useState } from 'react'
import css from './styles.module.css'
import Menu from '../../components/Menu/Menu'
import HorizontalPanel from '../../components/HorizontalPanel/HorizontalPanel'
import VerticalPanels from '../../components/VerticalPanels/VerticalPanels'
import { HomeCarousel } from '../../components/HomeCarousel/HomeCarousel'
import HorizontalPanelNoBack from '../../components/HorizontalPanelNoBack/HorizontalPanelNoBack'
import VerticalPanelsV2 from '../../components/VerticalPanelsV2/VerticalPanelsV2'

// import { FormattedMessage } from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";
import { useSelector } from 'react-redux'
import HorizontalPanelHalf from '../../components/HorizontalPanelHalf/HorizontalPanelHalf'

export default function Home() {
  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  return (
    <I18nPropvider locale={locale} >
      <Menu />

      <HorizontalPanel
        h1paragraph={translate('HPHome_01')}
        firstParagraph={translate('HPHome_02')}
        secParagraph={translate('HPHome_03')}
        txtButton={translate('HPHome_04')}
      />

      <div className={css.allCards}>
        <VerticalPanels
          titleCard={translate('VPHome_01')}
          paragraph={translate('VPHome_02')}
          backgroudColor="#27BED5"
          iconColor="white"
          icon="article"
          linkPage="/"
        />

        <VerticalPanels
          titleCard={translate('VPHome_04')}
          paragraph={translate('VPHome_05')}
          backgroudColor="#E80E9F"
          iconColor="white"
          icon="create"
          linkPage="/"
        />

        <VerticalPanels
          titleCard={translate('VPHome_06')}
          paragraph={translate('VPHome_07')}
          backgroudColor="#EDEDED"
          iconColor="black"
          icon="location_on"
          linkPage="/"
        />

        <VerticalPanels
          titleCard={translate('VPHome_08')}
          paragraph={translate('VPHome_09')}
          backgroudColor="#FF9A00"
          iconColor="white"
          icon="textsms"
          linkPage="/"
        />
      </div>

      <HomeCarousel />

      <HorizontalPanelNoBack
        h1paragraph={translate('HPNBHome_01')}
        firstParagraph={translate('HPNBHome_02')}
        txtButton={translate('HPNBHome_03')}
      />

      {/* <HorizontalPanelHalf
      /> */}

      <div className={css.allCards}>
        <VerticalPanelsV2
          titleCard={translate('VP2Home_01')}
          paragraph={translate('VP2Home_02')}
          backgroudColor="#27BED5"
          iconColor="white"
          icon="format_quote"
        />
        <VerticalPanelsV2
          titleCard={translate('VP2Home_03')}
          paragraph={translate('VP2Home_04')}
          backgroudColor="#E80E9F"
          iconColor="white"
          icon="format_quote"
        />
        <VerticalPanelsV2
          titleCard={translate('VP2Home_05')}
          paragraph={translate('VP2Home_06')}
          backgroudColor="#FCB434"
          iconColor="white"
          icon="format_quote"
        />

      </div>
    </I18nPropvider>
  )
}
