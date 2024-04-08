import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //incluir Auth

    const login = () => {
        // lógica de inicio de sesión, enviar una solicitud al servidor para verificar las credenciales
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Lógica de cierre de sesión, limpiar tokens o eliminar cookies
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
