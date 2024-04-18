import React from 'react';
import { FaUserPlus, FaTrashAlt } from 'react-icons/fa'; // Importa el icono FaTrashAlt
import { useNavigate } from "react-router-dom";
import "./Followers.css";

export const Followers = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/page2");
        console.log("volver");
    }

    return (
        <div className="followers-container m-5">
            <FaUserPlus /> My Followers List
            <ul className="followers-list">
                <hr />
                <li>
                    <span>Followers 1</span>
                    <FaTrashAlt className="delete-icon" />
                </li>
                <li>
                    <span>Followers 2</span>
                    <FaTrashAlt className="delete-icon" />
                </li>
                <li>
                    <span>Followers 3</span>
                    <FaTrashAlt className="delete-icon" />
                </li>
                <li>
                    <span>Followers 4</span>
                    <FaTrashAlt className="delete-icon" />
                </li>
                <li>
                    <span>Followers 5</span>
                    <FaTrashAlt className="delete-icon" />
                </li>
            </ul>
            <br />
            <button
                onClick={handleBack}
            >volver</button>
        </div>
    );
};
