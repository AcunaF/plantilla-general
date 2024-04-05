import {AuthContext} from "../components/auth/context/AuthContext.tsx";
import {useContext} from "react";

export const Home = () => {
    // @ts-ignore
    const { dataUser, setDataUser } = useContext(AuthContext);
    const handleReset = () => {
        setDataUser((prevState: any) => ({
            ...prevState,
            firstName: ''
        }));
        console.log('Reset');
    };
    return (
        <div>
            <h1>Home</h1>
            <h2>Bienvenido {dataUser ? dataUser.firstName : "usuarisas"}</h2>
            <div className="">
                <button className="btn btn-outline-secondary m-2" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}