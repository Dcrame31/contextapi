import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ToDoList extends React.Component {
  

    render() {
        const { isDarkTheme, lightTheme, darkTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, lightTheme, darkTheme} = context;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                    
                    <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
                        <p className="item"> Plan the family trip</p>
                        <p className="item">Go shopping for plants</p>
                        <p className="item">Go on a hike</p>
                    </div>
                        )
            }}
                </ThemeContext.Consumer>
        )
    }
}

export default ToDoList;