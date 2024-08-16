// components/OrderSummary.jsx
import React from 'react';
import CheckoutForm from './Checkout/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const OrderSummary = ({ orderId, amount }) => {
    return (
        <Elements stripe={stripePromise}>
            <h2>Your Order Summary</h2>
            {/* Other order details */}
            <CheckoutForm orderId={orderId} amount={amount} />
        </Elements>
    );
};

export default OrderSummary;
