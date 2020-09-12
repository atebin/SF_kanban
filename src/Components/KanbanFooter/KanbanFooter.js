import React from 'react';
import '../../index.css';

class KanbanFooter extends React.Component {

    render() {

        return (
            <div className='kanban-footer'>
                <div className='kanban-footer-left'>
                    left
                </div>
                <div className='kanban-footer-right'>
                    right
                </div>        
            </div>
        )
    }
}

export default KanbanFooter;