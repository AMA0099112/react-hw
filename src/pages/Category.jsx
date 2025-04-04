import Footer from "daisyui/components/footer";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import { useParams } from "react-router";
import books from "@/json/books.json";
import _ from "lodash";
import { Helmet } from "react-helmet-async";

function Category() {
    const { categoryName } = useParams();
    const _books = books.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );
    const title = _.startCase(categoryName);

    return (
        <div>
            <div>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header
                    title={title}
                />
                <BookList books={_books} className="content" />
            </div>
            <Footer className="footer" />
        </div>
    );
}

export default Category;