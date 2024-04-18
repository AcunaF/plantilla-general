import {AuthContext} from "../../components/auth/context/AuthContext.tsx";
import {useContext} from "react";
import Accordion from "react-bootstrap/Accordion";
import {ImageCarousel} from "./Carousel.tsx";

export const Home = () => {
    // @ts-ignore
    const {dataUser, setDataUser} = useContext(AuthContext);

    const handleReset = () => {
        setDataUser((prevState: any) => ({
            ...prevState,
            firstName: ''
        }));
        console.log('Reset');
    };
    return (
        <div>
            <h1>Home</h1>
            <h2>Bienvenido {dataUser ? dataUser.firstName : ''}</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Resumen</Accordion.Header>
                    <Accordion.Body>
                        <br/>
                        <ul>
                            <li>
                                <p> COMPONENTES
                                    Los componentes permiten separar la interfaz de usuario en piezas independientes,
                                    reutilizables y pensar en cada pieza de forma aislada. Son como las funciones de
                                    JavaScript. Aceptan entradas arbitrarias
                                    (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer
                                    en la pantalla.
                                    La forma más sencilla de definir un componente es escribir una función de
                                    JavaScript:
                                    Los componentes pueden referirse a otros componentes en su retorno. Esto nos permite
                                    utilizar la misma abstracción de componente para cualquier nivel de detalle. Un
                                    botón, un cuadro de diálogo, un formulario, una pantalla: en las aplicaciones de
                                    React, todos ellos son expresados comúnmente como componentes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    QUE SON LAS PROPS?
                                    Las props son la colección de datos que un componente recibe del contenedor padre, y
                                    que
                                    pueden usarse para definir los elementos de React que retornará el componente. En
                                    términos prácticos, si un componente necesita recibir información para funcionar, la
                                    recibe vía props.

                                    <p> COMO SE PASAN PROPS ENTRE COMPONENTES
                                        Para pasar props, simplemente agrégalas al JSX, de la misma forma en que lo
                                        harías
                                        con los atributos HTML. Para acceder a las props, utiliza la sintaxis de
                                        desestructuración
                                        function
                                    </p>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b> COMO RENDERIZA REACT</b>
                                    permite a los desarrolladores controlar dinámicamente qué contenido se muestra
                                    en la
                                    pantalla en función de valores específicos que pueden almacenarse en una
                                    variable,
                                    estado o props.
                                    Esto puede ser extremadamente útil en situaciones en las que quieras mostrar u
                                    ocultar
                                    determinados elementos de la interfaz de usuario, cambiar el diseño de una
                                    página o
                                    mostrar contenido diferente en función de las interacciones del usuario.
                                    El renderizado condicional es importante en las aplicaciones React porque te
                                    permite
                                    crear interfaces de usuario dinámicas e interactivas que pueden responder a
                                    datos
                                    cambiantes e interacciones del usuario en tiempo real.
                                    Te ayudará a mejorar el rendimiento y la eficiencia de tus aplicaciones evitando
                                    la
                                    renderización innecesaria de componentes o elementos que no son necesarios (/n)
                                    <br></br>
                                    <b> ¿Qué es el evento onChange en React?</b>
                                    El evento onChange en React es una de las funciones predeterminadas en React que
                                    nos
                                    permiten definir una acción a ejecutar cuando una situación ocurre. Este evento
                                    se
                                    utiliza comúnmente para tratar los datos introducidos por el usuario en un
                                    formulario
                                </p>
                            </li>


                                <h4> Hooks de react</h4>

                            <li>
                                <p>SON FUNCIONES QUE NOS PERMITE USAR ESTADOS Y CICLOS DE VIDA EN COMPNENTES FUNCIOALES.
                                    NOS PERMITEN MANIPULAR Y USAR ESTADO EN LOS COMPONENTES QUE CREAMOS COMO FUNCIONES
                                    SIN NESECIDAD DE USAR CLASES.

                                    Funciones especiales de JS que empiezan por use
                                    y permiten acceder a las caracteriasticas de React en componentes funcionales</p>
                            </li>
                            <li>
                                ¿Por que se introdujo : ayudan a simplificar el codigo de componentes tipo CLASE,
                                permite reusar logica de estado mas facil, los componentes son menos complejos y tienen
                                ciclos de vida. mas manejables y faciles sobre todo no se usa el this para acceder a las
                                propiedades de la clase
                                DIferentes Hooks: useSTate, useEffect, useContext, useRef, useMemo, useReducer,
                                useCallback
                            </li>
                            <br/>
                            <li>
                                <p><b>USESTATE</b> Hook que nos permite crear variables de estado en un componente
                                    funcional, es un hook ASINCRONO. Dentro de nuestra funcion recibe como parametro el
                                    valor de la variable que querramos inicializar va a retornar un arreglo con dos
                                    variables, normalmente es el nombre de la variable y el segundo es la misma variable
                                    con un set adelante, ejemplo facu y setfacu.
                                    recibe dos valores por que uno de ellos lo utilizamos para actualizar nuestro
                                    componente y el otro es una funcion setter qeu la podemos llamar cuando querramos
                                    actualizar nuestro estado.
                                </p>
                                <li>
                                    <p><b>USEEFFECT</b> Hook que nos permite acceder a ciclos de vida del componente,
                                        permite realizar efectos secundarios en un componente funcional. Los efectos
                                        secundarios son operaciones que ocurren fuera del flujo normal de la
                                        representación
                                        del componente, como obtener datos de una API, configurar suscripciones o
                                        modificar
                                        el DOM.toma dos argumentos: una función que realiza el efecto secundario y una
                                        matriz opcional de dependencias que especifican cuándo se debe ejecutar el
                                        efecto.
                                        La función pasada a useEffect se ejecuta después de que el componente se ha
                                        renderizado por primera vez y luego se vuelve a ejecutar cada vez que cambia
                                        alguna
                                        de las dependencias.
                                        Estas son las funciones que se usaban antes cuando los componentes se hacien en
                                        clases, hacen cambios alo largo del ciclo de vida de la app.
                                        <br></br>
                                        <br></br>
                                        <li>
                                            <b> componentDIMOUNT</b> corre cuando el componente se monta por primera vez
                                        </li>
                                        <li>
                                            <b> componentUPDATE</b> se actualiza algun valor
                                        </li>
                                        <li>
                                            <b>componentWILLUNMOUNT</b> cuando el componente se desmonta
                                        </li>
                                        <br></br>
                                        Todo esto se ahorra ahora usando el useEffect. Es una funcion que toma una
                                        funcion como parametro y podemos hacer cualquier cosa que tenga que ver con el
                                        ciclo de vida de nuestra app.
                                        Toma dependencias como segundo parametro, que son valores que cambian, entonces
                                        este efecto se activa cuando estos valores cambien
                                    </p>
                                </li>
                                <li><p><b>usesMemo</b> Memoriza valores de una operacion compleja</p></li>
                                <li><p><b>usesCallback</b>Permite memorizar funciones </p></li>

                            </li>

                                <li><p><b>USECONTEXT</b>
                                    Nos permite compartir datos sin necesidad de pasar propiedades a los componentes,
                                    normalmente si tenemos que pasar propiedades entre componentes, por ejemplo tenes
                                    los componentes 1,2,3 y queremos pasar props del 1 al 3 tenemos que pasar por el
                                    componente 2, con usecontext podemos envolver la aplicacion con un proveedor y asi
                                    pasar como variable global a todos los hijos. podemos acceder a esta ellos usando
                                    react.createContext. PAra acceder a estos datos tenemos que crear el contexto dentro
                                    de nuestra apliacacion contenedora, normalmente app va el nombre.provider que va a
                                    contener, en nuestro "contenedor" el valor de la misma.
                                </p></li>

                                <li><p><b>USEREDUCER</b>
                                    es parecido al usestate pero en lugar de actualizar el estado de la variable o el
                                    valor que estes guardando solamente en el componente, cuando quiera actualizar el
                                    estado del componente voy a llamar a una accion esa accion va a llamar a un reducer
                                    y el reduce va a actualizar a un estado en el estorage definido previamente en la
                                    aplicacion. nos permite una base de codigo mas entendible y escalable.</p>
                                </li>
                                <ul> 1_ declarar el estado inicial, normalmente se declara como un objeto con las
                                    propiedades que queremos guardar en el estado, por ejemplo un objeto con un
                                    array de mensajes y un string con el nombre del usuario
                                </ul>
                                <ul> 2_definir la funcion reduce que toma como parmetro un estado que seria el
                                    actual o el inicial, tambien una accion que puede ser de diferentes tipos. para
                                    usar el reduce en la funcion presisamos crear una constante y pasamos el
                                    dispatch como parametro ( es una funcion tipo setter que no actualiza el estado
                                    ahi si no que lo manda al store y de ahi al componente, a diferencia del
                                    usestate que solo actualiza la variable)
                                </ul>
                                <ul> 3_en el componente llamamos al dispatch y pasamos un objeto con el tipo de
                                    accion y los datos que queremos guardar en el estado
                                </ul>
                                <ul> 4_en el componente llamamos al estado y lo mostramos en el componente</ul>
                            </ul>
                            <br></br>
                            <li>Componentes de Clase y Componentes Funcionales: <a
                                href="https://dev.to/cuarte4/componentes-de-clase-o-funcionales-4c1c" target="_blank"
                                rel="noopener noreferrer">
                                Link </a></li>
                            <li>
                              React Router:<a
                                    href="https://www.escuelafrontend.com/react-router-6" target="_blank"
                                   >
                                    Link </a></li>
                            <li>Flujo de datos y levantamiento del estado:</li>
                            <li>React y APIs:</li>
                            <li>Testing en React:</li>
                            <li>Optimización del rendimiento en React:</li>
                            <li>React y TypeScript:</li>
                            <li>Manejo de errores en React:</li>
                            <li>React y el desarrollo de aplicaciones de escritorio:</li>
                        <br/>
                        <><h5>Documentacion <a
                            href="https://es.react.dev/learn" target="_blank"
                            rel="noopener noreferrer">
                            Link </a></h5></>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="">
                <button className="btn btn-outline-secondary m-2" onClick={handleReset}>
                    Reset
                </button>
            </div>
            <ImageCarousel/>
        </div>
    )
}
