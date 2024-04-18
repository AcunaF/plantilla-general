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
                    <h4>{product.name}</h4>
                    <h4>{product.description}</h4>
                    <h4>Precio: {product.price}</h4>
                    <h4>Categoria</h4>
                    <button className="add-to-cart">
                        <FaShoppingCart /> Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}