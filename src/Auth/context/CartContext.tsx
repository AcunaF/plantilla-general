import { createContext, useState } from 'react';

interface CartContextType {
    items: any[];
    addToCart: (item: any) => void;
    removeItem: (index: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
    items: [],
    addToCart: () => {},
    removeItem: () => {},
    clearCart: () => {},
});