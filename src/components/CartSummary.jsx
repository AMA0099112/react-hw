import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/redux/cartSlice";
import BasketModal from "./BasketModal";

function CartSummary() {
    // 設定購物車是否開啟
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    // 取得購物車的數量
    // useSelector() 取得 redux store 的 cartItems
    // cartItems 是一個陣列，裡面每個物件都有 qty 屬性
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0) : 0;

    return (
        <>
            <nav
                onClick={toggleOpen}
                className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer">
                <div className="indicator" >
                    {/* count >0才渲染畫面 */}
                    {count > 0 && <span className="indicator-item badge badge-accent text-white">{count}</span>}
                    {/* indicator標示元素有額外的通知與類別 */}
                    <ShoppingBasket strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />

                </div>
                <p className="text-xs opacity-60 mt-[-4px]">Shopping bag</p>
            </nav>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleOpen}
            />
        </>
    );

}

export default CartSummary;