import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Make = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
            <div
                className="w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('/banner-08.jpg.png')` }} // Ensure correct image path
            >
                <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8 text-black">
                    <p className="text-orange-400">Only This Week</p>
                    <h1 className="text-3xl sm:text-4xl font-bold w-11/12 sm:w-1/2">
                        Make your grocery shopping easy with us
                    </h1>
                    <p className="text-lg sm:text-xl font-medium">Only this week. Don’t miss...</p>
                    <Link to={'/shop'} className="btn rounded-full bg-white text-black px-6 py-2 mt-4">
                        Shop Now <ArrowRight />
                    </Link>
                </div>
            </div>

            <div
                className="w-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('/banner-09.jpg.png')` }} // Ensure correct image path
            >
                <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8 text-black">
                    <p className="text-orange-400">Only This Week</p>
                    <h1 className="text-3xl sm:text-4xl font-bold w-11/12 sm:w-1/2">
                        Get your everyday needs here with us
                    </h1>
                    <p className="text-lg sm:text-xl font-medium">A different kind of grocery store</p>
                    <Link to={'/shop'} className="btn rounded-full bg-white text-black px-6 py-2 mt-4">
                        Shop Now <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Make;
