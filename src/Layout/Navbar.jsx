import { Heart, LogOut, MapPin } from "lucide-react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useCart } from "../Components/CheckOut/CartContext";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.displayName);
    const { items } = useCart(); 




    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))
    }


    // const [items, setItems] = useState([])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/addCart/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [user])




    return <div className="bg-gradient-to-r from-[#f4f1bc] via-[#6b7280] to-[#a8a29e] fixed top-0 w-full z-30 ">

        <div className="container mx-auto text-black ">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><img src="\Group 70.png" alt="" /></Link>
                    <Link to={'/map'}>
                        <MapPin className="size-8" />
                    </Link>


                    <div className="pl-5 flex flex-col items-start">
                        <p>Deliver to</p>
                        <h1 className="font-bold">All</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex w-[850px] mx-auto">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow w-full" placeholder="Search for products, categories or brands..." />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>

                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <div className="space-x-3 flex-row flex items-center justify-between gap-3">

                        {
                            user ? (
                                <div className='dropdown dropdown-start z-50'>
                                    <div
                                        tabIndex={0}
                                        role='button'
                                        className='btn btn-ghost btn-circle avatar'
                                    >
                                        <div title={user?.displayName} className='w-10 rounded-full'>
                                            <img
                                                referrerPolicy='no-referrer'
                                                alt='User Profile Photo'
                                                src={user?.photoURL}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                    >
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>
                                                {user?.displayName}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='dashboard' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li className='mt-2'>
                                            <button onClick={handleLogOut} className='btn bg-white rounded-full block text-center flex shadow-xl'>Logout <LogOut /></button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <img src="/Vector.png" alt="Placeholder" />
                            )
                        }

                        {/* <h1>name:{user?.displayName}</h1>
                    <img className="size-10" src={user?.photoURL} alt="" /> */}
                        {
                            !user && (
                                <ul>
                                    <Link to={'/login'}>
                                        <p className="text-sm">Sign In</p>
                                        <h1 className="font-bold">Account</h1>
                                    </Link>
                                </ul>
                            )
                        }



                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                {/* <img src="/Link (1).png" alt="" /> */}
                                <Heart className="size-8" />
                                <span className="badge badge-sm bg-red-500 text-white rounded-full indicator-item">8</span>
                            </div>
                        </div>
                        <Link to="/myCart" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaShoppingCart className="size-8" />
                                <span className="badge badge-sm bg-red-500 text-white rounded-full indicator-item">
                                    {items.length} 
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar -mt-4">
                <div className="flex-1">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">

                            <Link to={'/'}><li><a>Home</a></li></Link>
                            <Link to={'/shop'}><li><a>Shop</a></li></Link>
                            <Link to={'/fruits'}><li><a>Fruits & Vegetables</a></li></Link>
                            <Link to={'/beverages'}><li><a>Beverages</a></li></Link>
                            <Link to={'/blogs'}><li><a>Blog</a></li></Link>
                            <li><a>Contact</a></li>

                        </ul>
                    </div>

                </div>

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div className="indicator">
                            <ul className="flex gap-5 ">
                                <Link to={'/topSelling'}>
                                    <li>Trending Products</li>
                                </Link>
                                <Link to={'/work'}>
                                    <li>How it works</li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                    <div className="dropdown dropdown-end">

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Navbar;


// import React, { useState } from 'react';

// function Navbar() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     return (
//         <div className="shadow-md bg-white">
//             {/* Top Bar */}
//             <div className="bg-gray-100 text-sm p-2 flex justify-between items-center">
//                 <div className="hidden md:flex items-center space-x-4">
//                     <a href="#" className="text-gray-600 hover:text-black">About Us</a>
//                     <a href="#" className="text-gray-600 hover:text-black">My Account</a>
//                     <a href="#" className="text-gray-600 hover:text-black">Wishlist</a>
//                 </div>
//                 <div className="text-gray-600 text-center md:text-right w-full md:w-auto">
//                     We deliver every day from <span className="text-red-500">7:00 to 23:00</span>
//                 </div>
//             </div>

//             {/* Main Navbar */}
//             <nav className="p-4 flex justify-between items-center container mx-auto">
//                 {/* Logo */}
//                 <div className="flex items-center space-x-2">
//                     <img src="/Group 70.png" alt="Logo" className="" /> {/* Replace with your logo */}
//                 </div>

//                 {/* Large Device Menu Links */}
//                 <div className="hidden md:flex items-center space-x-6">
//                     <a href="#" className="text-gray-700 hover:text-black">Home</a>
//                     <a href="#" className="text-gray-700 hover:text-black">Shop</a>
//                     <a href="#" className="text-gray-700 hover:text-black">Fruits & Vegetables</a>
//                     <a href="#" className="text-gray-700 hover:text-black">Beverages</a>
//                     <a href="#" className="text-gray-700 hover:text-black">Blog</a>
//                     <a href="#" className="text-gray-700 hover:text-black">Contact</a>
//                     <a href="#" className="text-red-500 font-semibold">Trending Products</a>
//                     <a href="#" className="text-red-500 font-semibold">
//                         Almost Finished <span className="bg-red-500 text-white px-2 py-1 rounded-md ml-1">SALE</span>
//                     </a>
//                 </div>

//                 {/* Icons & Mobile Menu Toggle */}
//                 <div className="flex items-center space-x-4">
//                     {/* Sign In Icon */}
//                     <a href="#" className="hidden md:flex text-gray-600 hover:text-black">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.071a1.5 1.5 0 000 2.121 1.5 1.5 0 002.121 0m10.608-13.682A2.25 2.25 0 1116.86 9.568M9.171 18a6.25 6.25 0 1112.1-4.36M6.5 12.25h.009M12 6.25h.009"/>
//                         </svg>
//                         <span>Sign In</span>
//                     </a>
//                     {/* Cart Icon */}
//                     <a href="#" className="text-gray-600 hover:text-black relative">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.405 2.027A1 1 0 006.38 6H19l-1 5H8l-.25 1.357m-1.5 1.643H17m0 0a2 2 0 01-2 2h-4a2 2 0 01-2-2"/>
//                         </svg>
//                         <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">0</span>
//                     </a>
//                     {/* Mobile Menu Toggle */}
//                     <button className="text-gray-600 hover:text-black md:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
//                         </svg>
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden bg-gray-100">
//                     <div className="p-4 space-y-2 text-gray-700">
//                         <a href="#" className="block hover:text-black">Home</a>
//                         <a href="#" className="block hover:text-black">Shop</a>
//                         <a href="#" className="block hover:text-black">Fruits & Vegetables</a>
//                         <a href="#" className="block hover:text-black">Beverages</a>
//                         <a href="#" className="block hover:text-black">Blog</a>
//                         <a href="#" className="block hover:text-black">Contact</a>
//                         <a href="#" className="block text-red-500 font-semibold">Trending Products</a>
//                         <a href="#" className="block text-red-500 font-semibold">
//                             Almost Finished <span className="bg-red-500 text-white px-2 py-1 rounded-md ml-1">SALE</span>
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;
