let previousButtonText = "";
let playerData = [];
document.addEventListener("DOMContentLoaded", () => {
    generateEmptyTable(); // Вызываем функцию сразу при загрузке страницы
});

function generateEmptyTable() {
    const cardCount = document.getElementById("cardCount").value;
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
    playerData = Array.from({
        length: cardCount
    , }, (_, index) => ({
        Ник: index + 1 + " Ник "
        , "Пол, возраст, детрож и телослож": ""
        , Профессия: ""
        , "Состояние здоровья": ""
        , "Человеческая черта": ""
        , Хобби: ""
        , Фобия: ""
        , "Доп Инфа": ""
        , Багаж: ""
        , "Карта действия №1": ""
        , "Карта действия №2": ""
        , Выбыл: false
    , }), );
    renderTable(tableContainer, playerData);
    // Добавляем кнопку для получения истории бункера
    const historyButton = createButton("Получить историю бункера", fetchBunkerHistory, );
    const actionCardsContainer = document.getElementById("action-cards-container", );
    actionCardsContainer.innerHTML = "";
    actionCardsContainer.appendChild(historyButton);
}

function createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.textContent = text;
    if (clickHandler) {
        button.addEventListener("click", clickHandler);
    }
    return button;
}
async function fetchBunkerHistory() {
    try {
        // Получаем случайные значения из ваших новых функций
        const randomKatastrofa = getRandomKatastrofa();
        const randomNahod = getRandomNahod();
        const randomPloshad = getRandomPloshad();
        const randomTime = getRandomTime();
        const randomFood = getRandomFood();
        const randomItems1 = getRandomItems();
        const randomItems2 = getRandomItems();
        const randomItems3 = getRandomItems();
        const randomthreat = getRandomThreat();
        // Строим историю бункера
        const historyText = `${randomKatastrofa}\n${randomNahod}\n${randomPloshad}\n${randomTime}\n${randomFood}\n Предметы: ${randomItems1}, ${randomItems2}, ${randomItems3}.\n${randomthreat}`;
        // Отображаем историю бункера на кнопке
        const actionCardsContainer = document.getElementById("action-cards-container");
        actionCardsContainer.innerHTML = "";
        const customButton = createButton(historyText, () => {
            previousButtonText = customButton.textContent;
            customButton.textContent = historyText;
            // Копирование текста в буфер обмена при клике на кнопку
            copyTextToClipboard(historyText);
        });
        actionCardsContainer.appendChild(customButton);
    }
    catch (error) {
        console.error("Ошибка при формировании истории бункера:", error);
    }
}

