import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext} from '../contexts/TodoListContext';

// class ToDoList extends React.Component {
  

//     render() {
//         // const { isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
//         // const theme = isDarkTheme ? darkTheme : lightTheme;
//         return (
//             <ThemeContext.Consumer>{(context) => {
//                 const { isDarkTheme, lightTheme, darkTheme, changeTheme} = context;
//                 const theme = isDarkTheme ? darkTheme : lightTheme;
//                 return (
                    
//                     <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
//                         <p className="item"> Plan the family trip</p>
//                         <p className="item">Go shopping for plants</p>
//                         <p className="item">Go on a hike</p>
//                         <button className="ui button primary" onClick={changeTheme}>Change Theme</button>
//                     </div>
//                         )
//             }}
//                 </ThemeContext.Consumer>
//         )
//     }
// }

const TodoList = () => {
    const [ todo, setTodo ] = useState('');
    const { todos, dispatch } = useContext(TodoListContext);
    const { isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo})
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id
        dispatch({type: 'REMOVE_TODO', id})
    }

    return (        
            <div style={{ background: theme.background, color: theme.text, textAlign: 'center'}}>
                {todos.length ? (
                    todos.map((todo) => {
                        return <p onClick={handleRemoveTodo} id={todo.id} key={todo.id} className='item'>{todo.text}</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )}
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="todo">Add todo:</label>
                    <input type="text" id="todo" onChange={handleChange}/>
                    <input type="submit" value="Add new todo" className="ui button primary"/>
                </form>
                <button className="ui button primary" onClick={changeTheme}>Change Theme</button>
            </div>
    )
}

export default TodoList;