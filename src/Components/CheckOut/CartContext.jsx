

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Utility to fetch cart items
const fetchCartItems = async (email) => {
    const response = await axios.get(`https://jinstore-server.vercel.app/addCart/${email}`);
    return response.data;
};

// Utility to fetch wish-cart items
const fetchWish = async (email) => {
    const response = await axios.get(`https://jinstore-server.vercel.app/wishCart/${email}`);
    return response.data;
};

// Reusable function to post an item to an endpoint
const postItem = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const { data: items = [], refetch } = useQuery({
        queryKey: ["cartItems", user?.email],
        queryFn: () => fetchCartItems(user?.email),
        enabled: !!user?.email,
    });

    const { data: wish = [], refetch: refetchWish } = useQuery({
        queryKey: ["wishItems", user?.email],
        queryFn: () => fetchWish(user?.email),
        enabled: !!user?.email,
    });

    const subtotal = items.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
    const totalDiscount = items.reduce((acc, item) => acc + parseFloat(item.discount || 0), 0);
    const total = subtotal - totalDiscount;

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
                fetch(`https://jinstore-server.vercel.app/deleteItem/${_id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting item:", error);
                        Swal.fire("Error!", "Failed to delete item.", "error");
                    });
            }
        });
    };
    const handleWishDelete = (_id) => {
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
                fetch(`https://jinstore-server.vercel.app/wishCart/${_id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your wish  item has been deleted.", "success");
                            refetchWish();
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting item:", error);
                        Swal.fire("Error!", "Failed to delete item.", "error");
                    });
            }
        });
    };

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

        postItem("https://jinstore-server.vercel.app/addCart", newPost)
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Success!", "Item added to cart successfully", "success");
                    refetch();
                }
            })
            .catch((error) => {
                console.error("Error adding item to cart:", error);
                Swal.fire("Error!", "Failed to add item to cart", "error");
            });
    };

    const handleWish = (e, shop) => {
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

        postItem("https://jinstore-server.vercel.app/wishCart", newPost)
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Success!", "Item added to your wish cart successfully", "success");
                    refetchWish();
                }
            })
            .catch((error) => {
                console.error("Error adding item to wish cart:", error);
                Swal.fire("Error!", "Failed to add item to wish cart", "error");
            });
    };

    return (
        <CartContext.Provider value={{ items, wish, subtotal, totalDiscount, total, handleDelete,handleWishDelete, handlePost, handleWish }}>
            {children}
        </CartContext.Provider>
    );
};
