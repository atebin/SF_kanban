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
            addTaskNoPause: true,
            newTaskText: '',
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({ newTaskText: event.target.value })
    }

    handleAddTaskClick = () => {
        this.setState({ addTaskClicked: true })
    }

    handleSubmitClick = () => {
        
        
        this.setState((prevState, props) => {

            let text = prevState.newTaskText;
            props.addNewTask(text);

            return {
                addTaskClicked: false,
                addTaskNoPause: false,
                newTaskText: '',
            }
        })
        
        setTimeout(this.handlePauseStop, 500);
    }

    handlePauseStop = () => {
        this.setState({ addTaskNoPause: true })
    }

    render() {

        return (
            <div className="kanban-grouptasks">
                <div className="kanban-grouptasks-title" title={ this.props.tooltip }>{ this.props.title } [{ this.props.tasks.length }]</div>
                <KanbanListTasks childKey={ this.props.title + '_listtasks_' }>
                    { this.props.tasks }
                </KanbanListTasks>
                <AddTaskElement 
                    active={ this.state.addTaskClicked }
                    childKey={ this.props.title + '_addtaskelement_' }
                    method={ this.props.addTaskMethod } 
                    value={ this.state.newTaskText }
                    tasks={ this.props.listForAddTasks } 
                    keyForAddTask={ this.props.title } 
                    onBlur={ this.handleSubmitClick }
                    onChange={ this.handleOnChangeInput }
                />
                <AddTaskButton 
                    active={    (
                                    (
                                        this.props.addTaskMethod === 'input' || (
                                            this.props.addTaskMethod === 'dropdown' && this.props.listForAddTasks.length > 0
                                        )
                                    ) && 
                                    this.state.addTaskNoPause
                                ) ? true : false }
                    clicked={ this.state.addTaskClicked }
                    onClickAddTask={ this.handleAddTaskClick }
                    onClickSubmit={ this.handleSubmitClick }
                />
            </div>
        )
    }
}

export default KanbanGroupTasks;