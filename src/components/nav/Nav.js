import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import useHandleOutsideClick from '../../customHooks/handleOutsideClick';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
    const location = useLocation();
    const mobileMenu = React.useRef();

    React.useEffect(() => {
        setOpenMobileMenu(false);
    }, [location]);

    const handleOutsideClick = e => {
        if (mobileMenu.current.contains(e.target)) {
            return;
        }
        setOpenMobileMenu(false);
    };

    useHandleOutsideClick(handleOutsideClick);

    const toggleMobileMenu = e => {
        if (typeof e !== 'undefined') {
            e.preventDefault();
        }
        setOpenMobileMenu(!openMobileMenu);
    };

    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-pink-500 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="font-semibold text-xl tracking-tight px-2 text-pink-500">
                                Learning React
                            </span>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-400 hover:text-pink-500 hover:bg-pink-100 focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <DesktopNav />
                </div>
            </div>
            <div ref={mobileMenu}>
                <MobileNav menuState={openMobileMenu} onToggleMobileMenu={toggleMobileMenu} />
            </div>
        </div>
    );
};

export default Nav;
