import {useQuery} from "react-query";
import {ProductQuery} from "./Queryviews.tsx";
import "./Styles.css"
import {ImageCarousel} from "../Home/Carousel.tsx";
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBBadge,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";
import {Cards} from "../../components/Card/Cards.tsx";
import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter";

export const ListGroupComponent = () => (
    <MDBListGroup light numbered style={{minWidth: '22rem'}}>
        <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
            <div className='ms-2 me-auto'>
                <div className='fw-bold'>Subheading</div>
                Cras justo odio
            </div>
            <MDBBadge pill light>
                14
            </MDBBadge>
        </MDBListGroupItem>
    </MDBListGroup>
);

export const ReactQuery = () => {

    const getProducts = () => fetch('https://peticiones.online/api/products').then(response => response.json());

    const {data, status} = useQuery('products', getProducts)

    switch (status) {
        case 'loading':
            return <p>Recuperando los Productos</p>;
        case 'error':
            return <p>Ha ocurrido un error</p>;
        default:
            return (
                <div className="flex-container">

                    <div className="product-grid">
                        <Cards/>
                    </div>
                            <h2>
                                Tenemos todos los metodos de pago
                                <MDBBadge className=''>NEW</MDBBadge>
                                <CarouselFooter/>

                            </h2>
                        <div className="">

                            <br/>
                            <ImageCarousel/>
                            <div className="m-2">
                                <h4>Favoritos</h4>
                                <hr className="hr hr-blurry"/>
                                <ListGroupComponent />
                                <ListGroupComponent />
                                <ListGroupComponent />
                            </div>
                        </div>
                    <div className="product-grid">
                        {data.results.map((prod: any) => (
                            <ProductQuery image={prod.image} name={prod.name} description={prod.description}
                                          price={prod.price} key={prod.key}/>
                        ))}
                    </div>
                </div>
            )
    }
}