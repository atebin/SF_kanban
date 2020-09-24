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
            let whiteText ={
                color: '#fff',
            }

            if (this.props.isLogin) {
                return (
                    <div className="kanban-main">
                        <div className="kanban-main-defaulttext">В системе еще нет задач!<br /><br />Для начала работы выберите пункт "Create demo tasks" в главном меню программы.</div>
                    </div>
                )
            } else {
                return (
                    <div className="kanban-main">
                        <div className="kanban-main-defaulttext"><strong style={ whiteText }>Awesome Kanban Board</strong> приветствует Вас!<br /><br />Авторизуйтесь и начните управлять вашими задачами!</div>
                    </div>
                )
            }
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
                    changeStatusTask={ this.props.changeStatusTask }
                />
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_2}  
                    title={'Ready'}          
                    tooltip={'Ready - задачи, которые могут быть взяты в работу'}      
                    addTaskMethod={'dropdown'}      
                    listForAddTasks={ sortedTasks.status_1 }
                    addNewTask={ this.props.changeStatusTask }
                    changeStatusTask={ this.props.changeStatusTask }
                />
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_3}  
                    title={'In Progress'}    
                    tooltip={'In progress - задачи, которые уже в работе'}
                    addTaskMethod={'dropdown'}      
                    listForAddTasks={ sortedTasks.status_2 }
                    addNewTask={ this.props.changeStatusTask }
                    changeStatusTask={ this.props.changeStatusTask }
                />
                <KanbanGroupTasks 
                    tasks={sortedTasks.status_4}  
                    title={'Finished'}      
                    tooltip={'Finished - законченные задачи'}      
                    addTaskMethod={'dropdown'}      
                    listForAddTasks={ sortedTasks.status_3 }
                    addNewTask={ this.props.changeStatusTask }
                    changeStatusTask={ this.props.changeStatusTask }
                    />
            </div>
        );
    }
}

export default KanbanMain;