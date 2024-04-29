import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const SubNavbar = ({ isLoggedIn }) => {
    return (
        <div className="subnav">
            <ul className="nav navbar-dark bg-dark nav-container mb-3">
                <small className="mb-1">
                    <NavLink className="nav-item nav-link" to="/ReactQuery">Ofertas</NavLink>
                </small>
                {isLoggedIn && (
                    <>
                        <small className="">
                            <NavLink className="nav-item nav-link" to="/historial">Historial</NavLink>
                        </small>
                        <small className="">
                            <NavLink className="nav-item nav-link" to="/miscompras">Mis compras</NavLink>
                        </small>
                        <small className="">
                            <NavLink className="nav-item nav-link" to="/favoritos">Favoritos</NavLink>
                        </small>
                    </>
                )}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                       aria-expanded="false">Categorias</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Ofertas</a></li>
                        <li><a className="dropdown-item" href="#">Historial</a></li>
                        <li><a className="dropdown-item" href="#">Mis Compras</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                    </ul>
                </li>
                <li className="contacto-end">
                    <div className="row-gap-4">
                        <NavLink className="nav-item nav-link" to="/contacto">Contacto</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    );
};
