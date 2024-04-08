// @ts-ignore
import types from "../../../Auth/types/types.jsx";
export const initialState = {
    logged: false,
    user: null // Inicializar el estado del usuario como null
};

export const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload.user // Acceder a la carga útil para obtener el usuario
            };
        case types.logout:
            return {
                ...state,
                logged: false,
                user: null // Establecer el usuario como null al cerrar sesión
            };
        default:
            return state;
    }
};
