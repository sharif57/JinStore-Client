import { ArrowRight } from "lucide-react";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CheckOut/CartContext";

const Arrivals = () => {


    const [shops, setShops] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/shop')
            .then(res => res.json())
            .then(data => setShops(data))
        // console.log(data);
    }, [])

    const { handlePost } = useCart(); // Access handlePost from the CartContext



    return <div className="p-4 mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-7">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#39245f]">
                    New Arrivals
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                    Don't miss this opportunity at a special discount just for this week.
                </p>
            </div>
            <button className="btn rounded-full bg-white text-black px-6 py-2 mt-4 lg:mt-0">
                View All <ArrowRight />
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 mt-10    ">
            {
                shops.map((shop, index) =>
                    <div key={index} className="group relative block overflow-hidden border-2 ">
                        <Link to={`/shopDetails/${shop._id}`}>
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}</p>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-150 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                                <img src="/span.badge.png" alt="" />


                                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.name}</h3>


                                <p className="text-orange-400 text-3xl font-semibold ">
                                    ${shop.price}
                                    <span className="text-black pl-3 text-xl line-through">${shop.discount}</span>
                                </p>



                            </div>
                        </Link>

                        <form onSubmit={(e) => handlePost(e, shop)} className="p-2">
                            <button
                                type="submit"
                                className="btn btn-outline w-full rounded-full border-blue-400"
                            >
                                Add to Cart
                            </button>
                        </form>
                    </div>
                )
            }
        </div>
    </div>;
};
export default Arrivals;