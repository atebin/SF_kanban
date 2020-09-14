import React from 'react';
import './KanbanTask.css';

class KanbanTask extends React.Component {

    render() {

        return (
            <div className="kanban-task">{ this.props.task }</div>
        )
    }


}

export default KanbanTask;