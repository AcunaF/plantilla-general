import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Footer} from "./components/footer/Footer.tsx";
import ChatBot from "./components/ChatBot/ChatBot.tsx";
import {Navbar} from "./components/ui/NavBar/navBar.tsx"; // Importa el componente Navbar
import {AuthProvider} from './components/auth/context/AuthProvider.tsx';
import {CardsHop} from "./components/saleCards/CardsHop.jsx";
import {CardsNew} from "./components/New-cards/CardsNew.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <div className="td-container-wrapr">
                    <Navbar/>
                </div>
                <div className={"d-flex m-3"}>
                    <div className={"row-cols-12"}>
                        <CardsHop/>
                    </div>
                    <div className={"row"}>
                        <App/>
                    </div>
                    <div className={"row mr-5"}>
                        <div className={"col-10"}>
                            <CardsNew/>
                        </div>
                    </div>
                </div>
                <ChatBot/>
                <div>
                    <Footer/>
                </div>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)