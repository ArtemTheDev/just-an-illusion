//NAVBAR MENU
const animateTime = 200;

let menu = document.getElementById("menu");
let menu_opener = document.getElementById("menu_opener");
let activated = false;
menu.style.display = "none";

menu_opener.addEventListener("click", (e) => {
    if (!activated) {
        $(menu).slideDown(animateTime);
        menu_opener.classList.add("active");
        activated = true;
    } else {
        $(menu).slideUp(animateTime);
        menu_opener.classList.remove("active");
        activated = false;
    }
});

//SCROLLING
let description_btn = document.getElementById("description_btn");
let screens_btn = document.getElementById("screens_btn");
let characters_btn = document.getElementById("characters_btn");
let gameplay_btn = document.getElementById("gameplay_btn");
let links_btn = document.getElementById("links_btn");
let download_btn = document.getElementById("download_btn");

description_btn.addEventListener("click", (e) => {
    $('html, body').animate({
        scrollTop: $("#slider").offset().top
    }, {
        duration: 1000,
    });
});

screens_btn.addEventListener("click", (e) => {
    $('html, body').animate({
        scrollTop: $("#screenshots").offset().top-60
    }, {
        duration: 1000,
    });
});

characters_btn.addEventListener("click", (e) => {
    $('html, body').animate({
        scrollTop: $("#characters").offset().top-60
    }, {
        duration: 1000,
    });
});

gameplay_btn.addEventListener("click", (e) => {
    $('html, body').animate({
        scrollTop: $("#gameplay").offset().top-60
    }, {
        duration: 1000,
    });
});

links_btn.addEventListener("click", (e) => {
    $('html, body').animate({
        scrollTop: $("#links").offset().top-60
    }, {
        duration: 1000,
    });
});

download_btn.addEventListener("click", (e) => {
    $('html, body').animate({
        scrollTop: $("#download").offset().top-60
    }, {
        duration: 1000,
    });
});

//SLIDER
var i = 1;
var changeBGtimer = 10000;

function checkSlider() {
	if (i == 1) { $('.img1').addClass('active'); $('.img3').removeClass('active');}
	if (i == 2) { $('.img2').addClass('active'); $('.img1').removeClass('active');}
	if (i == 3) { $('.img3').addClass('active'); $('.img2').removeClass('active');}
}

function next() {
	if (i < 3) { i += 1; } else { i = 1; }
	checkSlider(i);
	setTimeout(next, changeBGtimer);
}

setTimeout(next, changeBGtimer);

//IMAGES
let images = document.getElementsByClassName("screenshots__content-block-image");
let bigger_img = document.getElementById("bigger_img");
let bigger_img_wrapper = document.getElementById("bigger_img_wrapper");
bigger_img_wrapper.style.display = "none";

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
        $(bigger_img_wrapper).fadeIn({ duration: animateTime,  queue: false});
        let image_Src = e.target.src;
        bigger_img.src = image_Src;
    });
}

bigger_img_wrapper.addEventListener("click", (e) => {
    if (e.target.id == "bigger_img_wrapper") {
        $(bigger_img_wrapper).fadeOut({ duration: animateTime,  queue: false});
    }
});


//CHARACTER INFO
let arrow_left = document.getElementById("arrow_left");
let arrow_right = document.getElementById("arrow_right");
let arrow_left_svg = document.getElementById("arrow_left_svg");
let arrow_right_svg = document.getElementById("arrow_right_svg");
let character_name = document.getElementById("character_name");
let character_description = document.getElementById("character_description");
let character_icon = document.getElementById("character_icon");
let character_id = 0;
let obj, mode;

let character_names = [
    'Sonic The Hedgehog',
    'Miles "Tails" Prower The Fox',
    'Knuckles The Echidna',
    'Doctor Ivo “Eggman” Robotnik',
    'Metal Sonic The Robot',
    'Exzark The Lowest'
];

