/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    return (
        <div className="w-full h-screen">
            <div
                className="bg-no-repeat bg-cover w-full h-full mt-6"
                style={{ backgroundImage: `url('/slider-01.jpg (1).png')` }}>
                <div className="p-20 container mx-auto space-y-4 pt-[130px] flex flex-col items-start justify-center">
                    <button className="bg-gradient-to-r from-[#84c99d] to-[#ffffff] text-[#166534] font-semibold py-2 px-4 rounded">
                        Weekend Discount
                    </button>
                    <div className="w-1/3 space-y-4">
                        <h1 className="text-5xl font-bold text-[#39245f]">Get the best quality
                            products at the lowest
                            prices</h1>
                        <p className=" font-medium">We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                        <div className="flex items-center pt-4">
                            <button className="btn text-white pr-16 bg-[#634c95]">Shop Now</button>

                            <div className="pl-6">
                                <div className="">
                                    <div className="flex items-end">
                                        <h1 className="text-5xl font-bold text-orange-500">$56.67</h1>
                                        <h1 className="line-through text-2xl font-semibold">$56.67</h1>
                                        </div>
                                    <p>Don't miss this limited time offer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
