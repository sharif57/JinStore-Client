// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useCart } from "../Cart/CartContext";

// const CheckOut = () => {
//     const { items, subtotal, totalDiscount, total, handleDelete } = useCart();

//     const [error, setError] = useState('')
//     const [clientSecret, setClientSecret] = useState("")
//     const [transactionId, setTransactionId] = useState("")
//     const { user } = useContext(AuthContext)
//     const stripe = useStripe();
//     const elements = useElements()
//     const axiosSecure = useAxiosSecure()
//     const totalPrice = total;

//     useEffect(() => {
//         axiosSecure.post('/create-payment-intent', { price: totalPrice })
//             .then(res => {
//                 console.log(res.data.clientSecret);
//                 setClientSecret(res.data.clientSecret)
//             })
//     }, [axiosSecure, totalPrice])

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         console.log('hfjsfhj');
//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement)

//         if (card === null) {
//             return
//         }

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             console.log('payment error', error);
//             setError(error.message)
//         }
//         else {
//             console.log('payment method', paymentMethod);
//             setError('')
//         }

//         // confirm payments
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card,
//                 billing_details: {
//                     email: user?.email || 'anonymous',
//                     name: user?.displayName || 'anonymous'
//                 }
//             }
//         })
//         if (confirmError) {
//             console.log('confirm error');
//         }
//         else {
//             console.log('payment intent', paymentIntent);
//             if (paymentIntent.status === 'succeeded') {
//                 console.log('transaction id', paymentIntent.id);
//                 setTransactionId(paymentIntent.id)


//                 // now save the payment in the database
//                 const payment = {
//                     email: user.email,
//                     price: totalPrice,
//                     transactionId: paymentIntent.id,
//                     status: 'Membership',
//                     golden: 'https://www.iconpacks.net/icons/1/free-badge-icon-1361-thumb.png',
//                     // Bronze:  'https://cdn.iconscout.com/icon/premium/png-256-thumb/badge-2089190-1774058.png?f=webp&w=128'

//                 }

//                 const res = await axiosSecure.post('users', payment)
//                 console.log('payment saved', res);
//             }
//         }

//     }

//     return (
//         <div>
//             <div>
//                 <h1>Total: {total}</h1>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className="btn btn-sm btn-outline my-4" type="submit" disabled={!stripe || !clientSecret}>
//                     Pay
//                 </button>
//                 <p className="text-red-600">{error}</p>

//                 {transactionId && <p className="text-green-500">your transaction id: {transactionId}</p>}
//             </form>
//             <div className="min-h-screen bg-gray-100 py-12">
//                 <div className="container mx-auto max-w-4xl p-6 bg-white shadow-lg rounded-lg">
//                     <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
//                         Checkout
//                     </h2>

//                     <form className="space-y-8">
//                         {/* Contact Information */}
//                         <div>
//                             <h3 className="text-lg font-medium text-gray-700 mb-4">
//                                 Contact Information
//                             </h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                                 <input
//                                     type="text"
//                                     placeholder="First Name"
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Last Name"
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <input
//                                     type="email"
//                                     placeholder="Email Address"
//                                     className="col-span-1 sm:col-span-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Phone Number"
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                             </div>
//                         </div>

//                         {/* Shipping Address */}
//                         <div>
//                             <h3 className="text-lg font-medium text-gray-700 mb-4">
//                                 Shipping Address
//                             </h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                                 <input
//                                     type="text"
//                                     placeholder="Address Line 1"
//                                     className="col-span-1 sm:col-span-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Address Line 2"
//                                     className="col-span-1 sm:col-span-2 w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="City"
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Postal Code"
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <select
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 >
//                                     <option value="">Select Country</option>
//                                     <option value="usa">United States</option>
//                                     <option value="canada">Canada</option>
//                                     {/* Additional countries */}
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Payment Information */}
//                         <div>
//                             <h3 className="text-lg font-medium text-gray-700 mb-4">
//                                 Payment Information
//                             </h3>
//                             <div className="grid grid-cols-1 gap-6">
//                                 <input
//                                     type="text"
//                                     placeholder="Card Number"
//                                     className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                 />
//                                 <div className="grid grid-cols-2 gap-6">
//                                     <input
//                                         type="text"
//                                         placeholder="Expiry Date (MM/YY)"
//                                         className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="CVC"
//                                         className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Order Summary */}
//                         <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//                             <h3 className="text-lg font-medium text-gray-700 mb-4">
//                                 Order Summary
//                             </h3>
//                             <div className="flex justify-between mb-2">
//                                 <span>Subtotal</span>
//                                 <span>£100.00</span>
//                             </div>
//                             <div className="flex justify-between mb-2">
//                                 <span>Discount</span>
//                                 <span>-£10.00</span>
//                             </div>
//                             <div className="flex justify-between font-semibold">
//                                 <span>Total</span>
//                                 <span>£90.00</span>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="text-center">
//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-auto inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 transition"
//                             >
//                                 Place Order
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckOut;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCart } from "../Cart/CartContext";

const CheckOut = () => {
    const { items, subtotal, totalDiscount, total } = useCart();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
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
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto max-w-4xl p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    Checkout
                </h2>

                {/* Form for contact, address, and card information */}
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
                    {transactionId && <p className="text-green-500">Transaction ID: {transactionId}</p>}
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