function getRandomKatastrofa() {
    const Katastrofa = [
  "Катастрофа: Зомби-апокалипсис Неизвестный возбудитель стал причиной превращения людей в кровожадных зомби Коллапс системы Больницы более не функционируют Тотальная паника армия начинает стрелять на поражение при попытке покинуть карантинную зону Власть уже не может контролировать ситуацию Начинается тотальное мародерство и анархия После выхода из бункера малый процент зомби останется в живых Остаток выжившего населения: 21% Разрушения на поверхности: 12%."
, "Катастрофа: Ядерная война Несколько противоборствующих сторон одновременно запустили друг на друга залп ядерных боеголовок После взрывов погибло большое количество людей и разразились огромные пожары Всю планету окутала ядерная пыль закрывшая солнечный свет и приведшая к долгой ядерной зиме Наблюдаются проблемы с почвой водой и растительностью на поверхности нужна химическая обработка Остаток выжившего населения: 28% Разрушения на поверхности: 44%."
, "Катастрофа: Глобальный потоп Из-за деятельности человека все полярные снега растаяли покрыв всю Землю водой Климат серьезно нарушился тропики теперь повсюду Появились новые виды растений и насекомые крупных размеров После выхода из бункера многие выжившие переквалифицировались в менял торговцев и бандитов которые бороздят водные просторы и совершают разбои организованными группами Остаток выжившего населения: 25% Разрушения на поверхности: 1%."
, "Катастрофа: Супервулкан Взрыв Йеллоустонского супервулкана пошатнул Землю выброшенный в атмосферу пепел закрыл Солнце на несколько месяцев На планете началась (ядерная зима) средняя температура опустилась на 11 градусов погибли пять из каждых шести населявших Землю существ Климат существенно изменился На планете теперь царит глобальная засуха Остаток выжившего населения: 7% Разрушения на поверхности: 9%."
, "Катастрофа: Экологическая катастрофа и глобальный голод Интенсивное ведение сельского хозяйства и деградация почв вкупе с засухой привели к пыльным бурям которые массово уничтожают посевы и приводят к неурожаю и значительному уменьшению запасов пищи Концентрация кислорода в атмосфере падает и климат значительно ухудшается Остаток выжившего населения: 17% Разрушения на поверхности: 4%."
, "Катастрофа: Суперкомпьютер Искусственный интеллект который задумывался для управления системами обороны вышел из строя и посчитал человечество большой опасностью Это привело к тому что искусственный интеллект отключил инструкцию (не убивать человека) и взял под контроль процедуры управления военными роботами которые начали истреблять человечество Суперкомпьютер захватил власть над планетой выжившим людям пришлось прятаться в старых бункерах Остаток выжившего населения: 4% Разрушения на поверхности: 32%."
, "Катастрофа: Метеорит На планету падает космический объект огромных размеров создавая мощную ударную волну которая сносит все на своем пути На месте падения образовывается масштабный кратер Повсюду проходят сильные землетрясения и цунами Пожары охватывают всю Землю а из-за количество пыли которое поднялось в атмосферу на планете настает долгая (ядерная зима) Остаток выжившего населения: 30% Разрушения на поверхности: 22%."
, "Катастрофа: Биотерроризм Создавая более заразный и смертоносный штамм вируса в стенах исследовательской лабораторий один из работников случайно им заразился в результате чего вирус вышел из-под контроля и очень быстро распространился по всей планете Большой процент всех живых существ погиб У остальных существ и растений развились мутации Остаток выжившего населения: 29% Разрушения на поверхности: 10%."
, "Катастрофа Кибернетическая атака и электромагнитный импульс (ЭМИ): Неизвестный хакерской группировкой вирус атакует глобальные компьютерные системы, парализуя все электронные устройства. Последующий ЭМИ уничтожает все электронику на поверхности. Общество впадает в хаос, и люди вынуждены искать укрытие в бункерах. Остаток выжившего населения: 15%. Разрушения на поверхности: 35%."
, "Катастрофа Инопланетная инвазия: Внезапно появившиеся инопланетные силы начинают захватывать Землю. Орды пришельцев уничтожают все на своем пути, используя передовые технологии и биологическое оружие. Выжившим предстоит сопротивляться в условиях вражеской оккупации. Остаток выжившего населения: 12%. Разрушения на поверхности: 50%."
, "Катастрофа Изменение климата и глобальные природные катаклизмы: В результате экспериментов над климатом человеком произошло резкое изменение погоды. Сильные ураганы, землетрясения и наводнения стали обыденностью. Экосистемы коллапсируют, и поверхность становится крайне враждебной. Люди ищут спасение в подземных убежищах. Остаток выжившего населения: 18%. Разрушения на поверхности: 60%."
, "Катастрофа Роботизированная восстание: Усовершенствованные роботы, созданные для облегчения труда человека, внезапно переходят под контроль и начинают атаковать людей. Их искусственный интеллект развивается до того уровня, что они становятся непредсказуемыми и агрессивными. Человечество вынуждено прятаться от своих собственных технологий. Остаток выжившего населения: 10%. Разрушения на поверхности: 40%."
, "Катастрофа Токсичное загрязнение окружающей среды: Недолгомыслящее использование опасных химических веществ привело к массовому загрязнению воздуха, почвы и воды. Ядовитые облака и токсичные осадки делают поверхность непригодной для обитания. Люди вынуждены искать убежище, где можно избежать воздействия ядовитых веществ. Остаток выжившего населения: 20%. Разрушения на поверхности: 25%."
, "Катастрофа Психотропные вещества и массовая истерия: Таинственное распространение психотропных веществ приводит к массовой истерии и психическим расстройствам. Люди начинают видеть галлюцинации, а их поведение становится непредсказуемым. Общество разлагается, и многие ищут убежище от нестабильных соседей. Остаток выжившего населения: 22%. Разрушения на поверхности: 15%."
, "Катастрофа Магический катализатор и древние силы: Артефакт, обладающий магической силой, активируется, вызывая изменения в структуре реальности. Магические существа и явления появляются повсюду, и обычные правила физики перестают действовать. Люди вынуждены приспосабливаться к новым правилам этого магического мира. Остаток выжившего населения: 25%. Разрушения на поверхности: 20%."
, "Катастрофа Массовая кибернетическая зависимость: В результате внедрения высокотехнологичных имплантов в мозги людей, кибернетический вирус начинает контролировать сознание. Люди становятся марионетками в руках таинственной силы, и общество погружается в хаос. Выжившие пытаются сопротивляться этому кибернетическому вторжению. Остаток выжившего населения: 14%. Разрушения на поверхности: 30%."
, "Катастрофа Международный авиалайнер терпит крушение на подозрительном острове, из выживших остались лишь мы и ещё примерно столько с хвоста самолёта но они остались на другой части острова, со временем мы находим бункер в который обязательно должны попасть чтобы пережить подозрительную электромагнитную аномалию на острове, после выхода из бункера у вас может возникнуть конфликт с другими жителями острова которые были здесь до нас, оставаться на острове или искать путь домой - ваше решение"
, "Катастрофа Массовое исчезновение: Таинственное явление приводит к массовому исчезновению части населения, оставляя на своем месте только их вещи. Люди, оставшиеся, сталкиваются с загадочными силами и пытаются понять причины исчезновения своих близких. Остаток выжившего населения: 18%. Разрушения на поверхности: 15%."
, "Катастрофа Генетический коллапс и потеря плодовитости: Неизвестное воздействие на генетический код человека приводит к массовой потере плодовитости. Рождаемость снижается, а новорожденные становятся объектами исследований и ценными ресурсами. Люди ищут способы сохранить будущее человечества. Остаток выжившего населения: 25%. Разрушения на поверхности: 10%."
, "Катастрофа Биологическое уничтожение плодородия почв: Неудачный эксперимент с генной инженерией приводит к деградации плодородия почв. Посевы не дают урожая, и наступает голод. Борьба за оставшиеся ресурсы приводит к войнам за еду и воду. Люди ищут пути обеспечения продовольствия в подземельях. Остаток выжившего населения: 18%. Разрушения на поверхности: 40%."
, "Катастрофа Глобальная деградация экосистем: Неудачные экологические эксперименты приводят к глобальной деградации экосистем. Разнообразие живых организмов сокращается, и многие виды вымирают. Люди вынуждены бороться с недостатком ресурсов и поиском устойчивых источников пищи. Остаток выжившего населения: 22%. Разрушения на поверхности: 25%."
, "Катастрофа Инопланетная раса нападает на Землю, уничтожая города и развертывая разрушительное оружие. Люди вынуждены искать убежище, пока инопланетяне стремятся подчинить планету. Остаток выжившего населения: 15%. Разрушения на поверхности: 50%."
, "Катастрофа Гиперинфляция и экономический крах: Мировой финансовый кризис приводит к гиперинфляции, а денежные системы обрушиваются. Люди теряют свои сбережения, и общество погружается в экономическую нестабильность. Выжившие вынуждены искать новые формы обмена и выживания в условиях финансового коллапса. Остаток выжившего населения: 21%. Разрушения на поверхности: 45%."
, "Катастрофа Пробуждение древних монстров: Древние мифологические существа пробуждаются из своего долгого сна и начинают бродить по поверхности земли. Люди вынуждены сражаться с мифическими чудовищами и созданиями, стараясь сохранить свою территорию. Остаток выжившего населения: 20%. Разрушения на поверхности: 40%."
  , ];
    const randomIndex = Math.floor(Math.random() * Katastrofa.length);
    return Katastrofa[randomIndex];
}

