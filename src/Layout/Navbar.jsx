// import { Heart, LogOut, MapPin } from "lucide-react";
// import { useContext } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useCart } from "../Components/CheckOut/CartContext";

import { useEffect } from "react";


// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext)
//     console.log(user?.displayName);
//     const { items } = useCart(); 




//     const handleLogOut = () => {
//         logOut()
//             .then(() => console.log('logout successfully'))
//             .catch(error => console.error(error))
//     }


//     // const [items, setItems] = useState([])


//     // useEffect(() => {
//     //     fetch(`http://localhost:5000/addCart/${user?.email}`)
//     //         .then(res => res.json())
//     //         .then(data => setItems(data))
//     // }, [user])




//     return <div className=" bg-stone-100  fixed top-0 w-full z-30 ">

//         <div className="container mx-auto text-black ">
//             <div className="navbar">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             <li><a>Item 1</a></li>
//                             <li>
//                                 <a>Parent</a>
//                                 <ul className="p-2">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </li>
//                             <li><a>Item 3</a></li>
//                         </ul>
//                     </div>
//                     <Link className="btn btn-ghost text-xl"><img src="\Group 70.png" alt="" /></Link>
//                     <Link to={'/map'}>
//                         <MapPin className="size-8" />
//                     </Link>


//                     <div className="pl-5 flex flex-col items-start">
//                         <p>Deliver to</p>
//                         <h1 className="font-bold">All</h1>
//                     </div>
//                 </div>
//                 <div className="navbar-center hidden lg:flex w-[850px] mx-auto">
//                     <label className="input input-bordered flex items-center gap-2 w-full">
//                         <input type="text" className="grow w-full" placeholder="Search for products, categories or brands..." />
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </label>

//                 </div>
//                 <div className="navbar-end">
//                     {/* <a className="btn">Button</a> */}
//                     <div className="space-x-3 flex-row flex items-center justify-between gap-3">

//                         {
//                             user ? (
//                                 <div className='dropdown dropdown-start z-50'>
//                                     <div
//                                         tabIndex={0}
//                                         role='button'
//                                         className='btn btn-ghost btn-circle avatar'
//                                     >
//                                         <div title={user?.displayName} className='w-10 rounded-full'>
//                                             <img
//                                                 referrerPolicy='no-referrer'
//                                                 alt='User Profile Photo'
//                                                 src={user?.photoURL}
//                                             />
//                                         </div>
//                                     </div>
//                                     <ul
//                                         tabIndex={0}
//                                         className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
//                                     >
//                                         <li>
//                                             <NavLink className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>
//                                                 {user?.displayName}
//                                             </NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink to='dashboard' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>
//                                                 Dashboard
//                                             </NavLink>
//                                         </li>
//                                         <li className='mt-2'>
//                                             <button onClick={handleLogOut} className='btn bg-white rounded-full block text-center flex shadow-xl'>Logout <LogOut /></button>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             ) : (
//                                 <img src="/Vector.png" alt="Placeholder" />
//                             )
//                         }

//                         {/* <h1>name:{user?.displayName}</h1>
//                     <img className="size-10" src={user?.photoURL} alt="" /> */}
//                         {
//                             !user && (
//                                 <ul>
//                                     <Link to={'/login'}>
//                                         <p className="text-sm">Sign In</p>
//                                         <h1 className="font-bold">Account</h1>
//                                     </Link>
//                                 </ul>
//                             )
//                         }



//                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                             <div className="indicator">
//                                 {/* <img src="/Link (1).png" alt="" /> */}
//                                 <Heart className="size-8" />
//                                 <span className="badge badge-sm bg-red-500 text-white rounded-full indicator-item">8</span>
//                             </div>
//                         </div>
//                         <Link to="/myCart" tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                             <div className="indicator">
//                                 <FaShoppingCart className="size-8" />
//                                 <span className="badge badge-sm bg-red-500 text-white rounded-full indicator-item">
//                                     {items.length} 
//                                 </span>
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="navbar -mt-4">
//                 <div className="flex-1">
//                     <div className="flex-none">
//                         <ul className="menu menu-horizontal px-1">

//                             <Link to={'/'}><li><a>Home</a></li></Link>
//                             <Link to={'/shop'}><li><a>Shop</a></li></Link>
//                             <Link to={'/fruits'}><li><a>Fruits & Vegetables</a></li></Link>
//                             <Link to={'/beverages'}><li><a>Beverages</a></li></Link>
//                             <Link to={'/blogs'}><li><a>Blog</a></li></Link>
//                             <li><a>Contact</a></li>

//                         </ul>
//                     </div>

//                 </div>

//                 <div className="flex-none">
//                     <div className="dropdown dropdown-end">
//                         <div className="indicator">
//                             <ul className="flex gap-5 ">
//                                 <Link to={'/topSelling'}>
//                                     <li>Trending Products</li>
//                                 </Link>
//                                 <Link to={'/work'}>
//                                     <li>How it works</li>
//                                 </Link>
//                             </ul>
//                         </div>

