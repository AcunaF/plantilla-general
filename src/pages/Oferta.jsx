import {NavLink, useNavigate, useParams} from "react-router-dom";
import {PopoverTittle} from "../components/Popover/popoverTittle.tsx";
import {FaShoppingCart} from "react-icons/fa";

export const Oferta = () => {
    const { imageUrl } = useParams();
    const navigate = useNavigate();

    return (
        <div className="d-flex">
            <div className="d-flex flex-column col-2">
                <PopoverTittle/>
                <div>
                    <br></br>
                </div>
                <>
                    <div className="d-flex">
                        <img src={imageUrl} alt="Producto"/>
                        <p>{imageUrl}</p>
                        <button className="btn btn-primary" onClick={() => navigate("/")}>Volver</button>
                        <button className="btn btn-">
                            <NavLink
                                className="btn btn-success" to="/carrito">
                                <FaShoppingCart
                                    className="cart-icon"/></NavLink>
                        </button>
                    </div>
                </>
            </div>
        </div>
    )
}

