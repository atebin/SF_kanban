import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';
import KanbanMain from '../KanbanMain/KanbanMain';
import KanbanDetail from '../KanbanMain/KanbanDetail';
import Kanban404 from '../KanbanMain/Kanban404';
import KanbanFooter from '../KanbanFooter/KanbanFooter';
import { DataForTest, CurrentDateToString } from '../DataForTest/DataForTest.js';
import './Kanban.css';

const USER_NAME = 'user';

class Kanban extends React.Component {

  	constructor() {
    	super();
    	this.state = {
			tasks: [],
			name: '',
			login: false,
			host: window.location.pathname,
			location: window.location.pathname,
			task_id_detail: '',
		}
	}

	downloadTasks = () => {
		let userData = [];
		let jsonStorage = localStorage.getItem('appKanban_' + USER_NAME);
		if (jsonStorage !== null) {
			userData = JSON.parse(jsonStorage);
		}
		this.setState({ tasks: userData, name: USER_NAME });
	}

	handleCreateDemoTasks = () => {
		this.setState({ tasks: JSON.parse(JSON.stringify(DataForTest)), name: USER_NAME  });
	}

	
	handleUserAuthorization = (isAuthorized) => {
		this.setState({ login: isAuthorized }) 
		if (isAuthorized) { 
			this.downloadTasks() 
		} else {
			this.setState({ tasks: [] });
			window.history.pushState(null, null, '/');
			this.workAfterHistoryPush();
		}
	}
	
	componentDidMount() {
		if (this.state.login) { 
			this.downloadTasks() 
		}
		window.addEventListener('popstate', this.handlePopstate);
	}

	componentDidUpdate() {
		if (this.state.tasks.length > 0) {
			localStorage.setItem('appKanban_' + USER_NAME, JSON.stringify(this.state.tasks));
		}
	}

  	addNewTask = (textNewTask) => {
		const now = new Date();

		let newTask = {
			id: `f${(~~(Math.random()*1e8)).toString(16)}`,
			task: textNewTask,
			status: 1,
			active: true,
			date1: CurrentDateToString(now),
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
				elem['date' + newStatus] = CurrentDateToString(now);
			}
			return elem;
		})

		this.setState({ tasks: newTasks });
	}

	handlePopstate = () => {
		this.setState({ location: window.location.pathname });
	}


	workAfterHistoryPush = () => {
		const path = window.location.pathname;
		const search = window.location.search;
		
		if (path === '/task/') {
			const task_id = window.history.state.task_id;
			this.setState({ location: path, task_id_detail: task_id });
		} else {
			this.setState({ location: path });
		}
	}

	render() {

		let currentComponent;

		switch (this.state.location) {
			case '/':
				currentComponent = 	<KanbanMain 
										isLogin={ this.state.login }
										tasks={ this.state.tasks } 
										addNewTask={ this.addNewTask } 
										changeStatusTask={ this.changeStatusTask }
										workAfterHistoryPush={ this.workAfterHistoryPush }
									/>;
			break;
			case '/task/':
				currentComponent = <KanbanDetail 
										task_id_detail={ this.state.task_id_detail }
										tasks={ this.state.tasks }
										workAfterHistoryPush={ this.workAfterHistoryPush }
									/>;
			break;
			default:
				currentComponent = <Kanban404/>;
		}

		return (
			<div className="">
				<KanbanHeader 
					handleUserAuthorization={ this.handleUserAuthorization } 
					handleCreateDemoTasks={ this.handleCreateDemoTasks }
					isLogin={ this.state.login }
				/>
				{ currentComponent }

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
