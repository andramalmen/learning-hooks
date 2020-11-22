import * as React from 'react';

const useLocalStorage = (key, value) => {
    const [state, setState] = React.useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            return JSON.parse(valueInLocalStorage);
        }
        return value;
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
};

const ChangeUsername = ({ initialUsername = '' }) => {
    const [username, setUsername] = useLocalStorage('username', initialUsername);

    const handleUsernameChange = e => setUsername(e.target.value);

    return (
        <div className="w-full max-w-md">
            <div className="mb-4">
                <label className="block text-pink-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="mt-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-state-local-storage-791s0"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check and change the code in CodeSandbox
                </a>
            </div>
        </div>
    );
};

export default ChangeUsername;
