import {useState} from "react";
import '../page1Style.css';
import {CardsNew} from "../../components/New-cards/CardsNew.tsx";
import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter";
import { Card, CardGroup } from "react-bootstrap";

export const Page1 = () => {


    const [state, setState] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
    });
    const {counter1, counter2, counter3} = state;

    const handleReset = () => {
        setState({
            counter1: 0,
            counter2: 0,
            counter3: 0,
        });
    }
    const handleIncrement = () => {
        setState({
            counter1: counter1 + 1,
            counter2: counter2 + 1,
            counter3: counter3 + 1,
        })
    }

    return (
        <div className="container">
            <div className="row-cols-auto mb-5 ">
                <CarouselFooter/>
            </div>
            <div className="mb-5">
                <CardsNew/>
            </div>
                <div>
                    <p className="box1">Counter1 :{counter1}</p>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter1: counter1 + 1})}> Incrementar counter1
                    </button>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter1: counter1 - 1})}> Restar counter1
                    </button>
                </div>
                <hr></hr>
                <div>
                    <p className="box2">Counter2 :{counter2}</p>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter2: counter2 + 1})}>
                        Incrementar counter2
                    </button>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter2: counter2 - 1})}>
                        Restar counter2
                    </button>
                </div>
                <hr></hr>
                <div>
                    <p className="box3">Counter3 :{counter3}</p>
                    <div className="btn-group m-2">
                        <button className="btn btn-primary m-2"
                                onClick={() => setState({...state, counter3: counter3 + 1})}>
                            Incrementar counter3
                        </button>
                        <button className="btn btn-primary m-2"
                                onClick={() => setState({...state, counter3: counter3 - 1})}>
                            Restar counter3
                        </button>
                    </div>
                </div>
                <hr></hr>


            <div className="btn-box">
                <button className="btn btn-primary m-2" onClick={handleReset}>
                    Reset
                </button>
                <button className="btn btn-outline-primary m-2" onClick={handleIncrement}> Increment
                </button>
            </div>
            <hr></hr>
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}