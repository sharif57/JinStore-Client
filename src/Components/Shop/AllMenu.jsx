import {  Grid, List } from "lucide-react";
import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CheckOut/CartContext";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllMenu = () => {
    const { handlePost } = useCart(); // Access handlePost from the CartContext
    const [shops, setShops] = useState([]);
    const [sortOption, setSortOption] = useState("latest");
    const [isGridLayout, setIsGridLayout] = useState(true);

    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://jinstore-server.vercel.app/shop')
            .then(res => res.json())
            .then(data => setShops(data));
    }, []);

    const handleSortChange = (option) => {
        setSortOption(option);
        const sortedShops = [...shops];
        if (option === "latest") {
            sortedShops.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Assuming each shop has a `createdAt` date
        } else if (option === "highest") {
            sortedShops.sort((a, b) => b.price - a.price);
        }
        setShops(sortedShops);
    };

    return (
        <div className="my-6">
            {/* Header Section */}
            <div className="bg-slate-200 p-4 md:p-6 flex flex-wrap justify-between items-center">
                <div>
                    <p className="text-sm sm:text-base">Showing all {shops.length} results</p>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-4 md:gap-8">
                    {/* Sort Dropdown */}
                    <details className="dropdown">
                        <summary className="btn m-1">Sort: {sortOption === "latest" ? "Latest" : "Highest Price"}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><button onClick={() => handleSortChange("latest")}>Sort by latest</button></li>
                            <li><button onClick={() => handleSortChange("highest")}>Sort by highest price</button></li>
                        </ul>
                    </details>
                    <p className="text-sm sm:text-base">Show: {shops.length} Items</p>

                    {/* Layout Toggle Button */}
                    <button onClick={() => setIsGridLayout(!isGridLayout)} className="btn btn-outline p-2 rounded-full">
                        {isGridLayout ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Product Display */}
            <div className={`mt-6 p-4 ${isGridLayout ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" : "space-y-6"}`}>
                {shops.map((shop, index) => (
                    <div key={index} className={`group relative bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg overflow-hidden transition-shadow ${isGridLayout ? "" : "flex"}`}>
                        <Link to={`/shopDetails/${shop._id}`} className="block w-full">
                            {/* Discount Badge */}
                            {shop.discount && (
                                <div className="absolute top-3 left-3 z-10 bg-red-500 px-2 py-1 rounded-full text-white font-medium text-xs">
                                    {shop.discount}
                                </div>
                            )}

                            {/* Product Image */}
                            <img
                                src={shop.image}
                                alt={shop.name}
                                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${isGridLayout ? "h-48 w-full" : "h-32 w-32 mr-4"}`}
                            />

                            {/* Product Details */}
                            <div className="p-4 space-y-3">
                                <h3 className="text-md sm:text-lg font-semibold text-gray-900">{shop.name}</h3>
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg sm:text-xl font-bold text-orange-400">${shop.price}</span>
                                    {shop.discount && <span className="text-gray-500 line-through">${shop.discount}</span>}
                                </div>
                            </div>
                        </Link>

                        {/* Add to Cart Button */}
                        <form onSubmit={(e) => handlePost(e, shop)} className="flex justify-center items-center bg-gray-50 p-4 border-t">
                            <button disabled={!user} type="submit" className="btn btn-outline rounded-full w-full text-black hover:text-white transition-colors">
                                Add to cart
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllMenu;
