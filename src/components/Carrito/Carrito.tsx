import {useContext, useEffect, useState,} from 'react';
import {FaArrowLeft, FaCheckCircle, FaMoneyBillWave, FaTrashAlt} from 'react-icons/fa';
import {NavLink, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {CartContext} from "../../Auth/context/CartContext.tsx";

import './Carrito.css';
import {Card, Col, Row} from "react-bootstrap";

export const Carrito = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        // Recupera los productos del localStorage cuando se carga la página
        const savedCart = localStorage.getItem('carrito');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);
    console.log("carrito guardado", cartItems);

    const navigate = useNavigate();
    // @ts-ignore
    const {addToCart} = useContext(CartContext);


    const handleVolver = () => {
        navigate("/");
    }

    const clearCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Vas a vaciar tu carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Carrito vaciado',
                    'Has vaciado tu carrito',
                    'success'
                )
                setCartItems([]);
            }
        })
    };

    function handlePagar() {
        navigate('/pago');
        Swal.fire({
            icon: 'question',
            title: 'Medio de pago',
            text: ' Elije el medio de pago que prefieras',
            confirmButtonText: 'Ver medios de pago'
        });
        setCartItems([]);
    }

    function removeItem(index: any[]) {
        const updatedItems = [...cartItems];
        localStorage.removeItem('carrito')
        updatedItems.splice(index, 1);
        setCartItems(updatedItems);
        Swal.fire({
            icon: 'info',
            title: 'Producto eliminado',
            text: 'Has eliminado un producto de tu carrito',
            confirmButtonText: 'Entendido'
        });
    }
    return (
        <div className="cols-cols-3">
            <h2 className="carrito-title">Carrito de Compras</h2>
            <Row
                xs={1} md={3}
                className="table">

                {cartItems.map((item, index) => (
                    <Col
                        className="cards-container"
                        key={index}>
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src={item.image} alt={item.name}/>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text> Valor $ {item.price}</Card.Text>
                                <Card.Text>Cantidad {item.quantity}</Card.Text>
                                <Card.Text> Total $ {item.price * item.quantity}</Card.Text>
                                <button className="remove-item-button" onClick={() => removeItem(index)}>
                                    <FaTrashAlt/> Borrar Item
                                </button>
                                <button className="add-item-button">
                                    <FaCheckCircle/> Seleccionar
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="carrito-footer">
                <button className="clear-cart-button" onClick={clearCart}><FaTrashAlt/> Vaciar Carrito</button>
                <button className="volver-button" onClick={handleVolver}><FaArrowLeft/> Volver</button>
                <NavLink className="volver-button"
                         to="/pago"
                         onClick={handlePagar}><FaMoneyBillWave/> Pagar</NavLink>
                <div className="row col-3">
                    <span className="total-label">Total: {cartItems.price}</span>
                </div>

            </div>
        </div>
    );
};
