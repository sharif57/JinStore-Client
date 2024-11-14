import { ArrowRight, Heart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Featured = () => {

    const { user } = useContext(AuthContext)

    const [teas, setTeas] = useState([])
    const [juices, setJuices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/water')
            .then(res => res.json())
            .then(data => setTeas(data))
        // console.log(data);
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/juice')
            .then(res => res.json())
            .then(data => setJuices(data))
        // console.log(data);
    }, [])


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


    return <div className="p-2">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-y-0 mt-7">
            <div className="flex items-center gap-7 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-semibold">Featured Products</h1>
                <p className="text-sm sm:text-base lg:text-lg">Do not miss the current offers until the end of March.</p>
            </div>
            <button className="btn rounded-full bg-white text-black px-6 py-2 mt-4 lg:mt-0">
                View All <ArrowRight />
            </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
            {
                teas.slice(0, 3).map((shop, index) =>
                    <div key={index} className="group relative block overflow-hidden border-2 flex gap-6  ">
                        <Link to={`/waterDetails/${shop._id}`}>
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <div className="flex justify-between gap-20 items-center">
                                    <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}%</p>
                                    <Heart />

                                </div>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-72 object-cover transition duration-500 group-hover:scale-150 sm:h-72"
                            />
                        </Link>

                        <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                            <img src="/span.badge.png" alt="" />


                            <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.name}</h3>


                            <p className="text-orange-400 text-3xl font-semibold ">
                                ${shop.price}
                                <span className="text-black pl-3 text-xl line-through">${shop.discount}</span>
                            </p>
                            <div className="flex gap-1">
                                {/* <Star />
                                <Star />
                                <Star />
                                <Star /> */}
                            </div>

                            <form onSubmit={(e) => handlePost(e, shop)} className="mt-4 flex gap-4">
                                <button
                                    type="submit"
                                    className="btn btn-outline w-full rounded-full border-blue-400"
                                >
                                    Add to Cart
                                </button>


                            </form>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
            {
                juices.slice(4, 7).map((shop, index) =>
                    <div key={index} className="group relative block overflow-hidden border-2 flex gap-6  ">
                        <Link to={`/juiceDetails/${shop._id}`}>
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <div className="flex justify-between gap-20 items-center">
                                    <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}%</p>
                                    <Heart />

                                </div>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-72 object-cover transition duration-500 group-hover:scale-150 sm:h-72"
                            />
                        </Link>

                        <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                            <img src="/span.badge.png" alt="" />


                            <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.name}</h3>


                            <p className="text-orange-400 text-3xl font-semibold ">
                                ${shop.price}
                                <span className="text-black pl-3 text-xl line-through">${shop.discount}</span>
                            </p>
                            <div className="flex gap-1">
                                {/* <Star />
                                <Star />
                                <Star />
                                <Star /> */}
                            </div>

                            <form onSubmit={(e) => handlePost(e, shop)} className="mt-4 flex gap-4">
                                <button
                                    type="submit"
                                    className="btn btn-outline w-full rounded-full border-blue-400"
                                >
                                    Add to Cart
                                </button>


                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    </div>;
};
export default Featured;
