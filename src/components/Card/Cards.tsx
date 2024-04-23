import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import './styles.css';
export const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/api/galeriaLibro')
            .then((response) => response.json())
            .then((dataR) => setData(dataR.items))
            .catch(err => console.log(`Error`, err));
    }, []);

    return (
        <div className="product-grid">
            {data.map((item, index) => (
                <div key={index} className="CardWrapper">
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
    );
}