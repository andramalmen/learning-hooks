import axios from 'axios';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const StarWarsMovies = () => {
    const [movies, setMovies] = React.useState([]);
    const [allMovies, setAllMovies] = React.useState([]);

    React.useEffect(() => {
        axios(`https://swapi.dev/api/films/`)
            .then(response => {
                setMovies(response.data.results);
                setAllMovies(response.data.results);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    console.log('render main');

    const handleRemoveFromList = React.useCallback(
        movie => {
            setMovies(movies.filter(m => m.episode_id !== movie.episode_id));
        },
        [movies]
    );

    const handleReset = name => {
        setMovies([]);
        setAllMovies([]);
    };

    return (
        <>
            <div className="my-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-callback-memo-star-wars-lsuvu"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check and change the code in CodeSandbox
                </a>
            </div>
            <div className="flex mb-4">
                <StarWarsErrorBoundary onReset={handleReset} resetKeys={[movies]}>
                    <div className="w-3/4  h-12">
                        <ListStarWarsMovies movies={movies} onRemove={handleRemoveFromList} />
                    </div>
                    <div className="w-1/4  h-12">
                        <AddStarWarsMovie movies={allMovies} />
                    </div>
                </StarWarsErrorBoundary>
            </div>
        </>
    );
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <strong className="font-bold">Holy smokes! An error we got:</strong> <br />
            <span className="block sm:inline">
                <pre style={{ whiteSpace: 'normal' }}>{error.message ?? error}</pre>
            </span>
            {resetErrorBoundary ? (
                <button
                    className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={resetErrorBoundary}
                >
                    Try again
                </button>
            ) : null}
        </div>
    );
};

function StarWarsErrorBoundary(props) {
    return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
}

const AddStarWarsMovie = React.memo(({ movies }) => {
    const [search, setSearch] = React.useState('');
    const [localMovies, setLocalMovies] = React.useState([]);
    React.useEffect(() => {
        setLocalMovies(movies);
    }, [movies]);
    console.log('render add');

    const onSearchChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
        setLocalMovies(
            movies.filter(movie =>
                movie.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
            )
        );
    };

    return (
        <>
            <div className="text-gray-900 font-bold text-xl mb-2 pl-4">
                Click on the movie name to add it to the list
            </div>
            <input
                className="shadow appearance-none border rounded w-full my-3 py-2 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={search}
                onChange={onSearchChange}
                placeholder="Search for a movie"
            />
            {localMovies ? (
                <ul className="list-disc list-inside pl-4">
                    {localMovies.map(movie => {
                        return (
                            <li className="text-pink-500 cursor-auto" key={movie.episode_id}>
                                {movie.title}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </>
    );
});

const ListStarWarsMovies = ({ movies, onRemove }) => {
    console.log('render list');
    return (
        <ul>
            {movies.map(movie => (
                <StarWarsMovie key={movie.episode_id} movie={movie} onRemove={onRemove} />
            ))}
        </ul>
    );
};

const StarWarsMovie = ({ movie, onRemove }) => {
    return (
        <li>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        Director {movie.director}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{movie.title}</div>
                    <p className="text-gray-700 text-base">{movie.opening_crawl}</p>
                    <button
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => onRemove(movie)}
                    >
                        Remove movie
                    </button>
                </div>
            </div>
        </li>
    );
};

export default StarWarsMovies;
