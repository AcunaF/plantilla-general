import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import { FaShoppingCart } from 'react-icons/fa';
import "./Styles.css"

export const ProductQuery = (product: { image: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
    return (
        <div className="producto">
            <div className="left" style={{backgroundImage : `url(${product.image})`}}>
            </div>
            <div className="right">
                <div className="product">
                    <p><b>{product.name}</b></p>
                    <span>{product.description}</span>
                    <h5>Precio: {product.price}</h5>
                    <button className="add-to-cart">
                        <FaShoppingCart /> Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}