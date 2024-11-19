import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-6 mt-12">
      <div>
        <div
          className="bg-cover bg-center rounded-lg h-[400px] sm:h-[500px] lg:h-[600px]"
          style={{ backgroundImage: `url('/banner-04.jpg.png')` }} // Ensure correct image path
        >
          <div className="pb-12 space-y-2 flex flex-col items-start justify-center p-8 text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Snacks that our mind and body in this products
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium">
              Shine the morning...
            </p>
            <Link to={'/drinks'} className="btn rounded-full bg-white text-black px-6 py-2">
              Shop Now <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div
          className="bg-cover bg-center rounded-lg h-[400px] sm:h-[500px] lg:h-[600px]"
          style={{ backgroundImage: `url('/banner-05.jpg.png')` }} // Ensure correct image path
        >
          <div className="pb-12 space-y-2 flex flex-col items-start justify-center p-8 text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Shopping with us for better quality and the best price
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium">
              Only this week. Don’t miss...
            </p>
            <Link to={'/fruits'} className="btn rounded-full bg-white text-black px-6 py-2">
              Shop Now <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div
          className="bg-cover bg-center rounded-lg h-[400px] sm:h-[500px] lg:h-[600px]"
          style={{ backgroundImage: `url('/banner-06.jpg.png')` }} // Ensure correct image path
        >
          <div className="pb-12 space-y-2 flex flex-col items-start justify-center p-8 text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Get the best quality products at the lowest prices
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium">
              A different kind of grocery store
            </p>
            <Link to={'/juice'} className="btn rounded-full bg-white text-black px-6 py-2">
              Shop Now <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div
          className="bg-cover bg-center rounded-lg h-[400px] sm:h-[500px] lg:h-[600px]"
          style={{ backgroundImage: `url('/banner-07.jpg.png')` }} // Ensure correct image path
        >
          <div className="pb-12 space-y-2 flex flex-col items-start justify-center p-8 text-black">
            <p className="text-orange-400">Only This Week</p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Where you get your all favorite brands under one roof
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium">
              Brands under one roof
            </p>
            <Link to={'/shop'} className="btn rounded-full bg-white text-black px-6 py-2">
              Shop Now <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
