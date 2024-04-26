import "./Footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {NavLink, useNavigate} from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <div>
            <br/>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin"/>
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github"/>
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3"/>
                                    <NavLink className="nav-item nav-link" to="/Page2">Employee profile</NavLink>
                                </h6>
                                <p>
                                    Here you will find all the information about the employees of the page, you must be
                                    Login to access
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Node
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Sql
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Linkedin
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Github
                                    </a>
                                </p>
                            </MDBCol>
                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2"/>
                                    Tandil, Buenos Aires, Argentina
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3"/>
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3"/> + 01 234 567 88
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        Facundo Acuña
                    </a>
                </div>
            </MDBFooter>
        </div>
    )

}