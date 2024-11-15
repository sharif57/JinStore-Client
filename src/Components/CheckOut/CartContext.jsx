/* eslint-disable react-refresh/only-export-components */


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
        queryKey: ["cartItems", user?.email],
        queryFn: () => fetchCartItems(user?.email),
        enabled: !!user?.email,
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
            confirmButtonText: "Yes, delete it!",
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

    // Handle adding items to the cart
    const handlePost = (e, shop) => {
        e.preventDefault();
        const newPost = {
            name: shop.name,
            email: user?.email,
            image: shop.image || "",
            currentTime: new Date(),
            photo: user?.photoURL,
            description: shop.description,
            EmailName: user?.displayName,
            weight: shop.weight,
            price: shop.price,
            discount: shop.discount,
        };

        fetch("http://localhost:5000/addCart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Item added to cart successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    refetch(); // Refetch cart items to update the state
                }
            })
            .catch((error) => {
                console.error("Error adding item to cart:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to add item to cart",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <CartContext.Provider value={{ items, subtotal, totalDiscount, total, handleDelete, handlePost }}>
            {children}
        </CartContext.Provider>
    );
};
