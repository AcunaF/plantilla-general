import {useContext, useState,} from 'react';
import {FaArrowLeft, FaMoneyBillWave, FaShoppingCart, FaTrashAlt} from 'react-icons/fa';
import {NavLink, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

import './Carrito.css';
import {CartContext} from "../../Auth/context/CartContext.tsx";

export const Carrito = () => {
    const navigate = useNavigate();
    // @ts-ignore
    const {addToCart} = useContext(CartContext);

    const [items, setItems] = useState([]);

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
                setItems([]);
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
        setItems([]);
    }


    const handleAddToCart = (item: any) => {
        console.log("carrito", item);
        addToCart(item);
    }

    function removeItem(index: number) {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        Swal.fire({
            icon: 'info',
            title: 'Producto eliminado',
            text: 'Has eliminado un producto de tu carrito',
            confirmButtonText: 'Entendido'
        });
    }

    function calculateTotal() {
        return items.reduce((total, item) => total + item, 0);
    }

    return (
        <div className="carrito-container">
            <h2 className="carrito-title">Carrito de Compras</h2>
            <div className="carrito-header">
                <FaShoppingCart className="cart-icon"/>
            </div>
            <table className="carrito-items">
                <thead>
                <tr>
                    <th>Product</th>
                    <br/>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                        <td><FaTrashAlt className="delete-icon" onClick={() => removeItem(index)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="carrito-footer">
                <button className="clear-cart-button" onClick={clearCart}><FaTrashAlt/> Vaciar Carrito</button>
                <button onClick={() => handleAddToCart(prod)}>Agregar al carrito</button>
                <button className="volver-button" onClick={handleVolver}><FaArrowLeft/> Volver</button>

                <NavLink className="volver-button"
                            to="/pago"
                            onClick={handlePagar}><FaMoneyBillWave/> Pagar</NavLink>

                <div className="row col-3">
                    <span className="total-label">Total:</span>
                    <span className="total-amount">${calculateTotal()}</span>
                </div>

            </div>
        </div>
);
};
