import { ChevronRight } from "lucide-react";
import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CheckOut/CartContext";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Tea = () => {


    const [teas, setTeas] = useState([])
    const {user}= useContext(AuthContext)



    useEffect(() => {
        fetch('https://jinstore-server.vercel.app/tea')
            .then(res => res.json())
            .then((data) => setTeas(data))
        // console.log(data);
    }, []);

    const { handlePost } = useCart(); // Access handlePost from the CartContext


    return <div className="p-2">
        <div className="space-x-5 flex my-6">
            <Link to={'/'}>Home</Link>
            <ChevronRight />
            <Link to={'/beverages'}>Beverages</Link>
            <ChevronRight />
            <Link to={'/tea'}>Tea</Link>
        </div>

        <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {teas.map((shop, index) => (
                    <div key={index} className="group relative block overflow-hidden border-2 rounded-lg">
                        <Link to={`/teaDetails/${shop._id}`}>
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">
                                    {shop.discount}%
                                </p>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-150 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                                <div className="flex justify-between">
                                    <img src="/span.badge.png" alt="" />
                                    <p className="text-xs p-2 bg-orange-200 rounded-full text-black font-medium">
                                        In Stock
                                    </p>
                                </div>

                                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.name.slice(0, 20)}...</h3>

                                <p className="text-orange-400 text-3xl font-semibold">
                                    ${shop.price}
                                    <span className="text-black pl-3 text-xl line-through">
                                        ${shop.discount}
                                    </span>
                                </p>
                            </div>
                        </Link>

                        {/* Corrected form tag */}
                        <form onSubmit={(e) => handlePost(e, shop)} className="p-2">
                            <button
                            disabled={!user}
                                type="submit"
                                className="btn btn-outline w-full rounded-full border-blue-400"
                            >
                                Add to Cart
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>

    </div>;
};
export default Tea;