import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CreditCard, GitCompareArrows, Heart, ServerCrash, Share, Star } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CheckOut/CartContext";


const TeaDetails = () => {
    const teas = useLoaderData();
    const [teass, setTeas] = useState([]);

    const { handlePost, handleWish } = useCart(); // Access handlePost from the CartContext


    useEffect(() => {
        fetch('https://jinstore-server.vercel.app/tea')
            .then(res => res.json())
            .then((data) => setTeas(data))
    }, []);

    return (
        <div className="p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6 mx-auto">
                <div className="w-full lg:w-2/3">
                    <Carousel>
                        <div>
                            <img className="transition duration-500 group-hover:scale-150 " src={teas.image} alt="Tea" />
                        </div>
                        <div>
                            <img src='/Link → 1-109-700x700.jpg.png' alt="Tea sample" />
                        </div>
                        <div>
                            <img src='/Link → 1-109-700x700.jpg.png' alt="Tea sample" />
                        </div>
                    </Carousel>
                </div>

                <div className="w-full lg:w-1/3 space-y-6">
                    <h1 className="text-2xl md:text-4xl font-semibold">{teas.name}</h1>
                    <p className="text-lg md:text-2xl font-mono">Net weight: {teas.weight}</p>
                    <div className="flex gap-2 p-2 border rounded-lg w-full md:w-1/2 text-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-yellow-400" />
                        ))}
                        <div>
                            <h1>SKU: {teas._id}</h1>
                        </div>
                    </div>
                    <p>{teas.description}</p>
                    <div className="flex flex-col">
                        <div className="flex items-end">
                            <h1 className="text-3xl md:text-5xl font-bold text-red-500">${teas.price}</h1>
                            <h1 className="line-through text-xl md:text-2xl font-semibold ml-3">${teas.discount}</h1>
                        </div>
                    </div>
                    <div className="flex space-x-4 ">
                        <button onClick={(e) => handlePost(e, teas)} className="btn btn-success w-1/2">
                            Add to Cart
                        </button>
                        <button onClick={(e) => handleWish(e, teas)} className="btn"><Heart /> Add to wishlist</button>
                    </div>
                    <div className="my-9 space-y-8 border rounded-lg p-4">
                        <div className="flex gap-4 items-center">
                            <CreditCard className="" />
                            <p><span className="text-xl font-semibold">Payment</span>. Payment upon receipt, card payment, Google Pay, online card, -5% discount for online payment.</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <ServerCrash className="text-xl" />
                            <p><span className="text-xl font-semibold">Warranty</span>. This product cannot be returned in case of proper quality.</p>
                        </div>
                    </div>
                    <div className="space-x-2 lg:space-y-0 space-y-2 md:space-x-4 flex flex-col md:flex-row">
                        <button className="btn flex items-center gap-1"><Share /> Share</button>
                        <button className="btn flex items-center gap-1"><GitCompareArrows /> Compare</button>
                    </div>
                </div>
            </div>

            <div className="mt-14">
                <h1 className="text-2xl md:text-3xl font-semibold">Related products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-10 mb-10">
                    {teass.slice(0, 6).map((shop, index) => (
                        <div key={index} className="group relative block overflow-hidden border-2 rounded-lg">
                            <Link to={`/teaDetails/${shop._id}`}>
                                <button className="absolute start-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75">
                                    <span className="sr-only">Wishlist</span>
                                    <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}%</p>
                                </button>

                                <img
                                    src={shop.image}
                                    alt="Related Tea"
                                    className="h-48 md:h-64 w-full object-cover transition duration-500 group-hover:scale-150"
                                />
                                <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                                    <div className="flex justify-between">
                                        <img src="/span.badge.png" alt="" />
                                        <p className="text-xs p-2 bg-orange-200 rounded-full text-black font-medium ">In Stock</p>
                                    </div>
                                    <h3 className="mt-1.5 text-lg font-medium text-gray-900 ">{shop.name.slice(0, 18)}...</h3>
                                    <p className="text-orange-400 text-2xl md:text-3xl font-semibold">
                                        ${shop.price} <span className="text-black pl-3 text-xl line-through">${shop.discount}</span>
                                    </p>
                                </div>
                            </Link>
                            <form onSubmit={(e) => handlePost(e, shop)} className="p-2">
                                <button className="btn btn-outline w-full rounded-full border-blue-400">Add to Cart</button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeaDetails;
