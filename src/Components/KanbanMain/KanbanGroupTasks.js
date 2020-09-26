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

    handleAddTaskUnclick = () => {
        this.setState({ addTaskClicked: false })
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

    
    handleSelectItemDropdown = (event) => {
        this.setState({ addTaskClicked: false });

        this.props.changeStatusTask(event);
    }
    
    

    handlePauseStop = () => {
        this.setState({ addTaskNoPause: true });
    }

    render() {

        return (
            <div className="kanban-grouptasks">
                <div className="kanban-grouptasks-title" title={ this.props.tooltip }>{ this.props.title } [{ this.props.tasks.length }]</div>
                <KanbanListTasks workAfterHistoryPush={ this.props.workAfterHistoryPush }>
                    { this.props.tasks }
                </KanbanListTasks>
                <AddTaskElement 
                    active={ this.state.addTaskClicked }
                    method={ this.props.addTaskMethod } 
                    value={ this.state.newTaskText }
                    tasks={ this.props.listForAddTasks } 
                    keyForAddTask={ this.props.title } 
                    onBlur={ this.handleSubmitClick }
                    onChange={ this.handleOnChangeInput }
                    onSelect={ this.handleSelectItemDropdown }
                    onMouseleave={ this.handleAddTaskUnclick }
                />
                <AddTaskButton 
                    active={(
                                (this.props.addTaskMethod === 'input' || (this.props.addTaskMethod === 'dropdown' && this.props.listForAddTasks.length > 0))
                            )}
                    clicked={ this.state.addTaskClicked }
                    method={ this.props.addTaskMethod }
                    isNoPause={  this.state.addTaskNoPause}
                    onClickAddTask={ this.handleAddTaskClick }
                    onClickSubmit={ this.handleSubmitClick }
                />
            </div>
        )
    }
}

export default KanbanGroupTasks;