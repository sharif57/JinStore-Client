import { ArrowRight } from "lucide-react";

const Featured = () => {
  return <div className="p-2">
     <div className="flex justify-between items-center space-y-5">
            <div className="flex items-center gap-7">
                <h1 className="text-4xl font-semibold">Featured Products</h1>
                <p>Do not miss the current offers until the end of March.</p>
            </div>
            <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                View All <ArrowRight></ArrowRight>
            </button>
        </div>
  </div>;
};
export default Featured;
