import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import carousel2 from  "../../../assets/Carousel/tienda-de-ropa-de-moda-con-banner-shop-interior-ropa-en-perchas-y-.jpg";
import carousel from  "../../../assets/Carousel/preview-page0.jpg";
import carouse2 from  "../../../assets/Carousel/ad-banner.webp";
import "./CarouselN.css";
export const CarouselNavbar =()=> {
    return (

        <div className="carousel">
            <div className="container">
            <MDBCarousel showControls showIndicators dark fade>
                <MDBCarouselItem
                    className='w-75 d-block'
                    itemId={1}
                >
                    <img src={carousel2} alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-75 d-block'
                    itemId={2}
                >
                    <img src={carousel} alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-75 d-block'
                    itemId={3}
                >
                    <img src={carouse2} alt='...' />
                </MDBCarouselItem>
            </MDBCarousel>
            </div>
        </div>
    );
}
