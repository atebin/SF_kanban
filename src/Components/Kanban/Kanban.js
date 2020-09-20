import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';
import KanbanMain from '../KanbanMain/KanbanMain';
import KanbanFooter from '../KanbanFooter/KanbanFooter';
import { DataForTest } from '../DataForTest/DataForTest.js';
import './Kanban.css';

// константа для использования тестового набора данных
// если = true, используется тестовый набор
const SET_TEST_DATA_TO_START = false;

class Kanban extends React.Component {

  	constructor() {
    	super();
		
		let userData = [];
		let jsonStorage = localStorage.getItem('appKanban_atebin');
		jsonStorage = SET_TEST_DATA_TO_START ? null : jsonStorage;

		if (jsonStorage !== null) {
			userData = JSON.parse(jsonStorage);
		} else {
			userData = DataForTest;
		}

    	this.state = {
      		tasks: userData,
		}

		localStorage.setItem('appKanban_atebin', JSON.stringify(userData));
	}
	  
	componentDidUpdate() {
		localStorage.setItem('appKanban_atebin', JSON.stringify(this.state.tasks));
	}

  	addNewTask = (textNewTask) => {
		let newTask = {
			task: textNewTask,
			status: 1,
			active: true,
			date1: '2020/09/19',
			date2: '',
			date3: '',
			date4: '',
			detail: '',
		};

		this.setState((prevState) => ({
			tasks: [...prevState.tasks, newTask]
		}));
	}

	changeStatusTask = () => {

	}

	render() {

		return (
			<div className="">
				<KanbanHeader />
				<KanbanMain tasks={ this.state.tasks } addNewTask={ this.addNewTask } changeStatusTask={ this.changeStatusTask }/>
				<KanbanFooter tasks={ this.state.tasks }/>
			</div>
		);  
	}

}

export default Kanban;
