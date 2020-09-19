import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';
import KanbanMain from '../KanbanMain/KanbanMain';
import KanbanFooter from '../KanbanFooter/KanbanFooter';
import { DataForTest } from '../DataForTest/DataForTest.js';
import './Kanban.css';

// константа для использования тестового набора данных
// если = true, используется тестовый набор
const SET_TEST_DATA_TO_START = true;

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
			//alert('Данные из тестового набора');
		}

    	this.state = {
      		tasks: userData,
		}

		localStorage.setItem('appKanban_atebin', JSON.stringify(userData));
  	}

  	componentDidMount() {
  	}

  render() {

    return (
      	<div className="">
        	<KanbanHeader />
        	<KanbanMain tasks={ this.state.tasks }/>
			<KanbanFooter tasks={ this.state.tasks }/>
      	</div>
    );  
  }

}

export default Kanban;
