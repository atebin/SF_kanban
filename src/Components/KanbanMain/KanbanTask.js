import React from 'react';
import './KanbanTask.css';

class KanbanTask extends React.Component {

    render() {

        return (
            <div className="kanban-task" data-id={ this.props.id }>{ this.props.task }</div>
        )
    }


}

export default KanbanTask;