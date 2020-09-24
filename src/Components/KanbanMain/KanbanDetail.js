import React from 'react';
import './KanbanMain.css';

class KanbanDetail extends React.Component{

    render() {

        return (
            <div className="kanban-main">
                Это тестовая страница для детального отображения информации о задаче {this.props.text}
            </div>
        )
    }
}

export default KanbanDetail;