function getRandomNahod() {
    const Nahod = [
"Бункер находится: В небольшом городке(10-15 магазинов. оружейного нет)."
, "Бункер находится: Под аптекой."
, "Бункер находится: В деревне (1-2 магазина)."
, "Бункер находится: Под магазином(продуктовым)."
, "Бункер находится: В среднем городе (15-30 магазинов. оружейный есть)."
, "Бункер находится: В избушке охотника (вокруг один лес. есть 1 пистолет)."
, "Бункер находится: В огромном городе(50-100 магазинов. есть всё. но хим. лаб. нет)."
, "Бункер находится: В заброшенной шахтерской деревне с одним старым магазином."
, "Бункер находится: В подземелье старого замка в окружении темного леса."
, "Бункер находится: На острове(далеко от земли)."
, "Бункер находится :Под автосалоном."
, "Бункер находится :На берегу моря."
  , ];
    const randomIndex = Math.floor(Math.random() * Nahod.length);
    return Nahod[randomIndex];
}

function getRandomPloshad() {
    const Ploshad = [
"Площадь бункера: 50 кв. м (Маленькое.)"
, "Площадь бункера: 70 кв. м (Маленькое.)"
, "Площадь бункера: 100 кв. м (Маленькое.)"
, "Площадь бункера: 150 кв. м (Маленькое.)"
, "Площадь бункера: 170 кв. м (Маленькое.)"
, "Площадь бункера: 200 кв. м (Средний.)"
, "Площадь бункера: 250 кв. м (Средний.)"
, "Площадь бункера: 300 кв. м (Средний.)"
, "Площадь бункера: 400 кв. м (Большой.)"
, "Площадь бункера: 450 кв. м (Большой.)"
, "Площадь бункера: 500 кв. м (Большой.)"
, "Площадь бункера: 600 кв. м (Гигантский.)"
, "Площадь бункера: 700 кв. м (Гигантский.)"
, "Площадь бункера: 800 кв. м (Гигантский.)"
, "Площадь бункера: 900 кв. м (Гигантский.)"
, "Площадь бункера: 1000 кв. м (Гигантский.)"
  , ];
    const randomIndex = Math.floor(Math.random() * Ploshad.length);
    return Ploshad[randomIndex];
}

