import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./CardsTitle.css"
import {useEffect, useState} from "react";

export const CardsTitle = () => {
    const [imagenCard, setImagenCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/galeriaR`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo obtener la galería de imágenes");
                }
                return response.json();
            })
            .then((data) => setImagenCard(data.items.slice(0, 10)))
            .catch(err => console.error('Error al obtener la galería:', err));
    }, []);

    return (

        <div className="cols-cols-3">
            <Row
                xs={1} md={3} >
                {imagenCard.slice(0, 6).map((item, index) => (
                    <Col
                        className="Cards-container"
                        key={index}>
                        <Card  className="Card">
                            <Card.Img variant="top" src={item.imagen} />
                            <Card.Body>
                                <Card.Title>{item.fecha}</Card.Title>
                                <Card.Text>
                                    {item.volanta}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}