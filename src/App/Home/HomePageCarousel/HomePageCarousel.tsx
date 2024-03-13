import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";
import {Image} from "react-bootstrap";

import './HomePageCarousel.css'

export function HomePageCarousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image
                        src="./stationery.jpg"
                    />
                    <Carousel.Caption>
                        <h1>Study Hard</h1>
                        <h2>Study hard, master the art of confidently knowing nothing.</h2>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image
                        src="./fake_info.jpg"
                    />
                    <Carousel.Caption>
                        <h1>Learn Ficticious Content</h1>
                        <h2>Believe everything you think; question nothing you read. Enlightenment through sheer gullibility</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}