let character_descriptions = [
    'Sonic The Hedgehog - a fast, optimistic and a joyful hedgehog, who had fallen into a villain’s trap because of his kindness.',
    'Tails the fox - a kind fox and Sonic’s best friend. Was one of the 3 Exzark’s victims.',
    'Knuckles the echidna - an echidna who guards his clan’s sacred artifact - The Master Emerald. He became one of the victims too.',
    'Doctor Ivo “Eggman” Robotnik - the Mobius’ number one threat and a mad scientist. He uses his armies to conquer the planet and crush anyone who opposes him, however, he became one of Exzark’s victims as well.',
    'metal sonic',
    'exzark'
];

let character_color = [
    '#005cce',
    '#b98900',
    '#a90000',
    '#e79573',
    'rgb(37 69 160)',
    '#00438a'
];

arrow_left.addEventListener("click", (e) => {
    character_id--;
    if (character_id < 0) character_id = character_names.length-1;
    update_info(character_id);
    spin(arrow_left_svg, -1);
});

arrow_right.addEventListener("click", (e) => {
    character_id++;
    if (character_id > character_names.length-1) character_id = 0;
    update_info(character_id);
    spin(arrow_right_svg, 1);
});

function update_info(id) {
    $(character_name).hide().text(character_names[id]).fadeIn(animateTime);
    character_name.style.color = character_color[id];
    arrow_left_svg.childNodes[0].style.fill = character_color[id];
    arrow_right_svg.childNodes[0].style.fill = character_color[id];
    $(character_description).hide().text(character_descriptions[id]).fadeIn(animateTime);
    $(character_icon).hide();
    character_icon.src = "img/icons/" + (id+1) +".png";
    $(character_icon).fadeIn(animateTime);
}

function spin(spin_obj, spin_mode) {
    i = 0;
    obj = spin_obj;
    mode = spin_mode;
    if (mode == -1) {
        i = 180;
    }
    setRotation();
}

update_info(character_id);

function setRotation() {
    obj.style.transform = "rotate(" + i + "deg)";
    if (i < 360 && mode == 1) {
        i+=6 * mode;
        setTimeout(setRotation, 1);
    } else if(i > -180 && mode == -1) {
        i+=6 * mode;
        setTimeout(setRotation, 1);
    }
}




