import * as React from 'react';

const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
};

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value,
    };
};

const Form = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const { firstName, lastName, emailAddress, phoneNumber } = state;

    const onChangeInput = e => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    return (
        <div className="w-full max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="firstName"
                    >
                        First name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="firstName"
                        value={firstName}
                        type="text"
                        placeholder="First name"
                        onChange={onChangeInput}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="lastName"
                    >
                        Last name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="lastName"
                        value={lastName}
                        type="text"
                        placeholder="Last name"
                        onChange={onChangeInput}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="emailAddress"
                    >
                        Email address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="emailAddress"
                        value={emailAddress}
                        type="email"
                        placeholder="Email address"
                        onChange={onChangeInput}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phoneNumber"
                    >
                        Phone number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="phoneNumber"
                        value={phoneNumber}
                        type="tel"
                        placeholder="040*******"
                        onChange={onChangeInput}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Register
                    </button>
                </div>
            </form>
            <div className="mt-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-reducer-form-4jey7"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check and change the code in CodeSandbox
                </a>
            </div>
        </div>
    );
};

export default Form;
