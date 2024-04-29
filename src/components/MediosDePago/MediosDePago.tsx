import { useEffect, useState } from 'react';
import {Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Pago.css";
import pagos from "../../assets/Banners/itc_medios_pago_banner_original_2017_08_31_01.jpg";
import mercadoPagoIcon from '../../assets/MediosPago/mercadoPago.png'
import banelcoIcon from '../../assets/MediosPago/banelco-logo-F2A2A5BBEF-seeklogo.com.png';
import rapipagoIcon from '../../assets/MediosPago/rapipago.png';
import pagoFacilIcon from '../../assets/MediosPago/pago-facil.png';
import Swal from "sweetalert2";

export const MediosDePago = () => {

    const [mercadoPagoInitialized, setMercadoPagoInitialized] = useState(false);

    useEffect(() => {

        setMercadoPagoInitialized(true);
    }, []);


    const handlePagoMercadoPago = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: 'Gracias por tu compra',
            confirmButtonText: 'Genial'
        });
    };
    const handlePagoBanelco = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: 'Gracias por tu compra',
            confirmButtonText: 'Genial'
        });
    };
    const handlePagoRapipago = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: 'Gracias por tu compra',
            confirmButtonText: 'Genial'
        });
    };
    const handlePagoPagoFacil = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: 'Gracias por tu compra',
            confirmButtonText: 'Genial'
        });
    };


    return (
        <div className="container">
            <div className="">
                <Row>
                    <Card.Body>
                        <Card.Text>
                            <br/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src={pagos}/>
                </Row>
                <br/>
            </div>
            <div>
                {mercadoPagoInitialized && (
                    <form id="payment-form">
                        <h1>Elige tu medio de pago</h1>
                        <button type="submit"
                        onClick={handlePagoMercadoPago}
                        >
                            <img src={mercadoPagoIcon} alt="Mercado Pago" className="medio-pago-icon"/>
                            Pagar con Mercado Pago
                        </button>
                        <button type="button" onClick={handlePagoBanelco}>
                            <img src={banelcoIcon} alt="Banelco" className="medio-pago-icon"/>
                            Pagar con Banelco
                        </button>
                        <button type="button"
                            onClick={handlePagoRapipago}>
                            <img src={rapipagoIcon} alt="Rapipago" className="medio-pago-icon"/>
                            Pagar con Rapipago
                        </button>
                        <button
                            onClick={handlePagoPagoFacil}
                            type="button">
                            <img src={pagoFacilIcon} alt="Pago Fácil" className="medio-pago-icon"/>
                            Pagar con Pago Fácil
                        </button>
                    </form>
                )}
            </div>
        </div>

    );
};


