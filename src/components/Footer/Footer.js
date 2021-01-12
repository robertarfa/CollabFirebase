import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { CardsContainer, LogoContainer, AdressContainer, LineAdressContainer } from './styled'
import abrates from './../../assets/abrates.webp'
import translated from './../../assets/translated_logo_primary.webp'
import ata from './../../assets/ATA_logo_web_corp.webp'
// import { FormattedMessage } from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";

const Footer = () => {

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  return (
    <I18nPropvider locale={locale} >
      <CardsContainer>
        <LogoContainer>
          <img src={abrates} alt={"Abrates"} />
        </LogoContainer>

        <LogoContainer>
          <img src={translated} alt={"Abrates"} />
        </LogoContainer>

        <LogoContainer>
          <img src={ata} alt={"Abrates"} />
        </LogoContainer>

      </CardsContainer>

      <AdressContainer>
        <LineAdressContainer>
          Headquarter

          </LineAdressContainer>
        <LineAdressContainer>
          Perugia (PG) - Italy

          </LineAdressContainer>
      </AdressContainer>
    </I18nPropvider >
  );
};

export default Footer;
