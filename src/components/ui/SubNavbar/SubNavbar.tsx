import { NavLink, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Nav, NavDropdown} from "react-bootstrap";

// @ts-ignore
export const SubNavbar = ({ isLoggedIn }) => {
    const categories = ["Vehiculos", "Inmuebles", "Supermercados", "Tecnologia", "Hogar y Muebles", "Electrodomesticos", "Herramientas", "Deportes y fitness", "accesorios para vehiculos", "Juegos y juguetes", "bebes"]; // Tus categorías
    const navigate = useNavigate();

    return (
        <div className="subnav">
            <Nav className="nav navbar-dark bg-dark nav-container mb-3">
                <small className="mb-1">
                    <NavLink className="nav-item nav-link" to="/ReactQuery">Ofertas</NavLink>
                </small>
                {isLoggedIn && (
                    <>
                        <small className="">
                            <NavLink className="nav-item nav-link" to="/history">Historial</NavLink>
                        </small>
                        <small className="">
                            <NavLink className="nav-item nav-link" to="/oferta">Mis compras</NavLink>
                        </small>
                        <small className="">
                            <NavLink className="nav-item nav-link" to="/favoritos">Favoritos</NavLink>
                        </small>
                    </>
                )}
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Categorias"
                    menuVariant="dark"
                >
                    {categories.map((category, index) => (
                        <NavDropdown.Item
                            key={index}
                            onClick={() => navigate('/categorias', {state: {categoryName: category}})}
                        >
                            {category}
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <li className="contacto-end">
                    <div className="row-gap-4">
                        <NavLink className="nav-item nav-link" to="/contacto">Contacto</NavLink>
                    </div>
                </li>
            </Nav>
        </div>
    );
};
