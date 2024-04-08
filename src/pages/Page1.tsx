import {useState} from "react";
import './page1Style.css';

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

    // @ts-ignore
    return (
        <div className="container">
            <p className="box">Counter1 :{counter1}</p>
            <p className="box">Counter2 :{counter2}</p>
            <p className="box">Counter3 :{counter3}</p>
            <hr/>
            <div className="btn-group m-2">
                <div>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter1: counter1 + 1})}> Incrementar counter1
                    </button>
                    <button className="btn btn-primary m-2"
                            onClick={() => setState({...state, counter1: counter1 - 1})}> Restar counter1
                    </button>
                </div>
            </div>
                <div>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter2: counter2 + 1})}>
                        Incrementar counter2
                    </button>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter2: counter2 - 1})}>
                        Restar counter2
                    </button>
                </div>
            <div>
                </div>
                <div>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter3: counter3 + 1})}>
                        Incrementar counter3
                    </button>
                    <button className="btn btn-primary m-2" onClick={() => setState({...state, counter3: counter3 - 1})}>
                        Restar counter3
                    </button>
                </div>
            <div>
                <button className="btn btn-primary m-2" onClick={handleReset}>
                    Reset
                </button>
                <button className="btn btn-outline-primary m-2" onClick={() => handleIncrement('counter1')}> Increment
                </button>
            </div>
        </div>
    )
}
