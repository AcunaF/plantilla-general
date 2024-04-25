import { Modal, Button } from 'react-bootstrap';
import {useQuery} from "react-query";
import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {CartContext} from "../../Auth/context/CartContext.tsx";
import {useContext, useState} from "react";
import './AndesCard.css';

interface TarjetaProductoProps {
    imageUrl: string;
}
export const TarjetaProducto = ({}: TarjetaProductoProps) => {

    const [show, setShow] = useState(false);
    // @ts-ignore
    const { addToCart: addToCartContext } = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        console.log("agregado al carrito",prod);
        addToCartContext(prod);
        handleClose();
    }

    return (
        <div className="contenedorofert">
            {data.results.slice(0, 4).map((prod: any, index: number) => (
                <div className="andes-card" key={index}>
                    <img className="item-image" src={prod.image} alt={prod.name}/>
                    <div className="item-description">
                        <h2>{prod.name}</h2>
                        <h4>$ {prod.price}</h4>
                        <button className="btn" onClick={handleShow}>
                            Ver más
                        </button>
                        <button className="btn btn-">
                            <NavLink className="btn btn-success" to="/carrito">
                                <FaShoppingCart className="cart-icon"/>
                            </NavLink>
                        </button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
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
            ))}
        </div>
    );
};