import books from '../json/books.json';
import BookItem from './BookItem';

function BookList() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>{/*設定grid排版 設置RWD gap設置欄與欄間距*/}
            {books.map((book) => (
                <BookItem key={book.ID} book={book} />
            ))}
        </div>
    );
}

export default BookList;
//上一次作業的部分
// function Body() {
//     return (
//         <div>
//             <ul className="nav-list">
//                 <li className="nav-list-item nav-home">
//                     <a href="#" className="nav-list-item-link">Home</a>
//                 </li>
//                 <li className="nav-list-item">
//                     <a href="#" className="nav-list-item-link">About us</a>
//                 </li>
//                 <li className="nav-list-item">
//                     <a href="#" className="nav-list-item-link">vegetables</a>
//                 </li>
//                 <li className="nav-list-item">
//                     <a href="#" className="nav-list-item-link">Online</a>
//                 </li>
//                 <li className="nav-list-item">
//                     <a href="#" className="nav-list-item-link">Contact</a>
//                 </li>
//             </ul>
//             <img className="pumpkin" src="vegetables_picture/img_main_pumpkin.png" alt="pumpkin" />
//             <article>
//                 <div className="head2">
//                     <div className="text1">
//                         <h5>Vegetables</h5>
//                     </div>
//                     <div className="text2">
//                         <h5>Contact</h5>
//                     </div>
//                 </div>

//                 <div className="article2">
//                     <div className="picture-all">
//                         <picture className="picuture"><img src="vegetables_picture/img_vegetables_carrot.png" alt="carrot" />
//                         </picture>
//                         <picture className="picuture"><img src="vegetables_picture/img_vegetables_corn.png" alt="corn" /></picture>
//                         <picture className="picuture"><img src="vegetables_picture/img_vegetables_pepper.png" alt="pepper" />
//                         </picture>
//                     </div>

//                     <aside className="aside">
//                         <div className="For">For any questions or suggestions about Vegetables, Vegetables Club or your online order
//                             you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.
//                         </div>
//                         <hr />
//                         <div className="E-mail">
//                             E-mail : Vegetables@aaabbccc.com
//                             <br />
//                             PHONE : +886-123-456-789
//                         </div>
//                     </aside>
//                 </div>
//             </article>
//         </div>
//     );
// }

// export default Body;