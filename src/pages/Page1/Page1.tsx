import {useState} from "react";
import '../page1Style.css';
import {CardsNew} from "../../components/New-cards/CardsNew.tsx";
import {CarouselFooter} from "../../components/footer/CarouselFooter/CarouselFooter";

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
            <div className="row-cols-auto">
                <CarouselFooter/>
            </div>

            <div>
                <CardsNew/>
            </div>
            <div>
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

            </div>
            <div className="btn-box">
                <button className="btn btn-primary m-2" onClick={handleReset}>
                    Reset
                </button>
                <button className="btn btn-outline-primary m-2" onClick={handleIncrement}> Increment
                </button>
            </div>
            <hr></hr>
        </div>
    )
}