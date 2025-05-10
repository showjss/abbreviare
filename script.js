// Объект с базой данных аббревиатур
const abbreviations = {
    "html": "HyperText Markup Language - язык разметки веб-страниц",
    "css": "Cascading Style Sheets - каскадные таблицы стилей",
    "js": "JavaScript - язык программирования для веба",
    "http": "HyperText Transfer Protocol - протокол передачи данных",
    "api": "Application Programming Interface - интерфейс программирования приложений",
    "gtg": "got to go - пора идти",
    "&": "and (и)",
    "0": "nothing (ничего)",
    "2": "two, to, too (два, предлог to, тоже)",
    "2day": "today (сегодня)",
    "2moro": "tomorrow (завтра)",
    "2mrow": "tomorrow (завтра)",
    "2nite": "tonight (сегодня ночью, сегодня вечером)",
    "2nyt": "tonight (сегодня ночью, сегодня вечером)",
    "2u": "to you (тебе)",
    "4u": "for you (для тебя)",
    "4e": "forever (навсегда)",
    "afaik": "as far as I know (насколько мне известно)",
    "asap": "as soon as possible (при первой возможности, как только – так сразу)",
    "atb": "all the best (всего наилучшего)",
    "b": "to be (быть)",
    "b4": "before (до, прежде чем)",
    "b4n": "bye for now (пока, до встречи)",
    "bau": "business as usual (идиома, означающая, что дела продолжают идти, как обычно, несмотря на сложную ситуацию)",
    "bbl": "to be back later (вернуться позже, быть позже)",
    "bc": "because (потому что)",
    "bf": "boyfriend (молодой человек, парень, бойфренд)",
    "bk": "back (назад, обратно)",
    "brb": "to be right back (скоро вернуться)",
    "bro": "brother (брат)",
    "bt": "but (но)",
    "btw": "by the way (кстати, между прочим)",
    "byob": "to bring your own booze, to bring your own bottle (со своим алкоголем)",
    "c": "to see (видеть)",
    "ciao": "goodbye (до свидания, пока)",
    "cos": "because (потому что)",
    "cuz": "because (потому что)",
    "cul8r": "call you later / see you later (позвоню тебе позже / увидимся позже)",
    "cul": "see you later (увидимся позже)",
    "cwot": "complete waste of time (пустая трата времени)",
    "d8": "date (дата, свидание)",
    "dnr": "dinner (ужин)",
    "eod": "end of debate (конец дискуссии)",
    "ez": "easy (легко, просто, удобно)",
    "f2f": "face to face (лицом к лицу)",
    "f8": "fate (судьба)",
    "fyi": "for your information (к твоему сведению)",
    "gf": "girlfriend (девушка, герлфренд)",
    "gmta": "great minds think alike (поговорка 'Великие умы мыслят одинаково')",
    "gr8": "great (замечательно, отлично и т.д.)",
    "gtg": "got to go (должен идти)",
    "hand": "have a nice day (хорошего дня)",
    "hb2u": "happy birthday to you (с днем рождения)",
    "hols": "holidays (каникулы, отпуск)",
    "hru": "how are you (как ты? как дела?)",
    "hv": "to have (иметь)",
    "icbw": "it could be worse (могло быть хуже)",
    "idk": "I dont know (я не знаю)",
    "idts": "I don't think so (я так не думаю, не думаю, не согласен)",
    "iku": "I love you (я люблю тебя)",
    "imho": "in my humble opinion (по моему скромному мнению)",
    "iykwim": "if you know what I mean (если ты понимаешь, о чем я)",
    "jk": "just kidding (просто шучу, это шутка)",
    "kds": "kids (дети)",
    "kit": "to keep in touch (оставаться на связи)",
    "kotc": "kiss on the cheek (поцелуй в щеку)",
    "l8": "late (поздно, недавно, за последнее время)",
    "l8r": "later (позже)",
    "lol": "laughing out loud (это популярное английское сокращение тоже позаимствовано нашим интернетным сленгом)",
    "lskol": "long slow kiss on the lips (французский поцелуй)",
    "lins": "long time no see (давно не виделись)",
    "m8": "mate (приятель, друг, чувак)",
    "mon": "the middle of nowhere (идиома, означающая 'очень далеко, у черта на куличках')",
    "msg": "message (сообщение, послание)",
    "mte": "my thoughts exactly (ты читаешь мои мысли, я думаю точно так же)",
    "mu": "I miss you (скучаю по тебе)",
    "musm": "I miss you so much (скучаю по тебе очень сильно)",
    "myob": "mind your own business (занимайся своим делом, не лезь в чужие дела)",
    "n2s": "needless to say (само собой разумеется, очевидно что...)",
    "ne1": "anyone (кто угодно, любой)",
    "no1": "no one (никто)",
    "np": "no problem (без проблем, не проблема)",
    "oic": "oh, I see (понятно; вот оно что)",
    "pc&qt": "peace and quiet (тишина и покой)",   
    "pcm": "please call me (пожалуйста, позвони мне)",
    "pls": "please (пожалуйста)",
    "ps": "parents (родители)",
    "qt": "cutie (милашка)",
    "r": "are (форма глаголы to be)",
    "rofl": "rolling on the floor laughing (выражение для описания сильного смеха)",
    "ruok": "are you ok? (ты в порядке? все хорошо?)",
    "sis": "sister (сестра)",
    "smmr": "summer (лето)",
    "sob": "stressed out bad (чувствовать сильный стресс)",
    "som1": "someone (кто-то)",
    "tgif": "thank God it’s Friday (Слава Богу, сегодня пятница)",
    "thx": "thanks (спасибо)",
    "thnq": "thank you (спасибо тебе)",
    "ttul": "talk to you later (поговорим позже)",
    "u": "you (ты)",
    "wan2": "to want to (хотеть)",
    "wknd": "weekend (выходные)",
    "wr": "were (форма глагола to be)",
    "wuzzup": "what's up (как дела?)",
    "g2tu" : "got to tell you (есть что рассказать)",
    "smth" : "something (что-то)",
    "пж": "пожалуйста" ,
    "спс": "спасибо" ,
    "нзч": "не за что" ,
    "ок": "хорошо, ладно" ,
    "мб": "может быть" ,
    "имхо": "по моему скромному мнению (от англ. IMHO)" ,
    "лол": "смешно (от англ. LOL)" ,
    "омг": "о боже (от англ. OMG)" ,
    "сорян": "извини" ,
    "го": "давай (например, 'го в доту')" ,
    "чсв": "чувство собственной важности" ,
    "кринж": "стыд, неловкость" ,
    "рофл": "ржу не могу (от англ. ROFL)" ,
    "агриться": "злиться (от англ. 'aggressive')" ,
    "краш": "человек, который нравится" ,
    "чилить": "отдыхать, бездельничать (от англ. 'chill')",
    "чд": "что делаешь?",
    "кд": "как дела?",
    "пон": "понятно",
    "пр": "привет",
    "ку": "привет",
}
// Получаем элементы DOM
const chatArea = document.getElementById('chatArea'); // Область чата
const userInput = document.getElementById('userInput'); // Поле ввода
const sendBtn = document.getElementById('sendBtn'); // Кнопка отправки

