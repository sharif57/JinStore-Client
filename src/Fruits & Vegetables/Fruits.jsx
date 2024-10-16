import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Fruits = () => {

    const [shops, setShops] = useState([])

    useEffect(() => {
        fetch('/Fritus.json')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])

    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-10  gap-6  ">
            {
                shops.map((shop, index) =>
                    <div key={index} className="group relative block overflow-hidden border-2 ">
                        <button
                            className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Wishlist</span>
                            <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}%</p>
                        </button>

                        <img
                            src={shop.image}
                            alt=""
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-150 sm:h-72"
                        />


                        <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                            <div className="flex justify-between">
                                <img src="/span.badge.png" alt="" />
                                <p className="text-xs p-2 bg-orange-200 rounded-full text-black font-medium ">In Stock</p>
                            </div>



                            <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.name}</h3>



                            <p className="text-orange-400 text-3xl font-semibold ">
                                ${shop.price}
                                <span className="text-black pl-3 text-xl line-through">${shop.discount}</span>
                            </p>

                            {/* <div className="flex justify-between items-center mt-8">
                                <FaCartShopping className="size-10 cursor-pointer " />
                                <p className="text-xl font-semibold text-green-500">In Stock</p>
                            </div> */}
                            <button className="btn btn-outline w-full rounded-full border-blue-400">Add to Cart</button>



                        </div>
                    </div>
                )
            }
        </div>
    </div>;
};
export default Fruits;