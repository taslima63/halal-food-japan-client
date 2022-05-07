import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../../images/banner/banner11.jpg';
import banner2 from '../../../../images/banner/banner2.jpg';
import banner3 from '../../../../images/banner/banner3.jpg';
import banner4 from '../../../../images/banner/banner4.jpg';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                </div>
                {/* <Carousel.Caption>
                    <div className="carousal-caption mt-2">
                        <h3 style={{ color: '#606060FF' }}>Here Starts Your Positivity</h3>
                        <p className='text-dark ' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>Underneath all I design lies the solid belief that beauty is a positive force.</p>
                    </div>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                </div>
                {/* <Carousel.Caption>
                    <div className="carousal-caption">
                        <h3 style={{ color: '#606060FF' }}>A Room Is Not A Room Without Natural Light.</h3>
                        <p className='text-dark ' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>A house is much more than a mere shelter—it should lift us emotionally and spiritually.</p>
                    </div>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="third slide"
                    />

                </div>

                {/* <Carousel.Caption>
                    <div className="carousal-caption">
                        <h3 style={{ color: '#606060FF' }}>Never Seen Elegance Go Out of Style.</h3>
                        <p className='text-dark' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>
                            For a house to be successful, the objects in it must communicate with one another, respond and balance one another.
                        </p>
                    </div>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="fourth slide"
                    />

                </div>

                <Carousel.Caption>
                    <div className="carousal-caption">
                        {/* <h3 style={{ color: '#606060FF' }}h3> */}
                        <p className='text-dark' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>

                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Banner;