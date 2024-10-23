import { useEffect, useState } from "react";

const Trending = () => {

    const [tops, setTops] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addCart')
            .then(res => res.json())
            .then(data => setTops(data))
    }, [])

    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
            {
                tops.map((top, index) => (
                    <article
                        key={index}
                        className="relative overflow-hidden h-[500px] w-full rounded-lg shadow transition hover:shadow-lg"
                    >
                        <img
                            alt=""
                            src={top.image}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 h-[500px]">
                            <div className="p-4 sm:p-6">
                                <time dateTime="2022-10-10" className="block text-xs text-white/90">
                                    {top.currentTime}
                                </time>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">{top.name}</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    {top.description}
                                </p>
                            </div>
                        </div>
                    </article>
                ))
            }
        </div>

    </div>;
};
export default Trending;