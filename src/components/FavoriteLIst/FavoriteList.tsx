import React from 'react';
import { useNavigate } from "react-router-dom";

export const FavoriteList = () => {
    const navigate = useNavigate();

    // Lista de amigos favoritos (puedes obtenerla de tu estado o de alguna fuente de datos)
    const favoriteFriends = [
        { id: 1, name: 'Amigo 1', age: 25, hobby: 'Fútbol' },
        { id: 2, name: 'Amigo 2', age: 30, hobby: 'Cocina' },
        { id: 3, name: 'Amigo 3', age: 28, hobby: 'Música' },
        // Agrega más amigos favoritos según sea necesario
    ];

    return (
        <>
            <h1>Favorite List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Hobby</th>
                </tr>
                </thead>
                <tbody>
                {favoriteFriends.map(friend => (
                    <tr key={friend.id}>
                        <td>{friend.id}</td>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.hobby}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                onClick={() => {
                    navigate('/search');
                }}
                type="button"
                className="btn btn-outline-secondary m-2">
                Volver
            </button>
        </>
    );
};
