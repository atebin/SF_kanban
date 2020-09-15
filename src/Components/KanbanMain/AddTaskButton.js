import React from 'react';
import './AddTaskButton.css'

class AddTaskButton extends React.Component {

    render() {

        return (
            <button className={"button" + (this.props.active ? ' button-active' : '')} onClick={ this.props.onClick }><i class="fas fa-plus"></i> Add Task</button>
        )
    }
}

export default AddTaskButton;