// Функция обработки ввода
function handleInput() {
    // Получаем и обрабатываем введенный текст
    const inputText = userInput.value.trim().toLowerCase();
    
    // Игнорируем пустой ввод
    if (inputText === '') return;
    
    // Добавляем сообщение пользователя в чат
    addMessage(`Вы: ${inputText}`, 'user-message');
    
    // Очищаем поле ввода
    userInput.value = '';
    
    // Проверяем на команду остановки
    if (inputText === 'stop') {
        addMessage('Бот: Диалог завершен. Обновите страницу, чтобы начать снова.', 'bot-message');
        disableInput(); // Отключаем ввод
        return;
    }
    
    // Ищем расшифровку в базе
    if (abbreviations[inputText]) {
        addMessage(`Бот: ${abbreviations[inputText]}`, 'bot-message');
    } else {
        addMessage('Бот: Я не знаю эту аббревиатуру. Попробуйте другую!', 'bot-message');
    }
}

// Функция добавления сообщения в чат
function addMessage(text, className) {
    const messageDiv = document.createElement('div'); // Создаем div
    messageDiv.className = `message ${className}`; // Добавляем классы
    messageDiv.textContent = text; // Устанавливаем текст
    chatArea.appendChild(messageDiv); // Добавляем в чат
    chatArea.scrollTop = chatArea.scrollHeight; // Прокручиваем вниз
}

// Функция отключения ввода
function disableInput() {
    userInput.disabled = true; // Отключаем поле ввода
    sendBtn.disabled = true; // Отключаем кнопку
}

// Обработчики событий
sendBtn.addEventListener('click', handleInput); // Клик по кнопке
userInput.addEventListener('keypress', function(e) { // Нажатие Enter
    if (e.key === 'Enter') {
        handleInput();
    }
});
