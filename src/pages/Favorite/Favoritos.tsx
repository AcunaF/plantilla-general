import { FaHeart, FaArrowLeft, FaTrash, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./Favorite.css";
import { useEffect, useState } from 'react';

export const Favoritos = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favourites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const handleBack = () => {
        navigate("/");
    };

    const handleDelete = (favorite: never) => {
        const newFavorites = favorites.filter(fav => fav !== favorite);
        setFavorites(newFavorites);
        localStorage.setItem("favorite", JSON.stringify(newFavorites));
        alert("Elemento eliminado de favoritos");
    };

    const handleAddtoCart = () => {
        alert("Elemento agregado al carrito de compras");
    };

    return (
        <div className="favorite-container">
            <h1>Tus Favoritos</h1>
            <div className="container">
                <Row xs={1} md={4} className="g-4">
                    {Object.keys(favorites).map((favorite, idx) => (
                        <Col key={idx}>
                            <Card className="card">
                                <Card.Img variant="top" src={favorite.image}/>
                                <Card.Body>
                                    <Card.Title className="card-title">{favorite.name}</Card.Title>
                                    <Card.Text className="card-text">
                                        {favorite.description}
                                    </Card.Text>
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
                <Button variant="success" onClick={handleAddtoCart}>
                    <FaCartPlus/> Agregar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    <FaTrash/> Eliminar
                </Button>
            </div>
        </div>
    );
};