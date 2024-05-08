import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Footer} from "./components/footer/Footer.tsx";
import ChatBot from "./components/ChatBot/ChatBot.tsx";
import {Navbar} from "./components/ui/NavBar/navBar.tsx";
import {AuthProvider} from './components/auth/context/AuthProvider.tsx';
import {CardsHop} from "./components/saleCards/CardsHop.jsx";
import {CardsNew} from "./components/New-cards/CardsNew.tsx";
import {Header} from "./components/Header/Header.tsx";

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <div className={"col"}>
                    <div className="td-container-wrapr">
                        <Navbar/>
                    </div>
                    <div className={"m-3"}>
                        <div>
                            <Header/>
                        </div>
                        <div className={"d-flex "}>
                            <div className={"row-cols-12"}>
                                <CardsHop/>
                            </div>
                            <div className={"container"}>
                                <App/>
                            </div>
                            <div className={"row-cols-12"}>
                                <CardsNew/>
                            </div>
                        </div>
                        <ChatBot/>
                        <div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)