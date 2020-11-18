import * as React from 'react';

const initialShoppingList = [
    {
        id: 1,
        name: 'Tomatoes',
        bought: false,
    },
    {
        id: 2,
        name: 'Wine',
        bought: false,
    },
    {
        id: 3,
        name: 'Milk',
        bought: true,
    },
    {
        id: 4,
        name: 'Bread',
        bought: false,
    },
    {
        id: 5,
        name: 'Onion',
        bought: true,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'BUY':
            const newShoppingList = state.shoppingList.map(s => {
                if (s.id === action.id) {
                    return { ...s, bought: true };
                }
                return s;
            });

            return { ...state, shoppingList: newShoppingList };
        case 'UNDO_BUY':
            const undoedShoppingList = state.shoppingList.map(s => {
                if (s.id === action.id) {
                    return { ...s, bought: false };
                } else {
                    return s;
                }
            });
            return { ...state, shoppingList: undoedShoppingList };
        default:
            throw new Error('This action for shopping list reducer is not defined');
    }
};

const ShoppingList = ({ sList = initialShoppingList }) => {
    const [state, dispatch] = React.useReducer(reducer, {
        shoppingList: sList,
    });

    const { shoppingList } = state;

    const handleChange = item => {
        const actionType = item.bought ? 'UNDO_BUY' : 'BUY';
        dispatch({ type: actionType, id: item.id });
    };

    return (
        <>
            <h1 className="text-center font-mono text-3xl font-bold">Shopping list</h1>
            <ul className="list-decimal list-inside bg-pink-200">
                {shoppingList.map(item => {
                    return (
                        <li className="border-b-4 border-white p-4" key={item.id}>
                            {item.name}
                            <button
                                onClick={() => handleChange(item)}
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 ml-10 rounded"
                            >
                                {item.bought ? 'Undo buy' : 'Buy'}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-reducer-shopping-list-n47ws"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check the code in CodeSandbox
                </a>
            </div>
        </>
    );
};

export default ShoppingList;
