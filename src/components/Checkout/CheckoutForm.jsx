// components/Checkout/CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ orderId, amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            'client_secret_from_backend', {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        }
        );

        if (error) {
            setError(error.message);
        } else if (paymentIntent.status === 'succeeded') {
            setSuccess(true);
            // You can then mark the order as paid in your database
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <div>{error}</div>}
            {success && <div>Payment Successful!</div>}
        </form>
    );
};

export default CheckoutForm;
