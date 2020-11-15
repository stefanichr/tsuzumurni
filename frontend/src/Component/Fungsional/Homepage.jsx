import { Jumbotron, Button, Carousel, CarouselItem, CarouselControl,CarouselIndicators, CarouselCaption, Container,Nav,
  NavItem,
  NavLink,} from 'reactstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
      src: 'https://i.ibb.co/hLnCkVp/Whats-App-Image-2020-09-20-at-20-41-45.jpg',
      altText: 'Tsuzu',
      caption: 'Tsuzu'
    },
    {
      src: 'https://i.ibb.co/dWtdzzz/Whats-App-Image-2020-09-20-at-20-41-46.jpg',
      altText: 'Ketan Susu',
      caption: 'Ketan Susu'
    },
    {
      src: 'https://i.ibb.co/pK0XJsJ/Whats-App-Image-2020-09-20-at-20-41-47.jpg',
      altText: 'Roti Asin',
      caption: 'Roti Asin'
    },
    {
      src: 'https://i.ibb.co/P9TxT7h/Whats-App-Image-2020-09-20-at-20-41-47-1.jpg',
      altText: 'Canai',
      caption: 'Canai'
    },
    {
      src: 'https://i.ibb.co/cXHWVYr/Whats-App-Image-2020-09-20-at-20-41-51.jpg',
      altText: 'Pisang Bakar',
      caption: 'Pisang Bakar'
    },
    {
      src: 'https://i.ibb.co/4TxTcjm/Whats-App-Image-2020-09-20-at-20-41-52.jpg',
      altText: 'Roti Bakar Manis',
      caption: 'Roti Bakar Manis'
    },
    {
      src: 'https://i.ibb.co/hXg3Kb8/Whats-App-Image-2020-09-20-at-20-41-52-1.jpg',
      altText: 'Indomie & Camilan',
      caption: 'Indomie & Camilan'
    },{
      src: 'https://i.ibb.co/f2XW3m2/Whats-App-Image-2020-09-20-at-20-41-53.jpg',
      altText: 'Minuman',
      caption: 'Minuman'
    },
  ];
  
const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
        
      );
    });
  
    return (
    <Container>
      
        <Jumbotron className="d-block w-100">
                    <h1 className="display-5 text-center">Selamat Datang di Tsuzu Murni</h1>
                    <p className="lead text-center">Yuk order makanan & minuman kesukaan kalian!! </p>
                    <hr className="my-2" />
                    <p className="text-center">Tersedia bermacam makanan dan minuman loh! </p>
                    <NavLink className="text-center" href="/produk">Order</NavLink>
                   
        </Jumbotron>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Container>
    );
  }
  
  export default Example;
