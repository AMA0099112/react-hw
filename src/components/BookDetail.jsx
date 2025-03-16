import AddToCart from "./AddToCart";

// 書籍細節購買頁面
function BookDetail({ book }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8">
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
                <h1 className="text-white font-bold text-2xl mb-2">{book.title}</h1>
                <h2 className="text-white opacity-40 text-lg mb-8">by {book.author}</h2>
                <p className="text-white opacity-80 text-base mb-10">{book.summary}</p>
                {/* 數量與價格按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold">$ {book.price}</p>
                    <AddToCart />
                </div>
            </div>

        </div>
    );
}

export default BookDetail;