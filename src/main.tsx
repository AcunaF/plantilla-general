import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Footer} from "./components/footer/Footer.tsx";
import ChatBot from "./components/ChatBot/ChatBot.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div>
            </div>
            <div className="td-container-wrapr">
                <App/>
            </div>
            <ChatBot/>
            <div>
                <Footer/>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
)
