import './Home.css';
import {MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../components/auth/context/AuthContext.tsx"; // requires a loader


export const ImageCarousel = () => {
    const [galeria, setGaleria] = useState([]);

    // @ts-ignore
    const { dataUser, setDataUser } = useContext(AuthContext);

    useEffect(() => {
        fetch (`http://localhost:5004/api/galeria`)
            .then((response) => response.json())
            .then((data) => setGaleria(data.items))
            .catch (err => console.log(`Error`,err));

    }, []);

    return (
        <MDBCarousel showControls showIndicators touch={false}>
            {galeria.slice(0, 10).map((item, index) => {
                const {imagen} = item;
                return (
                    <MDBCarouselItem itemId={index + 1} key={index}>
                        <img src={imagen} className='d-block w-100 carousel-image' alt='...'/>
                    </MDBCarouselItem>
                );
            })}
        </MDBCarousel>
    )
}