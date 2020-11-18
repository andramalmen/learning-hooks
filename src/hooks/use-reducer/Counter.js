import * as React from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Action for Counter is not defined');
    }
};

const Counter = ({ initialCount = 0 }) => {
    const [state, dispatch] = React.useReducer(reducer, { count: initialCount });

    const { count } = state;
    const decrement = () => dispatch({ type: 'decrement' });
    const increment = () => dispatch({ type: 'increment' });
    return (
        <>
            <div className="mb-2">Count: {count}</div>
            <button
                onClick={decrement}
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
                Decrement
            </button>
            <button
                onClick={increment}
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            >
                Increment
            </button>
            <div className="mt-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-reducer-counter-u9hfd"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check the code in CodeSandbox
                </a>
            </div>
        </>
    );
};

export default Counter;