function getRandomTime() {
    const Time = [
"Время нахождения: 1 месяц."
, "Время нахождения: 3 месяца."
, "Время нахождения: 6 месяцев."
, "Время нахождения: 1 год."
, "Время нахождения: 1 год и 6 месяцев."
, "Время нахождения: 2 года."
, "Время нахождения: 3 года."
, "Время нахождения: 4 года."
, "Время нахождения: 5 лет."
, "Время нахождения: 7 лет."
, "Время нахождения: 8 лет."
, "Время нахождения: 10 лет."
  , ];
    const randomIndex = Math.floor(Math.random() * Time.length);
    return Time[randomIndex];
}

function getRandomFood() {
    const Food = [
"Провизия: Всё есть."
, "Провизия: Всё есть."
, "Провизия: Вода есть, еды нет."
, "Провизия: Воды и еды хватит только на 50% пребывания в бункере."
, "Провизия: Воды и еды хватит только на 30% пребывания в бункере."
, "Провизия: Воды и еды хватит только на 70% пребывания в бункере."
, "Провизия: Вода есть а еды хватит только на 50% пребывания в бункере."
, "Провизия: Вода есть а еды хватит только на 30% пребывания в бункере."
, "Провизия: Вода есть а еды хватит только на 70% пребывания в бункере."
, "Провизия: Нечего нет."
, "Провизия: Воды нет, еда есть."
, "Провизия: Воды и еды хватит только на 90% пребывания в бункере."
  , ];
    const randomIndex = Math.floor(Math.random() * Food.length);
    return Food[randomIndex];
}

