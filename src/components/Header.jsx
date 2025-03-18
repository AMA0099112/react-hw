import { Link } from "react-router";

function Header({ title }) {
    return (
        <header className="text-center flex flex-col items-center justify-center header">
            <Link to="/">
                <h2 className="text-accent pb-2 text-3xl font-bold">
                    {title}
                </h2>
            </Link>
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

