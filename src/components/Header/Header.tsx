import  { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export const Header = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://peticiones.online/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.results)) // Accede a la propiedad 'results'
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-ofertas">
            <Slider
                className={'ofertaSlider'}
                {...settings}>
                {Array.isArray(products) && products.map(product => (
                    <div className="oferta-item" key={product.id}>
                        <img
                            style={{width: "20%", height: "20%", objectFit: "cover"}}
                            src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span>Precio: ${product.price}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};