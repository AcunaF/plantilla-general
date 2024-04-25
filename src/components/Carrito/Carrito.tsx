import {useState} from 'react';
import {FaArrowLeft, FaMoneyBillWave, FaShoppingCart, FaTrashAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

import './Carrito.css';

export const Carrito = () => {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    const handleVolver = () => {
        navigate("/");
    }
    const handleCompra = () => {
        navigate("/");
    }

    const clearCart = () => {
        alert('Su carrito esta vacio');
        setItems([]);
    };
    function handlePagar() {
        alert('Gracias por su compra');
        setItems([]);
    }

    function removeItem(index: number) {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }
    function calculateTotal() {
        return items.reduce((total, item) => total + item, 0);
    }

    return (
        <div className="carrito-container">
            <h2 className="carrito-title">Carrito de Compras</h2>
            <div className="carrito-header">
                <FaShoppingCart className="cart-icon" />
            </div>
            <table className="carrito-items">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                        <td><FaTrashAlt className="delete-icon" onClick={() => removeItem(index)} /></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="carrito-footer">
                <button className="clear-cart-button" onClick={clearCart}><FaTrashAlt /> Vaciar Carrito</button>
                <br />
                <button className="comprar-button" onClick={handleCompra}>Agregar al carrito</button>
                <br />
                <button className="volver-button" onClick={handleVolver}><FaArrowLeft /> Volver</button>
                <br />
                <br />
                <div>
                    <button className="volver-button" onClick={handlePagar}><FaMoneyBillWave /> Pagar</button>
                    <span className="total-label">Total:</span>
                    <span className="total-amount">${calculateTotal()}</span>
                </div>
            </div>
        </div>
    );
};