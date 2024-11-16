import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronRight, CreditCard, GitCompareArrows, Heart, ServerCrash, Share, Star } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CheckOut/CartContext";


const DrinksDetails = () => {
    const teas = useLoaderData()
    const [teass, setTeas] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/drinks')
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
            <Link to={'/juice'}>Juice</Link>
            <ChevronRight />
            <Link to={''}>JuiceDetails</Link>

        </div>
        {/* <div className="flex justify-between items-center  mx-auto gap-6">
            <div className="w-2/3">
                <Carousel>
                    <div >
                        <img className="transition duration-500 group-hover:scale-150 " src={teas.image} />
                    </div>
                    <div>
                        <img src='/Link → 1-109-700x700.jpg.png' />
                    </div>
                    <div>
                        <img src='/Link → 1-109-700x700.jpg.png' />
                    </div>

                </Carousel>
            </div>
            <div className="space-y-8">
                <h1 className="text-4xl font-semibold">{teas.name}</h1>
                <p className="text-2xl font-mono">Net weight: {teas.volume}</p>
                <div className="flex gap-2 p-2 border rounded-lg w-2/5 text-center">
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <div>
                        <h1>SKU:{teas._id}</h1>
                    </div>
                </div>
                <p>{teas.description}</p>
                <div className="">
                    <div className="">
                        <div className="flex items-end">
                            <h1 className="text-5xl font-bold text-red-500">${teas.price}</h1>
                            <h1 className="line-through text-2xl font-semibold">${teas.discount}</h1>
                        </div>
                    </div>
                </div>
                <div className="space-x-9 mt-8">
                    <button onClick={(e) => handlePost(e, teas)}  className="btn btn-success">Add to cart</button>
                    <button className="btn btn-outline">Buy Now</button>
                </div>
                <div className="my-9 space-y-8 border rounded-lg p-4">
                    <div className="flex gap-6 items-center">
                        <CreditCard className="size-12" />
                        <p><span className="text-xl font-semibold">Payment</span>. Payment upon receipt of goods, Payment by card in the department, Google Pay,
                            Online card, -5% discount in case of payment</p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <ServerCrash className="size-12" />
                        <p><span className="text-xl font-semibold">Warranty</span>. The Consumer Protection Act does not provide for the return of this product of proper
                            quality.</p>
                    </div>
                </div>
                <div className="space-x-4">
                    <button className="btn"><Heart /> Add to wishlist</button>
                    <button className="btn"><Share /> Share this Product</button>
                    <button className="btn"><GitCompareArrows /> Compare</button>
                </div>
            </div>
        </div> */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mx-auto">
            {/* Image Carousel */}
            <div className="w-full lg:w-2/3">
                <Carousel>
                    <div>
                        <img className="transition duration-500 group-hover:scale-150 w-full object-cover" src={teas.image} alt="Product" />
                    </div>
                    <div>
                        <img src='/Link → 1-109-700x700.jpg.png' alt="Related Product" />
                    </div>
                    <div>
                        <img src='/Link → 1-109-700x700.jpg.png' alt="Related Product" />
                    </div>
                </Carousel>
            </div>

            {/* Product Info */}
            <div className="space-y-8 w-full lg:w-2/5">
                <h1 className="text-4xl font-semibold">{teas.name}</h1>
                <p className="text-2xl font-mono">Net weight: {teas.volume}</p>
                <div className="flex gap-2 p-2 border rounded-lg w-2/5 text-center">
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <div>
                        <h1>SKU:{teas._id}</h1>
                    </div>
                </div>
                <p>{teas.description}</p>

                {/* Price and Discount */}
                <div className="flex items-end">
                    <h1 className="text-5xl font-bold text-red-500">${teas.price}</h1>
                    <h1 className="line-through text-2xl font-semibold">${teas.discount}</h1>
                </div>

                {/* Action Buttons */}
                <div className="lg:space-x-9 space-y-3 mt-8">
                    <button onClick={(e) => handlePost(e, teas)} className="btn btn-success w-full lg:w-auto">Add to cart</button>
                    <button className="btn btn-outline w-full lg:w-auto">Buy Now</button>
                </div>

                {/* Payment and Warranty Information */}
                <div className="my-9 space-y-8 border rounded-lg p-4">
                    <div className="flex gap-6 items-center">
                        <CreditCard className="size-12" />
                        <p className="text-xl font-semibold">Payment</p>
                        <p>Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <ServerCrash className="size-12" />
                        <p className="text-xl font-semibold">Warranty</p>
                        <p>The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                    </div>
                </div>

                {/* Wishlist, Share, and Compare */}
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                    <button className="btn flex items-center gap-2">
                        <Heart /> Add to wishlist
                    </button>
                    <button className="btn flex items-center gap-2">
                        <Share /> Share this Product
                    </button>
                    <button className="btn flex items-center gap-2">
                        <GitCompareArrows /> Compare
                    </button>
                </div>

            </div>
        </div>

        <div className="mt-14">
            <h1 className="text-3xl font-semibold">Related products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-10  mb-10  ">
                {
                    teass.slice(0, 6).map((shop, index) =>
                        <div key={index} className="group relative block overflow-hidden border-2 rounded-lg">
                            <Link to={`/drinksDetails/${shop._id}`}>
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
                                    <h3 className="mt-1.5 text-lg font-medium text-gray-900 ">{shop.name.slice(0, 18)}...</h3>
                                    <p className="text-orange-400 text-3xl font-semibold ">
                                        ${shop.price}
                                        <span className="text-black pl-3 text-xl line-through">${shop.discount}</span>
                                    </p>
                                </div>
                            </Link>
                            <form onSubmit={(e) => handlePost(e, shop)} className="p-2">
                                <button className="btn btn-outline w-full rounded-full border-blue-400">Add to Cart</button>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    </div>;
};
export default DrinksDetails;