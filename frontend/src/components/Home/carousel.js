// == Import : npm
import React from 'react';
import {
  CarouselProvider, Image, Slide, Slider,
} from 'pure-react-carousel';

// == Composant
const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={0.9}
    naturalSlideHeight={0.65}
    totalSlides={17}
    isPlaying
    interval={2500}
  >
    <Slider>
      <Slide index={0}>
        <Image src="/images/art.jpg" />
      </Slide>
      <Slide index={1}>
        <Image src="/images/computer.jpg" />
      </Slide>
      <Slide index={2}>
        <Image src="/images/culture.jpg" />
      </Slide>
      <Slide index={3}>
        <Image src="/images/ecology.jpg" />
      </Slide>
      <Slide index={4}>
        <Image src="/images/economy.jpg" />
      </Slide>
      <Slide index={5}>
        <Image src="/images/food.jpg" />
      </Slide>
      <Slide index={6}>
        <Image src="/images/games.jpg" />
      </Slide>
      <Slide index={7}>
        <Image src="/images/gardening.jpg" />
      </Slide>
      <Slide index={8}>
        <Image src="/images/health.jpg" />
      </Slide>
      <Slide index={9}>
        <Image src="/images/leisure.jpg" />
      </Slide>
      <Slide index={10}>
        <Image src="/images/news.jpg" />
      </Slide>
      <Slide index={11}>
        <Image src="/images/other.jpg" />
      </Slide>
      <Slide index={12}>
        <Image src="/images/politics.jpg" />
      </Slide>
      <Slide index={13}>
        <Image src="/images/science.jpg" />
      </Slide>
      <Slide index={14}>
        <Image src="/images/sport.jpg" />
      </Slide>
      <Slide index={15}>
        <Image src="/images/technology.jpg" />
      </Slide>
      <Slide index={16}>
        <Image src="/images/travel.jpg" />
      </Slide>
    </Slider>
  </CarouselProvider>
);

export default ImageCarousel;
