import React from 'react';
import Carusel1 from '../img/Carusel1.jpg';
import Carusel3 from '../img/Carusel3.jpg';
import Carusel4 from '../img/Carusel4.jpg';
import { Carousel, Container } from 'react-bootstrap';


const CarouselComponent = () => {
    return (
        <Container fluid>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src={Carusel1}                           
                            class="d-block w-100"
                            alt="First slide"
                            title="Carousel1"
                        />
                    </div>
                    {/*<Carousel.Caption>
                        <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }}>HomeWork</h3>
                    </Carousel.Caption>*/}
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src={Carusel4}
                            class="d-block w-100"
                            alt="Second slide"
                            title="Carousel2"
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4 "
                            src={Carusel3}                            
                            class="d-block w-100"
                            width={721}
                            alt="Third slide"
                            title="Carousel2"
                        />
                    </div>
                </Carousel.Item>

            </Carousel>

        </Container>
    );

}

export default CarouselComponent;