//整理BookList中的元件
function BookItem({ book }) {
    return (
        <section key={book.ID} className=''>
            <div className=''>
                <a href='#'>
                    <img className='' src={book.cover} alt={book.title} />
                </a>
                <div className="">
                    <h6 className="">
                        {book.title}
                    </h6>
                    <h5 className="">
                        {book.author}
                    </h5>
                    <p className="">
                        {book.summary}
                    </p>
                    <div className="">
                        <a href="#" className="">
                            See More
                        </a>
                        <span className="">
                            {book.price}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookItem;