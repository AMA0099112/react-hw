import label from "daisyui/components/label";
import { NavLink } from "react-router";

function NavBar() {

    // 指向網址to與標題label
    const navBarContent = [
        { to: "/books/title/the great gatsby", label: "The Great Gatsby" },
        { to: "/books/title/to kill a mockingbird", label: "To Kill a Mockingbird" },
        { to: "/books/title/1984", label: "1984" },
        { to: "/books/title/pride and prejudice", label: "Pride and Prejudice" },
        { to: "/books/title/moby-dick", label: "Moby-Dick" },
        { to: "/books/title/the catcher in the rye", label: "The Catcher in the Rye" },
    ];

    return (
        <div>
            {navBarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        // 過度動畫 
                        `mx-6 text-white text-base transition-all duration-500 ease-in-out
                        ${isActive ? "opacity-100 font-normal" : "opacity-60"}hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
                    }
                >
                    {label}
                </NavLink>
            )
            )}
        </div>
    );
}

export default NavBar;