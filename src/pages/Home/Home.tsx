import {AuthContext} from "../../components/auth/context/AuthContext.tsx";
import {useContext} from "react";
import {ImageCarousel} from "./Carousel.tsx";
// @ts-ignore
import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter.jsx";
import "./Home.css";
import {useQuery} from "react-query";
import {TarjetaProducto} from "./AndesCard.tsx";
import prn from "../../assets/Banners/PRNews.io4_.jpg";
import imagesblack from "../../assets/Banners/imagesblack.jpeg";
import pagos from "../../assets/Banners/itc_medios_pago_banner_original_2017_08_31_01.jpg";
import mcdonas from "../../assets/Banners/mcdonalds.png";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";

export const Home = () => {
    // @ts-ignore
    const {dataUser, setDataUser} = useContext(AuthContext);
    const getProducts = () => fetch('https://peticiones.online/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    const {data, error} = useQuery('products', getProducts)
    if (error) {
        // @ts-ignore
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container">
                <div className="banner mt-3">
                    <img
                        style={{width: "100%", height: "40%", objectFit: "cover"}}
                        src={imagesblack} alt='...'/>
                </div>
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
                <div className="bannerDNI">
                    <div className="container">
                        <div className="lista">
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amzing content. It's very engaging. Right?">Camperas
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Buzos

                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Zapatillas
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amzing content. It's very engaging. Right?">Camperas
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Buzos

                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className="">
                    <TarjetaProducto imageUrl="https://peticiones.online/api/products" title=" " price={0}
                                     originalPrice={0} name={" "}/>
                </div>
                <br/>
                <hr/>
                <div className="banner">
                    <img
                        style={{width: "100%", height: "40%", objectFit: "cover"}}
                        src={prn} alt='...'/>
                </div>
                <br/>

                <br/>
                <div className="">
                    <img
                        style={{width: "100%", height: "40%", objectFit: "cover"}}
                        src={pagos} alt='...'/>
                </div>
                <div className="CarouselFooter">
                    <CarouselFooter/>
                </div>

                <div>
                </div>
                <div className="contenedor-supermercado">
                    {data.results.map((prod: any) => (
                        <div
                            className="tarjeta"
                            key={prod.key}>
                            <img src={prod.image} alt={prod.name}/>
                            <h2>{prod.name}</h2>
                            <p>{prod.description}</p>
                            <p>{prod.price}</p>
                            <p>{prod.category}</p>
                        </div>
                    ))}
                </div>
                <br/>
                <div className="bannerDNI">
                    <div className="container">
                        <div className="lista">
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amzing content. It's very engaging. Right?">Camperas
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Buzos

                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Zapatillas
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amzing content. It's very engaging. Right?">Camperas
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Buzos

                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                            <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                                    title="Popover title"
                                    data-content="And here's some amazing content. It's very engaging. Right?">Pantalones
                            </button>
                        </div>
                        <br/>
                    </div>

                </div>
                <br/>
                <div>
                    <ImageCarousel/>
                </div>
                <div>
                    <Row xs={1} md={2} className="g-6">
                        {Array.from({length: 6}).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={prn}/>
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
                    </Row>
                </div>
                <Row>
                    <Card.Img variant="top" src={mcdonas}/>
                    <Card.Body>
                        <Card.Text>
                            .
                        </Card.Text>
                    </Card.Body>
                </Row>
            </div>
        </>

    )
}
