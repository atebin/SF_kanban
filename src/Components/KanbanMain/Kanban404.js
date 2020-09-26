import React from 'react';
import './KanbanMain.css';

class Kanban404 extends React.Component{

    render() {

        return (
            <div className="kanban-main">
                <div style={ {fontSize: '40px', margin: '60px 40px'} }>404</div>
                <div style={ {fontSize: '40px', margin: '60px 40px'} }>Такой страницы в системе не существует.<br />Если вы уверены, что она должна быть, обратитесь к разработчику</div>
            </div>
        )
    }
}

export default Kanban404;