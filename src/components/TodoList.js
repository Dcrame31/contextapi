import React from 'react';

class ToDoList extends React.Component {
    render() {
        return (
            <div className="ui list">
                <p className="item"> Plan the family trip</p>
                <p className="item">Go shopping for plants</p>
                <p className="item">Go on a hike</p>
            </div>
        )
    }
}

export default ToDoList;