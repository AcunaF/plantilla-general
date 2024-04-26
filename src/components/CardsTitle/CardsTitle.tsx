import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import prn from "../../assets/Banners/PRNews.io4_.jpg";
import "./CardsTitle.css"

export const CardsTitle = () => {
    return (
        <div className="row-cols-lg-1">
            <Row
                xs={1} md={2} className="Cards-container  g-2">
                {Array.from({length: 6}).map((_, idx) => (
                    <Col key={idx}>
                        <Card
                        className="Card"
                        >
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
    );
}