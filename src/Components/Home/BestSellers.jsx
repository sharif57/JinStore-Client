import { ArrowRight } from "lucide-react";

const BestSellers = () => {

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
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-7">
                <h1 className="text-4xl font-semibold">Best Sellers</h1>
                <p>Some of the new products arriving this weeks</p>
            </div>
            <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                View All <ArrowRight></ArrowRight>
            </button>
        </div >
        <div className="flex my-12">
            <div className="w-2/5 grid grid-cols-1 lg:grid-cols-2">
                {
                    shops.slice(1, 5).map((shop, index) =>
                        <div key={index} className="group relative block overflow-hidden border-2 ">
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}</p>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                                <img src="/span.badge.png" alt="" />


                                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.title}</h3>


                                <p className="text-orange-400 text-3xl font-semibold ">
                                    ${shop.price}
                                    <span className="text-black pl-3 text-xl line-through">${shop.offer}</span>
                                </p>

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
            <div className="w-1/3 grid grid-cols-1">
                <div
                    className="w-full bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url('/banner-01.jpg.png')` }} // Ensure correct image path
                >
                    <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8  text-black">
                        <p className="text-orange-400">Only This Week</p>
                        <h1 className="text-3xl w-[260px] font-bold ">
                            Quality eggs at an affordable price
                        </h1>
                        <p className="text-lg font-medium ">
                            Eat one every day            </p>
                        <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                            Shop Now <ArrowRight></ArrowRight>
                        </button>
                    </div>
                </div>
                <div
                    className="w-full bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url('/banner-01.jpg.png')` }} // Ensure correct image path
                >
                    <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8  text-black">
                        <p className="text-orange-400">Only This Week</p>
                        <h1 className="text-3xl w-[260px] font-bold ">
                            Quality eggs at an affordable price
                        </h1>
                        <p className="text-lg font-medium ">
                            Eat one every day            </p>
                        <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                            Shop Now <ArrowRight></ArrowRight>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-2/5 grid grid-cols-1 lg:grid-cols-2">
                {
                    shops.slice(1, 5).map((shop, index) =>
                        <div key={index} className="group relative block overflow-hidden border-2 ">
                            <button
                                className="absolute start-4 top-4 z-10 rounded-full  text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>
                                <p className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">{shop.discount}</p>
                            </button>

                            <img
                                src={shop.image}
                                alt=""
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                                <img src="/span.badge.png" alt="" />


                                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.title}</h3>


                                <p className="text-orange-400 text-3xl font-semibold ">
                                    ${shop.price}
                                    <span className="text-black pl-3 text-xl line-through">${shop.offer}</span>
                                </p>

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
        </div>
        <div
            className="w-full h-24 bg-right-bottom  bg-red-50   bg-no-repeat bg-end  p-2 rounded-lg"
            style={{ backgroundImage: `url('/promo.png.png')` }} >
            <div className="pl-7 ">
                <h1 className="font-semibold text-3xl  text-orange-500">In store or online your health & safety is our top priority</h1>
                <p>The only supermarket that makes your life easier, makes you enjoy life and makes it better</p>
            </div>

        </div>
    </div>;
};
export default BestSellers;