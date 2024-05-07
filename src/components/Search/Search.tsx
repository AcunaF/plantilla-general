import React, {useState} from 'react';
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import { SlPrinter } from "react-icons/sl";
import  imagen  from '../../assets//empleados/912265.png';
import { MdOutlineFavorite } from "react-icons/md";
import { FaAccessibleIcon } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import imagenGral from '../../assets//company/images-gral.jpeg';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {supabase} from "../../models/supa.connect.tsx";
import './Search.css';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertNofollow, setShowAlertNofollow] = useState(false);

    const handleSearch = async () => {
        const { data, error } = await supabase
            .from('EmployeeRegistration')
            .select('*')
            .filter(
                'Nombre,Apellido,Correo,Telefono,Direccion,Ciudad,Provincia,CodigoPostal,FechaIngreso,Cargo,Salario',
                'ilike',
                `%${searchTerm}%`
            );

        if (error) {
            console.error('Error fetching employees: ', error);
        } else {
            // @ts-ignore
            setSearchResults(data);
        }
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
</div>
                <div className="row">
                    {searchResults.map((employee, index) => (
                        <div key={employee.Nombre} className="col-lg-4 col-md-6 mb-4">
                            <br/>
                            <div className="row-cols-2">
                                <Card
                                    className="d-flex card-container float-right"
                                    style={{width: '20rem', height: 'auto'}}>
                                    <Card.Img className="mt-2" variant="top" src={imagen}/>
                                    <Card.Body>
                                        <Card.Title> {employee['Nombre']}
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
                                        <Card.Link
                                            className=""
                                            href="/history">
                                            <b><FcLike
                                            /> Happiness History</b> <br/>
                                            <Card.Link href="/favorites"> <MdOutlineFavorite/><span></span> </Card.Link>
                                            <Card.Link href="/flollowers"><FaAccessibleIcon/><span></span></Card.Link>
                                            <Card.Link href="/print"><SlPrinter/> <span></span></Card.Link>
                                        </Card.Link>
                                        <Card.Text>
                                            <ListGroup.Item>Descripcion : {employee['Description']}</ListGroup.Item>
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush"
                                               style={{width: '20rem', height: 'auto'}}>
                                        <ListGroup.Item>Name : {employee['Nombre']}
                                        </ListGroup.Item>
                                        <ListGroup.Item>Category : {employee['Cargo']}</ListGroup.Item>
                                        <ListGroup.Item>Happiness
                                            level: {employee["Happiness level"]}  </ListGroup.Item>
                                        <ListGroup.Item>Company Name: {employee['Company Name']} </ListGroup.Item>
                                        <ListGroup.Item>
                                            <img src={imagenGral} alt="company" width="290" height="150"/>
                                        </ListGroup.Item>.
                                    </ListGroup>
                                </Card>
                            </div>
                        </div>
                    ))}

                </div>
        </form>
    )
}