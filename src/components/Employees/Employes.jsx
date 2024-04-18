import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Search} from "../Search/Search.tsx";
import {employees} from "../../data/data.js";

export const Employes = () => {

    return (
        <>
            <div className="container-fluid mt-4 ">
                <h4> Buscar empleado</h4>
                <Search/>
                <br/>
            </div>
        </>
    )
}