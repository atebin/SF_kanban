import React from 'react';
import './KanbanTask.css';

class KanbanTask extends React.Component {

    handleClick = (event) => {
        const taskId = event.target.dataset.id;
        const path = '/task/?id=' + taskId;
        window.history.pushState({ task_id: taskId }, null, path);
        this.props.workAfterHistoryPush();
    }

    render() {

        return (
            <div className="kanban-task kanban-task-active" data-id={ this.props.id } onClick={ this.handleClick }>{ this.props.task }</div>
        )
    }


}

export default KanbanTask;