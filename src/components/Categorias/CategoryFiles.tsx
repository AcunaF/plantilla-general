import {useLocation} from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';

function handleback() {
window.history.back();

}

export const CategoryFiles = () => {
    const location = useLocation();
    const categoryName = location.state?.categoryName || "Categoría no seleccionada";
    console.log('Categoría seleccionada:', categoryName);
    return (
        <div className="container mt-5">
            <h1>Estas en la categoria <b

                style={{color: "#FF0000"}}
            >{categoryName}</b> que se encuentra en  construccion </h1>
            <div>
                <br></br>
                <button onClick={handleback} className="btn btn-outline-secondary">
                    <IoIosArrowBack/> Volver
                </button>
            </div>
        </div>
    );
};