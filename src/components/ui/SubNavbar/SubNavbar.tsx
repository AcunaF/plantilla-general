import "./Navbar.css"
import {NavLink} from "react-router-dom";

export const SubNavbar = () => {
    return (
        <div className="subnav">
            <ul className="nav navbar-dark bg-dark nav-container">
                <small className="">
                    <NavLink className="nav-item nav-link" to="/ReactQuery">Ofertas</NavLink>
                </small>
                <li className="nav-item">
                    <a className="nav-link" href="#">Historial</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mis Compras</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" aria-disabled="true">Favoritos</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                       aria-expanded="false">Categorias</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Ofertas</a></li>
                        <li><a className="dropdown-item" href="#">Historial</a></li>
                        <li><a className="dropdown-item" href="#">Mis Compras</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                    </ul>
                </li>
                <li className="contacto-end">
                    <div className="row-gap-4">
                        <a className="nav-link" href="#" aria-disabled="true">Contacto</a>
                    </div>
                </li>
            </ul>
        </div>

    )
}