//LANGUAGE
function changeLang(lang_id) {
    if (lang_id == 1) {
        $(description_btn).text("Описание");
        $(screens_btn).text("Скриншоты");
        $(characters_btn).text("Персонажи");
        $(gameplay_btn).text("Геймплей");
        $(links_btn).text("Ссылки");
        $(download_btn).text("Скачать");
        $("#screenshots").text("Скриншоты");
        $("#characters").text("Персонажи");
        $("#gameplay").text("Геймплей");
        $("#links").text("Ссылки");
        $("#download").text("Скачать");
        character_names = [
            'Ёж Соник',
            'Лис Майлс "Тейлс" Прауэр',
            'Ехидна Наклс',
            'Доктор Айво "Эггман" Роботник',
            'Робот Метал Соник',
            'Эксзарк'
        ];

        character_descriptions = [
            'Ёж Соник - быстрый, оптимистичный и жизнерадостный ёж, попавший в ловушку злодея по своей наивности.',
            'Лис Тейлс - добрый лис, лучший друг Соника. Был одной из 3 жертв Эксзарка.',
            'Ехидна Наклс - ехидна, охранявшая священный реквизит своего рода - священный Мастер Изумруд. Также является одной из жертв.',
            'Доктор Айво "Эггман" Роботник - главный враг мобиуса, злобный учёный. Использует все свои силы для нападения и завоевания страны. Однако, оказался одной из жертв Эксзарка.',
            'Робот Метал Соник - одно из величайших изобретений Доктора Роботника. Невольно стал рабом Эксзарка и противником героев.',
            'Эксзарк - гавный антогонист игры. Один из экспериментов Первижона, устроивший хаос в Мобиусе ради своих целей.'
        ];
        let channel_link = document.getElementById("channel_link");
        $(channel_link).text("Официальный канал разработчика");
        let gj_link = document.getElementById("gj_link");
        $(gj_link).text("Страница в GameJolt");
        $("#downloads_description").text("Sonic.exe Just An Illusion ещё не вышла, но вы можете скачать демо-версии игры.");

        $("#downloads_window").text("Скачать");
        $("#downloads_old_window").text("Старые версии");
        $("#footer_madeBY").text("Автор сайта: Artem The Developer (ATD)");
        $("#footer_ver").text("Текущая версия сайта: V.0.3");
        $("#downloads_btn").text("Скачать старые версии");
        $("#lang").hide().text("RUS").fadeIn(animateTime);
        $("#game_description").text('Sonic.exe Just An Illusion - это игра в стиле классических "Сониковских" платформеров с элементами хоррора. Игра предоставляет 3 основных играбельных персонажей и историю с несколькими отвлетвлениями.');
    } else {
        $(description_btn).text("Description");
        $(screens_btn).text("Screenshots");
        $(characters_btn).text("Characters");
        $(gameplay_btn).text("Gameplay");
        $(links_btn).text("Links");
        $(download_btn).text("Downloads");
        $("#screenshots").text("Screenshots");
        $("#characters").text("Characters");
        $("#gameplay").text("Gameplay");
        $("#links").text("Links");
        $("#download").text("Downloads");
        character_names = [
            'Sonic The Hedgehog',
            'Miles "Tails" Prower The Fox',
            'Knuckles The Echidna',
            'Doctor Ivo “Eggman” Robotnik',
            'Metal Sonic The Robot',
            'Exzark The Lowest'
        ];
        
        character_descriptions = [
            'Sonic The Hedgehog - a fast, optimistic and a joyful hedgehog, who had fallen into a villain’s trap because of his kindness.',
            'Tails the fox - a kind fox and Sonic’s best friend. Was one of the 3 Exzark’s victims.',
            'Knuckles the echidna - an echidna who guards his clan’s sacred artifact - The Master Emerald. He became one of the victims too.',
            'Doctor Ivo “Eggman” Robotnik - the Mobius’ number one threat and a mad scientist. He uses his armies to conquer the planet and crush anyone who opposes him, however, he became one of Exzark’s victims as well.',
            "Metal Sonic The Robot - one of the greatest Robotnik's creations. Unwittingly became a slave of Exzark and an enemy of heroes.",
            "Exzark - the main villan of the game. One of the Pervision's experiments, who decided to destroy a Mobius for it's own purposes."
        ];
        let channel_link = document.getElementById("channel_link");
        $(channel_link).text("Artem The Developer YouTube channel");
        let gj_link = document.getElementById("gj_link");
        $(gj_link).text("GameJolt page");
        $("#downloads_description").text("Sonic.exe Just An Illusion hasn’t been released yet, but you can download the demo version of the game.");

        $("#downloads_window").text("Downloads");
        $("#downloads_old_window").text("Old versions");
        $("#footer_madeBY").text("Site is made by Artem The Developer (ATD)");
        $("#footer_ver").text("Current version: V.0.3");
        $("#downloads_btn").text("Download old versions");
        $("#lang").hide().text("ENG").fadeIn(animateTime);
        $("#game_description").text('Sonic.exe Just An Illusion is a game styled after classic Sonic games mixed in with some horror elements. The game allows you to control 3 playable characters and has a narrative with multiple branches.');
    }
    update_info(character_id);
}

let lang_change_btn = document.getElementById("lang_change_btn");
lang_change_btn.addEventListener("click", () => {
    if (lang_id == 0) lang_id = 1;
    else lang_id = 0;
    changeLang(lang_id);
})


// Download window
let downloads_wrapper = document.getElementById("downloads_wrapper");
let downloads_btn = document.getElementById("downloads_btn");


downloads_btn.addEventListener("click", (e) => {
    $(downloads_wrapper).fadeIn({ duration: animateTime,  queue: false});
    document.body.style.overflowY = "hidden";
});

downloads_wrapper.addEventListener("click", (e) => {
    if (e.target.id == "downloads_wrapper") {
        $(downloads_wrapper).fadeOut({ duration: animateTime,  queue: false});
        document.body.style.overflowY = "scroll";
    }
});

downloads_wrapper.style.display = "none";

lang_id = 0;