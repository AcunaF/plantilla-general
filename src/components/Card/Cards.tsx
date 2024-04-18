import {useEffect, useState} from "react";
import './styles.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from 'mdb-react-ui-kit';

export const Cards = () => {
    const [galeriaRaq, setGaleriaRaq] = useState([{}]);

    useEffect(() => {
        fetch(`http://localhost:5004/api/galeriaRaq`)
            .then((response) => response.json())
            .then((dataR) => setGaleriaRaq(dataR.items))
            .catch(err => console.log(`Error`, err));
        console.log("galeria ",galeriaRaq );        // JSON.stringify(galeriaRaq)
        console.log("galeria ",JSON.stringify(galeriaRaq) );

    }, []);
    return (
        <div className="mt-5 ">
            <div>
                <h5>Filtros</h5>
                <hr className="hr hr-blurry"/>
                <MDBListGroup style={{minWidth: '22rem'}} light>
                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                    <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                    <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                </MDBListGroup>
            </div>
            <>
                {galeriaRaq.slice(0, 5).map((item, index) => {
                    <br></br>
                    // @ts-ignore
                    const {RAQ} = item;
                    return (
                    <MDBCard style={{maxWidth: '540px'}}
                                 key={index}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src={RAQ} alt='...' fluid/>
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle>Post del {"fecha"}</MDBCardTitle>
                                        <MDBCardText>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional
                                        </MDBCardText>
                                        <MDBCardText>
                                            <small className='text-muted'>Last updated 3 mins ago</small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    );
                })}
            </>
            <br></br>
            <h5>Post</h5>
            <hr className="hr hr-blurry"/>
            <MDBListGroup style={{minWidth: '22rem'}} light>
                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
            <hr className="hr hr-blurry"/>
            <img src="../../assets/Cards/descarga.png" alt="Description of the image"/> <br></br>
            <div className="publisidad">
            </div>
        </div>

    );
}