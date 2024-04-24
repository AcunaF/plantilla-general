import React from 'react';

const ButtonComponent = ({ handleSubmit, handleReset }) => {
    return (
        <div className="container-fluid">
            <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-outline-secondary w-30 "
                aria-label="Buscar"
            >
                Ingresar
            </button>
            <button
                onClick={handleReset}
                type="submit"
                className="btn btn-outline-secondary w-30 m-3"
                aria-label="Reset"
            >
                Reset
            </button>
        </div>
    );
};
export default ButtonComponent;