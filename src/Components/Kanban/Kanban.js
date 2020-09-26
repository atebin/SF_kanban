import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';
import KanbanMain from '../KanbanMain/KanbanMain';
import KanbanDetail from '../KanbanMain/KanbanDetail';
import Kanban404 from '../KanbanMain/Kanban404';
import KanbanFooter from '../KanbanFooter/KanbanFooter';
import { DataForTest, CurrentDateToString } from '../DataForTest/DataForTest.js';
import './Kanban.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

//const customHistory = createBrowserHistory();

/*
const COMPONENT_KANBAN_MAIN = () => {
	return (
		<KanbanMain 
			isLogin={ this.state.login }
			tasks={ this.state.tasks } 
			addNewTask={ this.addNewTask } 
			changeStatusTask={ this.changeStatusTask }
			workAfterHistoryPush={ this.workAfterHistoryPush }
		/>
	)
}


const COMPONENT_KANBAN_DETAIL = () => <KanbanDetail text={ 789654 }/>
*/

class Kanban extends React.Component {

  	constructor() {
    	super();
    	this.state = {
			tasks: [],
			name: '',
			login: false,
			location: window.location.pathname,
			task_id_detail: '',
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
		console.log('addEventListener');
		window.addEventListener('popstate', this.handlePopstate);
	}

	componentDidUpdate() {
		if (this.state.tasks.length > 0) {
			localStorage.setItem('appKanban_atebin', JSON.stringify(this.state.tasks));
		}
	}

  	addNewTask = (textNewTask) => {
		/*
		const now = new Date();
		const day = now.getDate();
		const month = ((now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1));
		const year = now.getFullYear();
		const hour = (now.getHours() < 10 ? '0' + now.getHours() : now.getHours());
		const min = (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());
		*/

		let newTask = {
			id: `f${(~~(Math.random()*1e8)).toString(16)}`,
			task: textNewTask,
			status: 1,
			active: true,
			date1: CurrentDateToString,
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

		/*
		const now = new Date();
		const day = now.getDate();
		const month = ((now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1));
		const year = now.getFullYear();
		const hour = (now.getHours() < 10 ? '0' + now.getHours() : now.getHours());
		const min = (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());
		*/


		const newTasks = tasks.map(elem => {
			if (elem.id === idTaskSelected) {
				const newStatus = elem.status + 1;

				elem.status = newStatus;
				elem['date' + newStatus] = CurrentDateToString;
			}
			return elem;
		})

		this.setState({ tasks: newTasks });
	}

	handlePopstate = () => {
		console.log('in handlePopstate');
		this.setState({ location: window.location.pathname });
	}


	workAfterHistoryPush = () => {

		//console.log('history !!!');
		//customHistory.push('/task/');
		const path = window.location.pathname;
		const search = window.location.search;
		const task_id = window.history.state.task_id;
		this.setState({ location: path, task_id_detail: task_id });
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
				{/*
				<Router history={ customHistory }>
					<Switch>
						<Route 
							path='/' exact
							render={ props => 
								<KanbanMain 
									isLogin={ this.state.login }
									tasks={ this.state.tasks } 
									addNewTask={ this.addNewTask } 
									changeStatusTask={ this.changeStatusTask }
									workAfterHistoryPush={ this.workAfterHistoryPush }
								/>
							} 
						/>
						<Route 
							path='/task' 
							render={ props => <KanbanDetail text={ 789654 }/>} 
						/>
					</Switch>
				</Router>
						*/}

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
