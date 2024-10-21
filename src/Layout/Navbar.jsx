import { Heart, LogOut, MapPin } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.displayName);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))

    }


    const [items, setItems] = useState([])

    
    useEffect(() => {
        axios(`http://localhost:5000/addCart/${user?.email}`)
            .then(res => {
                setItems(res.data)
            })
    }, [user])

    return <div>
        <div className="navbar bg-base-100 py-6  border-2">
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
                <MapPin className="size-8" />


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
                    <Link to={'/myCart'} tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaShoppingCart className="size-8" />
                                <span className="badge badge-sm bg-red-500 text-white rounded-full indicator-item">{items.length}</span>
                            </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="navbar bg-base-100">
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
                        <ul className="flex gap-5 font-medium text-xl">
                            <Link to={'/work'}>
                                <li>How it works</li>
                            </Link>
                            <li>Almost Finished</li>
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
    </div>;
};
export default Navbar;