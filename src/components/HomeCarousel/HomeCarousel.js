import React, { useEffect, useState } from 'react'
import css from './carousel.module.css';
import Carousel from 'react-bootstrap/Carousel';

import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";
import { useSelector } from 'react-redux'

export function HomeCarousel() {

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  return (
    <I18nPropvider locale={locale} >
      <Carousel>
        <Carousel.Item className={css.carouselContainer}>
          <Carousel.Caption>
            <p className={css.carouselP}>
              {translate('CHome_01')}<span className={css.carouselSpan}>
                {translate('CHome_02')} </span>
              {translate('CHome_03')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={css.carouselContainer}>
          <Carousel.Caption>
            <p className={css.carouselP}>
              {translate('CHome_01')}<span className={css.carouselSpan}>
                {translate('CHome_02')} </span>
              {translate('CHome_04')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={css.carouselContainer}>
          <Carousel.Caption>
            <p className={css.carouselP}>
              {translate('CHome_01')}<span className={css.carouselSpan}>
                {translate('CHome_02')} </span>
              {translate('CHome_05')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </I18nPropvider>
  );
}
