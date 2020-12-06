import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import PageSubTitle from '../components/common/PageSubTitle';
import ChangeUsername from './use-state/ChangeUsername';

const UseState = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <PageSubTitle title="Use State" />
            <ul className="list-disc m-8">
                <li>
                    <Link className="hover:underline" to={`${match.url}/change-username`}>
                        Change username
                    </Link>
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
