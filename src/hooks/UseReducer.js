import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import Counter from './use-reducer/Counter';
import Form from './use-reducer/Form';
import ShoppingList from './use-reducer/ShoppingList';

const UseReducer = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <ul className="list-disc m-8">
                <li>
                    <Link to={`${match.url}/counter`}>Counter</Link>
                </li>
                <li>
                    <Link to={`${match.url}/shopping-list`}>Shopping List</Link>
                </li>
                <li>
                    <Link to={`${match.url}/form`}>Form</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/counter`}>
                    <Counter />
                </Route>
                <Route path={`${match.path}/shopping-list`}>
                    <ShoppingList />
                </Route>
                <Route path={`${match.path}/form`}>
                    <Form />
                </Route>
            </Switch>
        </Router>
    );
};

export default UseReducer;
