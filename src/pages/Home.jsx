import { Helmet } from "react-helmet-async";
import BookList from "@/components/BookList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useBooks } from "@/react-query";


function Home() {
    const title = "Book Store"
    const { data, isLoading } = useBooks();
    const books = data || [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header
                title={title} />
            <BookList books={books} isLoading={isLoading} />
            <Footer />
        </div>
    );
}

export default Home;

//上一次作業
// import Header from '../components/Header';
// import Body from '../components/Body'
// import Footer from '../components/Footer'

// function Home() {
//     return (
//         <>
//             <Header />
//             <Body />
//             <Footer />
//         </>
//     )
// }

// export default Home;