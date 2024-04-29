import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home.tsx";
import {Page1} from "../pages/Page1/Page1.tsx";
import {Page2} from "../pages/Page2";
import {Page3} from "../pages/Page3";
import {AltaUser} from "../pages/AltaUser.tsx";
import {LoginForm} from "../Auth/Login/Login.tsx"
import {AuthProvider} from "../components/auth/context/AuthProvider.tsx";
import {FavoriteList} from "../components/FavoriteLIst/FavoriteList.tsx";
import {TrakerList} from "../components/TrakerList/TrakerList.tsx";
import {Followers} from "../components/Follower/Followers.tsx";
import {HappinessHistory} from "../components/history/HappinessHistory.tsx";
import {Print} from "../components/print/print.tsx";
import {ChatBot} from "../components/ChatBot/ChatBot.tsx";
import {Search} from "../components/Search/Search.tsx";
import {ReactQuery} from "../pages/Query/ReactQuery.tsx";
import {Carrito} from "../components/Carrito/Carrito.tsx";
import {Contacto} from "../pages/Contacto.jsx";
import "../components/ui/NavBar/stylesNav.css";
import "./Routes.css"
import {Navbar} from "../components/ui/NavBar/navBar.tsx";
// @ts-ignore
import {Register} from "../pages/Register.jsx";
// @ts-ignore
import {Oferta} from "../Pages/Oferta.jsx";
import {MediosDePago} from "../components/MediosDePago/MediosDePago.tsx"
import {CategoryFiles} from "../components/Categorias/CategoryFiles.tsx";
import {PopoverTittle} from "../components/Popover/popoverTittle.tsx";

export const PageRoutes = () => {

    return (
        <AuthProvider>
            <div>
                <Navbar/>
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*Rutas que solo se acceden estando logueado*/}
                    <Route path="Page1" element={<Page1/>}/>
                    <Route path="page2" element={<Page2/>}/>
                    <Route path="page3" element={<Page3/>}/>
                    <Route path={"ReactQuery"} element={<ReactQuery/>}/>
                    {/*Rutas login*/}
                    <Route path="AltaUser" element={<AltaUser/>}/>
                    <Route path={"login"} element={<LoginForm/>}/>
                    {/*Employe */}
                    <Route path={"favorites"} element={<FavoriteList/>}/>
                    <Route path={"flollowers"} element={<Followers/>}/>
                    <Route path={"tracker"} element={<TrakerList/>}/>
                    <Route path={"history"} element={<HappinessHistory/>}/>
                    <Route path={"print"} element={<Print/>}/>
                    <Route path={"bot"} element={<ChatBot/>}/>
                    <Route path={'search'} element={<Search/>}/>
                    <Route path={"carrito"} element={<Carrito/>}/>
                    <Route path={"register"} element={<Register/>}/>
                    <Route path={"oferta"} element={<Oferta/>}/>
                    <Route path={"pago"} element={<MediosDePago/>}/>
                    <Route path={"contacto"} element={<Contacto/>}/>
                    <Route path={"*"} element={<h1>Not Found</h1>}/>
                    {/**/}
                    <Route path={"categorias"} element={<CategoryFiles/>}/>
                    <Route path={"popover"} element={<PopoverTittle />} />
                </Routes>
            </div>
        </AuthProvider>
    );
};