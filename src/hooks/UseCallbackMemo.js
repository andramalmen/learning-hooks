import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import StarWarsMovies from './use-callback/StarWarsMovies';
import PageSubTitle from '../components/common/PageSubTitle';

const UseState = () => {
    const match = useRouteMatch();
    return (
        <Router>
            <PageSubTitle title="Use Callback/Memo" />
            <ul className="list-disc m-8">
                <li>
                    <Link className="hover:underline" to={`${match.url}/star-wars-movies`}>
                        Star Wars Movies
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/star-wars-movies`}>
                    <StarWarsMovies />
                </Route>
            </Switch>
        </Router>
    );
};

export default UseState;
