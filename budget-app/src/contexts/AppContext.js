import { createContext, useContext, useReducer } from 'react';

function reducerFunc(state, action) {
    switch (action.type) {
        case "ADD_EXPENSE":
            const totalExpense = state.expenses.reduce((acc, curr) => acc + curr.cost , 0);
            if (state.budget < (totalExpense + action.payload.cost))
                return state;
            return {...state, expenses: [action.payload, ...state.expenses]};
        case "DELETE_EXPENSE":
            return {...state, expenses: state.expenses.filter(expense => expense.id !== action.payload)};
        default:
            return state;
    }
}

const initialState = {
    budget: 20000,
    expenses: [
        { id: 1, name: 'Shopping', cost: 4000 },
        { id: 2, name: 'Holiday', cost: 13000 },
        { id: 3, name: 'Car Service', cost: 1500 },
    ]
} 

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("Context used in wrong place");
    }

    return context;
}


export { AppProvider, useAppContext };

