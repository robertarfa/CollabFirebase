import React, { useEffect, useState } from 'react'
import css from './verticalPanels.module.css';

import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";
import { useSelector } from 'react-redux'

export default function VerticalPanels(props) {
  const {
    titleCard,
    paragraph,
    backgroudColor,
    iconColor,
    icon,
    linkPage,
  } = props;

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  return (
    <I18nPropvider locale={locale} >
      <div className={css.myCard} style={{ background: backgroudColor }}>
        <div>
          <span
            className="material-icons"
            style={{ fontSize: '4em', color: iconColor }}
          >
            {icon}
          </span>
          <h4 className={css.litleTitle}>{titleCard}</h4>
          <p>{paragraph}</p>
          <a href={linkPage}>{translate('VPHome_03')} {'>'}</a>
        </div>
      </div>
    </I18nPropvider>
  );
}
