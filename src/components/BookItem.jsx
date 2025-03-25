import { Link } from "react-router";

//整理BookList中的元件
//第一頁頁面內容
function BookItem({ book }) {
    return (
        <section key={book.ID} className='pt-4 px-3 lg:px-4 mt-4'>
            {/*每本書的資料都用border外框線包起來 */}
            <div className='border border-gray-500 rounded overflow-hidden'>
                <Link to={`/books/ID/${book.ID}`}>
                    <img className='w-full' src={book.cover} alt={book.title} />
                </Link>
                {/*padding 4 */}
                <div className="p-4">
                    {/*margin 1 */}
                    <h6 className="text-white mb-1 font-bold">
                        {book.title}
                    </h6>
                    <h5 className="text-white opacity-80 mb-3">
                        {book.author}
                    </h5>
                    <p className="text-white opacity-60 mb-3">
                        {book.summary}
                    </p>
                    {/*讓See More 跟 Price放置兩側 */}
                    <div className="flex justify-between flex-wrap">
                        <Link to={`/books/ID/${book.ID}`}>
                            See More
                        </Link>
                        <span className="">
                            $US{book.price}.00
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookItem;
