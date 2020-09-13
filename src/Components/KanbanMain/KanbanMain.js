import React from 'react';
import './KanbanMain.css';
import KanbanGroupTasks from './KanbanGroupTasks';


class KanbanMain extends React.Component {

    render() {

        const tasks = this.props.tasks;
        const sortedTasks = {
            status_1: [],
            status_2: [],
            status_3: [],
            status_4: [],
        };

        tasks.forEach((element) => {
            sortedTasks['status_' + element.status].push(element);
        });        


        if (tasks.length <= 0) {
            let style = {
                width: '70%',
                margin: '0 auto ',
                padding: '100px 20px',
                fontSize: '32px',
                color: '#bbb',
            }
            return (
                <div className="kanban-inner">
                    <div style={ style }>В системе еще нет задач. Самое время добавить первую!</div>
                </div>
            );
        }

        return (
            <div className="kanban-inner">
                <KanbanGroupTasks tasks={sortedTasks.status_1} />
                <KanbanGroupTasks tasks={sortedTasks.status_1} />
                <KanbanGroupTasks tasks={sortedTasks.status_1} />
                <KanbanGroupTasks tasks={sortedTasks.status_1} />
            </div>
        );
    }
}

export default KanbanMain;