import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CreditCard, GitCompareArrows, Heart, ServerCrash, Share, Star } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";

const ShopDetails = () => {
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
        <div className="flex justify-between items-center  mx-auto">
            <div className="w-2/3">
                <Carousel>
                    <div >
                        <img className="transition duration-500 group-hover:scale-150 " src='/Link → 1-109-700x700.jpg.png' />
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
                <h1 className="text-4xl font-semibold">Marketside Fresh Organic Bananas,
                    Bunch</h1>
                <div className="flex gap-2 p-2 border rounded-lg w-2/5 text-center">
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <div>
                        <h1>SKU:E7F8G9H0</h1>
                    </div>
                </div>
                <p>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti
                    sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.</p>
                <div className="">
                    <div className="">
                        <div className="flex items-end">
                            <h1 className="text-5xl font-bold text-red-500">$56.67</h1>
                            <h1 className="line-through text-2xl font-semibold">$56.67</h1>
                        </div>
                    </div>
                </div>
                <div className="space-x-9 mt-8">
                    <button className="btn btn-success">Add to cart</button>
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
        </div>
        <div className="mt-14">
            <h1 className="text-3xl font-semibold">Related products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-10    ">
                {
                    shops.map((shop, index) =>
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
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-150 sm:h-72"
                            />

                            <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                                <img src="/span.badge.png" alt="" />


                                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.title}</h3>



                                <p className="text-orange-400 text-3xl font-semibold ">
                                    ${shop.price}
                                    <span className="text-black pl-3 text-xl line-through">${shop.offer}</span>
                                </p>

                                <div className="flex justify-between items-center mt-8">
                                    <FaCartShopping className="size-10 cursor-pointer " />
                                    <p className="text-xl font-semibold text-green-500">In Stock</p>
                                </div>



                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>;
};
export default ShopDetails;