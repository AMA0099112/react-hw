import { addCartItems, removeCartItems, selectCartItems } from "@/redux/cartSlice";
import { ShoppingBasket } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

function BasketModal({ isOpen, toggleModal }) {

    const cartItems = useSelector(selectCartItems);
    const handleCancel = () => toggleModal(!isOpen);

    const dispatch = useDispatch();
    const getTotalPrice = () => {
        return (cartItems.length > 0)
            ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
            : 0;
    }

    return (
        <>
            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-md">
                        <h3 className="text-[2rem] mb-4 text-left">Shopping Basket</h3>
                        {
                            cartItems.length === 0 ? (
                                <div className="text-center">Cart is empty</div>
                            ) : (
                                cartItems.map(item => (
                                    <li key={item.ID} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-400">
                                        <Link to={`/books/ID${item.ID}?qtyFromBasket-${item.qty}`} onClick={handleCancel}>
                                            <img className="max-w-16 max-h-16 flex-1 cursor-pointer" src={item.cover} alt={item.title} />
                                        </Link>
                                        <div className="ml-8 flex-8 w-48 text-left">
                                            <div className="font-medium mb-1">
                                                {item.title}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span>Qty:</span>
                                                <select
                                                    defaultValue={item.qty}
                                                    onChange={(e) =>
                                                        dispatch(addCartItems({
                                                            ID: item.ID,
                                                            title: item.title,
                                                            cover: item.cover,
                                                            price: item.price,
                                                            countInStock: item.countInStock,
                                                            qty: Number(e.target.value),
                                                        }))
                                                    }
                                                    className="select select-bordered select-xs w-[3.5rem] px-2"
                                                >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-base">${item.price * item.qty}</div>
                                            <div className="text-x1 opacity-69 cursor-pointer"
                                                onClick={() => dispatch(removeCartItems(item.ID))}>
                                                x
                                            </div>
                                        </div>
                                    </li>
                                ))
                            )
                        }
                        {/* total */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="font-semibold">
                                Total
                            </div>
                            <div className="font-bold text-right">
                                ${getTotalPrice()}
                            </div>
                        </div>

                        {/* Checkuot Button */}
                        <button className="btn hover:text-accent w-full text-base font-light py-3 mt-8 flex justify-center items-center">
                            <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
                            <span className="ml-3">Start Checkout</span>
                        </button>

                        {/* Close button */}
                        <div className="absolute right-4 top-4 modal-action mt-4">
                            <button onClick={handleCancel} className="btn btn-sm font-thin">X</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default BasketModal;
