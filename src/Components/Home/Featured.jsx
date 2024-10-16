import { ArrowRight, Heart, Star } from "lucide-react";

const Featured = () => {



    const shops = [
        {
            image: '/Link → 1-2-500x500.jpg (1).png',
            title: '100 Percent Apple Juice – 64fl oz Bottle',
            discount: '70%',
            price: 50,
            offer: 1.99
        },
        {
            image: '/Link → 1-12-500x500.jpg.png',
            title: 'Great Value Rising CrustFrozen Pizza',
            discount: '20%',
            price: 30,
            offer: 3.55
        },
        {
            image: '/Link → 1-30-500x500.jpg.png',
            title: 'Simply Orange Pulp Free Juice– 52 fl oz',
            discount: '40%',
            price: 7.45,
            offer: 2.99
        },
        {
            image: '/Link → 1-30-500x500.jpg.png',
            title: 'California Pizza KitchenMargherita, Crispy ',
            discount: '20%',
            price: 8.45,
            offer: 5.99
        },
        {
            image: '/Link → 1-500x500.jpg.png',
            title: 'Cantaloupe Melon FreshOrganic Cut',
            discount: '20%',
            price: 90.45,
            offer: 3.99
        },
        {
            image: '/Link → 1-9-500x500.jpg.png',
            title: 'Angel Soft Toilet Paper, 9Mega Rolls',
            discount: '20%',
            price: 90.45,
            offer: 3.99
        },
    ]

    return <div className="p-2">
        <div className="flex justify-between items-center space-y-5 mt-7">
            <div className="flex items-center gap-7">
                <h1 className="text-4xl font-semibold">Featured Products</h1>
                <p>Do not miss the current offers until the end of March.</p>
            </div>
            <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                View All <ArrowRight></ArrowRight>
            </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
            {
                shops.map((shop, index) =>
                    <div key={index} className="group relative block overflow-hidden border-2 flex gap-6  ">
                        <div>
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <div className="flex justify-between gap-20 items-center">
                                    <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}</p>
                                    <Heart />

                                </div>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />
                        </div>

                        <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                            <img src="/span.badge.png" alt="" />


                            <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.title}</h3>


                            <p className="text-orange-400 text-3xl font-semibold ">
                                ${shop.price}
                                <span className="text-black pl-3 text-xl line-through">${shop.offer}</span>
                            </p>
                            <div className="flex gap-1">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            </div>

                            <form className="mt-4 flex gap-4">
                                <button
                                    className="block w-full  bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105      border-2 border-blue-400 rounded-full"
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