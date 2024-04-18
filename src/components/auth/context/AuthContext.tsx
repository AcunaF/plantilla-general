import { createContext } from "react";

// Definir una interfaz para el contexto de autenticación
interface AuthContextType {
    login: (credentials: { email: string, password: string }) => void;
    logout: () => void;
    isLoggedIn: boolean;
    userData: any; // Define el tipo de userData según tu aplicación
}

// Crea el contexto de autenticación con un valor inicial
export const AuthContext = createContext<AuthContextType>({
    login: () => {


    },
    logout: () => {



    },
    isLoggedIn: false,
    userData: null,
});