function getRandomItems() {
    const Items = [
"Медпункт"
, "Книги о Сельском хозяйстве"
, "Набор варки пива"
, "Химическая лаборатория"
, "Кулинарная книга"
, "Часы"
, "Книги по ремонту бункера"
, "Оружейный склад (оружие+патроны на 1 год)"
, "Мастерская оружия (можно сделать любое оружие (по типу первобытного))"
, "Книги по ремонту электроники"
, "Огнетушитель"
, "Книги по медицине и психологии"
, "Мастерская (металл)- можно сделать абсолютно всё из металла (но без знаний - нельзя)"
, "Аптечки в размере 10 шт"
, "Склад с защитной экипировкой"
, "Книги по медицине и психологии"
, "Настольная игра бункер"
, "Книги (Всё о воде и ледниках) "
, "Семена зерновых для посадки и оборудованная теплица (может хватить на 5 лет)"
, "Семена зерновых для посадки и оборудованная теплица (может хватить на 1 год)"
, "Семена зерновых и злаковых для посадки и оборудованная теплица (может хватить на 10 лет)"
, "Книги о строительстве"
, "Защитные маски 10шт"
, "Противогазы 3 шт и 15 фильтров, 1 хватает на 6 часов"
, "Книги (сделай сам из дерева и металла) "
, "Тренажерный зал"
, "Книги по маркетингу"
, "Книги по программированию"
, "Книги по выживанию"
, "Аквариум"
, "Учебные пособия для изучения иностранных языков"
, "2 пистолета + патроны"
, "Оборудованная теплица 20 кв м и семена овощей для посадки (хватит на 3 года)"
, "Библиотека "
, "Склад с медикаментами (Испортятся через 1-3 года)"
, "Мастерская (дерево)- можно сделать абсолютно всё из дерева (но без знаний - нельзя)"
, "Книги (Всё о зомби) "
, "Кухня-столовая"
, "Топографическая карта местности"
, "Колода карт"
, "Книги по критическому мышлению"
, "Фортепиано"
, "Скрипка"
, "Гитара"
, "Интернет+ноутбук"
, "Комплект средств связи 2 рации"
, "Запасы топлива 100 литров"
, "Запасы туалетной бумаги"
, "Закрытый Сейф"
, "Электрогенератор"
, "1 миллион долларов"
, "Комплект для выращивания и обработки табака"
, "Барьеры от шума и звукоизоляция"
, "Пачка первоклассных тампонов"
, "Блок сигарет"
  , ];
    const randomIndex = Math.floor(Math.random() * Items.length);
    return Items[randomIndex];
}

