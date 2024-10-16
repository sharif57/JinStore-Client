const ShopBanner = () => {
    return <div>
        <div
            className="bg-no-repeat bg-cover w-full  mt-6"
            style={{ backgroundImage: `url('/banner-33.jpg.png')` }}>
            <div className="p-20 container mx-auto space-y-4 pt-[130px] flex flex-col items-start justify-center">
                <button className="bg-gradient-to-r from-[#84c99d] to-[#ffffff] text-[#166534] font-semibold py-2 px-4 rounded">
                Only This Week
                </button>
                <div className="w-1/2 space-y-4">
                    <h1 className="text-5xl font-bold text-black">Grocery store with different treasures</h1>
                    <p className=" font-medium">We have prepared special discounts for you on grocery
                    products...</p>
                    <button className="btn text-black px-6 rounded-full bg-[#ffff]">Shop Now</button>

                </div>
            </div>
        </div>
    </div>;
};
export default ShopBanner;