import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img19 from  "../../../assets/Cuentadni-1024x459.webp";
import img35 from  "../../../assets/metodos-pago.png";
import img40 from  "../../../assets/Carousel/img (40).jpg";
import './CarouselFooter.css';

export const CarouselFooter =()=> {
    return (
        <div className="carousel">
            <MDBCarousel showControls showIndicators dark fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                >
                    <img src={img35} alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                >
                    <img src={img19} alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                >
                    <img src={img40} alt='...' />
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
}