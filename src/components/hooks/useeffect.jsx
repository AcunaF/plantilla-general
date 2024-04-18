import {useState, useEffect} from "react";
import "./styles.css";

export const GetData = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const articlesEffect = async () => {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error ", error);
            }
        }
        articlesEffect();
    }, []);

    const handleReset = () => {
        setData("");
    }

    return (
        <div className="equipo">
            <h1 className="futbol"> {data} </h1>
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
