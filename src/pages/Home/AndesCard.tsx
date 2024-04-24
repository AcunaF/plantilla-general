import './AndesCard.css';
import {useQuery} from "react-query";
import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";


interface TarjetaProductoProps {
    imageUrl: string;
    title: string;
    price: number;
    originalPrice: number;
}

export const TarjetaProducto = ({ imageUrl, title, price, originalPrice }: TarjetaProductoProps) => {

    const getAndesCardPruducts = () => fetch('https://peticiones.online/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    const {data, error} = useQuery('products', getAndesCardPruducts)
    if (error) {
        // @ts-ignore
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="contenedorofert">
            {data.results.slice(0, 4).map((prod: any) => (
                <div
                    className="andes-card"
                    key={prod.key}>
                    <img
                        className="item-image"
                        src={prod.image} alt={prod.name} />
                    <div className="item-description">
                        <h2>{prod.name}</h2>
                        <h4>$ {prod.price}</h4>

                        <button className="btn btn-dark">
                        <NavLink
                            className="nav-item nav-link" to="/carrito">
                            <FaShoppingCart
                            className="cart-icon"/></NavLink></button>
                    </div>
                </div>
            ))}
            <a className="splinter-link" href="#" target="_self">

            </a>
        </div>
    );
};