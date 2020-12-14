import React from 'react';
import css from './verticalPanels.module.css';

export default function VerticalPanels(props: {
  titleCard: any;
  paragraph: any;
  backgroudColor: any;
  iconColor: any;
  icon: any;
  linkPage: any;
}) {
  const {
    titleCard,
    paragraph,
    backgroudColor,
    iconColor,
    icon,
    linkPage,
  } = props;

  return (
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
        <a href={linkPage}>Read More {'>'}</a>
      </div>
    </div>
  );
}
