import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Beverages = () => {
    return <div className="p-2 mt-10">
        <div className="space-x-5 flex">
            <Link to={'/'}>Home</Link>
            <ChevronRight />
            <Link to={'/beverages'}>Beverages</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-14 mb-14">
            <Link to={'/tea'} className="group relative block bg-black  border-2  shadow-lg ">
                <img
                    alt=""
                    src="/tea.webp"
                    className="absolute inset-0 h-full w-full object-cover opacity- transition-opacity group-hover:opacity-30"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Tea</p>

                    <p className="text-xl font-bold text-black group-hover:text-white sm:text-2xl">JinStore Tea Collection</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                Tea is one of the most popular beverages in the world, enjoyed by millions of people for its flavor, versatility, and health benefits. It is made by infusing the leaves of the Camellia sinensis plant in hot water.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'/water'} className="group relative block bg-black  border-2  shadow-lg">
                <img
                    alt=""
                    src="/water.webp"
                    className="absolute inset-0 h-full w-full object-cover opacity- transition-opacity group-hover:opacity-30"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Water</p>

                    <p className="text-xl font-bold text-black group-hover:text-white sm:text-2xl">JinStore Water Collection</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                Water is essential for all forms of life on Earth and makes up about 60% of the human body. It plays a vital role in maintaining biological processes such as hydration, digestion, temperature regulation, and circulation.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'/juice'} className="group relative block bg-black  border-2  shadow-lg">
                <img
                    alt=""
                    src="/juice.webp"
                    className="absolute inset-0 h-full w-full object-cover opacity-  transition-opacity group-hover:opacity-30"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Juice</p>

                    <p className="text-xl font-bold group-hover:text-white text-black sm:text-2xl">JinStore Juice Collection</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                Juice is a natural liquid extracted from fruits or vegetables, often enjoyed for its refreshing taste and nutritional benefits. It can be consumed on its own or as part of various drinks, smoothies, or recipes. Juices are typically rich in vitamins, minerals, and antioxidants, making them a popular choice for health-conscious individuals.
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'/drinks'} className="group relative block bg-black border-2 shadow-lg">
                <img
                    alt="Tea collection"
                    src="/soft-drinks.webp"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <div className="">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Soft Drinks</p>
                        <p className="text-xl font-bold text-black group-hover:text-white sm:text-2xl">JinStore Soft Drinks Collection</p>
                    </div>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-gray-200">

                                Soft drinks are non-alcoholic beverages that typically contain carbonated water, a sweetener, and flavorings. They are popular worldwide for their refreshing taste and come in a variety of flavors, from cola to fruit-based options. These beverages can be enjoyed cold, making them a favorite during hot weather or as an accompaniment to meals and snacks.


                            </p>
                        </div>
                    </div>
                </div>
            </Link>



        </div>
        {/* <div className="flex justify-between items-center">
            <img className="size-[300px] border-2" src="/tea.webp" alt="" />
            <img className="size-[300px] border-2" src="/water.webp" alt="" />
            <img className="size-[300px] border-2" src="/juice.webp" alt="" />
            <img className="size-[300px] border-2" src="/coffee.webp" alt="" />
            <img className="size-[300px] border-2" src="/soft-drinks.webp" alt="" />
        </div> */}
    </div>;
};
export default Beverages;