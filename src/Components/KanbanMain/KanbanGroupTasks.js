import React from 'react';
import './KanbanGroupTasks.css';
import AddTaskName from './AddTaskButton';
import KanbanListTasks from './KanbanListTasks';

class KanbanGroupTasks extends React.Component {

    render() {

        return (
            <div className="kanban-grouptasks">
                <div className="kanban-grouptasks-title">{ this.props.title }</div>
                {/*<KanbanListTasks>{ this.props.tasks }</KanbanListTasks>*/}
                <KanbanListTasks>
                    { this.props.tasks.forEach(elem => {
                        return (<div>{ elem.task }</div>)
                    }) }
                </KanbanListTasks>
                <AddTaskName />
            </div>
        )
    }
}

export default KanbanGroupTasks;