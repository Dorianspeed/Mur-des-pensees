import React from 'react';
import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel';

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={17}
    isPlaying={true}
    interval={2500}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="/images/art.jpg" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="/images/computer.jpg" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="/images/culture.jpg" />
      </Slide>
      <Slide tag="a" index={3}>
        <Image src="/images/ecology.jpg" />
      </Slide>
      <Slide tag="a" index={4}>
        <Image src="/images/economy.jpg" />
      </Slide>
      <Slide tag="a" index={5}>
        <Image src="/images/food.jpg" />
      </Slide>
      <Slide tag="a" index={6}>
        <Image src="/images/games.jpg" />
      </Slide>
      <Slide tag="a" index={7}>
        <Image src="/images/gardening.jpg" />
      </Slide>
      <Slide tag="a" index={8}>
        <Image src="/images/health.jpg" />
      </Slide>
      <Slide tag="a" index={9}>
        <Image src="/images/leisure.jpg" />
      </Slide>
      <Slide tag="a" index={10}>
        <Image src="/images/news.jpg" />
      </Slide>
      <Slide tag="a" index={11}>
        <Image src="/images/other.jpg" />
      </Slide>
      <Slide tag="a" index={12}>
        <Image src="/images/politics.jpg" />
      </Slide>
      <Slide tag="a" index={13}>
        <Image src="/images/science.jpg" />
      </Slide>
      <Slide tag="a" index={14}>
        <Image src="/images/sport.jpg" />
      </Slide>
      <Slide tag="a" index={15}>
        <Image src="/images/technology.jpg" />
      </Slide>
      <Slide tag="a" index={16}>
        <Image src="/images/travel.jpg" />
      </Slide>
    </Slider>
  </CarouselProvider>
);

export default ImageCarousel;
