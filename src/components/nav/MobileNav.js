import * as React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ menuState = false, onToggleMobileMenu }) => {
    console.log('mobilenav');

    return (
        <div
            className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
                menuState ? '' : 'hidden'
            }`}
        >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link to="/">
                                <span className="font-semibold text-xl tracking-tight px-2 text-pink-500"></span>
                            </Link>
                        </div>
                        <div className="-mr-2">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-400 hover:text-pink-500 hover:bg-pink-100 focus:outline-none"
                                onClick={onToggleMobileMenu}
                            >
                                <span className="sr-only">Close menu</span>
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-y-8">
                            <Link
                                to="/hooks/use-state"
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-pink-50"
                            >
                                <span className="ml-3 text-base font-medium text-pink-900">
                                    Use state
                                </span>
                            </Link>
                            <Link
                                to="/hooks/use-reducer"
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-pink-50"
                            >
                                <span className="ml-3 text-base font-medium text-pink-900">
                                    Use reducer
                                </span>
                            </Link>
                            <Link
                                to="/hooks/use-context"
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-pink-50"
                            >
                                <span className="ml-3 text-base font-medium text-pink-900">
                                    Use context
                                </span>
                            </Link>
                            <Link
                                to="/hooks/use-callback-memo"
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-pink-50"
                            >
                                <span className="ml-3 text-base font-medium text-pink-900">
                                    Use Callback/Memo
                                </span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
