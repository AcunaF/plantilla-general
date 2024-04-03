import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home";
import {Page1} from "../pages/Page1";
import {Page2} from "../pages/Page2";
import {Page3} from "../pages/Page3";
import {AltaUser} from "../pages/AltaUser.tsx";
import {Navbar} from "../components/ui/NavBar/navBar";
import { LoginForm} from "../Auth/Login/Login.tsx"

export const PageRoutes = () => {

    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*Rutas que solo se acceden estando logueado*/}
                    <Route path="/Page1" element={<Page1/>}/>
                    <Route path="/page2" element={<Page2/>}/>
                    <Route path="/page3" element={<Page3/>}/>
                    {/*Rutas login*/}
                    <Route path="/AltaUser" element={<AltaUser/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path={"*"} element={<h1>Not Found</h1>}/>
                </Routes>
            </div>
        </>
    )};