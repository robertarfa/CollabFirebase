import React from 'react'
import css from './horizontalPanel.module.css'
import Button from 'react-bootstrap/Button'

export default function HorizontalPanel(props) {
  const { h1paragraph, firstParagraph, secParagraph, txtButton } = props

  return (
    <section id="home-container" className={css.homeContainer}>
      <h1 className={`${css.pHome} h1`}> {h1paragraph}</h1>
      <h3 className="h4">{firstParagraph}</h3>
      <h3 className="h4">{secParagraph}</h3>

      <a href='https://wa.me/393714156528' target='blank'>
        <Button className={css.button} variant="warning" >
          {txtButton}
        </Button>
      </a>

    </section>
  )
}
