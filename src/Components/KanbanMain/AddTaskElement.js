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
            return <div className={ 'dropdown-base ' + (this.props.active ? '' : 'add-tasks-element-hide') }>
                <div className="kanban-task">Выберите задачу...</div>
                <ul className="dropdown-list" onMouseLeave={ this.props.onMouseleave }>
                    { this.props.tasks.map(item => (
                        <li className="dropdown-list-item" key={ item.id } data-id={ item.id } onClick={ this.props.onSelect }>{ item.task }</li>
                    ))}
                </ul>
            </div>
            
        }

        return this.props.method === "input" ? elementInput() : elementDropdown();
    }
}

export default AddTaskElement;