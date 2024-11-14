import { ArrowRight, Star } from "lucide-react";

const Popular = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                <div className="flex flex-col lg:flex-row items-start gap-7 mb-4 lg:mb-0">
                    <h1 className="text-3xl lg:text-4xl font-semibold">Popular Companies</h1>
                    <p className="text-lg">Some of the new products arriving this week</p>
                </div>
                <button className="btn rounded-full bg-white text-black px-6 py-2 flex items-center gap-2">
                    View All <ArrowRight />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Company Card 1 */}
                <div className="p-6 border-2 rounded-lg shadow-lg">
                    <div className="flex gap-4">
                        <img className="w-20 h-20 object-cover rounded-full" src="/Link (2).png" alt="Sharif" />
                        <div>
                            <h1 className="text-xl font-semibold">Sharif</h1>
                            <p className="text-sm text-gray-500">Featured</p>
                            <div className="flex gap-1">
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <p className="mt-4 text-sm text-gray-700">Good quality products can only be found in good stores.</p>
                </div>
                {/* Company Card 2 */}
                <div className="p-6 border-2 rounded-lg shadow-lg">
                    <div className="flex gap-4">
                        <img className="w-20 h-20 object-cover rounded-full" src="/Link (2).png" alt="Blonwe" />
                        <div>
                            <h1 className="text-xl font-semibold">Blonwe</h1>
                            <p className="text-sm text-gray-500">Featured</p>
                            <div className="flex gap-1">
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <p className="mt-4 text-sm text-gray-700">All kinds of grocery products are available in our store.</p>
                </div>
                {/* Company Card 3 */}
                <div className="p-6 border-2 rounded-lg shadow-lg">
                    <div className="flex gap-4">
                        <img className="w-20 h-20 object-cover rounded-full" src="/Link (2).png" alt="Bacola" />
                        <div>
                            <h1 className="text-xl font-semibold">Bacola</h1>
                            <p className="text-sm text-gray-500">Featured</p>
                            <div className="flex gap-1">
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <p className="mt-4 text-sm text-gray-700">Our work can definitely support the local economy.</p>
                </div>
                {/* Company Card 4 */}
                <div className="p-6 border-2 rounded-lg shadow-lg">
                    <div className="flex gap-4">
                        <img className="w-20 h-20 object-cover rounded-full" src="/Link (2).png" alt="Medibazar" />
                        <div>
                            <h1 className="text-xl font-semibold">Medibazar</h1>
                            <p className="text-sm text-gray-500">Featured</p>
                            <div className="flex gap-1">
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                                <Star color="#f2df07" />
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <p className="mt-4 text-sm text-gray-700">Save your time – save your money – shop from our grocery store.</p>
                </div>
            </div>
        </div>
    );
};

export default Popular;
