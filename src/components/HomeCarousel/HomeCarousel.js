import React from 'react';
import css from './carousel.module.css';
import Carousel from 'react-bootstrap/Carousel';

export function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item className={css.carouselContainer}>
        <Carousel.Caption>
          <p className={css.carouselP}>
            Collab<span className={css.carouselSpan}>Translation</span> has the
            experience and skills necessary to tackle just about every type of
            needs our customers may have.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={css.carouselContainer}>
        <Carousel.Caption>
          <p className={css.carouselP}>
            Collab<span className={css.carouselSpan}>Translation</span> is
            committed to taking your company to the top, especially when it
            comes to localizing your content.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={css.carouselContainer}>
        <Carousel.Caption>
          <p className={css.carouselP}>
            Collab<span className={css.carouselSpan}>Translation</span> has been
            one of the most trusted names in the industry. It will be a pleasure
            to collaborate with you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
