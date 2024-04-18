import React, {useState} from 'react';
import {FaThumbsUp, FaThumbsDown, FaStar} from 'react-icons/fa';
import { SlPrinter } from "react-icons/sl";
import  imagen  from '../../assets//empleados/912265.png';
import { MdOutlineFavorite } from "react-icons/md";
import { FaAccessibleIcon } from "react-icons/fa";
import { FcKindle } from "react-icons/fc";
import { FcLike } from "react-icons/fc";




import imagencompany from '../../assets//company/imagesCompany.jpeg';
import imagenGral from '../../assets//company/images-gral.jpeg';
import imagenMotos from '../../assets//company/images-motos.jpeg';
import imagenSeguro from '../../assets//company/images-seguro.png';
import './Search.css';
import {employees} from '../../data/data.js';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const [showAlertNofollow, setShowAlertNofollow] = useState(false);

    const handleSearch = () => {
        const results = employees.employees.filter((employee: { [x: string]: string; }) =>
            employee['Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee['Company Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee['Category'].toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee['Happiness level'].toLowerCase().includes(searchTerm.toLowerCase())
        );
     console.log("empleados ", employees);
        setSearchResults(results);
    }
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log("event ", event.target.value);
        setSearchTerm(event.target.value);
    }
    const handleReset = () => {
        console.log("reset")
        setSearchTerm('');
        setSearchResults([]);
    }
    const handleFollow = () => {
        setShowAlert(true);
    }
    const handleDislike = () => {
        setShowAlertNofollow(true);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
        }}>
            <div className="row">
                <div className="row-cols-auto mt-2">
                    <div className="row-cols-auto mt-2">
                        <input
                            type="text"
                            placeholder={'Buscar...'}
                            className="form-control col-md-16"
                            onChange={handleChange}
                            name="search"
                            style={{width: '100%'}}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-dark">Buscar
                        </button>
                        <button
                            onClick={handleReset}
                            type="reset"
                            className="btn btn-outline-dark"
                        >Reset
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {showAlert ? (
                    <div className="alert alert-success" role="alert">
                        <strong>Well done!</strong> You are now following this employee, success
                    </div>
                ) : showAlertNofollow ? (
                    <div className="alert alert-danger" role="alert">
                        <strong>Well done!</strong> You have stopped following this employee
                    </div>
                ) : null}
                {searchResults.map((employee, index) => (
                    <div key={index}>
                        <br/>
                        <div className="row-cols-2">
                            <Card
                                className="card-container float-right"
                                style={{width: '20rem'}}>
                                <Card.Img className="mt-2" variant="top" src={imagen}/>
                                <Card.Body>
                                    <Card.Title> {employee['Name']}
                                        &nbsp;
                                        &nbsp;
                                            <FaThumbsUp
                                                type={"button"}
                                            onClick={handleFollow}
                                            />
                                        &nbsp;
                                        &nbsp;
                                        <FaThumbsDown
                                        type={"button"}
                                        onClick={handleDislike}
                                        />
                                    </Card.Title>
                                    <Card.Text>
                                        <b> Employee description:</b> <br/>
                                        <span> Confiabilidad. Busca empleados en los que puedas contar para llegar a tiempo y terminar sus tareas. ...
                                                    Entrega. ...
                                                        Trabajo en equipo. ...
                                        </span>
                                    </Card.Text>
                                    <Card.Link href="/history">
                                        <b><FcLike
                                        className=""
                                        /> Happiness History</b> <br/>
                                    </Card.Link>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Name : {employee['Name']}
                                    </ListGroup.Item>
                                    <ListGroup.Item>Category : {employee['Category']}</ListGroup.Item>
                                    <ListGroup.Item>Happiness level: {employee["Happiness level"]}  </ListGroup.Item>
                                    <ListGroup.Item>Company Name: {employee['Company Name']} </ListGroup.Item>
                                    <ListGroup.Item>
                                        <img src={imagenGral} alt="company" width="250" height="80"/>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="/favorites">

                                        <MdOutlineFavorite/>&nbsp;<span>Favorites</span>
                                    </Card.Link>
                                    <Card.Link href="/flollowers"><FaAccessibleIcon />&nbsp;
                                        <span>Followers</span></Card.Link>
                                    &nbsp; &nbsp; &nbsp;
                                    <SlPrinter />
                                    &nbsp;
                                    <Card.Link href="/print">
                                        <span>Print</span>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </form>
    )
}