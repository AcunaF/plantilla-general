import {useQuery} from "react-query";
import {ProductQuery} from "./Queryviews.tsx";
import "./Styles.css"
import {ImageCarousel} from "../Home/Carousel.tsx";
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBBadge,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from "mdb-react-ui-kit";
import {Cards} from "../../components/Card/Cards.tsx";
//import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter.jsx";

export const ReactQuery = () => {

    const getProducts = async () => {
        const response = await fetch('https://peticiones.online/api/products');
        return response.json();
    }
    const {data, status} = useQuery('products', getProducts)

    if (status === 'loading') {
        return <p>REcuperando los Productos</p>;
    }
    if (status === 'error') {
        return <p>Ha ocurrido un error</p>;
    }
    return (
        <div className="flex-container">
            <br/>
            <div className="cards vc_column tdi_58  wpb_column vc_column_container tdc-column td-pb-span4">
                <Cards/>
            </div>
            <div className="Imperdible ">
                <div>
                    <h2>
                        Imperdibles de la semana
                        <MDBBadge className=''>NEW</MDBBadge>
                    </h2>
                </div>
                <div className="carousel ">
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
                    <ImageCarousel/>
                    <br/>
                    <ImageCarousel/>
                    <div className="m-5">
                        <h4>Favoritos</h4>
                        <hr className="hr hr-blurry"/>

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
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Subheading</div>
                                    Cras justo odio
                                </div>
                                <MDBBadge pill light>
                                    14
                                </MDBBadge>
                            </MDBListGroupItem>
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
                            <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                                <div className='ms-2 me-auto'>
                                    <div className='fw-bold'>Subheading</div>
                                    Cras justo odio
                                </div>
                                <MDBBadge pill light>
                                    14
                                </MDBBadge>
                            </MDBListGroupItem>
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
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="lista ">
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
                            data-content="And here's some amazing content. It's very engaging. Right?">Zapatillas
                    </button>
                    <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                            title="Popover title"
                            data-content="And here's some amazing content. It's very engaging. Right?">Zapatillas
                    </button>
                    <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                            title="Popover title"
                            data-content="And here's some amazing content. It's very engaging. Right?">Zapatillas
                    </button>
                    <button type="button" className="btn btn-lg btn-danger m-2" data-toggle="popover"
                            title="Popover title"
                            data-content="And here's some amazing content. It's very engaging. Right?">Zapatillas
                    </button>

                </div>
            </div>
            <MDBCard style={{maxWidth: '540px'}}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                        <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...'
                                      fluid/>
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This
                                content is a little bit longer.
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <MDBCard style={{maxWidth: '540px'}}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                        <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...'
                                      fluid/>
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This
                                content is a little bit longer.
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <div className="product-grid">
                {data.results.map((prod: any) => (
                    <ProductQuery image={prod.image} name={prod.name} description={prod.description}
                                  price={prod.price} key={prod.key}/>
                ))}
            </div>
        </div>
    )
}