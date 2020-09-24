import React from 'react';
import './KanbanTask.css';
//import { BrowserRouter } from 'react-router-dom';

class KanbanTask extends React.Component {
    /*static contextTypes = {
        router: React.PropTypes.object,
    };*/

    handleDubleClick = () => {
        window.history.pushState({}, 'title', "/task/777")
    }

    render() {

        return (
            <div className="kanban-task" data-id={ this.props.id } onDoubleClick={ this.handleDubleClick }>{ this.props.task }</div>
        )
    }


}

export default KanbanTask;