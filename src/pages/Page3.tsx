import Accordion from "react-bootstrap/Accordion";
import   { Equipos }  from "../components/hooks/usestate.jsx";
export const Page3 = () => {
    return (
        <div>
            <h1>HOOKS</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Hooks nativos de React
                    </Accordion.Header>
                    <Accordion.Body>
                        <h6>Hooks</h6>
                        <ul>
                            <li>
                                <p>UseStatet: </p>
                                <i className="ion-android-call"></i>

                            </li>
                            <span>El hook useState crea un estado local para un componente y devuelve un array con dos posiciones: la primera es el valor actual del estado y la segunda es una función para actualizar ese valor.: </span>
                           <Equipos/>
                            <br/>
                            <li>
                                <p>    UseEffect:     </p>
                            </li>
                            El hook useEffect ejecuta una función cada vez que cambia una dependencia y devuelve una función opcional para limpiar los efectos secundarios.                        </ul>
                        <br/>
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

        </div>
    )
}