import React from 'react';
import './KanbanGroupTasks.css';
import AddTaskButton from './AddTaskButton';
import KanbanListTasks from './KanbanListTasks';
import AddTaskElement from './AddTaskElement';

class KanbanGroupTasks extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            addTaskClicked: false,
        }
    }

    handleAddTaskClick = () => {
        this.setState( { addTaskClicked: true })
    }

    render() {

        return (
            <div className="kanban-grouptasks">
                <div className="kanban-grouptasks-title" title={ this.props.tooltip }>{ this.props.title } [{ this.props.tasks.length }]</div>
                <KanbanListTasks>
                    { this.props.tasks }
                </KanbanListTasks>
                <AddTaskElement method={ this.props.addTaskMethod } tasks={ this.props.listForAddTasks } keyForAddTask={ this.props.title } active={ this.state.addTaskClicked }/>
                <AddTaskButton 
                    active={ (this.props.addTaskMethod === 'input' || (this.props.addTaskMethod === 'dropdown' && this.props.listForAddTasks.length > 0)) ? true : false }
                    onClick={ this.handleAddTaskClick }
                />
            </div>
        )
    }
}

export default KanbanGroupTasks;