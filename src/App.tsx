import './App.css'
import {PageRoutes} from "./routes/PageRoutes.tsx";
import {QueryClient, QueryClientProvider} from 'react-query'
import {CartContext} from "./Auth/context/CartContext.tsx";
import {useState} from "react";

const queryClient = new QueryClient()

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item: any) => {
        // @ts-ignore
        setCartItems([...cartItems, item]);
    };

    const removeItem = (index: number) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    // @ts-ignore
    return (
        <CartContext.Provider value={{items: cartItems, addToCart, removeItem}}>
            <QueryClientProvider client={queryClient}>
                <div className="main-container">
                    <PageRoutes/>
                </div>
            </QueryClientProvider>
        </CartContext.Provider>
    )
}

export default App