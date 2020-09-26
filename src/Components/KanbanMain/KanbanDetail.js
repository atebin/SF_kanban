import React from 'react';
import './KanbanMain.css';

class KanbanDetail extends React.Component{

    render() {

        const { task_id_detail, tasks } = this.props;
        let taskDatailData = {};
        let renderVariant = 'error';
    
        tasks.some(element => {
            console.log(element.id);
            if (element.id === task_id_detail) {
                console.log('+++');
                Object.assign(taskDatailData, element);
                renderVariant = 'normal';
            } 
        });

        let renderData;

        switch (renderVariant) {
            case 'normal':
                renderData = <>
                    <div className="kanban-main">
                        <div className="kanban-details-wrapper">
                            <div className="kanban-details-task">{ taskDatailData.task }</div>
                            <div className="kanban-details-detail">{ taskDatailData.detail }</div>
                        </div>
                    </div>
                </>
            break;
            default:
                renderData = <>
                    <div className="kanban-main">
                        <div className="kanban-details-wrapper">
                            Что-то пошло не так...<br />
                            Здесь должна была быть страница с детальной информацией по задаче с id={task_id_detail}
                        </div>
                    </div>
                </>
        }

        return renderData;
    }
}

export default KanbanDetail;