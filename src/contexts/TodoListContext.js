import React, {createContext, useReducer} from 'react';
import {todosReducer} from '../reducers/todosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [ todos, dispatch ] = useReducer(todosReducer, [
        {text: 'Water plants', id: 1},
        {text: 'Code', id: 2},
        {text: 'Exercise', id: 3}
    ]);

    return (
        <TodoListContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;