import { FaArrowLeft, FaTrash, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./Favorite.css";
import { useEffect, useState } from 'react';

export const Favoritos = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const handleBack = () => {
        navigate("/");
    };

    const handleDelete = (favorites: never) => {
        const newFavorites = favorites.filter((fav: any) => fav !== favorite);
        setFavorites(newFavorites);
        localStorage.setItem("favorite", JSON.stringify(newFavorites));
        alert("Elemento eliminado de favoritos");
    };

    const handleAddToFavorite = () => {
        alert("Elemento agregado al carrito de compras");
    };

    return (
        <div className="favorite-container">
            <h1>Tus Favoritos</h1>
            <div className="container">
                <Row xs={1} md={4} className="container">
                    {Object.keys(favorites).map((favorites, idx) => (
                        <Col key={idx}>
                            <Card className="card">
                                <Card.Img variant="top" src={favorites.image}/> imagen
                                <Card.Body>
                                    <Card.Title className="card-title">Name {favorites.name}         </Card.Title>
                                    <Card.Title className="card-title">Descripcion{favorites.description}         </Card.Title>
                                    <Card.Text className="card-text">Precio: ${favorites.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="btn-btnFavorite">
                <Button variant="secondary" onClick={handleBack}>
                    <FaArrowLeft/> Volver
                </Button>
                <Button variant="success" onClick={handleAddToFavorite}>
                    <FaCartPlus/> Agregar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    <FaTrash/> Eliminar
                </Button>
            </div>
        </div>
    );
};