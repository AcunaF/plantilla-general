import {Modal, Button} from 'react-bootstrap';
import {useQuery} from "react-query";
import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {CartContext} from "../../Auth/context/CartContext.tsx";
import {useContext, useState} from "react";
import {FiSearch} from 'react-icons/fi';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import './AndesCard.css';

interface TarjetaProductoProps {
    imageUrl: string;
    price: number;
    originalPrice: number;
}

interface FavoriteProduct {
    imageUrl: string;
    price: number;
    category: string;
    name: string;
}


export const TarjetaProducto = ({}: TarjetaProductoProps) => {
    const [isFavoriteBody, isetIFavoriteBody] = useState<Record<string, boolean>>(() => {
        const savedFavorites = localStorage.getItem("favourites");
        return savedFavorites ? JSON.parse(savedFavorites) : {};
    });
    const [selectedProduct, setSelectedProduct] = useState(null);
    // @ts-ignore
    const {addToCart: addToCartContext} = useContext(CartContext);
    const handleClose = () => setSelectedProduct(null);
    const handleShow = (prod: any) => setSelectedProduct(prod);

    const toggleFavourite = (product: FavoriteProduct) => {
        const savedFavorites = localStorage.getItem("favorites");
        let favorites: FavoriteProduct[] = savedFavorites ? JSON.parse(savedFavorites) : [];

        // Verifica si el producto ya está en favoritos
        const index = favorites.findIndex(fav => fav.name === product.name);

        if (index !== -1) {
            // Si el producto ya está en favoritos, elimínalo
            favorites.splice(index, 1);
            Swal.fire(
                'Eliminado',
                'El producto ha sido eliminado de tus favoritos.',
                'success'
            );
        } else {
            // Si el producto no está en favoritos, agrégalo
            favorites.push(product);
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado a favoritos',
                showConfirmButton: false,
                timer: 1500
            });
        }

        // Guarda los productos favoritos actualizados en el almacenamiento local
        localStorage.setItem("favorites", JSON.stringify(favorites));

        // Actualiza el estado si es necesario
        isetIFavoriteBody({
            ...isFavoriteBody,
            [product.name]: !isFavoriteBody[product.name]
        });

        console.log("favoritos guardados en array ", favorites);
    };

    const getAndesCardPruducts = () => fetch('https://peticiones.online/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    const {data, error} = useQuery('products', getAndesCardPruducts)
    if (error) {
        // @ts-ignore
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    function addToCart(prod: any) {
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        });
        console.log("agregado al carrito", prod);
        // Recupera el carrito actual del localStorage
        const currentCart = localStorage.getItem("carrito");

        // Parsea el carrito a un array si existe, si no, inicializa un array vacío
        const cartItems = currentCart ? JSON.parse(currentCart) : [];

        // Agrega el nuevo producto al array
        cartItems.push(prod);

        // Convierte el array actualizado a JSON y guárdalo en el localStorage
        localStorage.setItem("carrito", JSON.stringify(cartItems));

        addToCartContext(prod);
        console.log("carrito", cartItems); // Imprime el array actualizado en la consola
        handleClose();
    }
    const handleAddToFavorite = () => {

    };

    // @ts-ignore
    return (
        <div className="container">
        <motion.div
            className="contenedorofert"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            {data.results.slice(0, 4).map((prod: any, index: number) => (
                <div className="andes-card" key={index}>
                    <img className="item-image" src={prod.image} alt={prod.name}/>
                    <div className="d-grid item-description">
                        <h5>{prod.name}
                            <button onClick={() => toggleFavourite(prod)} className="favourite-button">
                                {isFavoriteBody[prod.name] ? <FaHeart/> : <FaRegHeart/>}
                            </button>

                        </h5>

                        <h4>$ {prod.price}</h4>
                        <button
                            className="btn btn-outline-secondary" onClick={() => handleShow(prod)}>
                            <FiSearch className="cart-icon"/><b className="cart-icon"> Ver</b>
                        </button>
                        <button
                            onClick={() => addToCart(prod)}
                            className="btn btn-">
                            <NavLink className="btn btn-outline-secondary" to="/carrito">
                                <FaShoppingCart className="cart-icon"/><b className="cart-icon"> Al carrito! </b>
                            </NavLink>
                        </button>
                    </div>
                    <div className="modalOferta">
                        <Modal show={selectedProduct === prod} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{prod.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img src={prod.image} alt={prod.name}/>
                                <h4>$ {prod.price}</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <button onClick={() => addToCart(prod)}>Agregar al carrito</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            ))}
        </motion.div>
        </div>
    );
};