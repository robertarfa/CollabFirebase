import React from 'react'
import css from './verticalPanelsV2.module.css'

export default function VerticalPanelsV2(props) {
  const { titleCard, paragraph, backgroudColor, iconColor, icon } = props

  return (
    <div className={css.myCard} style={{ background: backgroudColor }}>
      <div>
        <h4 className={css.litleTitle}>{titleCard}</h4>
        <p>{paragraph}</p>

        <div className={css.icon}>
          <span
            className="material-icons"
            style={{ fontSize: '4em', color: iconColor }}
          >
            {icon}
          </span>
        </div>
      </div>
    </div>
  )
}
