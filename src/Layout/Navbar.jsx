// import { Heart, LogOut, MapPin } from "lucide-react";
// import { useContext } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useCart } from "../Components/CheckOut/CartContext";


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

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";

// Example constants for navigation and logo
const navBarList = [
    { _id: 1, title: "Home", link: "/" },
    { _id: 2, title: "Shop", link: "/shop" },
    { _id: 3, title: "About", link: "/about" },
    { _id: 4, title: "Contact", link: "/contact" },
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [sidenav, setSidenav] = useState(false);
    const [category, setCategory] = useState(false);
    const [brand, setBrand] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 667) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };

        handleResize(); // Initialize menu visibility on load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
            <nav className="h-full px-4 max-w-container mx-auto relative flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/">
                    <img className="w-20 object-cover" src="/Group 70.png" alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                {showMenu && (
                    <motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-6"
                    >
                        {navBarList.map(({ _id, title, link }) => (
                            <li key={_id}>
                                <NavLink
                                    className="text-base text-[#767676] hover:font-bold hover:underline underline-offset-4 decoration-[1px] hover:text-[#262626]"
                                    to={link}
                                    state={{ data: location.pathname.split("/")[1] }}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </motion.ul>
                )}

                {/* Mobile Menu Icon */}
                <HiMenuAlt2
                    onClick={() => setSidenav(true)}
                    className="inline-block md:hidden cursor-pointer w-8 h-8"
                />

                {/* Mobile Sidenav */}
                {sidenav && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50">
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-[80%] h-full bg-white relative p-6"
                        >
                            {/* Close Button */}
                            <MdClose
                                onClick={() => setSidenav(false)}
                                className="absolute top-4 right-4 text-gray-500 text-2xl cursor-pointer hover:text-red-500"
                            />

                            {/* Logo in Sidenav */}
                            <img className="w-28 mb-6" src="/path/to/logo-light.png" alt="Logo" />

                            {/* Sidenav Links */}
                            <ul className="flex flex-col gap-4">
                                {navBarList.map(({ _id, title, link }) => (
                                    <li key={_id}>
                                        <NavLink
                                            className="text-base text-gray-800 hover:font-bold hover:underline underline-offset-4 decoration-[1px]"
                                            to={link}
                                            state={{ data: location.pathname.split("/")[1] }}
                                            onClick={() => setSidenav(false)}
                                        >
                                            {title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Shop by Category */}
                            <div className="mt-6">
                                <h1
                                    onClick={() => setCategory(!category)}
                                    className="flex justify-between items-center text-lg cursor-pointer font-semibold mb-2"
                                >
                                    Shop by Category
                                    <span>{category ? "-" : "+"}</span>
                                </h1>
                                {category && (
                                    <motion.ul
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm flex flex-col gap-2"
                                    >
                                        <li>New Arrivals</li>
                                        <li>Gadgets</li>
                                        <li>Accessories</li>
                                        <li>Electronics</li>
                                        <li>Others</li>
                                    </motion.ul>
                                )}
                            </div>

                            {/* Shop by Brand */}
                            <div className="mt-6">
                                <h1
                                    onClick={() => setBrand(!brand)}
                                    className="flex justify-between items-center text-lg cursor-pointer font-semibold mb-2"
                                >
                                    Shop by Brand
                                    <span>{brand ? "-" : "+"}</span>
                                </h1>
                                {brand && (
                                    <motion.ul
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm flex flex-col gap-2"
                                    >
                                        <li>Apple</li>
                                        <li>Samsung</li>
                                        <li>Sony</li>
                                        <li>LG</li>
                                        <li>Others</li>
                                    </motion.ul>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
