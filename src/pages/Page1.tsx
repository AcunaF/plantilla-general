import {useState} from "react";
import './page1Style.css';
import Accordion from "react-bootstrap/Accordion";

export const Page1 = () => {

    const [state, setState] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
    });
    const {counter1, counter2, counter3} = state;

    const handleReset = () => {
        setState({
            counter1: 0,
            counter2: 0,
            counter3: 0,
        });
    }
    const handleIncrement = () => {
        setState({
            counter1: counter1 + 1,
            counter2: counter2 + 1,
            counter3: counter3 + 1,
        })
    }

    // @ts-ignore
    return (

        <div className="container-fluid mt-4 ">
            <h1>Carousel de Fotos</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Formulario de Busqueda conectado a una api</Accordion.Header>
                    <Accordion.Body>
                        <h6>Programa un chatbot funcional</h6>
                        <br/>
                        <ul>
                            <li>
                                <p>Definir el propósito y la funcionalidad del chatbot:
                                </p>
                            </li>
                            <li>
                                <p>    Elige una plataforma o framework
                                </p>
                            </li>
                            <li>
                                <p>Diseñar la conversación y crear flujos de diálogo: Define los diferentes casos de uso y crea flujos de conversación para guiar al usuario a través de la interacción con el chatbot. Esto implica identificar las preguntas que el chatbot puede esperar recibir y cómo debe responder a cada una de ellas.
                                </p>
                            </li>
                            <li>
                                <p>    Desarrollar el chatbot:
                                </p>
                            </li>
                            <li>
                                Integrar el chatbot en canales de comunicación:

                            </li>
                        </ul>
                        <br/>
                        <h5>Requirements</h5>
                        <hr/>
                        <ul>
                            <li>
                                <p>    Probar y mejorar el chatbot:
                                </p>
                            </li>
                            <li>
                                <p>Desplegar el chatbot:</p>
                            </li>

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br/>
            <p className="box">Counter1 :{counter1}</p>
            <p className="box">Counter2 :{counter2}</p>
            <p className="box">Counter3 :{counter3}</p>
            <hr/>
            <div className="btn-group m-2">
                <div>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter1: counter1 + 1})}> Incrementar counter1
                    </button>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter1: counter1 - 1})}> Restar counter1
                    </button>
                </div>
            </div>
                <div>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter2: counter2 + 1})}>
                        Incrementar counter2
                    </button>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter2: counter2 - 1})}>
                        Restar counter2
                    </button>
                </div>
            <div>
                </div>
                <div>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter3: counter3 + 1})}>
                        Incrementar counter3
                    </button>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter3: counter3 - 1})}>
                        Restar counter3
                    </button>
                </div>
            <div>
                <button className="btn btn-primary m-2" onClick={handleReset}>
                    Reset
                </button>
                <button className="btn btn-outline-primary m-2" onClick={() => handleIncrement('counter1')}> Increment
                </button>
            </div>
        </div>
    )
}
