import React  from 'react';
import "./MyProfile.css";
import {useNavigate} from "react-router-dom";

const handleBack = (navigate) => {
    navigate('/');
};
export const MyProfile = () => {
    const navigate = useNavigate();
    return (
        <div className={"d-flex"}>
            <br/>
            <div className={"row-cols px-4"}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar"/>
                <button type="button" className="btn btn-outline-secondary">Cambiar Foto</button>
            </div>
            <div className={"container-fluid"}>
                <p>Nombre:  </p>
                <p>Apellido: </p>
                <p>Correo: </p>
                <p>Fecha de nacimiento: </p>
                <p>Sexo: </p>
                <p>País: </p>
                <p>Provincia: </p>
                <p>Ciudad: </p>
                <p>Código Postal: </p>
                <p>Dirección: </p>
                <p>Teléfono: </p>
                <hr/>
                <button
                    onClick={() => {
                        handleBack(navigate); } }
                    type="button" className="btn btn-outline-secondary">Volver</button>
                <button type="button" className="btn btn-outline-secondary">Guardar</button>
                <button type="button" className="btn btn-outline-secondary">Editar</button>
            </div>
            <div className={"btn-avatar"}>
            </div>
        </div>

    );
};

