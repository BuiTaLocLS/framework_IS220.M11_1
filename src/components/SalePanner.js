import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const SalePanner = () => {
    return (<Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.yousport.vn/Media/Slides/sale-banner-th12-(1920-x-470-px).jpg?v=2"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.yousport.vn/Media/Slides/sale-banner-th12-(1920-x-470-px).jpg?v=2"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.yousport.vn/Media/Slides/sale-banner-th12-(1920-x-470-px).jpg?v=2"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>);

};

export default SalePanner;