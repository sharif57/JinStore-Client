import { ChevronRight } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Drinks = () => {

    const {user} = useContext(AuthContext)

    const [teas, setTeas] = useState([])

    useState(() => {
        fetch('http://localhost:5000/drinks')
            .then(res => res.json())
            .then(data => setTeas(data))
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


    return <div>
        <div className="p-2">
            <div className="space-x-5 flex my-6">
                <Link to={'/'}>Home</Link>
                <ChevronRight />
                <Link to={'/beverages'}>Beverages</Link>
                <ChevronRight />
                <Link to={'/water'}>Drinks</Link>
            </div>

            <div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {teas.map((shop, index) => (
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
            </div>
        </div>
    </div>;
};
export default Drinks;