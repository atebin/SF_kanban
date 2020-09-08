import React from 'react';
import '../../index.css';

class KanbanHeader extends React.Component {

    render() {

        return (
            <div className="kanban-header">
                <h1 className="kanban-h1">Awesome Kanban Board</h1>
                <div>Блок ЛК</div>
            </div>
        );
    }
}

export default KanbanHeader;