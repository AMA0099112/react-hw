import label from "daisyui/components/label";
import { NavLink } from "react-router";

function NavBar() {

    // 指向網址to與標題label
    const navBarContent = [
        { to: "/books/category/one", label: "One" },
        { to: "/books/category/two", label: "Two" },
        { to: "/books/category/three", label: "Three" },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {navBarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>

                        // 過度動畫 
                        `mx-6  transition-all duration-500 ease-in-out
                        ${isActive ? "opacity-100 font-normal" : "opacity-40"
                        }hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
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