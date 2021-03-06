
const createDataForTest = (statusDefault) => {

    let tasks = [];

    statusDefault.forEach((elem, i) => {

        let now = new Date();
        let task = {};
        
        task['id'] = `f${(~~(Math.random()*1e8)).toString(16)}`;
        task['task'] = 'task #' + i;
        task['status'] = elem;
        task['active'] = true;
        task['date1'] = getCurrentDateToString(now);
        task['date2'] = '';
        task['date3'] = '';
        task['date4'] = '';
        task['detail'] = 'lorem  ipsum ...#' + i;

        tasks.push(task);
    });

    return tasks;
}

let getCurrentDateToString = (now) => {

    let day = now.getDate();
    let month = ((now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1));
    let year = now.getFullYear();
    let hour = (now.getHours() < 10 ? '0' + now.getHours() : now.getHours());
    let min = (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());
    let sec = (now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds());

    return `${day}.${month}.${year} ${hour}:${min}:${sec}`;
}

export const DataForTest = createDataForTest([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
//export const DataForTest = createDataForTest([1, 3, 1, 1, 2, 4, 3, 4, 4, 1, 1]);
export let CurrentDateToString = (now) => getCurrentDateToString(now);
