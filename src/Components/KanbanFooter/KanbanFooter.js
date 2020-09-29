import React from 'react';
import './KanbanFooter.css';
import { InformerActive, InformerFinished, InformerName, InformerYear } from './Informer';

class KanbanFooter extends React.Component {

    render() {
        const { tasks, isLogin } = this.props;
        
        let reducerFunction = null;
        let countActive = 0;
        let countFinished = 0;

        reducerFunction = (accum, elem) => accum + (elem.status === 1 ? 1 : 0);
        countActive = tasks.lengtn > 0 ? tasks.reduce(reducerFunction, 0) : 0;

        reducerFunction = (accum, elem) => accum + (elem.status === 4 ? 1 : 0);
        countFinished = tasks.lengtn > 0 ? tasks.reduce(reducerFunction, 0) : 0;


        const now = new Date();

        return (
            <div className='kanban-footer'>
                <div className='kanban-footer-left'>
                    <InformerActive value={ countActive } isLogin={ isLogin } />
                    <InformerFinished value={ countFinished } isLogin={ isLogin } />
                </div>
                <div className='kanban-footer-right'>
                    <InformerName value={ this.props.name + ',' } isLogin={ isLogin } />
                    <InformerYear value={ now.getFullYear() } isLogin={ isLogin } />
                </div>        
            </div>
        )
    }
}

export default KanbanFooter;