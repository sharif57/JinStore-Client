import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 p-4">
      {/* First Banner */}
      <div className="w-full col-span-1 ">
        <div
          className="w-full h-56 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url('/banner-01.jpg.png')` }} // Ensure correct image path
        >
          <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8  text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-3xl w-[260px] font-bold ">
              Quality eggs at an affordable price
            </h1>
            <p className="text-lg font-medium ">
              Eat one every day            </p>
            <Link to={'/shop'} className="btn  rounded-full bg-white text-black px-6 py-2 ">
              Shop Now <ArrowRight></ArrowRight>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full col-span-1">
        <div
          className="w-full h-56 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url('/banner-02.jpg.png')` }} // Ensure correct image path
        >
          <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8  text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-3xl w-[260px] font-bold ">
            Snacks that our mind and body
            </h1>
            <p className="text-lg font-medium ">
            Shine the morning...           </p>
            <Link to={'/fruits'} className="btn  rounded-full bg-white text-black px-6 py-2 ">
              Shop Now <ArrowRight></ArrowRight>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full col-span-1">
        <div
          className="w-full h-56 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url('/banner-03.jpg.png')` }} // Ensure correct image path
        >
          <div className="pt-12 pb-12 space-y-2 h-full flex flex-col items-start justify-center p-8  text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-3xl w-[260px] font-bold ">
            Unbeatable quality, prices.
            </h1>
            <p className="text-lg font-medium ">
            Only this week. Don’t miss...</p>
            <Link to={'/water'} className="btn  rounded-full bg-white text-black px-6 py-2 ">
              Shop Now <ArrowRight></ArrowRight>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default BannerSection;
