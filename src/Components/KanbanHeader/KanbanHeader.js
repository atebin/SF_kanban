import React from 'react';
import './KanbanHeader.css';
import UserMenu from './UserMenu';

class KanbanHeader extends React.Component {

    render() {

        return (
            <div className="kanban-header">
                <h1 className="kanban-h1">Awesome Kanban Board</h1>
                <UserMenu { ...this.props }/>
            </div>
        );
    }
}

export default KanbanHeader;