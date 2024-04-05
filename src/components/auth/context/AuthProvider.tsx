import {useReducer, useState} from 'react';
import {AuthContext} from "./AuthContext.jsx";
import {authReducer} from "./authReducer.js";
import  types   from "../../../Auth/types/types";

import {useNavigate} from "react-router-dom";

const init = () =>  {
    const user = JSON.parse(localStorage.getItem('user') || 'null') || {isLogged: false};
    return{
        logged: !!user,
        user : user,
    }
}
/*export const dataUser ={
    name: " facundo ",
    surname: "acuna" ,
    age : 42,
    email :" facu@facu.com.ar"
}*/

// @ts-ignore
export const AuthProvider  = ({children }) => {
    const navigate = useNavigate();

    const [ authState, dispatch ]= useReducer( authReducer, { }, init);

    const [dataUser, setDataUser] = useState({});

    const login =(name = " ") => {

        // @ts-ignore
        const user ={
            name: name,
            ...dataUser,

        }
        const action = {
            type : types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
        console.log('user', user);
        navigate("/login");
    }
    const logout =() =>{
        const action = {
            type: types.logout
        }
        localStorage.removeItem('user');
        dispatch(action);
        navigate("/login");
    }

    return (
        <AuthContext.Provider  value={{
            dataUser,
            setDataUser,
            ...authState,
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}