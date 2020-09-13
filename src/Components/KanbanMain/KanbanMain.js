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
                <div className="kanban-main">
                    <div style={ style }>В системе еще нет задач. Самое время добавить первую!</div>
                </div>
            );
        }

        return (
            <div className="kanban-main">
                <KanbanGroupTasks tasks={sortedTasks.status_1} title={'Backlog'} />
                <KanbanGroupTasks tasks={sortedTasks.status_2} title={'Ready'} />
                <KanbanGroupTasks tasks={sortedTasks.status_3} title={'In Progress'} />
                <KanbanGroupTasks tasks={sortedTasks.status_4} title={'Finished'} />
            </div>
        );
    }
}

export default KanbanMain;