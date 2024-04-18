import React, {useEffect, useState} from "react";
import { Modal, Button } from "react-bootstrap";
import "./SearchModal.css";

export const SearchModal = ({ show, handleClose, handleMessageSend }) => {
    const [conversation, setConversation] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [nombre, setNombre] = useState('');
    let salute;
    const euro = "https://www.dolarhoy.com/euro";
    const dolar = "https://www.dolarhoy.com/";

    useEffect(() => {
        setTimeout(() => {
            handleReset();
        }, 10000);
    }, []);


    const responses = {
        greeting: "¡Hola! ¿Cuál es tu nombre?", /*contestar con el nombre${nombre}*/
        farewell: "¡Adiós! Espero haber sido de ayuda.",
        default: "Lo siento, no entiendo. ¿Puedes repetirlo?",
        HowCanIHelpYou : {
            a: "¿Querés saber el clima?",
            b: "¿Querés saber la cotización del dólar?",
            c: "¿Querés saber la cotización del euro?",
            d: "¿Tenés problemas con tu pareja?",
            e: "¿Estás perdido en la vida y no sabés qué hacer?",
            f :"¿Necesitas ayuda?",
            g: "¿Querés un cafesito la putita que te pario??"
        }
    };

    const handleReset = () => {
        setConversation([]);
        setNombre('');
        setMessageInput('');
    }

    const handleIncomingMessage = (message) => {
        let response;
        let help = responses.HowCanIHelpYou;

        if (message.toLowerCase().includes("soy" || "me llamo" || "mi nombre es" || 'nombre ' || ' '  )) {
            let nombreFromMessage = message.split("soy")[1].trim();
            setNombre(nombreFromMessage);
            salute = `¡Un gusto conocerte, ${nombreFromMessage}! ¿En qué puedo ayudarte,  escribe AYUDA para mas informacion? `;
            response = salute;
        }
        else if (message.toLowerCase().includes("soy")) {
            let nombreFromMessage = message.split("soy")[1].trim();
            setNombre(nombreFromMessage);
            salute = `¡Un gusto conocerte, ${nombreFromMessage}!\n¿En qué puedo ayudarte?\n`;
        }
        //opciones de ayuda
        else if (message.toLowerCase().includes("ayuda")) {
            const aux = `${help.a}\n${help.b}\n${help.c}\n${help.d}\n${help.e}`;
            response = aux.toString()
            console.log(response)
        }
        else if (message.toLowerCase().includes("clima")) {
            response = "El clima es soleado";
        }
        else if (message.toLowerCase().includes("dolar")) {
            response = "La cotización del dólar es de $100, podes ver otras cotizaciones en " + dolar;
        }
        else if (message.toLowerCase().includes("euro")) {
            response = `La cotización del euro es de $120, podes fijarte otras cotizaciones en ${euro}`;}
        else if (message.toLowerCase().includes("problemas")) {
            response = "¿Querés que te recomiende un terapeuta? CORNUDO";
        }
        else if (message.toLowerCase().includes("perdido")) {
            response = "¿Querés que te recomiende un terapeuta? CORNUDO";
        }
        else if (message.toLowerCase().includes("ayuda")) {
            response = "¿En qué puedo ayudarte?";
        }
        else if (message.toLowerCase().includes("hola")) {
            response = "¡Hola! ¿Cuál es tu nombre?";
        }
        else if (message.toLowerCase().includes("cafesito")) {
            response = "¡Aguante el café! ¿Querés que te recomiende un lugar para tomarlo asi te vas y me quedo con tu vieja?";
        }
        else if (!nombre) {
            setNombre(message); // Capturar el nombre del usuario
            response = responses.greeting;
        }
        else if (message.toLowerCase().includes("adios")) {
            handleReset()
            setConversation([]); // Reiniciar la conversación
            setNombre(''); // Reiniciar el nombre del usuario
            response = responses.farewell;
            // No cerrar el modal directamente, sino solo después de procesar el mensaje
        } else {
            response = responses.default;
        }
        // Actualizar la conversación sin almacenarla en un estado persistente
        setConversation(prevConversation => [
            ...prevConversation,
            { text: message, sender: "user" },
            { text: response, sender: "bot" }
        ]);
        console.log(conversation);
        console.log(response)
    }

    const handleMessageChange = (event) => {
        setMessageInput(event.target.value);
    }

    const handleSendClick = () => {
        handleMessageSend(messageInput);
        handleIncomingMessage(messageInput);
        setMessageInput('');
    };

    const handleModalClose = () => {
        handleClose(); // Cerrar el modal después de procesar el mensaje
    }

    return (
        <Modal show={show} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Hola, ¿en qué puedo ayudarte, escribe ayuda para mas informacion?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Mostrar la conversación */}
                {conversation.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
                {/* Campo de entrada de texto */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="Escribe tu mensaje..."
                    value={messageInput}
                    onChange={handleMessageChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                        onClick={handleModalClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSendClick}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
