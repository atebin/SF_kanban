import React from 'react';
import './AddTaskElement.css';

class AddTaskElement extends React.Component {

    render() {

        const elementInput = () => {
            return <input className={ this.props.active ? '' : 'add-tasks-element-hide' } type="text" />
            
        }
        const elementDropdown = () => {
            return <div className={ this.props.active ? '' : 'add-tasks-element-hide' }>
                <div className="">hhkhkhk</div>
                <ul className="">
                    { this.props.tasks.map((item, i) => (
                        //return <li className="" key= { "add task " + this.props.keyForAddTask + i }>{ item }</li>
                        <li className="">{ item.task }</li>
                    ))}
                </ul>
            </div>
            
        }

        return this.props.method === "input" ? elementInput() : elementDropdown();
    }
}

export default AddTaskElement;