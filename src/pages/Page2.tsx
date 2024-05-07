import {Search} from "../components/Search/Search.tsx";

import {Link} from "react-router-dom";

export const Page2 = () => {
    return (
        <>
            <div className="container-fluid mt-4 ">
                <h4>Complete this form to enter a new employee <Link to="/altaEmpleado"> New Slave 😈 </Link></h4>
                <Search/>
            </div>
        </>
    )
}