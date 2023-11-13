import { FC, useCallback, useEffect, useState } from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import { AccountMenu } from "./account-menu";
import { MobileMenu } from "./mobile-menu";
import { NavbarItem } from "./navbar-item";

const TOP_OFFSET = 66;

export const Navbar: FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((prev) => !prev);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((prev) => !prev);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`px-4 md:px-16 py-6 flex items-center transition duration-500 ${
                    showBackground ? "bg-zinc-900 bg-opacity-90" : ""
                }`}
            >
                <img src="/images/logo.png" alt="Logo" className="h-4 lg:h-7" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by languages" />
                </div>
                <div
                    className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
                    onClick={toggleMobileMenu}
                >
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex items-center ml-auto gap-7">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer relative" onClick={toggleAccountMenu}>
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="Avatar" />
                        </div>
                        <BsChevronDown
                            className={`text-white transition ${showAccountMenu ? "rotate-180" : "rotate-0"}`}
                        />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
};
