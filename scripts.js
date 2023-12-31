let playerData = [];

function generateEmptyTable() {
    const cardCount = document.getElementById('cardCount').value;
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';

    playerData = Array.from({ length: cardCount }, (_, index) => ({
        'Ник': (index + 1 ) + " Ник ",
        'Пол, возраст и ориентация': "", 
        'Профессия': "",
        'Состояние здоровья': "",
        'Человеческая черта': "",
        'Хобби': "",
        'Фобия': "",
        'Доп Инфа': "",
        'Багаж': "",
        'Карта действия №1': "",
        'Карта действия №2': "",
        'Выбыл': false
    }));

    renderTable(tableContainer, playerData);
}

function renderTable(container, data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
        if (key !== 'Выбыл') {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
    });

    // Добавляем текст сверху кнопки
    const thEliminated = document.createElement('th');
    thEliminated.textContent = 'луз';
    headerRow.appendChild(thEliminated);

    thead.appendChild(headerRow);

    data.forEach(item => {
        const row = document.createElement('tr');
        Object.keys(item).forEach(key => {
            if (key !== 'Выбыл') {
                const td = document.createElement('td');
                const input = createInputField(item, key);

                // input.addEventListener("change", (e) => {
                //     console.log(e.currentTarget);
                // });

                td.appendChild(input);
                row.appendChild(td);
            }
        });

        const tdEliminated = document.createElement('td');
        const btnEliminate = document.createElement('button');
        btnEliminate.textContent = item['Выбыл'] ? '+' : '-';
        btnEliminate.addEventListener('click', () => {
            item['Выбыл'] = !item['Выбыл'];
            btnEliminate.textContent = item['Выбыл'] ? '+' : '-';
            row.style.backgroundColor = item['Выбыл'] ? '#000' : '';
        });
        tdEliminated.appendChild(btnEliminate);
        row.appendChild(tdEliminated);

        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
}

function createInputField(item, key) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = item[key];
    input.name = key;

    let initialNik = item['Ник'];

    input.addEventListener('input', function() {
        if (key === 'Ник' && input.value) {
            item[key] = input.value;
            initialNik = item[key];
        }
    });

    input.addEventListener('blur', function() {
        if (key === 'Ник' && !input.value) {
            input.value = initialNik;
        }
    });

    return input;
}

function clearTable() {
    playerData.forEach(item => {
        for (const key in item) {
            if (key !== 'Ник') {
                item[key] = '';
            }
        }
        item['Выбыл'] = false;
    });

    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';
    renderTable(tableContainer, playerData);
}

// function clearFields() {
//     const inputs = document.querySelectorAll('input[name]:not([name="Ник"])');
//     inputs.forEach(input => {
//         input.value = '';
//     });
// }
