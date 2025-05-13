import { Link } from "react-router";
import NavBar from "@/components/Navbar";
import CartSummary from "@/components/CartSummary";
import UserInfo from "./UserInfo";

function Header({ title }) {

    //const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="relative text-center flex flex-col items-center header">
            <Link to="/">
                <h2 className="text-accent text-3xl font-bold">
                    {title}
                </h2>
            </Link>
            <div className="absolute right-4 top-8 grid grid-cols-3 gap-0 w-[6rem] md:w-[9rem]">
                <UserInfo />
                <CartSummary />
            </div>
            <div className="flex mb-2 justify-center">
                <hr className="my-[10px] mx-auto w-[10rem] border-0 border-t-[3px] opacity-20 rounded" />
                {/* margin 寬度 邊緣粗度 透明度 圓角 */}
            </div>
            <NavBar />
        </header>
    );
}

export default Header;

//上一次作業的部分
// function Header() {
//     return (
//         <header className="header">
//             <h1 className="head1">Vegetables</h1>
//             <nav className="icon">
//                 <nav className="ic-fb">
//                     <img src="vegetables_picture/btn_facebook.png" alt="facebook" />
//                 </nav>
//                 <nav className="ic-ig">
//                     <img src="vegetables_picture/btn_instagram.png" alt="instagram" />
//                 </nav>
//             </nav>
//             <div className="line">|</div>
//             <a href="#" className="btn-item-lo">LOGIN</a>
//             <a href="#" className="btn-item-jo">JOIN</a>
//         </header>);
// }

// export default Header;

