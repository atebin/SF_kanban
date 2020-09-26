import React from 'react';
import KanbanTask from './KanbanTask';

class KanbanListTasks extends React.Component {

    render() {
        const tasks = this.props.children;

        return (
            <div>
                { tasks.map((item, i) => (
                    <KanbanTask task={ item.task } id={ item.id } key={ item.id } workAfterHistoryPush={ this.props.workAfterHistoryPush }/>
                ))}
            </div>
        )
    }
}

export default KanbanListTasks;