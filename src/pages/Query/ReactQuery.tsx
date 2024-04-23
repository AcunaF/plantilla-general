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

const ListGroupComponent = () => (
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

                    <div className="row-cols-4">
                        <Cards/>
                    </div>
                            <h2>
                                Imperdibles de la semana
                                <MDBBadge className=''>NEW</MDBBadge>
                            </h2>

                        <div className="">
                            <MDBAccordion initialActive={1}>
                                <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                                    collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control
                                    the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                                    this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any
                                    HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until
                                    the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control
                                    the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                                    this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any
                                    HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                                    collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control
                                    the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                                    this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any
                                    HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </MDBAccordionItem>
                            </MDBAccordion>
                            <br/>
                            <ImageCarousel/>
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