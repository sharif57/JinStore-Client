/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    return (
        <div className="w-full">
            <div
                className="bg-no-repeat bg-cover w-full h-[400px] md:h-[500px] lg:h-[600px] mt-6"
                style={{ backgroundImage: `url('/slider-01.jpg (1).png')` }}>
                <div className="p-6 sm:p-10 md:p-20 container mx-auto space-y-4 pt-[100px] md:pt-[130px] flex flex-col items-start justify-center">
                    <button className="bg-gradient-to-r from-[#84c99d] to-[#ffffff] text-[#166534] font-semibold py-2 px-4 rounded md:text-lg">
                        Weekend Discount
                    </button>
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#39245f]">
                            Get the best quality products at the lowest prices
                        </h1>
                        <p className="font-medium text-sm sm:text-base md:text-lg">
                            We have prepared special discounts for you on grocery products. Don't miss these opportunities...
                        </p>
                        <div className="flex flex-col sm:flex-row items-center pt-4">
                            <button className="btn text-white pr-16 bg-[#634c95] w-full sm:w-auto">
                                Shop Now
                            </button>

                            <div className="pl-0 sm:pl-6 mt-4 sm:mt-0 w-full sm:w-auto">
                                <div className="">
                                    <div className="flex items-end justify-start sm:justify-start space-x-2">
                                        <h1 className="text-3xl sm:text-4xl font-bold text-orange-500">
                                            $56.67
                                        </h1>
                                        <h1 className="line-through text-xl sm:text-2xl font-semibold">
                                            $56.67
                                        </h1>
                                    </div>
                                    <p className="text-sm sm:text-base">Don't miss this limited time offer.</p>
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
