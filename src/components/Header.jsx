import { Link } from "react-router";
import NavBar from "./Navbar";

function Header({ title }) {
    return (
        <header className="text-center flex flex-col items-center justify-center header">
            <Link to="/">
                <h2 className="text-accent text-3xl font-bold">
                    {title}
                </h2>
            </Link>
            <div className="flex mb-2 justify-center">
                <hr className="my-[10px] mx-auto w-[10rem] border-0 border-t-[3px] opacity-20 rounded" />
                {/* margin 寬度 邊緣粗度 透明度 圓角 */}
            </div>
            {/* <NavBar /> */}
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

