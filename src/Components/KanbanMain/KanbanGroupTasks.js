import React from 'react';
import './KanbanGroupTasks.css';
import AddTaskButton from './AddTaskButton';
import KanbanListTasks from './KanbanListTasks';
import AddTaskElement from './AddTaskElement';

class KanbanGroupTasks extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            addTaskClicked: false,
            newTaskText: '+++',
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({ newTaskText: event.target.value })
    }

    handleAddTaskClick = () => {

        /*this.setState((prevState) => {
            return {
                addTaskClicked: prevState.addTaskClicked ? false : true
            }
        })*/
        this.setState({ addTaskClicked: true })
    }

    handleSubmitClick = () => {
        /*
        this.setState({ addTaskClicked: false });        
        this.props.addNewTask(this.state.newTaskText);
        this.setState({ newTaskText: '' });
        */

        /*
        this.setState((prevState, props) => {

            let text = prevState.newTaskText;
            props.addNewTask(text);

            return {
                addTaskClicked: false,
                newTaskText: '',
            }
        })
        */
        this.setState({ addTaskClicked: false, newTaskText: '' })
    }

    render() {

        return (
            <div className="kanban-grouptasks">
                <div className="kanban-grouptasks-title" title={ this.props.tooltip }>{ this.props.title } [{ this.props.tasks.length }]</div>
                <KanbanListTasks childKey={ this.props.title + '_listtasks_' }>
                    { this.props.tasks }
                </KanbanListTasks>
                <AddTaskElement 
                    childKey={ this.props.title + '_addtaskelement_' }
                    method={ this.props.addTaskMethod } 
                    value={ this.props.newTaskText }
                    tasks={ this.props.listForAddTasks } 
                    keyForAddTask={ this.props.title } 
                    active={ this.state.addTaskClicked }
                    onBlur={ this.handleSubmitClick }
                    onChange={ this.handleOnChangeInput }
                />
                <AddTaskButton 
                    active={ (this.props.addTaskMethod === 'input' || (this.props.addTaskMethod === 'dropdown' && this.props.listForAddTasks.length > 0)) ? true : false }
                    clicked={ this.state.addTaskClicked }
                    onClickAddTask={ this.handleAddTaskClick }
                    onClickSubmit={ this.handleSubmitClick }
                />
            </div>
        )
    }
}

export default KanbanGroupTasks;