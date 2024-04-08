import { useReducer, useState } from 'react';
import { AuthContext } from "./AuthContext";
import  { authReducer } from "./authReducer";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import  types  from "../../../Auth/types/types.jsx";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null') || { isLogged: false };
    return {
        logged: !!user,
        user: user,
    };
};

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const [dataUser, setDataUser] = useState({});

    const login = (name = " ") => {
        const user = {
            name: name,
            ...dataUser,
        };
        const action = {
            type: types.login, // Corrigiendo el tipo de acción
            payload: user, // Enviando el usuario como carga útil
        };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
        console.log('user', user);
        navigate("/login");
    };

    const logout = () => {
        const action = {
            type: types.logout
        };
        localStorage.removeItem('user');
        dispatch(action);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{
            dataUser: dataUser,
            setDataUser,
            ...authState,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
