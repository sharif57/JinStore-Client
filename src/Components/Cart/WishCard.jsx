import { Trash2 } from "lucide-react";
import { useCart } from "../CheckOut/CartContext";

const WishCard = () => {
    const { wish,handleWishDelete } = useCart();

    return <div>
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl capitalize">Wish List Cart</h1>
                    </header>
                    <div className="mt-8">
                        <ul className="space-y-4">
                            {wish.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 ">
                                    <img src={item.image} alt="" className="size-16 rounded object-cover" />
                                    <div>
                                        <h3 className="text-xl text-gray-900">{item.name}</h3>
                                        <dl className="mt-0.5 space-y-px text-xs text-gray-600">
                                            <div><dt className="inline">Price:</dt><dd className="inline">${item.price}</dd></div>
                                            <div><dt className="inline">Discount:</dt><dd className="inline line-through">$ {item.discount}</dd></div>
                                            <div><dt className="inline">Weight: </dt><dd className="inline">{item.weight} Kg</dd></div>
                                        </dl>
                                    </div>
                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        <button onClick={() => handleWishDelete(item._id)} className="text-gray-600 transition hover:text-red-600">
                                            <span className=""><Trash2 /></span>
                                            {/* SVG for delete icon */}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                     
                    </div>
                </div>
            </div>
        </section>
    </div>;
};
export default WishCard;