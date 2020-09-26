import React from 'react';
import './KanbanTask.css';
//import { BrowserRouter } from 'react-router-dom';

class KanbanTask extends React.Component {
    /*static contextTypes = {
        router: React.PropTypes.object,
    };*/

    handleDubleClick = (event) => {
        const taskId = event.target.dataset.id;
        const path = '/task/?id=' + taskId;
        window.history.pushState({ task_id: taskId }, null, path);
        this.props.workAfterHistoryPush();
    }

    //.props.historyPush

    render() {

        return (
            <div className="kanban-task" data-id={ this.props.id } onDoubleClick={ this.handleDubleClick }>{ this.props.task }</div>
        )
    }


}

export default KanbanTask;