import {NavLink, useNavigate, useParams} from "react-router-dom";
import {PopoverTittle} from "../components/Popover/popoverTittle.tsx";
import {FaTrash, FaCheck, FaShoppingCart} from 'react-icons/fa';

import "./Oferta.css"

export const Oferta = () => {
    const eliminarProducto = (id) => {
        // Lógica para eliminar el producto con el ID proporcionado
        console.log('Eliminar producto con ID:', id);
    }

    const confirmarProducto = (id) => {
        // Lógica para confirmar el producto con el ID proporcionado
        console.log('Confirmar producto con ID:', id);
    }
    const {imageUrl} = useParams();
    const navigate = useNavigate();

    return (
        <>
            <br></br>
            <div className="d-flex">
                <div className="d-flex flex-column col-2">
                    <PopoverTittle/>
                </div>
                <div className="d-flex flex-column m-4">
                    <div className="container">
                        <h4>Historial de compras</h4>
                        <div className="box">
                            <div className="box-body">
                                <hr/>
                                <table className="table m-3">
                                    <thead>
                                    <tr>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">Producto 1</th>
                                        <td>$100</td>
                                        <td>2</td>
                                        <td>$200</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => eliminarProducto(1)}>
                                                <FaTrash/>
                                            </button>
                                            <button className="btn btn-success ml-2"
                                                    onClick={() => confirmarProducto(1)}>
                                                <FaCheck/>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Aquí puedes agregar más filas de productos */}
                                    </tbody>
                                </table>
                                <button className="btn btn-primary" onClick={() => navigate("/")}>Volver</button>
                                <button className="btn btn-"><NavLink className="btn btn-success" to="/carrito">
                                    <FaShoppingCart className="cart-icon"/>Carrito</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                );
            </div>
        </>
    )
}

