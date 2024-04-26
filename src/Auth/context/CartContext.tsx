import { createContext, useState } from 'react';

interface CartContextType {
    items: any[];
    addToCart: (item: any) => void;
    removeItem: (index: number) => void;
    clearCart: () => void;
}
export const CartContext = createContext<CartContextType | undefined>(undefined);

// @ts-ignore
export const CartProvider: React.FC = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToCart = (item: any) => {
        // @ts-ignore
        setItems(prevItems => [...prevItems, item]);
    };

    const removeItem = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{ items, addToCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

