import React from 'react';
import KanbanHeader from '../KanbanHeader/KanbanHeader';

class Kanban extends React.Component {

  	constructor() {
    	super();

    	this.state = {
      		tasks: {},
    	}
  	}

  	componentDidMount() {

		let user = {};
		
		// Проверяем localStorage
	
		let jsonStorage = localStorage.getItem('appKanban_atebin');
		//jsonStorage = null; // раскомментировать для записи в localStorage тестового значения

		if (jsonStorage !== null) {
			// Если в localStorage есть данные для приложения appKanban, считываем их
			console.log('data from localStorage');

			user = JSON.parse(jsonStorage);
			console.log(user);
		} else {
			// Если в localStorage ничего нет, создаем тестовый массив

			console.log('create test data!!!');

			let tasks = {};
			for (let i=1; i<=5; i++) {
				let task = {};
				
				task['task'] = 'task #' + i;
				task['active'] = true;
				task['status'] = 1;
				task['date1'] = '2020/09/06';
				task['date2'] = '';
				task['date3'] = '';
				task['date4'] = '';
				task['detail'] = 'lorem  ipsum ...#' + i;

				tasks['task ' + i] = task;
			}
			user['atebin'] = tasks;
		}

		// сохраняем текущее состояние
		this.setState({ tasks: user });
		localStorage.setItem('appKanban_atebin', JSON.stringify(user));
  	}


  render() {

    return (
      <div>
          <KanbanHeader />
        <header className="">
          <p>
            Тестовая строка в Kanban 2 !!!
          </p>
          <p>{ /*qwe.get('atebin')*/ }</p>
        </header>
      </div>
    );  
  }

}

export default Kanban;
