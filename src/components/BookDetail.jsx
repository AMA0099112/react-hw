import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import { useSearchParams } from "react-router";

// 書籍細節購買頁面
function BookDetail({ book }) {
    const [searchParams] = useSearchParams();
    const [qty, setQty] = useState(1); // 預設為 1

    useEffect(() => {
        // 從網址抓出qtyFromBasket的值
        const qtyFromBasket = searchParams.get('qtyFromBasket');
        // 如果有 qtyFromBasket，就轉成數字；如果沒有，就根據商品庫存來預設值
        const parsedQty = qtyFromBasket ? Number(qtyFromBasket) : (book.countInStock > 0 ? 1 : 0);

        //如果 parsedQty 不是數字（或是負的），就強制變成 0。否則就照原本的數量。
        setQty(isNaN(parsedQty) || parsedQty < 0 ? 0 : parsedQty);
    }, [searchParams, book.countInStock]);//只要 searchParams 或 product.countInStock 改變，就重新執行這段邏輯

    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 mt-4 gap-8">
            {/* 左側書籍圖 */}
            <div className="lg:col-span-6 lg:col-start-3">
                <img
                    className="w-full h-96 object-contain rounded-xl"
                    alt={book.title}
                    src={book.cover}
                />
                {/* 先轉換成grid檔*/}
                {/* rounded-xl是導圓角 */}
                {/* gap-8在子元素間增加8*4的間距 */}
            </div>

            {/* 右側購買書籍資訊 */}
            <div className="lg:col-span-14 px-4">
                <h1 className="text-white font-bold text-2xl mb-2 mt-4">{book.title}</h1>
                <h2 className="text-white opacity-40 text-lg mb-4">by {book.author}</h2>
                <p className="text-white opacity-80 text-base mb-6">{book.summary}</p>
                {/* 數量與價格按鈕 */}
                <div className="flex  gap-4 place-content-between">
                    <div className="text-2xl font-semibold">US$ {book.price}.00</div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">Qty:</span>
                        <select
                            className="select select-bordered w-20 bg-[#111818] text-white"
                            defaultValue={book.countInStock > 0 ? 1 : 0}
                            onChange={event => setQty(Number(event.target.value))}>
                            {[...Array(book.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p>
                        <span className="font-bold">Total Price</span>: {book.price * qty}
                    </p>
                </div>
                <div className="flex flex-col mt-5">
                    <AddToCart book={book} qty={qty} />
                </div>

            </div>

        </div>
    );
}


export default BookDetail;