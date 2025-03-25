import BookList from "../components/BookList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
    return (
        <div>
            <Header
                title="Book Store" />
            <BookList />
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