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
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_1}  
                    title={'Backlog'}  
                    tooltip={'Backlog  - задачи, которые требуют уточнения перед тем, как брать их в работу'}      
                    addTaskMethod={'input'}      
                    listForAddTasks={ [] }
                    addNewTask={ this.props.addNewTask }
                />
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_2}  
                    title={'Ready'}          
                    tooltip={'Ready - задачи, которые могут быть взяты в работу'}      
                    addTaskMethod={'dropdown'}      
                    listForAddTasks={ sortedTasks.status_1 }
                    addNewTask={ this.props.changeStatusTask }
                />
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_3}  
                    title={'In Progress'}    
                    tooltip={'In progress - задачи, которые уже в работе'}
                    addTaskMethod={'dropdown'}      
                    listForAddTasks={ sortedTasks.status_2 }
                    addNewTask={ this.props.changeStatusTask }
                />
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_4}  
                    title={'Finished'}      
                    tooltip={'Finished - законченные задачи'}      
                    addTaskMethod={'dropdown'}      
                    listForAddTasks={ sortedTasks.status_3 }
                    addNewTask={ this.props.changeStatusTask }
                    />
            </div>
        );
    }
}

export default KanbanMain;