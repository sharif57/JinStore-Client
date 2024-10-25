import { ArrowRight } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BestSellers = () => {
    const { user } = useContext(AuthContext)


    const handlePost = (e, shop) => {
        e.preventDefault();

        const EmailName = user?.displayName;
        const email = user?.email;
        const photo = user?.photoURL;
        const name = shop.name;
        const currentTime = new Date();
        const image = shop.image || "";
        const description = shop.description;
        const weight = shop.weight;
        const price = shop.price;
        const discount = shop.discount;

        const newPost = { name, email, image, currentTime, photo, description, EmailName, weight, price, discount };

        fetch('http://localhost:5000/addCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item added to cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    e.target.reset();
                }
            });
    };

    const [waters, setWaters] = useState([]);
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/drinks')
            .then(res => res.json())
            .then(data => setWaters(data))
            .catch(err => console.log(err)); // Handle any errors
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/fruits')
            .then(res => res.json())
            .then(data => setFruits(data))
            .catch(err => console.log(err)); // Handle any errors
    }, []);

    return (
        <div className="p-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-7">
                    <h1 className="text-4xl font-semibold">Best Sellers</h1>
                    <p>Some of the new products arriving this week</p>
                </div>
                <button className="btn rounded-full bg-white text-black px-6 py-2">
                    View All <ArrowRight />
                </button>
            </div>
            <div className="flex my-12">
                {/* Left Side - Drinks */}
                <div className="w-2/5 grid grid-cols-1 lg:grid-cols-2 gap-1">
                    {waters.slice(2, 6).map((shop, index) => (
                        <div key={index} className="group relative block overflow-hidden border-2 rounded-lg">
                            <Link to={`/drinksDetails/${shop._id}`}>
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
                                    type="submit"
                                    className="btn btn-outline w-full rounded-full border-blue-400"
                                >
                                    Add to Cart
                                </button>
                            </form>
                        </div>
                    ))}
                </div>

                {/* Middle Banner */}
                <div className="w-1/3 grid grid-cols-1 px-2">
                    <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url('/coco.jpg')` }}>
                        <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8 text-black">
                            <p className="text-orange-400">Only This Week</p>
                            <h1 className="text-3xl w-[260px] font-bold text-white">Quality eggs at an affordable price</h1>
                            <p className="text-lg font-medium text-white">Eat one every day</p>
                            <button className="btn rounded-full bg-white text-black px-6 py-2">
                                Shop Now <ArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url('/totmto.jpg')` }}>
                        <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8 text-black">
                            <p className="text-orange-400">Only This Week</p>
                            <h1 className="text-3xl w-[260px] font-bold text-white">Quality tomatoes at an affordable price</h1>
                            <p className="text-lg font-medium text-white">Eat fresh tomatoes</p>
                            <button className="btn rounded-full bg-white text-black px-6 py-2">
                                Shop Now <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Fruits */}
                <div className="w-2/5 grid grid-cols-1 lg:grid-cols-2 gap-1">
                    {fruits.slice(1, 5).map((shop, index) => (
                        <div key={index} className="group relative block overflow-hidden border-2 rounded-lg">
                            <Link to={`/fruitsDetails/${shop._id}`}>
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

            {/* Promo Section */}
            <div
                className="w-full bg-right-bottom bg-red-50 bg-no-repeat bg-end p-2 pt-5 pb-5 rounded-lg"
                style={{ backgroundImage: `url('/promo.png.png')` }}
            >
                <div className="pl-7">
                    <h1 className="font-semibold text-3xl text-orange-500">
                        In store or online, your health & safety is our top priority
                    </h1>
                    <p>The only supermarket that makes your life easier, makes you enjoy life, and makes it better</p>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
