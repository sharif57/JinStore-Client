// /* eslint-disable react/prop-types */
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../AuthProvider/AuthProvider";


// const CartContext = createContext();
    
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const { user } = useContext(AuthContext);
//     const [items, setItems] = useState([]);
//     const [subtotal, setSubtotal] = useState(0);
//     const [totalDiscount, setTotalDiscount] = useState(0);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         if (user?.email) {
//             axios(`http://localhost:5000/addCart/${user?.email}`).then((res) => {
//                 setItems(res.data);
//                 const calcSubtotal = res.data.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
//                 const calcDiscount = res.data.reduce((acc, item) => acc + parseFloat(item.discount || 0), 0);
//                 setSubtotal(calcSubtotal);
//                 setTotalDiscount(calcDiscount);
//                 setTotal(calcSubtotal - calcDiscount);
//             });
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
//                 fetch(`http://localhost:5000/deleteItem/${_id}`, { method: "DELETE" })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.deletedCount > 0) {
//                             Swal.fire("Deleted!", "Your item has been deleted.", "success");
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
//         <CartContext.Provider value={{ items, subtotal, totalDiscount, total, handleDelete }}>
//             {children}
//         </CartContext.Provider>
//     );
// };


/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query"; 
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Fetch cart items from the API
const fetchCartItems = async (email) => {
    const response = await axios.get(`http://localhost:5000/addCart/${email}`);
    return response.data;
};

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const { data: items = [], refetch } = useQuery({
        queryKey: ['cartItems', user?.email], 
        queryFn: () => fetchCartItems(user?.email), 
        enabled: !!user?.email 
    });

    // Calculate subtotal, total discount, and total
    const subtotal = items.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
    const totalDiscount = items.reduce((acc, item) => acc + parseFloat(item.discount || 0), 0);
    const total = subtotal - totalDiscount;

    // Handle deletion of cart items
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteItem/${_id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            refetch(); // Refetch cart items to update the state
                        }
                    });
            }
        });
    };

    return (
        <CartContext.Provider value={{ items, subtotal, totalDiscount, total, handleDelete }}>
            {children}
        </CartContext.Provider>
    );
};
