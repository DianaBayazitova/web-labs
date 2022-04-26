//Create table from form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const weekLength = document.getElementById('weekLength').value;
    const classesNumber = document.getElementById('classesNumber').value;
    const language = document.querySelector('input[name="language"]:checked').value;

    localStorage.setItem('weekLength', weekLength);
    localStorage.setItem('classesNumber', classesNumber);
    localStorage.setItem('language', language);

    const oldTable = document.getElementById('table');
    if (!!oldTable) {
        oldTable.remove();
    }
    createTable(weekLength, classesNumber, language);
})

const createTableContent = (classesNumber, days, language) => {
    const tbl = document.getElementById('table');
    const dayOfWeekRus = {
        0: 'Понедельник',
        1: 'Вторник',
        2: 'Среда',
        3: 'Четверг',
        4: 'Пятница',
        5: 'Суббота'
    };
    const dayOfWeekEng = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday'
    };
    for (let i = 0; i < parseInt(classesNumber) + 1; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < days; j++) {
            const td = tr.insertCell();
            if (i === 0) {
                if (language === 'Russian') {
                    td.appendChild(document.createTextNode(`${dayOfWeekRus[j]}`));
                } else if (language === 'English') {
                    td.appendChild(document.createTextNode(`${dayOfWeekEng[j]}`));
                }
            }
        }
    }
}

const createTable = (weekLength, classesNumber, language) => {
    const body = document.getElementById('div-for-table');
    const tbl = document.createElement('table');
    tbl.id = 'table';
    tbl.classList.add('table');

    body.appendChild(tbl);
    if (weekLength === 'five') {
        createTableContent(classesNumber, 5, language);
    } else if (weekLength === 'six') {
        createTableContent(classesNumber, 6, language);
    } else {
        console.warn('Unknown week length ' + weekLength);
    }
}

(function loadFromLocalStorage() {
    const weekLength = localStorage.getItem('weekLength');
    const classesNumber = localStorage.getItem('classesNumber');
    const language = localStorage.getItem('language');

    createTable(weekLength, classesNumber, language);
})()