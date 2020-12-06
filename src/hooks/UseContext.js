import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import PageSubTitle from '../components/common/PageSubTitle';
import Timer from './use-context/Timer';

const UseContext = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <PageSubTitle title="Use Context" />
            <ul className="list-disc m-8">
                <li>
                    <Link className="hover:underline" to={`${match.url}/timer`}>
                        Timer
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/timer`}>
                    <Timer />
                </Route>
            </Switch>
        </Router>
    );
};

export default UseContext;
