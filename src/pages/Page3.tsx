import {Col, Row} from 'react-bootstrap';
import { SearchForm } from '../components/ActivityForm/forms/search-form.jsx';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import company from '../assets/company/imagesCompany.jpeg';
import company2 from '../assets/company/images-logo.jpeg';
import company3 from '../assets/company/images-seguro.png';
export const Page3 = () => {
    return (
        <div>

            <h1>Registra tus productos</h1>
            <SearchForm/>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={company} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={company2} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={company3} roundedCircle />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}