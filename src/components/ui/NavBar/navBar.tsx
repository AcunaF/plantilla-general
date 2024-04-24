import {Link, NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../../auth/context/AuthContext';
import {FaShoppingCart} from 'react-icons/fa';
import './stylesNav.css';
import imagenLogo from '../../../assets/company/logo.jpg';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();
    // @ts-ignore
    const {dataUser, setDataUser} = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(dataUser !== null);
    }, [dataUser]);

    const handleLogOut = () => {
        // Limpiar datos de usuario al cerrar sesión
        setDataUser(null);
        dataUser.email = '';
        setIsLoggedIn(false);
        alert('Has cerrado sesión con éxito');
        navigate('/Home'); // Redirigir a la página de cierre de sesión
    };
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="row d-flex align-items-center justify-content-end">
                    <img
                        alt="Logo"
                        src={imagenLogo}
                        width="50"
                        height="50"
                        className="rounded-circle"
                    />
                    </div>
                &nbsp;
                <small>
                    <Link className="navbar-brand" to="/">Home</Link>
                </small>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <div className="navbar-nav">
                        <small>
                            <NavLink className="nav-item nav-link" to="/Page1">Productos</NavLink>
                        </small>
                        <small>
                            <NavLink className="nav-item nav-link" to="/Page3">Vender</NavLink>
                        </small>
                        <small>
                            <NavLink className="nav-item nav-link" to="/ReactQuery">Ofertas</NavLink>
                        </small>
                        <div className="container-fluid">
                            <form className="d-flex" role="search">
                                <input className="form-control me-4" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <NavLink className="nav-item nav-link" to="/carrito"><FaShoppingCart
                        className="cart-icon"/></NavLink>
                </div>
                <div className="navbar-nav ml-auto">
                    <span>Bienvenido {dataUser ? dataUser.firstName : ''}</span>
                </div>
                <div className="m-3">
                    <div className="navbar-nav ml-auto ">
                        {isLoggedIn ? (
                            <NavLink className="nav-item nav-link" to="/profile">
                                {dataUser.email}
                            </NavLink>
                        ) : (
                            <small>

                                <NavLink className="nav-item nav-link" to="/login">
                                    Login
                                </NavLink>
                            </small>
                        )}
                        <small>
                            {isLoggedIn && (
                                <NavLink className="nav-item nav-link" to="/" onClick={handleLogOut}>
                                    LogOut
                                </NavLink>
                            )}
                        </small>
                    </div>
                </div>
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link" to="/register">Registrarse</NavLink>
                </div>
                <ul>
                </ul>
        </nav>
);
};
