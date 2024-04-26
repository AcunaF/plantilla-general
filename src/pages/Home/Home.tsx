import {useContext} from "react";
import {ImageCarousel} from "./Carousel.tsx";
// @ts-ignore
import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter.jsx";
import "./Home.css";
import {useQuery} from "react-query";
import {TarjetaProducto} from "./AndesCard.tsx";
import prn from "../../assets/Banners/PRNews.io4_.jpg";
import imagesblack from "../../assets/Banners/black-f.jpg";
import pagos from "../../assets/Banners/itc_medios_pago_banner_original_2017_08_31_01.jpg";
import mcdonas from "../../assets/Banners/mcdonalds.png";
import Card from "react-bootstrap/Card";
import {FaShoppingCart} from "react-icons/fa";
// @ts-ignore
import {PopoverTittle} from "../../components/Popover/popoverTittle.tsx";
import {CardsTitle} from "../../components/CardsTitle/CardsTitle.tsx";
import {CartContext} from "../../Auth/context/CartContext.tsx";


export const Home = () => {
    // @ts-ignore
    const {addToCart, addToCartContext} = useContext(CartContext);
    const getProducts = () => fetch('https://peticiones.online/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    const {data, error} = useQuery('products', getProducts)
    if (error) {
        // @ts-ignore
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    function handleAddToCart(prod: any) {
        // @ts-ignore
        addToCart(prod);
         console.log("agregado al carrito", prod);
    }

    return (
        <>
            <div className="container">
                <div className="banner mt-1">
                    <img
                        style={{width: "100%", height: "40%", objectFit: "cover"}}
                        src={imagesblack} alt='...'/>
                </div>
                <div className="">
                    <PopoverTittle/>
                </div>

                <div className="cardsHomer">
                    <TarjetaProducto imageUrl="https://peticiones.online/api/products" price={0}
                                     originalPrice={0} name={" "}/>
                </div>
                <br/>
                <hr/>
                <div className="bannerBlack">
                    <img
                        style={{width: "100%", height: "30%", objectFit: "cover"}}
                        src={prn} alt='...'/>
                </div>

                <div className="CarouselFooter">
                    <CarouselFooter/>
                </div>
                <div>
                </div>
                <div className="contenedor-supermercado">
                    {data.results.map((prod: any, index: number) => (
                        <div className="tarjeta" key={index}>
                            <img src={prod.image} alt={prod.name}/>
                            <h2>{prod.name}</h2>
                            <p>{prod.description}</p>
                            <p>{prod.price}</p>
                            <p>{prod.category}</p>
                            <button className="btn btn-success" onClick={() => handleAddToCart(prod)}>
                                <FaShoppingCart/> &nbsp;
                                Agregar al carrito
                            </button>
                        </div>
                    ))}
                </div>
                <br/>
                <div className="bannerDNI">
                    <PopoverTittle/>
                </div>
                <br/>
                <div>
                    <ImageCarousel/>
                </div>
                <br/>
                < CardsTitle/>
                <Card.Img variant="top" src={mcdonas}/>

            </div>
        </>

    )
}
