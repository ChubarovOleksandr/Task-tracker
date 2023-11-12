export function validate(timeStart, timeEnd, taskName, addZero) {
    let error = 0;
    //validate time from
    if (!!timeStart.current.hours) {
        if (timeStart.current.hours < 0 || timeStart.current.minutes < 0) {
            alert('В первой дате часы и минуты меньше 0');
            error++
        } else if (timeStart.current.hours >= 24 || timeStart.current.minutes > 59) {
            alert('В первой дате часы и минуты больше 24 или 59');
            error++
        }
    } else if (!!timeStart.current.minutes) {
        alert('Укажите точное время первой даты');
        error++
    } else if(!timeStart.current.hours) {
        alert('Введите часы в стартовой дате')
        error++
    }

    //validate time to
    if (!!timeEnd.current.hours && !!timeStart.current.hours) {
        if (timeEnd.current.hours >= 24 || timeEnd.current.minutes > 59) {
            alert('Во второй дате часы и минуты больше 24 или 59!');
            error++
        } else if (timeEnd.current.hours < 0 || timeEnd.current.minutes < 0) {
            alert('Во второй дате часы и минуты меньше 0!');
            error++
        } else if (timeStart.current.hours > timeEnd.current.hours) {
            alert('Первая дата больше второй!');
            error++
        } else if (timeStart.current.hours === timeEnd.current.hours && timeStart.current.minutes >= timeEnd.current.minutes) {
            alert('Часы равны, но минуты неправильны!');
            error++
        }
    } else if (!timeStart.current.hours && !!timeEnd.current.hours) {
        alert('Укажите точное время первой даты!');
        error++
    } else if (!!timeEnd.current.minutes) {
        alert('Укажите точное время второй даты!');
        error++
    } else if (!timeEnd.current.hours) {
        alert('Введите часы в финальной дате!');
        error++
    }


    if(taskName !== String && taskName.length < 1) {
        alert('Укажите название задачи');
        error++
    }

    if(error === 0) {
        return {
            tSH: addZero(timeStart.current.hours), //tSH - time start hours
            tSM: addZero(timeStart.current.minutes), // tSH - time start minutes
            tEH: addZero(timeEnd.current.hours), // tEH - time end hours
            tEM: addZero(timeEnd.current.minutes), // tEM - time end minutes
            taskName: taskName,
        }
    } else {
        return error;
    }
}