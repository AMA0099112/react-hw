import { useDispatch } from "react-redux";
import { addCartItems } from "@/redux/cartSlice";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";

function AddToCart({ book, qty }) {
    const dispatch = useDispatch();

    const [showToast, setShowToast] = useState(false);

    const addToCart = () => {
        // 顯示toast
        setShowToast(true);
        // 修改狀態變數
        dispatch(addCartItems({
            ID: book.ID,
            title: book.title,
            cover: book.cover,
            price: book.price,
            countInStock: book.countInStock,
            qty,
        }))
        // 2 秒後自動關閉 toast
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }

    return (
        <>
            {/* // onClick可以寫成={() => addToCart()} 因為{ }中是一個函數 */}
            <button className="btn btn-soft btn-accent px-8 py-5" onClick={addToCart}>
                <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
                <span >Add To Cart</span>
            </button>
            {
                showToast && (
                    <div className="toast toast-end">
                        <div className="alert">
                            <span>
                                {qty} {qty > 1 ? "pieces" : "piece"} of {book.title} {qty > 1 ? "have" : "has"} been added to your cart.
                            </span>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default AddToCart;

// 使用了daisyUI裡的按鈕元件btn-soft/btn-accent製造效果