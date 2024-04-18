import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img19 from  "../../../assets/Carousel/img (19).jpg/";
import img35 from  "../../../assets/Carousel/img (35).jpg/";
import img40 from  "../../../assets/Carousel/img (40).jpg/";

export const CarouselFooter =()=> {
    return (
        <div className="carousel ">
        <MDBCarousel showControls showIndicators dark fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
            >
                <img src={img35} alt='...' />
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
            >
                <img src={img19} alt='...' />
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
            >
                <img src={img40} alt='...' />
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselItem>
        </MDBCarousel>
        </div>
            );
}