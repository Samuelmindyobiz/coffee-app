import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], totalPrice: 0 });
    const [favorites, setFavorites] = useState(new Set()); // Manage favorites with a Set for unique items

    const addItemToCart = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.items.findIndex(i => i.id === item.id);
            let newItems;
            let newTotalPrice;

            if (existingItemIndex >= 0) {
                newItems = [...prevCart.items];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + item.quantity,
                };
            } else {
                newItems = [...prevCart.items, item];
            }

            newTotalPrice = newItems.reduce((total, i) => total + i.price * i.quantity, 0);

            return { items: newItems, totalPrice: newTotalPrice };
        });
    };

    const removeItemFromCart = (itemId) => {
        setCart((prevCart) => {
            const newItems = prevCart.items.filter(item => item.id !== itemId);
            const newTotalPrice = newItems.reduce((total, i) => total + i.price * i.quantity, 0);
            return { items: newItems, totalPrice: newTotalPrice };
        });
    };

    const addToFavorites = (item) => {
        setFavorites((prevFavorites) => {
            const newFavorites = new Set(prevFavorites);
            if (newFavorites.has(item.id)) {
                newFavorites.delete(item.id); // Remove from favorites if already exists
            } else {
                newFavorites.add(item.id); // Add to favorites if not exists
            }
            return newFavorites;
        });
    };

    const getFavoriteItems = (items) => {
        return items.filter(item => favorites.has(item.id));
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, addToFavorites, getFavoriteItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
