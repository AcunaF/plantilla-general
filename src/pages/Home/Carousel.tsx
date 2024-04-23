import './Home.css';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

export const ImageCarousel = () => {
    const [galeria, setGaleria] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5005/api/galeria`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo obtener la galería de imágenes");
                }
                return response.json();
            })
            .then((data) => setGaleria(data.items.slice(0, 10)))
            .catch(err => console.error('Error al obtener la galería:', err));
    }, []);

    return (
        <MDBCarousel showControls showIndicators touch={true}>
            {galeria.map((item, index) => {
                if (index < 10) {
                    return (
                        <MDBCarouselItem itemId={index + 1} key={index}>
                            <img src={item.imagen} className='d-block w-100 carousel-image' alt={`Imagen ${index + 1}`} />
                        </MDBCarouselItem>
                    );
                } else {
                    return null;
                }
            })}
        </MDBCarousel>
    );
};
