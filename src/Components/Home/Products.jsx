import { ArrowRight } from "lucide-react";

const Products = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-4 p-2 gap-6 mt-12">
        <div className="      ">
            <div
                className="  bg-cover bg-center rounded-lg h-[600px]"
                style={{ backgroundImage: `url('/banner-04.jpg.png')` }} // Ensure correct image path
            >
                <div className=" pb-12 space-y-2 flex flex-col items-start justify-center p-8  text-black">
                    <p className="text-orange-400">Only This Week</p>
                    <h1 className="text-3xl  font-bold ">
                        Snacks that our mind and body in this products
                    </h1>
                    <p className="text-lg font-medium ">
                        Shine the morning...           </p>
                    <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                        Shop Now <ArrowRight></ArrowRight>
                    </button>
                </div>
            </div>
        </div>
        <div className="      ">
            <div
                className="  bg-cover bg-center rounded-lg h-[600px]"
                style={{ backgroundImage: `url('/banner-05.jpg.png')` }} // Ensure correct image path
            >
                <div className=" pb-12 space-y-2 flex flex-col items-start justify-center p-8  text-black">
                    <p className="text-orange-400">Only This Week</p>
                    <h1 className="text-3xl font-bold ">
                    Shopping with us for better quality and the best price
                    </h1>
                    <p className="text-lg font-medium ">
                    Only this week. Don’t miss...          </p>
                    <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                        Shop Now <ArrowRight></ArrowRight>
                    </button>
                </div>
            </div>
        </div>
        <div className="      ">
            <div
                className="  bg-cover bg-center rounded-lg h-[600px]"
                style={{ backgroundImage: `url('/banner-06.jpg.png')` }} // Ensure correct image path
            >
                <div className=" pb-12 space-y-2 flex flex-col items-start justify-center p-8  text-black">
                    <p className="text-orange-400">Only This Week</p>
                    <h1 className="text-3xl  font-bold ">
                    Get the best quality products at the lowest prices
                    </h1>
                    <p className="text-lg font-medium ">
                    A different kind of grocery store          </p>
                    <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                        Shop Now <ArrowRight></ArrowRight>
                    </button>
                </div>
            </div>
        </div>
        <div className="      ">
            <div
                className="  bg-cover bg-center rounded-lg h-[600px]"
                style={{ backgroundImage: `url('/banner-07.jpg.png')` }} // Ensure correct image path
            >
                <div className=" pb-12 space-y-2 flex flex-col items-start justify-center p-8  text-black">
                    <p className="text-orange-400">Only This Week</p>
                    <h1 className="text-3xl  font-bold ">
                    Where you get your all favorite brands under one roof
                    </h1>
                    <p className="text-lg font-medium ">
                    brands under one roof          </p>
                    <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                        Shop Now <ArrowRight></ArrowRight>
                    </button>
                </div>
            </div>
        </div>
    </div>;
};
export default Products;