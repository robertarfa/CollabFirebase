import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {
  CardsContainer, LogoContainer, AdressContainer, LineAdressContainer,
  LineAdressNoBoldContainer, IconContainer, FooterContainer, Link
} from './styled'
import abrates from './../../assets/abrates.webp'
import translated from './../../assets/translated_logo_primary.webp'
import ata from './../../assets/ATA_logo_web_corp.webp'
// import { FormattedMessage } from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
// import translate from "../../i18nProvider/translate";

const Footer = () => {

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  const redirect = () => {
    window.location.href = "mailto:info@collabtranslation.com";
  }


  return (
    <I18nPropvider locale={locale} >
      <FooterContainer>
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

          <LineAdressNoBoldContainer>

            <IconContainer>
              <span
                className="material-icons"
                style={{ fontSize: '1em', color: 'green' }}
              >
                phone
            </span>
            </IconContainer>

            <Link href='https://wa.me/393714156528' target='blank'>
              +39 3714156528
            </Link>

          </LineAdressNoBoldContainer>

          <LineAdressNoBoldContainer onClick={() => redirect()}>

            <IconContainer>
              <span
                className="material-icons"
                style={{ fontSize: '1em', color: 'red' }}
              >
                alternate_email
            </span>
            </IconContainer>

          info@collabtranslation.com
          </LineAdressNoBoldContainer>

          <LineAdressNoBoldContainer marginTop={'30px'}>
            © 2020 by CollabTranslation. VAT Number IT09459831211
          </LineAdressNoBoldContainer>

        </AdressContainer>
      </FooterContainer>
    </I18nPropvider >
  );
};

export default Footer;
