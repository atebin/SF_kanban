import React from 'react';
import './AddTaskButton.css'

class AddTaskButton extends React.Component {

    render() {

        if (this.props.clicked) {
            if (this.props.method === "input") {

                return (
                    <button 
                        className={"button-submit"} 
                        onClick={ this.props.onClickSubmit }
                    >Submit</button> 
                )
            }

            return null
        } else {
            // если пауза - кнопка может быть активна и у нее есть обработчик, что определяется пропсом active
            if (this.props.isNoPause && this.props.active) {
                return (
                    <button 
                        className={"button-addtask" + ((this.props.active && this.props.isNoPause) ? ' button-addtask-active' : '')} 
                        onClick={ this.props.onClickAddTask }
                    ><i className="fas fa-plus icon-fontawesome"></i> Add Task</button>
                )
            }
            
            // если пауза - кнопка гарантировано неактивна и нет обработчика
            return (
                <button 
                    className={"button-addtask" + ((this.props.active && this.props.isNoPause) ? ' button-addtask-active' : '')} 
                    ><i className="fas fa-plus icon-fontawesome"></i> Add Task</button>
            )
        }
    }
}

export default AddTaskButton;