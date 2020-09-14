import React from 'react';
import './KanbanGroupTasks.css';
import AddTaskName from './AddTaskButton';
import KanbanListTasks from './KanbanListTasks';
import AddTaskElement from './AddTaskElement';

class KanbanGroupTasks extends React.Component {

    render() {

        return (
            <div className="kanban-grouptasks">
                <div className="kanban-grouptasks-title" title={ this.props.tooltip }>{ this.props.title } [{ this.props.tasks.length }]</div>
                <KanbanListTasks>
                    { this.props.tasks }
                </KanbanListTasks>
                <AddTaskElement method={ this.props.addTaskMethod } listForAddTasks={ this.props.listForAddTasks }/>
                <AddTaskName active={ (this.props.addTaskMethod === 'input' || (this.props.addTaskMethod === 'dropdown' && this.props.listForAddTasks.length > 0)) ? true : false }/>
            </div>
        )
    }
}

export default KanbanGroupTasks;