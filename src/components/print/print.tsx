import {useNavigate} from "react-router-dom";

export const Print = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/page2");
        console.log("volver");
    }

    return (
        <div>
            <h1>Print</h1>
            <button onClick={handleBack}>Volver</button>
        </div>
    );
}