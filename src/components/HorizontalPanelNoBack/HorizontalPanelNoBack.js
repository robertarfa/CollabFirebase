import React from 'react'
import css from './horizontalPanelNoBack.module.css'
import Button from 'react-bootstrap/Button'

export default function HorizontalPanelNoBack(props) {
  const { h1paragraph, firstParagraph, txtButton } = props

  return (
    <section id="home-container" className={css.homeContainer}>
      <h1 className={`${css.pHome}`}> {h1paragraph}</h1>
      <h3>{firstParagraph}</h3>
      <a href='https://wa.me/393714156528' target='blank'>
        <Button className={css.button} variant="warning">
          {txtButton}
        </Button>
      </a>
    </section>
  )
}
