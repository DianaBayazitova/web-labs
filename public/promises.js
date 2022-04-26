// API request
(function apiRequest() {
    const gridTable = document.querySelector('.grid-table');
    const spinner = document.querySelector('.loader');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                spinner.remove();
                gridTable.style.display = 'grid';
                createSpan(gridTable, item.id);
                createSpan(gridTable, item.name);
                createSpan(gridTable, item.address.city);
                const today = new Date();
                createSpan(gridTable, today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
                createSpan(gridTable, item.email);
            });
        })
        .catch(error => {
            console.warn('Something went wrong:(');
            spinner.remove();
            const footer = document.querySelector('footer');
            createSpan(footer, 'Something went wrong:(');
        });
})()

const createSpan = (element, value) => {
    let span = document.createElement('span');
    let text = document.createTextNode(value);
    span.appendChild(text);
    element.appendChild(span);
}