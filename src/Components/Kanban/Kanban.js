import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';
import KanbanFooter from '../KanbanFooter/KanbanFooter';
import { DataForTest } from '../DataForTest/DataForTest.js';

class Kanban extends React.Component {

  	constructor() {
    	super();

    	this.state = {
      		tasks: {},
    	}
  	}

  	componentDidMount() {

		let userData = [];
		
		let jsonStorage = localStorage.getItem('appKanban_atebin');
		//jsonStorage = null; // раскомментировать для записи в localStorage тестового значения

		if (jsonStorage !== null) {
			userData = JSON.parse(jsonStorage);
		} else {
			userData = DataForTest;
		}

		this.setState({ tasks: userData });
		localStorage.setItem('appKanban_atebin', JSON.stringify(userData));
  	}

  render() {

    return (
      	<div className="">
        	<KanbanHeader />
        	<header className="kanban-inner">
          		Тестовая строка в Kanban 2 !!!
        	</header>
			<KanbanFooter tasks={ this.state.tasks }/>
      	</div>
    );  
  }

}

export default Kanban;
