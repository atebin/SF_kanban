import React from 'react';
import '../../index.css';
import { InformerActive, InformerFinished } from '../Informer/Informer';

class KanbanFooter extends React.Component {

    render() {
        const tasks = this.props.tasks;
        
        let reducerFunction = null;
        let countActive = 0;
        let countFinished = 0;

        if (tasks.length > 0) {
            reducerFunction = (accum, elem) => accum + (elem.status === 1 ? elem.status : 0);
            countActive = tasks.reduce(reducerFunction, 0);

            reducerFunction = (accum, elem) => accum + (elem.status === 2 ? elem.status : 0);
            countFinished = tasks.reduce(reducerFunction, 0);
        }

        return (
            <div className='kanban-footer'>
                <div className='kanban-footer-left'>
                    <InformerActive countTasks={ countActive } />
                    <InformerFinished countTasks={ countFinished } />
                </div>
                <div className='kanban-footer-right'>
                    right
                </div>        
            </div>
        )
    }
}

export default KanbanFooter;