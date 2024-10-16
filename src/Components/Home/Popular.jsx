import { ArrowRight, Star } from "lucide-react";

const Popular = () => {
    return <div className="p-2">
        <div className="flex justify-between items-center space-y-6">
            <div className="flex items-center gap-7">
                <h1 className="text-4xl font-semibold">Popular Companies</h1>
                <p>Some of the new products arriving this weeks</p>
            </div>
            <button className="btn  rounded-full bg-white text-black px-6 py-2 ">
                View All <ArrowRight></ArrowRight>
            </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-8">
            <div className="p-6 border-2">
                <div className="flex gap-4 ">
                    <img className="size-20" src="/Link (2).png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Sharif</h1>
                        <p>Featured</p>
                        <div className="flex gap-2">
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                        </div>
                    </div>
                </div>
                <hr className="mt-3" />
                <p className="mt-4" >Good quality product can only be found in good stores</p>
            </div>
            <div className="p-6 border-2">
                <div className="flex gap-4 ">
                    <img className="size-20" src="/Link (2).png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Blonwe</h1>
                        <p>Featured</p>
                        <div className="flex gap-2">
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                        </div>
                    </div>
                </div>
                <hr className="mt-3" />
                <p className="mt-4" >All kinds of grocery products are available in our store.</p>
            </div>
            <div className="p-6 border-2">
                <div className="flex gap-4 ">
                    <img className="size-20" src="/Link (2).png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Bacola</h1>
                        <p>Featured</p>
                        <div className="flex gap-2">
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                        </div>
                    </div>
                </div>
                <hr className="mt-3" />
                <p className="mt-4" >Our work can definitely support the local economy.</p>
            </div>
            <div className="p-6 border-2">
                <div className="flex gap-4 ">
                    <img className="size-20" src="/Link (2).png" alt="" />
                    <div>
                        <h1 className="text-xl font-semibold">Medibazar</h1>
                        <p>Featured</p>
                        <div className="flex gap-2">
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                            <Star color="#f2df07" />
                        </div>
                    </div>
                </div>
                <hr className="mt-3" />
                <p className="mt-4" >Save your time – save your money – shop from our
                    grocery store.</p>
            </div>
        </div>
    </div>;
};
export default Popular;