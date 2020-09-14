import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Button,
} from 'reactstrap';
import samsung from '../assets/images/samsung.jpg'
import iphone from '../assets/images/iphone.jpg'
import xiaomi from '../assets/images/xiaomi.jpg'
import { useHistory } from 'react-router-dom';

const HomeCarousel = () => {

    const history = useHistory()
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            src: samsung,
            comment: <p className="HomeCarouselCommentFirst">Samsung</p>,
            button: <Button onClick={() => history.replace("/samsung")} color="primary">Samsung block</Button>
        },
        {
            src: iphone,
            comment: <p className="HomeCarouselCommentSecond">Iphone</p>,
            button: <Button onClick={() => history.replace("/iphone")} color="info">Iphone block</Button>
        },
        {
            src: xiaomi,
            comment: <p className="HomeCarouselCommentThird">Xiaomi</p>,
            button: <Button onClick={() => history.replace("/xiaomi")} color="primary">Xiaomi block</Button>
        }
    ];


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
                <img style={{ width: "1000px" }} src={item.src} alt={item.altText} />
                <CarouselCaption className="mb-1 text-center" captionHeader={item.comment} captionText = {item.button} />
            </CarouselItem>
        );
    });

    return (
        <div className="HomeMainCarousel">
            <div className="mt-5 text-center col-12">
                <h3 className="heading">Bestsellers</h3>
                <div className="heading-underline"></div>
            </div>
            {/* Carousel */}
            <Container className="ml-5">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl className="mr-5"direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Container>
        </div>
    );
}

export default HomeCarousel;