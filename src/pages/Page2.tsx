import Accordion from 'react-bootstrap/Accordion';
import {Employes} from "../components/Employees/Employes.jsx";

export const Page2 = () => {
    return (
        <>
        <div className="container-fluid mt-4 ">
            <h2>Tecnica Full Stack</h2>
            <h4>Employee's Hapinnes Tracking Tool or EHTT </h4>
            <hr/>
            <div className="container-fluid">
                <Employes/>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Test Sr React</Accordion.Header>
                    <Accordion.Body>
                        <h6>Herramienta que ayuda a Trackear el nivel de felicidad del empleado en la compania</h6>
                        <br/>
                        <ul>
                            <li>
                                <p>Name</p>
                            </li>
                            <li>
                                <p>Category (Employee or Manager)</p>
                            </li>
                            <li>
                                <p>Happiness level</p>
                            </li>
                            <li>
                                <p>Company Name</p>
                            </li>
                            <li>
                                Logo of the company
                            </li>
                        </ul>
                        <br/>
                        <h5>Requirements</h5>
                        <hr/>
                        <ul>
                            <li>
                                <p>Buscar a las personas por nombre categoria, esta busqueda que incluya el logo de la
                                    compania y si
                                    pueden ser sorteados por el nivel de felicidad-NOMBRE-ROL-FELICIDAD-COMPANIA-orden
                                    acs o des</p>
                            </li>
                            <li>
                                <p>Que los usuarios puedan seleccionar a que personas trackear, lista de favoritos, que
                                    se pueda
                                    agregar o eliminar favoritos, la cual sea un modal accesible desde un navbar</p>
                            </li>
                            <li>
                                <p>Que los usuarios puedan ver el historial de felicidad de las personas trackeadas</p>
                            </li>
                            <li>
                                <p>Generar un archivo json con informacion e imagenes para las companias de la lista de
                                    requerimientos </p>
                            </li>
                            <li>
                                Guardar favoritos
                            </li>
                            <li>
                                Imprimible
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </>
)
}