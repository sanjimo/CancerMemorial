import React from 'react';
import img1 from '../../../images/banner1.jpg';
import img2 from '../../../images/banner2.jpg';
import {Carousel} from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src={img1}
                    alt="first slide"
                    />
                    <Carousel.Caption>
                       <h3 className="text-white fw-bold">Cancer Memorial</h3>
                       <p className="text-white fw-bold">Saskatoon, Saskatchewan , Canada</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="400"
                    src={img2}
                    alt="second slide"
                   />
                <Carousel.Caption>
                    <h3 className="text-white fw-bold">Cancer Memorial</h3>
                    <p className="text-white fw-bold">Saskatoon, Saskatchewan , Canada</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;