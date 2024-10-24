import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create Cart Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add item to cart using API
    const addToCart = async (product) => {
        try {
            const response = await axios.post('http:localhost:5000/api/cart/add', { product });
            setCart(response.data.cart);  // Update cart state with the data from API
        } catch (error) {
            console.error('Error adding to cart', error);
        }
    };

    // Function to remove item from cart using API
    const removeFromCart = async (productId) => {
        try {
            const response = await axios.post('http:localhost:5000/api/cart/remove', { productId });
            setCart(response.data.cart);  // Update cart state with the data from API
        } catch (error) {
            console.error('Error removing from cart', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
