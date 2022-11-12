var topBox = document.getElementById("top");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

var cover = false;

function sortTop() {
    offset = img2.width/2;
    img1.style.left = `${window.innerWidth/2 - img1.width - offset}px`;
    img3.style.left = `${window.innerWidth/2 + offset}px`;
}
window.addEventListener("resize", sortTop);

var delay = 0.1;
setTimeout(sortTop, delay * 1000);
// The first time the page loads the images need to load in first before sortTop can be called otherwise the
// top will get sorted incorrecetly so this function 'setTimeout' will wait 0.3s before sorting the top of the screen

var btn = document.getElementById("contact-button");
btn.onclick = function() {
    if (cover == true) {
        off();
    }
    else if (cover == false) {
        on();
    }
}

var overlay = document.getElementById("overlay");

function on() {
    overlay.style.display = "block";
    cover = true;
}

function off() {
    overlay.style.display = "none";
    cover = false;
}

var popup = document.getElementById("container");

window.onclick = function(event) {
    /// Here we say that if the element we clicked is not either the button, the popup element or a child of the popup element
    /// then we will remove the popup because the user could click on an element inside the popup and this element would
    /// not be the popup but we also have to make sure they dont click the button because if they click the button then
    /// the popup cant be opened but by clicking the button it will open and so then this function will run and instantly close it
    /// because the program thinks that we clicked a button (so not the popup)
    if ((event.target != popup)&&(event.target != btn)&&(!popup.contains(event.target))) {
        off();
    }
}

var close_button = document.getElementById("close");
close_button.onclick = function() {
    off();
}