
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Juice = () => {

    const [teas, setTeas] = useState([])

    useState(() => {
        fetch('/juice.json')
            .then(res => res.json())
            .then(data => setTeas(data))
        // console.log(data);
    }, [])

    return <div>
        <div className="p-2">
            <div className="space-x-5 flex my-6">
                <Link to={'/'}>Home</Link>
                <ChevronRight />
                <Link to={'/beverages'}>Beverages</Link>
                <ChevronRight />
                <Link to={'/water'}>Water</Link>
            </div>

            <div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {
                        teas.map((tea, index) => <div key={index} className="border shadow-lg p-2 rounded-lg hover:shadow-2xl hover:bg-fuchsia-50">
                            <img className="size-[300px]" src={tea.image} alt="" />
                            <div className="text-center space-y-2 mt-2">
                            <h1 className="text-center text-xl font-medium">{tea.name.slice(0, 20)}...</h1>
                            <p>{tea.weight}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <h1 className="text-2xl font-bold text-orange-500">${tea.price}</h1>
                                    <h1 className="line-through text-xl text-gray-500 font-medium pt-4">${tea.discount}</h1>
                                </div>
                                <button className="btn btn-outline w-full">Add to Cart</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>;
};
export default Juice;