//                     </div>
//                     <div className="dropdown dropdown-end">

//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

//                             <li><a>Settings</a></li>
//                             <li><a>Logout</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>;
// };
// export default Navbar;

import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, BaggageClaim, MapPin, MessageCircleHeart } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useCart } from "../Components/CheckOut/CartContext";


export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { pathname } = useLocation();
    const { items, wish } = useCart();

    const menuList = [
        { title: 'Home', path: '/' },
        { title: 'Shop', path: '/shop' },
        { title: 'Fruits & Vegetables', path: '/fruits' },
        { title: 'Beverages', path: '/beverages' },
        {
            title: 'Pages',
            // path: '/blogs',
            icon: <ChevronDown className="inline w-4 h-4 ml-1" />,
            submenu: [
                { title: 'Trending Products', path: '/blogs/topSelling' },
                { title: 'Contact', path: '/blogs/cart' },

            ],
        },
        { title: 'Blog', path: '/blogs' },

    ];
    const { user, logOut } = useContext(AuthContext)
    console.log('user ', user);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))
    }
    // const [cartItems, setCartItems] = useState([]);

    // // Function to fetch cart items
    // const fetchCartItems = () => {
    //     if (user?.email) {
    //         axios.get(`http://localhost:3000/addCart/${user.email}`)
    //             .then(res => setCartItems(res.data))
    //             .catch(error => console.error("Error fetching cart items:", error));
    //     }
    // };

    // // Initial fetch of cart items
    // useEffect(() => {
    //     fetchCartItems();
    // }, [user]);


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center lg:gap-4 gap-2">
                    <Link to="/" className="flex items-center">
                        <img className="w-40 md:w-48" src='/Group 70.png' alt="Logo" />
                    </Link>
                    {/* <Link className="btn btn-ghost text-xl"><img src="\Group 70.png" alt="" /></Link> */}
                    <div className="flex items-center">
                        <Link to={'/map'}>
                            <MapPin className="size-8" />
                        </Link>


                        <div className="lg:pl-3 pl-2 flex flex-col items-start">
                            <p>Deliver to</p>
                            <h1 className="font-bold">All</h1>
                        </div>
                    </div>
                </div>

                {/* Hamburger menu icon for mobile */}
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                    {!open ? <Menu className="w-8 h-8 text-primary" /> : <X className="w-6 h-6 text-primary" />}
                </div>

                {/* Menu items */}
                <ul
                    className={`lg:flex items-center gap-8 text-xl absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${open ? 'top-20 p-6 lg:p-0' : '-top-96'
                        }`}
                >
                    {menuList.map((item, index) => (
                        <li
                            key={index}
                            className={`relative ${item.path === pathname ? 'text-primary font-bold' : 'text-black'} text-lg lg:my-0 my-2`}
                            onMouseEnter={() => item.submenu && setDropdownOpen(true)}
                            onMouseLeave={() => item.submenu && setDropdownOpen(false)}
                        >
                            <Link to={item.path} className="flex items-center hover:text-primary transition duration-200">
                                {item.title}
                                {item.icon && item.icon}
                            </Link>

                            {/* Dropdown menu for Pages */}
                            {item.submenu && dropdownOpen && (
                                <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 text-black z-10">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="px-4 py-2 hover:bg-primary hover:text-white transition duration-200">
                                            <Link to={subItem.path}>{subItem.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    {/* Login and Cart buttons */}
                    <li className="flex items-center gap-4 mt-4 lg:mt-0 lg:ml-4">


                        <Link
                            to="/myCart"
                            className="relative inline-flex items-center"
                        >
                            {/* Cart Icon */}
                            <BaggageClaim className="size-10" />

                            {/* Badge */}
                            <span className="absolute -top-1.5 -right-1.5 text-[12px] font-semibold text-white bg-red-500 rounded-full size-6 flex items-center justify-center shadow-md ">
                                {items.length}
                            </span>
                        </Link>
                        <Link
                            to="/blogs/cart"
                            className="relative inline-flex items-center"
                        >
                            {/* Cart Icon */}
                            <MessageCircleHeart className="size-10 text-gray-800" />

                            {/* Badge */}
                            <span className="absolute -top-1.5 -right-1.5 text-[16px] font-semibold text-white bg-red-500 rounded-full size-6 flex items-center justify-center shadow-md ">
                                {wish.length}
                            </span>
                        </Link>



                        <div className="dropdown dropdown-end">
                            {/* Show this dropdown when the user is logged in */}
                            {user ? (
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {/* Show user photo or default photo */}
                                            <img
                                                alt="User Avatar"
                                                src={user.photoURL || "/Figure → testimonial3-personimage1.jpg.png"}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                    >
                                        <li>
                                            <Link to={'/profile'} className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                            <a className="justify-between">
                                                {user?.displayName}
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                className="w-full text-left px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                                            >
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                // Show this if the user is not logged in
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                                >
                                    <User className="w-5 h-5" />
                                    Log In
                                </Link>
                            )}
                        </div>




                    </li>
                </ul>
            </div>
        </nav>
    );
}

