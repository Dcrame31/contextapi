import React, { useContext } from 'react';
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
    const { todos } = useContext(TodoListContext);
    const { isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (        
            <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
                {todos.length ? (
                    todos.map((todo) => {
                        return <p key={todo.id} className='item'>{todo.text}</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )}
                <button className="ui button primary" onClick={changeTheme}>Change Theme</button>
            </div>
    )
}

export default TodoList;