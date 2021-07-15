import React from 'react'
import css from './buttonRequestAQuote.module.css'
import Button from 'react-bootstrap/Button'

export default function ButtonRequestAQuote() {
  return (
    <a href='https://wa.me/393714156528' target='blank'>
      <Button className={css.button} variant="warning" >
        Request a quote
        </Button>
    </a>
  )
}
