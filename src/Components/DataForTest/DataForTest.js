
const createDataForTest = (maxCount) => {

    let tasks = [];
    for (let i=1; i<=maxCount; i++) {
        
        let task = {};
        const countStatus = 4;

        let randomStatus = (Math.floor(Math.random() * (countStatus - 1)) + 1);
        
        task['task'] = 'task #' + i;
        task['active'] = true;
        task['status'] = randomStatus;
        task['date1'] = '2020/09/06';
        task['date2'] = '';
        task['date3'] = '';
        task['date4'] = '';
        task['detail'] = 'lorem  ipsum ...#' + i;

        tasks.push(task);
    }

    return tasks;
}

export const DataForTest = createDataForTest(9);