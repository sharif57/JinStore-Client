const ShopBanner = () => {
    return (
        <div>
            <div
                className="bg-no-repeat bg-cover w-full mt-6"
                style={{ backgroundImage: `url('/banner-33.jpg.png')` }}
            >
                <div className="container mx-auto flex flex-col items-start justify-center p-6 sm:p-10 md:p-16 lg:p-20 space-y-4 pt-[100px] md:pt-[130px]">
                    {/* Only This Week Button */}
                    <button className="bg-gradient-to-r from-[#84c99d] to-[#ffffff] text-[#166534] font-semibold py-2 px-4 rounded text-sm sm:text-base">
                        Only This Week
                    </button>
                    <div className="w-full md:w-3/4 lg:w-1/2 space-y-4">
                        {/* Heading */}
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black">
                            Grocery store with different treasures
                        </h1>
                        {/* Description */}
                        <p className="font-medium text-sm sm:text-base lg:text-lg text-gray-800">
                            We have prepared special discounts for you on grocery products...
                        </p>
                        {/* Shop Now Button */}
                        <button className="btn text-black px-4 py-2 sm:px-6 rounded-full bg-[#ffffff] border border-gray-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;
