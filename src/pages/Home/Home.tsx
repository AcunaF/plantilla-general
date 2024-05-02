import {useContext, useState} from "react";
import {ImageCarousel} from "./Carousel.tsx";
// @ts-ignore
import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter.jsx";
import {useQuery} from "react-query";
import {TarjetaProducto} from "./AndesCard.tsx";
import prn from "../../assets/Banners/PRNews.io4_.jpg";
import imagesblack from "../../assets/Banners/black-f.jpg";
import mcdonas from "../../assets/Banners/mcdonalds.png";
import Card from "react-bootstrap/Card";
import {FaHeart, FaRegHeart, FaShoppingCart} from "react-icons/fa";
import {PopoverTittle} from "../../components/Popover/popoverTittle.tsx";
import {CardsTitle} from "../../components/CardsTitle/CardsTitle.tsx";
import {CartContext} from "../../Auth/context/CartContext.tsx";

import "./Home.css";
import Swal from "sweetalert2";

export const Home = () => {
    const [isFavorite, setIsFavorite] = useState<Record<string, boolean>>(() => {
        const savedFavorites = localStorage.getItem("favourites");
        return savedFavorites ? JSON.parse(savedFavorites) : {};
    });
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

    const toggleFavourite = (name: string) => {
        if (isFavorite[name]) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¿Deseas eliminar este producto de tus favoritos?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    setIsFavorite({
                        ...isFavorite,
                        [name]: !isFavorite[name]
                    });
                    localStorage.setItem("favourites", JSON.stringify(isFavorite));
                    Swal.fire(
                        'Eliminado',
                        'El producto ha sido eliminado de tus favoritos.',
                        'success'
                    );
                }
            })
        } else {
            setIsFavorite({
                ...isFavorite,
                [name]: !isFavorite[name]
            });
            localStorage.setItem("favourites", JSON.stringify(isFavorite));
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado a favoritos',
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log("favorito",isFavorite);
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
                <div className="container-market">
                    {data.results.map((prod: any, index: number) => (
                        <div className="tarjeta" key={index}>
                            <img src={prod.image} alt={prod.name}/>
                            <h2>{prod.name}
                                <button onClick={() => toggleFavourite(prod.name)} className="favourite-button">
                                    {isFavorite[prod.name] ? <FaHeart/> : <FaRegHeart/>}
                                </button>
                            </h2>
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
