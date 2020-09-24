import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';
import KanbanMain from '../KanbanMain/KanbanMain';
import KanbanFooter from '../KanbanFooter/KanbanFooter';
import { DataForTest } from '../DataForTest/DataForTest.js';
import './Kanban.css';

class Kanban extends React.Component {

  	constructor() {
    	super();
    	this.state = {
			tasks: [],
			name: '',
			login: false,
		}
	}

	downloadTasks = () => {
		let userData = [];
		let jsonStorage = localStorage.getItem('appKanban_atebin');
		userData = JSON.parse(jsonStorage);
		this.setState({ tasks: userData, name: 'atebin' });
	}

	handleCreateDemoTasks = () => {
		this.setState({ tasks: JSON.parse(JSON.stringify(DataForTest)), name: 'atebin'  });
	}

	
	handleUserAuthorization = (isAuthorized) => { 
		this.setState({ login: isAuthorized }) 
		if (isAuthorized) { 
			this.downloadTasks() 
		} else {
			this.setState({ tasks: [] }) 
		}
	}
	
	componentDidMount() {
		if (this.state.login) { 
			this.downloadTasks() 
		}
	}

	componentDidUpdate() {
		if (this.state.tasks.length > 0) {
			localStorage.setItem('appKanban_atebin', JSON.stringify(this.state.tasks));
		}
	}

  	addNewTask = (textNewTask) => {
		const now = new Date();

		let newTask = {
			id: `f${(~~(Math.random()*1e8)).toString(16)}`,
			task: textNewTask,
			status: 1,
			active: true,
			date1: `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`,
			date2: '',
			date3: '',
			date4: '',
			detail: '',
		};

		this.setState((prevState) => ({
			tasks: [...prevState.tasks, newTask]
		}));
	}

	changeStatusTask = (event) => {
		const idTaskSelected = event.target.dataset.id;
		const { tasks } = this.state;
		const now = new Date();

		const newTasks = tasks.map(elem => {
			if (elem.id === idTaskSelected) {
				const newStatus = elem.status + 1;

				elem.status = newStatus;
				elem['date' + newStatus] = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
			}
			return elem;
		})

		this.setState({ tasks: newTasks });
	}

	render() {

		return (
			<div className="">
				<KanbanHeader 
					handleUserAuthorization={ this.handleUserAuthorization } 
					handleCreateDemoTasks={ this.handleCreateDemoTasks }
					isLogin={ this.state.login }
				/>
				<KanbanMain 
					isLogin={ this.state.login }
					tasks={ this.state.tasks } 
					addNewTask={ this.addNewTask } 
					changeStatusTask={ this.changeStatusTask }
				/>
				<KanbanFooter 
					tasks={ this.state.tasks } 
					name={ this.state.name }
					isLogin={ this.state.login }
				/>
			</div>
		);  
	}

}

export default Kanban;
