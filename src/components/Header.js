import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UseReducer from '../hooks/UseReducer';
import UseState from '../hooks/UseState';

const Header = () => (
    <Router>
        <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">React Hooks</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        to="/use-state"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Use State
                    </Link>
                    <Link
                        to="/use-reducer"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Use Reducer
                    </Link>
                    <Link
                        to="/use-context"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                    >
                        Use Context
                    </Link>
                </div>
            </div>
        </nav>
        <Switch>
            <Route path="/use-reducer">
                <UseReducer />
            </Route>
            <Route path="/use-state">
                <UseState />
            </Route>
        </Switch>
    </Router>
);

export default Header;
