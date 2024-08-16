import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CartPage = () => {
    const { cart, removeItemFromCart } = useCart();

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.items.map(item => (
                        <li key={item.id} className="flex justify-between mb-4">
                            <div>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => removeItemFromCart(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                    <li className="flex justify-between mt-4">
                        <strong>Total:</strong>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CartPage;
