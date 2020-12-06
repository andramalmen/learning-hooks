import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import useHandleOutsideClick from '../../customHooks/handleOutsideClick';

const DesktopNav = () => {
    const [openHooksMenu, setOpenHooksMenu] = React.useState(false);
    const hooksMenu = React.useRef();

    const location = useLocation();

    React.useEffect(() => {
        setOpenHooksMenu(false);
    }, [location]);

    const handleOutsideClick = e => {
        if (hooksMenu.current.contains(e.target)) {
            return;
        }
        setOpenHooksMenu(false);
    };

    useHandleOutsideClick(handleOutsideClick);

    const toggleHooksMenu = e => {
        e.preventDefault();
        setOpenHooksMenu(!openHooksMenu);
    };

    return (
        <nav className="hidden md:flex space-x-10">
            <div className="relative">
                <button
                    type="button"
                    className="group bg-white rounded-md text-pink-500 inline-flex items-center text-base font-medium hover:text-pink-700 focus:outline-none"
                    onClick={toggleHooksMenu}
                >
                    <span>Hooks</span>

                    {openHooksMenu ? (
                        <>
                            <svg
                                className="ml-2 mt-1 h-5 w-5 text-pink-400 group-hover:text-pink-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 28 28"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M5 15l7-7 7 7"
                                ></path>
                            </svg>
                        </>
                    ) : (
                        <svg
                            className="ml-2 mt-1 h-5 w-5 text-pink-400 group-hover:text-pink-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 28 28"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    )}
                </button>
                <div
                    ref={hooksMenu}
                    className={`absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${
                        openHooksMenu ? '' : 'hidden'
                    }`}
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <Link
                                to="/hooks/use-state"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-50"
                            >
                                <div className="ml-4">
                                    <p className="text-base font-medium text-pink-900">Use state</p>
                                </div>
                            </Link>
                            <Link
                                to="/hooks/use-reducer"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-50"
                            >
                                <div className="ml-4">
                                    <p className="text-base font-medium text-pink-900">
                                        Use reducer
                                    </p>
                                </div>
                            </Link>
                            <Link
                                to="/hooks/use-context"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-50"
                            >
                                <div className="ml-4">
                                    <p className="text-base font-medium text-pink-900">
                                        Use context
                                    </p>
                                </div>
                            </Link>
                            <Link
                                to="/hooks/use-callback-memo"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-pink-50"
                            >
                                <div className="ml-4">
                                    <p className="text-base font-medium text-pink-900">
                                        Use Callback/Memo
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DesktopNav;
