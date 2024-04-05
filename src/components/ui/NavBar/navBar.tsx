import {Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/Page1">page1</NavLink>
                    <NavLink className="nav-item nav-link" to="/Page2">page2</NavLink>
                    <NavLink className="nav-item nav-link" to="/Page3">page3</NavLink>
                </div>
            </div>
            <div className="navbar-collapse">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link " to="/login">
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}