import React from 'react';
import './AddTaskElement.css';
import './KanbanTask.css'

class AddTaskElement extends React.Component {

    render() {

        const elementInput = () => {
            return <div className={ this.props.active ? '' : 'add-tasks-element-hide' }>
                <input 
                    className="kanban-task element-input" 
                    type="text" 
                    placeholder=" " 
                    onBlur={ this.props.onBlur }
                    onChange={ this.props.onChange } 
                    value={ this.props.value }/>
            </div>
            
        }
        const elementDropdown = () => {
            return <div className={ this.props.active ? '' : 'add-tasks-element-hide' }>
                <div className="">hhkhkhk</div>
                <ul className="">
                    { this.props.tasks.map((item, i) => (
                        //return <li className="" key= { "add task " + this.props.keyForAddTask + i }>{ item }</li>
                        <li className="" key={ this.props.childKey + i }>{ item.task }</li>
                    ))}
                </ul>
            </div>
            
        }

        return this.props.method === "input" ? elementInput() : elementDropdown();
    }
}

export default AddTaskElement;