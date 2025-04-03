import { useParams } from "react-router";
import books from "@/json/books.json";
import Header from "@/components/Header";
import BookDetail from "@/components/BookDetail";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
function Book() {
    const { bookID } = useParams();
    // book參數傳遞給BookDetail
    const book = books.find(
        // bookID(字串)要轉換成數字才能讀取
        (x) => x.ID === bookID
    );
    const title = "Book Detail";

    // 防呆
    if (!book) {
        return <p className="test-white">找不到頁面</p>
    }
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header title={title} />
            <BookDetail book={book} />
            <Footer />
        </div>
    );
}

export default Book;