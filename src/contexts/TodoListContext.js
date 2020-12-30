import React, {createContext, useState} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'Water plants', id: 1},
        {text: 'Code', id: 2},
        {text: 'Exercise', id: 3}
    ]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {text: todo, id: Math.random()}
        ]);
    };

    const deleteTodo = () => {

    }

    return (
        <TodoListContext.Provider value={{todos, addTodo}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;