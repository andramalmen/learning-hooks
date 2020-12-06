import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UseCallbackMemo from '../hooks/UseCallbackMemo';
import UseContext from '../hooks/UseContext';
import UseReducer from '../hooks/UseReducer';
import UseState from '../hooks/UseState';
import Nav from './nav/Nav';

const Header = () => {
    return (
        <Router>
            <Nav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Switch>
                    <Route path="/hooks/use-state">
                        <UseState />
                    </Route>
                    <Route path="/hooks/use-reducer">
                        <UseReducer />
                    </Route>
                    <Route path="/hooks/use-context">
                        <UseContext />
                    </Route>
                    <Route path="/hooks/use-callback-memo">
                        <UseCallbackMemo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Header;
