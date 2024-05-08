import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdb-react-ui-kit";
import React, {useEffect} from "react";
import './CardsHop.css';

export const CardsHop =()=> {
    const [cardsHop, setCardsHop] = React.useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/galeriaLibro`)
            .then((response) => response.json())
            .then((dataR) => setCardsHop(dataR.items))
            .catch(err => console.log(`Error`, err));
    }, []);

    return (
        <div className="row-cols-1">
            {cardsHop.map((item, index) => (
                <div key={index}>
                    <MDBCard style={{ maxWidth: '305px' }}>
                        <MDBRow className="g-0">
                            <MDBCol>
                                <MDBCardImage
                                    style={{ maxWidth: '300px' }}
                                    src={item.imagen}
                                    alt={item.id_imagen}
                                    fluid
                                />
                            </MDBCol>
                            <MDBCol md="10">
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