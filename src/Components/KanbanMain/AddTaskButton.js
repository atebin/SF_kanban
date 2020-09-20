import React from 'react';
import './AddTaskButton.css'

class AddTaskButton extends React.Component {

    render() {

        if (this.props.clicked) {
            return (
                <button 
                    className={"button-submit"} 
                    onClick={ this.props.onClickSubmit }
                >Submit</button>
            )
        } else {
            return (
                <button 
                    className={"button-addtask" + (this.props.active ? ' button-addtask-active' : '')} 
                    onClick={ this.props.active && this.props.onClickAddTask }
                ><i className="fas fa-plus"></i> Add Task</button>
            )
        }
    }
}

export default AddTaskButton;