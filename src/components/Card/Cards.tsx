import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';

import './cardsStyles.css';

export const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/galeriaLibro')
            .then((response) => response.json())
            .then((dataR) => setData(dataR.items))
            .catch(err => console.log(`Error`, err));
    }, []);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map((item, index) => (
                    <div key={index} className="col">
                        <MDBCard style={{ maxWidth: '460px' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="">
                                    <MDBCardImage
                                        style={{ maxWidth: '400px' }}
                                        src={item.imagen}
                                        alt={item.id_imagen}
                                        fluid
                                    />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.categoria}</MDBCardTitle>
                                        <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </MDBCardText>
                                        <MDBCardText>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </div>
                ))}
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map((item, index) => (
                <Card key={index} border="dark" style={{ width: '18rem' }}>
                    <Card.Header>{item.categoria}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top"  src={item.imagen} />
                        <Card.Title>{item.id_imagen}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    );
}/*
<Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ))}
    <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
</Row>*/