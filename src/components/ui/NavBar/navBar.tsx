import {Link, NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../../auth/context/AuthContext';
import {FaShoppingCart} from 'react-icons/fa';
import './stylesNav.css';
import imagenLogo from '../../../assets/company/logo.jpg';

export const Navbar = () => {
    const navigate = useNavigate();
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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
            <div className="col-1 d-flex align-items-center justify-content-center">
                <img
                    alt="Logo"
                    src={imagenLogo}
                    width="50"
                    height="50"
                    className="rounded-circle mt-1 mb-1"
                />
            </div>
            &nbsp;
            <small>
                <Link className="navbar-brand" to="/">Home</Link>
            </small>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <small>
                            <NavLink className="nav-item nav-link" to="/Page1">Productos</NavLink>
                        </small>
                        <small>
                            <NavLink className="nav-item nav-link" to="/Page3">Destacados</NavLink>
                        </small>
                        <small>
                            <NavLink className="nav-item nav-link" to="/ReactQuery">Ofertas</NavLink>
                        </small>
                        <small className="row-col">
                            <NavLink className="nav-item nav-link" to="/Page2">Perfil Empleado</NavLink>
                        </small>
                    </div>
                </div>
                <div className="navbar">

                    <NavLink className="nav-item nav-link" to="/carrito"><FaShoppingCart
                        className="cart-icon"/></NavLink>
                </div>
                <div className="">
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
        </nav>
)
}
