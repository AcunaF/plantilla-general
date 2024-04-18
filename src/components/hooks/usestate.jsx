import {useState} from "react";
import "./styles.css";

const equipos = ["River", "Racing", "Boca", "Independiente", "Velez"];
{/*proximamente  https://api.chucknorris.io/*/}
const getEquiposAleatorio = () => {
    const index = Math.floor(Math.random() * equipos.length);
    return equipos[index];
}

export const Equipos = () => {
    const [equipo, setEquipo] = useState("");

    const changeEquipos = () => {
        const newEquip = getEquiposAleatorio();
        setEquipo(newEquip);
    }
    const handleReset = () => {
        setEquipo("");
    }
    return (
        <div className="equipo">
            <h1
            className="futbol"
            > {equipo}
            </h1>
            <button
                type="button"
                value="equipos"
                onClick={changeEquipos}
            >
                Change Team
            </button>
            <button
                type="button"
                value="reset"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    )
}