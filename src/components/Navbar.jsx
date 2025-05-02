
import { useState } from "react";

import HamMenu from "@/components/HamMenu";
import { NavLink } from "react-router";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    // 指向網址to與標題label
    const navBarContent = [
        { to: "books/category/one", label: "One" },
        { to: "books/category/two", label: "Two" },
        { to: "books/category/three", label: "Three" },
    ];

    const NavBarContent = () => (
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-6">
            {navBarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        // 過度動畫 
                        // ! 強制將顏色換成所選顏色
                        `my-3 md:my-0 text-white  transition-all duration-500 ease-in-out
                        ${isActive ? "opacity-100" : "opacity-40"
                        }hover:opacity-100 hover:!text-green-200 hover:text-shadow-lg`
                    }
                >
                    {label}
                </NavLink>
            )
            )}
        </div>
    );


    return (
        <>
            {/* 桌面板導覽列 */}
            <div className="hidden md:flex justify-around mt-3 mb-8">
                <NavBarContent />
            </div>

            {/* 手機板抽屜 */}
            <div className="drawer md:hidden">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
                <HamMenu
                    id="drawer-toggle"
                    className="absolute transform drawer-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side z-9999">
                    {/* 點擊關閉抽屜 */}
                    <label htmlFor="drawer-toggle" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
                    <div className="menu p-4 w-64 min-h-full bg-gray-900 text-white">
                        <h2 className="text-xl font-bold mb-10">CATEGORY</h2>
                        <NavBarContent />
                    </div>
                </div>

            </div>
        </>
    );
}

export default NavBar;