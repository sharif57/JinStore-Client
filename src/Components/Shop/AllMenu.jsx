import { Dock, Logs } from "lucide-react";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllMenu = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/shop')
            .then(res => res.json())
            .then(data => setShops(data));
    }, []);

    return (
        <div className="my-6">
            <div className="bg-slate-200 p-6 flex justify-between items-center">
                <div>
                    <p>Showing all {shops.length} results</p>
                </div>
                <div className="flex justify-between items-center gap-8">
                    <details className="dropdown">
                        <summary className="btn m-1">Sort: Sort by latest</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Sort by latest</a></li>
                            <li><a>Sort by highest</a></li>
                        </ul>
                    </details>
                    <p>show: {shops.length} Items</p>

                    <Dock className="cursor-pointer" />
                    <Logs className="cursor-pointer" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
                {shops.map((shop, index) => (
                    <div key={index} className="group relative bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg overflow-hidden transition-shadow">
                        <Link to={`/shopDetails/${shop._id}`} className="block">
                            {/* Discount Badge */}
                            <div className="absolute top-3 left-3 z-10 bg-red-500 px-3 py-1 rounded-full text-white font-medium text-xs">
                                {shop.discount}
                            </div>

                            {/* Product Image */}
                            <img
                                src={shop.image}
                                alt={shop.name}
                                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Product Details */}
                            <div className="p-4 space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900">{shop.name}</h3>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl font-bold text-orange-400">${shop.price}</span>
                                    <span className="text-gray-500 line-through">${shop.discount}</span>
                                </div>
                            </div>
                        </Link>

                        {/* Action Section */}
                        <div className="flex justify-between items-center bg-gray-50 p-4 border-t">
                            <button className="flex items-center space-x-2 w-full btn btn-outline rounded-full text-black hover:text-white transition-colors">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllMenu;
