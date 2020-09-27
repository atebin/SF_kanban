import React from 'react';
import './KanbanMain.css';
import './KanbanDetail.css';
import './KanbanTask.css';

class KanbanDetail extends React.Component{

    constructor(props) {
        super(props);
    }

    
	componentDidUpdate() {

        const { task_id_detail, tasks } = this.props;
        let taskDatailData = {};
        let renderVariant = 'error';
    
        tasks.some(element => {
            if (element.id === task_id_detail) {
                Object.assign(taskDatailData, element);
                renderVariant = 'normal';
            } 
        });
        
        if (renderVariant == 'error') {
            window.history.pushState(null, null, '/');
            this.props.workAfterHistoryPush();
        }
	}


    render() {

        const { task_id_detail, tasks } = this.props;
        let taskDatailData = {};
        let renderVariant = 'error';
    
        tasks.some(element => {
            if (element.id === task_id_detail) {
                Object.assign(taskDatailData, element);
                renderVariant = 'normal';
            } 
        });

        let strCurrentStatus = '';
        switch (taskDatailData.status) {
            case 1: strCurrentStatus = 'Backlog'; break;
            case 2: strCurrentStatus = 'Ready'; break;
            case 3: strCurrentStatus = 'In Progress'; break;
            case 4: strCurrentStatus = 'Finished'; break;
        }

        let renderData;

        switch (renderVariant) {
            case 'normal':
                renderData = <>
                    <div className="kanban-main">
                        <div className="kanban-details-wrapper">
                            <div className="kanban-details-main kanban-task kanban-task-for-detail">
                                <div className="kanban-details-main-task">{ taskDatailData.task }</div>
                                <div className="kanban-details-main-detail">{ taskDatailData.detail }</div>
                            </div>
                            <div className="kanban-details-more kanban-task kanban-task-for-detail">
                                <div className="kanban-details-more-date-active">
                                    <input type="checkbox" checked={taskDatailData.active} disabled={true} />
                                    {taskDatailData.active ? 'Задача активна' : 'Задача деактивирована'}
                                </div>

                                <div className="kanban-details-more-date-label">Текущий статус задачи в системе:</div>
                                <div className="kanban-details-more-date-value"><strong>{ strCurrentStatus }</strong></div>

                                <div className="kanban-details-more-date-label">Создание задачи в <strong>Backlog</strong>:</div>
                                <div className="kanban-details-more-date-value">{ taskDatailData.date1 === '' ? '-' : taskDatailData.date1 }</div>

                                <div className="kanban-details-more-date-label">Перевод задачи в <strong>Ready</strong>:</div>
                                <div className="kanban-details-more-date-value">{ taskDatailData.date2 === '' ? '-' : taskDatailData.date2 }</div>

                                <div className="kanban-details-more-date-label">Перевод задачи в <strong>In Progress</strong>:</div>
                                <div className="kanban-details-more-date-value">{ taskDatailData.date3 === '' ? '-' : taskDatailData.date3 }</div>

                                <div className="kanban-details-more-date-label">Перевод задачи в <strong>Finished</strong>:</div>
                                <div className="kanban-details-more-date-value">{ taskDatailData.date4 === '' ? '-' : taskDatailData.date4 }</div>
                            </div>
                        </div>
                    </div>
                </>
            break;
            default:
                renderData = <>
                    <div className="kanban-main">
                        <div className="kanban-details-wrapper">
                            Что-то пошло не так...<br />
                            Здесь должна была быть страница с детальной информацией по задаче
                        </div>
                    </div>
                </>
        }

        return renderData;
    }
}

export default KanbanDetail;