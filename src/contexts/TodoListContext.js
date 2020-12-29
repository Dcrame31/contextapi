import React, {createContext, useState} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'Water plants', id: 1},
        {text: 'Code', id: 2},
        {text: 'Exercise', id: 3}
    ])
    return (
        <TodoListContext.Provider value={{todos}}>
            {children}
        </TodoListContext.Provider>
    )
}

export const TodoListContextProvider;