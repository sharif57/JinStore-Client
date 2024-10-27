import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCart } from "./CartContext";

const CheckOut = () => {
    const { items, subtotal, totalDiscount, total } = useCart();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // Added for thank you message
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: total })
            .then(res => setClientSecret(res.data.clientSecret))
            .catch(console.error);
    }, [axiosSecure, total]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
        } else if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            setIsPaymentSuccessful(true); // Set success status

            const payment = {
                email: user.email,
                price: total,
                image: user.photoURL,
                transactionId: paymentIntent.id,
                status: 'Membership'
            };
            await axiosSecure.post('/users', payment);
        }
    };

    return (
        <div className=" -mt-32">
            <div className="container mx-auto max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    Checkout
                </h2>

                {/* Display Thank You message after successful payment */}
                {isPaymentSuccessful ? (
                    <div className="text-center text-green-600 my-4">
                        <h3 className="text-2xl font-bold">Thank You!</h3>
                        <p>Your payment was successful.</p>
                        <p>Transaction ID: {transactionId}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-4">
                                Contact Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    defaultValue={user?.displayName}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    defaultValue={user?.email || ''}
                                    className="col-span-1 sm:col-span-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-4">
                                Shipping Address
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" placeholder="Address Line 1" className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                <input type="text" placeholder="City" className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                <input type="text" placeholder="Postal Code" className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-4">
                                Payment Information
                            </h3>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full sm:w-auto inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 transition"
                                disabled={!stripe || !clientSecret}
                            >
                                Pay
                            </button>
                        </div>

                        {error && <p className="text-red-600">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default CheckOut;
