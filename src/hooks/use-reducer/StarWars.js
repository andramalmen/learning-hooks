import axios from 'axios';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const StarWars = () => {
    const [name, setName] = React.useState('');

    const handleSubmit = name => {
        setName(name);
    };

    const handleReset = name => {
        setName('');
    };

    return (
        <>
            <StarWarsForm name={name} onSubmit={handleSubmit} />
            <StarWarsErrorBoundary onReset={handleReset} resetKeys={[name]}>
                <StarWarsInfo searchName={name} />
            </StarWarsErrorBoundary>
            <div className="mt-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-reducer-star-wars-im0n0"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check and change the code in CodeSandbox
                </a>
            </div>
        </>
    );
};

const StarWarsForm = ({ onSubmit, starWarsName = '' }) => {
    const [name, setName] = React.useState(starWarsName);

    const handleChangeName = e => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name);
    };

    const resetSearch = e => {
        setName('');
        onSubmit('');
    };

    return (
        <div className="w-full max-w-md">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Search for a Star Wars character
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChangeName}
                        placeholder="eg. Luke, Yoda"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Search character
                    </button>
                    <button
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={resetSearch}
                    >
                        Reset search character
                    </button>
                </div>
            </form>
        </div>
    );
};

const asyncReducer = (_, action) => {
    switch (action.type) {
        case 'pending': {
            return { status: 'pending', data: null, error: null };
        }
        case 'resolved': {
            return { status: 'resolved', data: action.data, error: null };
        }
        case 'rejected': {
            return { status: 'rejected', data: null, error: action.error };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const StarWarsInfo = ({ searchName }) => {
    const [state, dispatch] = React.useReducer(asyncReducer, {
        status: searchName ? 'pending' : 'idle',
        data: null,
        error: null,
    });

    const { status, data, error } = state;

    React.useEffect(() => {
        if (!searchName) {
            return;
        }
        searchCharacter(searchName).then(result => {
            if (result.error) {
                dispatch({ type: 'rejected', error: result.error });
            } else {
                dispatch({ type: 'resolved', data: result.data });
            }
        });
    }, [searchName]);

    if (status === 'idle' || !searchName) {
        return null;
    } else if (status === 'pending') {
        return <DetailsInfoFallback name={searchName} />;
    } else if (status === 'rejected') {
        return <ErrorFallback error={error} />;
    } else if (status === 'resolved') {
        return <Details data={data} />;
    }
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

const searchCharacter = async searchName => {
    const resultData = {
        data: null,
        error: null,
    };
    try {
        const result = await axios(`https://swapi.dev/api/people/?search=${searchName}`);
        if (result.data.count) {
            resultData.data = result.data.results[0];
        } else {
            resultData.error = `No Star Wars character with the name "${searchName}"`;
        }
        return resultData;
    } catch (error) {
        resultData.error = `API error: ${error.message}`;
        console.error(error);
        return resultData;
    }
};

const DetailsInfoFallback = ({ name }) => {
    const initialName = React.useRef(name).current;
    const fallbackData = {
        name: initialName,
    };
    return <Details data={fallbackData} />;
};

const Details = data => {
    const characterData = data.data;
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{characterData.name}</div>
                <p className="text-gray-700 text-base">Gender: {characterData.gender}</p>
                <p className="text-gray-700 text-base">Height: {characterData.height}cm</p>
                <p className="text-gray-700 text-base">Weight: {characterData.mass}kg</p>
                <p className="text-gray-700 text-base">Hair color: {characterData.hair_color}</p>
                <p className="text-gray-700 text-base">Eye color: {characterData.eye_color}</p>
            </div>
        </div>
    );
};

export default StarWars;
