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
let character_name = document.getElementById("character_name");
let character_description = document.getElementById("character_description");
let character_icon = document.getElementById("character_icon");
let character_id = 0;
let character_names = [
    'Sonic The Hedgehog',
    'Miles "Tails" Prower The Fox',
    'Knuckles The Echidna',
];
let character_color = [
    '#005cce',
    '#b98900',
    '#a90000'
];
let character_descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id bibendum eros. Phasellus vitae elit et nisl efficitur accumsan ut nec ante. Proin mollis varius ipsum vitae ultricies.'
];
let obj, mode;

arrow_left.addEventListener("click", (e) => {
    character_id--;
    if (character_id < 0) character_id = character_names.length-1;
    update_info(character_id);
    spin(arrow_left, -1);
});

arrow_right.addEventListener("click", (e) => {
    character_id++;
    if (character_id > character_names.length-1) character_id = 0;
    update_info(character_id);
    spin(arrow_right, 1);
});

function update_info(id) {
    $(character_name).hide().text(character_names[id]).fadeIn(animateTime);
    character_name.style.color = character_color[id];
    arrow_left.childNodes[0].style.fill = character_color[id];
    arrow_right.childNodes[0].style.fill = character_color[id];
    $(character_description).hide().text(character_descriptions[id]).fadeIn(animateTime);
    $(character_icon).hide();
    character_icon.src = "../img/icons/" + (id+1) +".png";
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

update_info(character_id);