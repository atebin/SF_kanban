
const createDataForTest = (statusDefault) => {

    let tasks = [];

    statusDefault.forEach((elem, i) => {

        const now = new Date();
        let task = {};
        
        task['id'] = `f${(~~(Math.random()*1e8)).toString(16)}`;
        task['task'] = 'task #' + i;
        task['status'] = elem;
        task['active'] = true;
        task['date1'] = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
        task['date2'] = '';
        task['date3'] = '';
        task['date4'] = '';
        task['detail'] = 'lorem  ipsum ...#' + i;

        tasks.push(task);
    });

    return tasks;
}

export const DataForTest = createDataForTest([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
//export const DataForTest = createDataForTest([1, 3, 1, 1, 2, 4, 3, 4, 4, 1, 1]);
//export const DataForTest = createDataForTest([]);