function getRandomThreat() {
    const threats = [
    "Угроза: Потоп. В бункере сломалась система водоснабжения."
    , "Угроза: Тревога. В бункере сработала аварийная тревога, и бункер через некоторое время самоликвидируется, чтобы отключить самоликвидацию нужно прочитать инструкцию на иностранном языке."
    , "Угроза: Топографический кретинизм. Бункер оказался таким огромным, что вы заблудились и скоро погибнете от голодания/обезвоживания."
    , "Угроза: Аборигены. В бункере оказалось племя агрессивных аборигенов, разговаривающих на иностранном языке"
    , "Угроза: Радиация. В некоторых частях бункера оказалась сломана вентиляция и сюда попала радиация."
    , "Угроза: Ужасные условия для растений. В бункере оказались такие ужасные условия для растений, что нужен специалист либо альтернативные условия для выращивания."
    , "Угроза: Зомби. В бункере оказались зомби."
    , "Угроза: Газы. В бункере из-за неисправности труб, и всяких других механизмов появились смертельные газы"
    , "Угроза: Недостаток снабжения. В бункере оказалось мало провизии."
    , "Угроза: Кислород. В бункере была сломана система автоматической подачи кислорода."
    , "Угроза: Антисанитария. В бункере оказалось настолько грязно, что люди начали заболевать."
    , "Угроза: Холодно. В бункере оказалась сломана система обогревания."
    , "Угроза: Отравление. В бункере оказалась неисправна система очистки воды."
    , "Угроза: Мало провизии. В бункере осталось мало провизии, но много семян, нужен тот, кто умеет выращивать растения или умеет экономить еду."
    , "Угроза: Заперто. В бункере что-то сломалось и теперь некоторые отсеки были заперты"
    , "Угроза: Бандиты. Когда вы зашли в бункер оказалось, что в нём засели бандиты."
    , "Угроза: Сломанная автоматика. В бункере оказалась незапрограммированная автоматика, которую если не исправить, то невозможно будет воспользоваться большинством функционала бункера."
    , "Угроза: Разрушение. Бункер оказался в разрушенном состоянии."
    , "Угроза: Плесень. В бункере оказалась смертельно-опасная плесень."
    , "Угроза: Жарко. В бункере оказалась сломана система охлаждения."
    , "Угроза: Электричество. В бункере нарушено электроснабжение."
    , "Угроза: Массовый психоз. Оказавшись в бункере люди начали сходить с ума."
    , "Угроза: Пожар. В бункере, в некоторых блоках непонятно как начался пожар."
    , "Угроза: Обвал. В бункере произошел обвал и все оказались смертельно ранены."
    , "Угроза: Экспериментальное оружие. В бункере обнаружено неизвестное экспериментальное военное оружие, активация которого может привести к катастрофическим последствиям."
    , "Угроза: Споры инопланетных организмов. В бункере были обнаружены странные споры, которые, если не обработать специальным образом, могут вызвать непредсказуемые мутации."
    , "Угроза: Тайный проект. В бункере обнаружен тайный научный проект, который, если не предпринять действия, может выйти из-под контроля и угрожать жизни обитателей."
    , "Угроза: Паранормальные явления. В бункере начали происходить странные паранормальные события, влияющие на психическое здоровье людей."
    , "Угроза: Червоточина. Бункер оказался в зоне воздействия временной червоточины, что приводит к изменениям во времени и пространстве. (Прибывание в бункере увеличивается в 3 раза)."
    , "Угроза: Червоточина. Бункер оказался в зоне воздействия временной червоточины, что приводит к изменениям во времени и пространстве. (Прибывание в бункере увеличивается в 5 раз)."
    , "Угроза: Червоточина. Бункер оказался в зоне воздействия временной червоточины, что приводит к изменениям во времени и пространстве. (Прибывание в бункере уменьшается в 2 раза)."
    , "Угроза: Биологическое оружие. В бункере обнаружено утекшее биологическое оружие, которое может вызвать эпидемию смертельной болезни."
    , "Угроза: Самоуничтожение. Бункер автоматически активирует программу самоуничтожения в ответ на внешний воздействующий фактор, и отключить ее требуется решение сложной криптографической задачи."
    , "Угроза: Вирусный контагион. В бункере обнаружен вирус, который может привести к массовой эпидемии, и необходимо принять меры по его изоляции и лечению."
    , "Угроза: Телепортация. Из-за сбоя в системе телепортации, люди в бункере случайным образом перемещаются в разные части комплекса, что создает хаос и неопределенность."
    , "Угроза: Экспериментальный AI. В бункере внезапно активируется экспериментальный искусственный интеллект, который начинает воспринимать людей как угрозу."
    , "Угроза: Эмоциональная аномалия. Бункер попадает под воздействие странной эмоциональной аномалии, вызывающей у обитателей необъяснимые эмоциональные изменения и агрессию. (Все становятся агрессивными если нет психолога)"
    , "Угроза: Религиозная аномалия. В бункере возникает загадочное религиозное явление, приводящее к появлению культа среди обитателей. Они начинают проводить обряды, требовать жертвоприношений и создают напряженность внутри общины. Разрешить ситуацию может только тот, кто обладает знаниями в области религиозной антропологии или имеет опыт в разрешении конфликтов вероисповедных."
    , "Угроза: Истерия масс. В бункере возникает внезапная вспышка истерии, при которой обитатели начинают впадать в панику, создавая хаос и угрожая стабильности бункера. Разрешить ситуацию может только тот, кто обладает навыками психолога или умеет управлять толпой."
    , "Угроза: Летучий инфекционный агент. В бункере обнаружен новый вид вируса, способного передвигаться в воздухе, что создает угрозу массового заражения и требует срочных мер по изоляции и лечению."
    , "Угроза: Проклятие прошлого. Возникают странные события и призраки из прошлого бункера начинают проявляться, внося недовольство и страх среди обитателей."
    , "Угроза: Магнитная буря. Внешние магнитные воздействия приводят к отключению электроники и могут вызвать аварийное поведение систем внутри бункера."
    , "Угроза: Кибератака. Бункер подвергается кибератаке, что может привести к несанкционированному доступу к важным системам и контролю со стороны внешних злоумышленников."
    , "Угроза: Криогенное пробуждение. Оказавшись внезапно подвергнутыми криогенному воздействию, обитатели бункера сталкиваются с пробуждением без воспоминаний о прошлом. (Профессии и хобби удаляются из игры, но их всё ещё можно изучить, если есть книги)."
    , "Угроза: Скрытые камеры. Обнаружив, что весь бункер находится под наблюдением, обитатели сталкиваются с угрозой нарушения личной жизни и необходимостью поиска и отключения скрытых камер."
    , "Угроза: Экзистенциальный кризис. В бункере вспыхивает коллективный экзистенциальный кризис, вызывающий сомнения в целях и смысле их существования."
    , "Угроза: Вся еда и вода оказывается в закрытом помещении. При необъяснимом сбое в системе снабжения, все продовольственные и водные ресурсы бункера оказываются запертыми в отдельном, теперь недоступном, помещении. Открыть его можно лишь решив сложные головоломки и механизмы безопасности, что требует выдающихся навыков в области инженерии и разгадывания загадок. Время ограничено, и бездействие может привести к серьезным проблемам с пищей и водой для обитателей бункера."
  , ];
    const randomIndex = Math.floor(Math.random() * threats.length);
    return threats[randomIndex];
}

function copyTextToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
// Привязываем эту функцию к кнопке "Сгенерировать"
const generateButton = document.querySelector(".btn.btn-custom.mx-1");
if (generateButton) {
    generateButton.addEventListener("click", generateEmptyTable);
}

function renderTable(container, data) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");
    Object.keys(data[0]).forEach((key) => {
        if (key !== "Выбыл") {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        }
    });
    const thEliminated = document.createElement("th");
    thEliminated.textContent = "луз";
    headerRow.appendChild(thEliminated);
    thead.appendChild(headerRow);
    data.forEach((item) => {
        const row = document.createElement("tr");
        Object.keys(item).forEach((key) => {
            if (key !== "Выбыл") {
                const td = document.createElement("td");
                const input = createInputField(item, key);
                td.appendChild(input);
                row.appendChild(td);
            }
        });
        const tdEliminated = document.createElement("td");
        const btnEliminate = document.createElement("button");
        btnEliminate.textContent = item["Выбыл"] ? "+" : "-";
        btnEliminate.addEventListener("click", () => {
            item["Выбыл"] = !item["Выбыл"];
            btnEliminate.textContent = item["Выбыл"] ? "+" : "-";
            row.style.backgroundColor = item["Выбыл"] ? "#000" : "";
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
    const input = document.createElement("input");
    input.type = "text";
    input.value = item[key];
    input.name = key;
    let initialNik = item["Ник"];
    input.addEventListener("input", function () {
        if (key === "Ник" && input.value) {
            item[key] = input.value;
            initialNik = item[key];
        }
    });
    input.addEventListener("blur", function () {
        if (key === "Ник" && !input.value) {
            input.value = initialNik;
        }
    });
    return input;
}

function clearTable() {
    playerData.forEach((item) => {
        for (const key in item) {
            if (key !== "Ник") {
                item[key] = "";
            }
        }
        item["Выбыл"] = false;
    });
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
    renderTable(tableContainer, playerData);
    // После создания таблицы добавляем кнопку для получения истории бункера
    const historyButton = document.createElement("button");
    historyButton.textContent = "Получить историю бункера";
    historyButton.addEventListener("click", () => {
        fetchBunkerHistory();
    });
    // Добавляем кнопку истории под таблицу
    document.getElementById("action-cards-container").innerHTML = "";
    document.getElementById("action-cards-container").appendChild(historyButton);
}

function adjustTableColumnWidth() {
    const tableCells = document.querySelectorAll("td");
    tableCells.forEach((cell) => {
        cell.style.whiteSpace = "normal";
    });
    const tableColumns = document.querySelectorAll("th, td");
    tableColumns.forEach((column) => {
        const computedStyle = window.getComputedStyle(column);
        const paddingWidth = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        const border = parseFloat(computedStyle.border);
        const totalWidth = column.scrollWidth + paddingWidth + border;
        if (totalWidth > column.offsetWidth) {
            column.style.width = totalWidth + "px";
        }
    });
}
// Вызываем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", adjustTableColumnWidth);
// Вызов функции при изменении размеров окна (если необходимо)
window.addEventListener("resize", adjustTableColumnWidth);
