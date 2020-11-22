import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import ChangeUsername from './use-state/ChangeUsername';

const UseState = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <ul className="list-disc m-8">
                <li>
                    <Link to={`${match.url}/change-username`}>Change username</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/change-username`}>
                    <ChangeUsername />
                </Route>
            </Switch>
        </Router>
    );
};

export default UseState;
