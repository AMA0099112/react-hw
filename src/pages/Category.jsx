import Footer from "daisyui/components/footer";
import BookList from "../components/BookList";
import Header from "../components/Header";
import { useParams } from "react-router";
import books from "../json/books.json";
import _ from "lodash";

//這是類別 但json檔中沒有類別 所以改用title分類
function Category() {
    const { categoryName } = useParams();
    const _books = books.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );
    const title = _.startCase(categoryName);

    return (
        <div>
            <Header
                title={title}
            />
            <BookList books={_books} className="content" />
            <Footer className="footer" />
        </div>
    );
}

export default Category;