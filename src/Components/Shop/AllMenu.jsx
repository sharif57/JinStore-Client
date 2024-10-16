import { Dock, Logs, ShoppingCart } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";

const AllMenu = () => {

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

    return <div className="my-6">
        <div className="bg-slate-200 p-6 flex justify-between items-center">
            <div>
                <p>Showing all 16 results</p>
            </div>
            <div className="flex justify-between items-center gap-8">
                <details className="dropdown">
                    <summary className="btn m-1">Sort:</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Sort by latest</a></li>
                        <li><a>Sort by hight</a></li>
                    </ul>
                </details>
                <p>show: 20 Items</p>
                <Dock />
                <Logs />
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-10    ">
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
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />

                        <div className="relative border border-gray-100 bg-white space-y-3 p-4">
                            <img src="/span.badge.png" alt="" />


                            <h3 className="mt-1.5 text-lg font-medium text-gray-900">{shop.title}</h3>



                            <p className="text-orange-400 text-3xl font-semibold ">
                                ${shop.price}
                                <span className="text-black pl-3 text-xl line-through">${shop.offer}</span>
                            </p>


                            <div  className="flex justify-between items-center mt-8">
                                <FaCartShopping className="size-10 " />
                                <p className="text-xl font-semibold text-green-500">In Stock</p>
                            </div>



                        </div>
                    </div>
                )
            }
        </div>
    </div>;
};
export default AllMenu;