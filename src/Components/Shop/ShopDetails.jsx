import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronRight, CreditCard, GitCompareArrows, Heart, ServerCrash, Share, Star } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CheckOut/CartContext";

const ShopDetails = () => {
    const teas = useLoaderData();
    const [teass, setTeas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/shop')
            .then(res => res.json())
            .then((data) => setTeas(data));
    }, []);

    const { handlePost, handleWish } = useCart(); // Access handlePost from the CartContext


    return (
        <div className="p-4 md:p-8">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center space-x-2 my-4">
                <Link to={'/'}>Home</Link>
                <ChevronRight />
                <Link to={'/beverages'}>Beverages</Link>
                <ChevronRight />
                <Link to={'/water'}>Water</Link>
                <ChevronRight />
                <Link to={''}>WaterDetails</Link>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row lg:gap-8 mx-auto">
                {/* Image Carousel */}
                <div className="lg:w-2/3 w-full">
                    <Carousel>
                        <div>
                            <img className="transition duration-500 group-hover:scale-105 w-full" src={teas.image} alt="Product" />
                        </div>
                        <div>
                            <img src='/Link → 1-109-700x700.jpg.png' alt="Alternate view" />
                        </div>
                    </Carousel>
                </div>

                {/* Product Details */}
                <div className="lg:w-1/3 w-full space-y-6 mt-6 lg:mt-0">
                    <h1 className="text-2xl md:text-3xl font-semibold">{teas.name}</h1>
                    <p className="text-lg md:text-xl font-mono">Net weight: {teas.weight}</p>

                    {/* Rating and SKU */}
                    <div className="flex items-center gap-2 p-2 border rounded-lg w-full md:w-3/5">
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-yellow-400" />
                            ))}
                        </div>
                        <div className="text-gray-500 text-sm">SKU: {teas._id}</div>
                    </div>

                    <p className="text-sm md:text-base">{teas.description}</p>

                    {/* Price */}
                    <div className="flex items-end space-x-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-500">${teas.price}</h1>
                        <span className="text-lg md:text-xl line-through text-gray-500">${teas.discount}</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 ">
                        <button onClick={(e) => handlePost(e, teas)} className="btn btn-success w-1/2">
                            Add to Cart
                        </button>
                        <button onClick={(e) => handleWish(e, teas)} className="btn"><Heart /> Add to wishlist</button>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4 border p-4 rounded-lg">
                        <div className="flex gap-4 items-center">
                            <CreditCard className="text-gray-600" />
                            <p className="text-sm md:text-base">
                                <strong>Payment</strong>: Payment upon receipt of goods, Payment by card, Google Pay, Online card. Get a 5% discount for prepayment.
                            </p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <ServerCrash className="text-gray-600" />
                            <p className="text-sm md:text-base">
                                <strong>Warranty</strong>: Consumer protection laws do not apply for returns of this item in proper condition.
                            </p>
                        </div>
                    </div>

                    {/* Social and Wishlist Buttons */}
                    <div className="lg:flex space-x-4 mt-4">
                        <button className="btn"><Share /> Share</button>
                        <button className="btn"><GitCompareArrows /> Compare</button>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h1 className="text-2xl md:text-3xl font-semibold mb-6">Related Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {teass.slice(0, 6).map((shop, index) => (
                        <div key={index} className="group relative border rounded-lg overflow-hidden">
                            <Link to={`/shopDetails/${shop._id}`}>
                                <span className="absolute top-4 left-4 bg-red-500 px-2 py-1 rounded-full text-white font-medium">
                                    {shop.discount}%
                                </span>
                                <img
                                    src={shop.image}
                                    alt="Related product"
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium truncate">{shop.name}</h3>
                                    <p className="text-xl font-semibold text-orange-400">${shop.price}</p>
                                    <span className="text-sm line-through text-gray-500">${shop.discount}</span>
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

export default ShopDetails;
