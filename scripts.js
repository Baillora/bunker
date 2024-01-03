let previousButtonText = '';
let playerData = [];
document.addEventListener('DOMContentLoaded', () => {
    generateEmptyTable(); // Вызываем функцию сразу при загрузке страницы
});

function generateEmptyTable() {
    const cardCount = document.getElementById('cardCount').value;
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';
    playerData = Array.from({
        length: cardCount
    }, (_, index) => ({
        'Ник': (index + 1) + " Ник "
        , 'Пол, возраст, детрож и телослож': ""
        , 'Профессия': ""
        , 'Состояние здоровья': ""
        , 'Человеческая черта': ""
        , 'Хобби': ""
        , 'Фобия': ""
        , 'Доп Инфа': ""
        , 'Багаж': ""
        , 'Карта действия №1': ""
        , 'Карта действия №2': ""
        , 'Выбыл': false
    }));
    renderTable(tableContainer, playerData);
    // Добавляем кнопку для получения истории бункера
    const historyButton = createButton('Получить историю бункера', fetchBunkerHistory);
    // Добавляем кнопку истории под таблицу
    const actionCardsContainer = document.getElementById('action-cards-container');
    actionCardsContainer.innerHTML = '';
    actionCardsContainer.appendChild(historyButton);
}

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    if (clickHandler) {
        button.addEventListener('click', clickHandler);
    }
    return button;
}

