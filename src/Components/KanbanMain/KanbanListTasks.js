import React from 'react';
import KanbanTask from './KanbanTask';

class KanbanListTasks extends React.Component {

    render() {
        const tasks = this.props.children;

        return (
            <div>
                { tasks.map(item => (
                    <KanbanTask task={ item.task } />
                ))}
            </div>
        )
    }
}

export default KanbanListTasks;