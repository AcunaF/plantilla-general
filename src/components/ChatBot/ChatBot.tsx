import { useState, useEffect } from "react";
// @ts-ignore
import  { SearchModal } from "./modalChat/SearchModal";
import chatbotImage from "../../assets/chatbot/botimages1.png";
import "./ChatBot.css";

export const ChatBot = () => {
    const [showModal, setShowModal] = useState(false);
    const [jumpingBot, setJumpingBot] = useState(false);

    const handleChatBotClick = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleMessageSend = (message: any) => {
        console.log("Mensaje enviado al chatbot:", message);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setJumpingBot(true); // Activa la animación de salto
            setTimeout(() => {
                setJumpingBot(false); // Desactiva la animación después de 0.5 segundos
            }, 1500); // Duración total de la animación de salto (0.5s * 3 veces)
        }, 10000); // Ejecutar cada 10 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div onClick={handleChatBotClick} className="chatbot-button">
                <img
                    className={`chatbot-image ${jumpingBot ? 'jumping-bot' : ''} pulsating-bot`}
                    src={chatbotImage}
                    alt="chatbot"
                />
            </div>
            <SearchModal
                show={showModal}
                handleClose={handleCloseModal}
                handleMessageSend={handleMessageSend}
            />
        </>
    );
};

export default ChatBot;
