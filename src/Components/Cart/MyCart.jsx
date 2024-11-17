// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const MyCart = () => {
//     const { user } = useContext(AuthContext);

//     const [items, setItems] = useState([]);

//     const [subtotal, setSubtotal] = useState(0);
//     const [totalDiscount, setTotalDiscount] = useState(0);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         if (user?.email) {
//             axios(`http://localhost:5000/addCart/${user?.email}`)
//                 .then((res) => {
//                     setItems(res.data);

//                     // Calculate subtotal and total discount
//                     const calcSubtotal = res.data.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
//                     const calcDiscount = res.data.reduce((acc, item) => acc + parseFloat(item.discount || 0), 0);

//                     // Set the values in the state
//                     setSubtotal(calcSubtotal);
//                     setTotalDiscount(calcDiscount);
//                     setTotal(calcSubtotal - calcDiscount);
//                 });
//         }
//     }, [user]);

//     const handleDelete = (_id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/deleteItem/${_id}`, {
//                     method: "DELETE"
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.deletedCount > 0) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your item has been deleted.",
//                                 icon: "success"
//                             });

//                             const remainingItems = items.filter((item) => item._id !== _id);
//                             setItems(remainingItems);

//                             const calcSubtotal = remainingItems.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
//                             const calcDiscount = remainingItems.reduce((acc, item) => acc + parseFloat(item.discount || 0), 0);
//                             setSubtotal(calcSubtotal);
//                             setTotalDiscount(calcDiscount);
//                             setTotal(calcSubtotal - calcDiscount);
//                         }
//                     });
//             }
//         });
//     };


//     return (
//         <div className="">
//             <section>
//                 <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//                     <div className="mx-auto max-w-3xl">
//                         <header className="text-center">
//                             <h1 className="text-xl font-bold text-gray-900 sm:text-3xl capitalize">Your Cart</h1>
//                         </header>

//                         <div className="mt-8">
//                             <ul className="space-y-4">
//                                 {items.map((item, index) => (
//                                     <li key={index} className="flex items-center gap-4 ">
//                                         <img
//                                             src={item.image}
//                                             alt=""
//                                             className="size-16 rounded object-cover"
//                                         />

//                                         <div>
//                                             <h3 className="text-xl text-gray-900">{item.name}</h3>

//                                             <dl className="mt-0.5 space-y-px text-xs text-gray-600">
//                                                 <div>
//                                                     <dt className="inline">Price:</dt>
//                                                     <dd className="inline">${item.price}</dd>
//                                                 </div>
//                                                 <div>
//                                                     <dt className="inline">Discount:</dt>
//                                                     <dd className="inline line-through">$ {item.discount}</dd>
//                                                 </div>

//                                                 <div>
//                                                     <dt className="inline">Weight: </dt>
//                                                     <dd className="inline">{item.weight} Kg</dd>
//                                                 </div>
//                                             </dl>
//                                         </div>

//                                         <div className="flex flex-1 items-center justify-end gap-2">
//                                             <button onClick={() => handleDelete(item._id)} className="text-gray-600 transition hover:text-red-600">
//                                                 <span className="sr-only">Remove item</span>

//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     strokeWidth="1.5"
//                                                     stroke="currentColor"
//                                                     className="size-4"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
//                                 <div className="w-screen max-w-lg space-y-4">
//                                     <dl className="space-y-0.5 text-sm text-gray-700">
//                                         <div className="flex justify-between">
//                                             <dt>Subtotal</dt>
//                                             <dd>£{subtotal.toFixed(2)}</dd>
//                                         </div>

//                                         <div className="flex justify-between">
//                                             <dt>Discount</dt>
//                                             <dd>-£{totalDiscount.toFixed(2)}</dd>
//                                         </div>

//                                         <div className="flex justify-between !text-base font-medium">
//                                             <dt>Total</dt>
//                                             <dd>£{total.toFixed(2)}</dd>
//                                         </div>
//                                     </dl>

//                                     <div className="flex justify-end">
//                                         <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth="1.5"
//                                                 stroke="currentColor"
//                                                 className="-ms-1 me-1.5 size-4"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
//                                                 />
//                                             </svg>

//                                             <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
//                                         </span>
//                                     </div>

//                                     <div className="flex justify-end">
//                                         <Link to={'/checkOut'}
//                                             className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
//                                         >
//                                             Checkout
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default MyCart;

import { Link } from "react-router-dom";
import { useCart } from "../CheckOut/CartContext";
import { Trash2 } from "lucide-react";

const MyCart = () => {
    const { items, subtotal, totalDiscount, total, handleDelete } = useCart();

    return (
        <div className="">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl capitalize">Your Cart</h1>
                        </header>
                        <div className="mt-8">
                            <ul className="space-y-4">
                                {items.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 ">
                                        <img src={item.image} alt="" className="size-16 rounded object-cover" />
                                        <div>
                                            <h3 className="text-xl text-gray-900">{item.name}</h3>
                                            <dl className="mt-0.5 space-y-px text-xs text-gray-600">
                                                <div><dt className="inline">Price:</dt><dd className="inline">${item.price}</dd></div>
                                                <div><dt className="inline">Discount:</dt><dd className="inline line-through">$ {item.discount}</dd></div>
                                                <div><dt className="inline">Weight: </dt><dd className="inline">{item.weight} Kg</dd></div>
                                            </dl>
                                        </div>
                                        <div className="flex flex-1 items-center justify-end gap-2">
                                            <button onClick={() => handleDelete(item._id)} className="text-gray-600 transition hover:text-red-600">
                                                <span className=""><Trash2 /></span>
                                                {/* SVG for delete icon */}
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="space-y-0.5 text-sm text-gray-700">
                                        <div className="flex justify-between"><dt>Subtotal</dt><dd>£{subtotal.toFixed(2)}</dd></div>
                                        <div className="flex justify-between"><dt>Discount</dt><dd>-£{totalDiscount.toFixed(2)}</dd></div>
                                        <div className="flex justify-between !text-base font-medium"><dt>Total</dt><dd>£{total.toFixed(2)}</dd></div>
                                    </dl>
                                    <div className="flex justify-end">
                                        <Link to={'/checkOut'} className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyCart; 