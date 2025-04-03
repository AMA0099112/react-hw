import { ShoppingBasket } from "lucide-react";

function CartSummary() {

    return (
        <nav className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer">
            <div className="indicator" >
                {/* indicator標示元素有額外的通知與類別 */}
                <span className="indicator-item badge badge-accent text-white">5</span>
                <ShoppingBasket strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />

            </div>
            <p className="text-xs opacity-60 mt-[-4px]">Shopping bag</p>
        </nav>
    )

}

export default CartSummary;