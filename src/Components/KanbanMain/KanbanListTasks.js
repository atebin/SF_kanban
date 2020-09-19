import React from 'react';
import KanbanTask from './KanbanTask';

class KanbanListTasks extends React.Component {

    render() {
        const tasks = this.props.children;

        return (
            <div>
                { tasks.map((item, i) => (
                    <KanbanTask task={ item.task } key={ this.props.childKey + i }/>
                ))}
            </div>
        )
    }
}

export default KanbanListTasks;