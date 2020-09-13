
const createDataForTest = (statusDefault) => {

    let tasks = [];

    statusDefault.forEach((elem, i) => {

        let task = {};

        task['task'] = 'task #' + i;
        task['status'] = elem;
        task['active'] = true;
        task['date1'] = '2020/09/06';
        task['date2'] = '';
        task['date3'] = '';
        task['date4'] = '';
        task['detail'] = 'lorem  ipsum ...#' + i;

        tasks.push(task);
    });

    return tasks;
}

export const DataForTest = createDataForTest([1, 2, 1, 1, 2, 3, 2, 3, 4, 1, 4]);
//export const DataForTest = createDataForTest([]);