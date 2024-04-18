import {useNavigate} from "react-router-dom";


export const TrakerList = () => {
     const navigate = useNavigate();
    return(
        <>
            <h1>Traker List</h1>
            <button
                onClick={() => {
                    navigate('/page2');
                }}
                type="button"
                className="btn btn-outline-secondary m-2">
                Volver
            </button>
        </>
    )
};