async function fetchBunkerHistory() {
    try {
        // Получаем случайную угрозу из вашего списка
        const randomThreat = getRandomThreat();
        
        // Отправляем запрос для получения истории бункера
        const response = await fetch('https://randomall.ru/api/gens/799', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        const data = await response.json();
        if (data && data.msg) {
            const buttonText = `${data.msg}\n${randomThreat}`;
            const actionCardsContainer = document.getElementById('action-cards-container');
            actionCardsContainer.innerHTML = '';
            const customButton = createButton(buttonText, () => {
                previousButtonText = customButton.textContent;
                customButton.textContent = buttonText;
                // Копирование текста в буфер обмена при клике на кнопку
                copyTextToClipboard(buttonText);
            });
            actionCardsContainer.appendChild(customButton);
        } else {
            console.error('Отсутствуют необходимые данные в ответе:', data);
        }
    } catch (error) {
        console.error('Ошибка запроса к API:', error);
        console.log('Ответ от сервера:', await response.text());
    }
}

// Функция для получения случайной угрозы из вашего списка
function getRandomThreat() {
    const threats = [
        'Угроза: Потоп. В бункере сломалась система водоснабжения',
'Угроза: Тревога. В бункере сработала аварийная тревога, и бункер через некоторое время самоликвидируется, чтобы отключить самоликвидацию нужно прочитать инструкцию на иностранном языке',
'Угроза: Топографический кретинизм. Бункер оказался таким огромным, что вы заблудились и скоро погибнете от голодания/обезвоживания',
'Угроза: Аборигены. В бункере оказалось племя агрессивных аборигенов, разговаривающих на иностранном языке',
'Угроза: Радиация. В некоторых частях бункера оказалась сломана вентиляция и сюда попала радиация',
'Угроза: Ужасные условия для растений. В бункере оказались такие ужасные условия для растений, что нужен специалист либо альтернативные условия для выращивания',
'Угроза: Зомби. В бункере оказались зомби',
'Угроза: Газы. В бункере из-за неисправности труб, и всяких других механизмов появились смертельные газы',
'Угроза: Недостаток снабжения. В бункере оказалось мало провизии',
'Угроза: Кислород. В бункере была сломана система автоматической подачи кислорода',
'Угроза: Антисанитария. В бункере оказалось настолько грязно, что люди начали заболевать',
'Угроза: Холодно. В бункере оказалась сломана система обогревания',
'Угроза: Отравление. В бункере оказалась неисправна система очистки воды',
'Угроза: Мало провизии. В бункере осталось мало провизии, но много семян, нужен тот, кто умеет выращивать растения или умеет экономить еду',
'Угроза: Заперто. В бункере что-то сломалось и теперь некоторые отсеки были заперты',
'Угроза: Бандиты. Когда вы зашли в бункер оказалось, что в нём засели бандиты',
'Угроза: Сломанная автоматика. В бункере оказалась незапрограммированная автоматика, которую если не исправить, то невозможно будет воспользоваться большинством функционала бункера',
'Угроза: Разрушение. Бункер оказался в разрушенном состоянии',
'Угроза: Плесень. В бункере оказалась смертельно-опасная плесень',
'Угроза: Жарко. В бункере оказалась сломана система охлаждения',
'Угроза: Электричество. В бункере нарушено электроснабжение',
'Угроза: Массовый психоз. Оказавшись в бункере люди начали сходить с ума',
'Угроза: Пожар. В бункере, в некоторых блоках непонятно как начался пожар',
'Угроза: Обвал. В бункере произошел обвал и все оказались смертельно ранены',
'Угроза: Экспериментальное оружие. В бункере обнаружено неизвестное экспериментальное военное оружие, активация которого может привести к катастрофическим последствиям.',
'Угроза: Споры инопланетных организмов. В бункере были обнаружены странные споры, которые, если не обработать специальным образом, могут вызвать непредсказуемые мутации.',
'Угроза: Тайный проект. В бункере обнаружен тайный научный проект, который, если не предпринять действия, может выйти из-под контроля и угрожать жизни обитателей.',
'Угроза: Паранормальные явления. В бункере начали происходить странные паранормальные события, влияющие на психическое здоровье людей.',
'Угроза: Червоточина. Бункер оказался в зоне воздействия временной червоточины, что приводит к изменениям во времени и пространстве. (Прибывание в бункере увеличивается в 3 раза)',
'Угроза: Червоточина. Бункер оказался в зоне воздействия временной червоточины, что приводит к изменениям во времени и пространстве. (Прибывание в бункере увеличивается в 5 раз)',
'Угроза: Червоточина. Бункер оказался в зоне воздействия временной червоточины, что приводит к изменениям во времени и пространстве. (Прибывание в бункере уменьшается в 2 раза)',
'Угроза: Биологическое оружие. В бункере обнаружено утекшее биологическое оружие, которое может вызвать эпидемию смертельной болезни.',
'Угроза: Самоуничтожение. Бункер автоматически активирует программу самоуничтожения в ответ на внешний воздействующий фактор, и отключить ее требуется решение сложной криптографической задачи.',
'Угроза: Вирусный контагион. В бункере обнаружен вирус, который может привести к массовой эпидемии, и необходимо принять меры по его изоляции и лечению.',
'Угроза: Телепортация. Из-за сбоя в системе телепортации, люди в бункере случайным образом перемещаются в разные части комплекса, что создает хаос и неопределенность.',
'Угроза: Экспериментальный AI. В бункере внезапно активируется экспериментальный искусственный интеллект, который начинает воспринимать людей как угрозу.',
'Угроза: Эмоциональная аномалия. Бункер попадает под воздействие странной эмоциональной аномалии, вызывающей у обитателей необъяснимые эмоциональные изменения и агрессию. (Все становятся агрессивными если нет психолога)',
'Угроза: Религиозная аномалия. В бункере возникает загадочное религиозное явление, приводящее к появлению культа среди обитателей. Они начинают проводить обряды, требовать жертвоприношений и создают напряженность внутри общины. Разрешить ситуацию может только тот, кто обладает знаниями в области религиозной антропологии или имеет опыт в разрешении конфликтов вероисповедных.',
'Угроза: Истерия масс. В бункере возникает внезапная вспышка истерии, при которой обитатели начинают впадать в панику, создавая хаос и угрожая стабильности бункера. Разрешить ситуацию может только тот, кто обладает навыками психолога или умеет управлять толпой.',
'Угроза: Летучий инфекционный агент. В бункере обнаружен новый вид вируса, способного передвигаться в воздухе, что создает угрозу массового заражения и требует срочных мер по изоляции и лечению.',
'Угроза: Проклятие прошлого. Возникают странные события и призраки из прошлого бункера начинают проявляться, внося недовольство и страх среди обитателей.',
'Угроза: Магнитная буря. Внешние магнитные воздействия приводят к отключению электроники и могут вызвать аварийное поведение систем внутри бункера.',
'Угроза: Кибератака. Бункер подвергается кибератаке, что может привести к несанкционированному доступу к важным системам и контролю со стороны внешних злоумышленников.',
'Угроза: Криогенное пробуждение. Оказавшись внезапно подвергнутыми криогенному воздействию, обитатели бункера сталкиваются с пробуждением без воспоминаний о прошлом. (Профессии и хобби удаляются из игры, но их всё ещё можно изучить, если есть книги)',
'Угроза: Скрытые камеры. Обнаружив, что весь бункер находится под наблюдением, обитатели сталкиваются с угрозой нарушения личной жизни и необходимостью поиска и отключения скрытых камер.',
'Угроза: Экзистенциальный кризис. В бункере вспыхивает коллективный экзистенциальный кризис, вызывающий сомнения в целях и смысле их существования.',
'Угроза: Вся еда и вода оказывается в закрытом помещении. При необъяснимом сбое в системе снабжения, все продовольственные и водные ресурсы бункера оказываются запертыми в отдельном, теперь недоступном, помещении. Открыть его можно лишь решив сложные головоломки и механизмы безопасности, что требует выдающихся навыков в области инженерии и разгадывания загадок. Время ограничено, и бездействие может привести к серьезным проблемам с пищей и водой для обитателей бункера.',
    ];

    // Выбираем случайную угрозу
    const randomIndex = Math.floor(Math.random() * threats.length);
    return threats[randomIndex];
}


function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Привязываем эту функцию к кнопке "Сгенерировать"
const generateButton = document.querySelector('.btn.btn-custom.mx-1');
generateButton.addEventListener('click', generateEmptyTable);

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
    input.addEventListener('input', function () {
        if (key === 'Ник' && input.value) {
            item[key] = input.value;
            initialNik = item[key];
        }
    });
    input.addEventListener('blur', function () {
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
    // После создания таблицы добавляем кнопку для получения истории бункера
    const historyButton = document.createElement('button');
    historyButton.textContent = 'Получить историю бункера';
    historyButton.addEventListener('click', () => {
        fetchBunkerHistory();
    });
    // Добавляем кнопку истории под таблицу
    document.getElementById('action-cards-container').innerHTML = '';
    document.getElementById('action-cards-container').appendChild(historyButton);
}

function adjustTableColumnWidth() {
    const tableCells = document.querySelectorAll('td');
    tableCells.forEach(cell => {
        cell.style.whiteSpace = 'normal';
    });
    const tableColumns = document.querySelectorAll('th, td');
    tableColumns.forEach(column => {
        const computedStyle = window.getComputedStyle(column);
        const paddingWidth = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        const border = parseFloat(computedStyle.border);
        const totalWidth = column.scrollWidth + paddingWidth + border;
        if (totalWidth > column.offsetWidth) {
            column.style.width = totalWidth + 'px';
        }
    });
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', adjustTableColumnWidth);

// Вызов функции при изменении размеров окна (если необходимо)
window.addEventListener('resize', adjustTableColumnWidth);
