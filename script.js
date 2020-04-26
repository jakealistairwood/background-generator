var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var css = document.querySelector("h3");

function changeGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", "
        + color2.value 
        + ")";
    
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomise() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    changeGradient();
}


color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
random.addEventListener("click", randomise);
document.addEventListener("DOMContentLoaded", changeGradient);
























/* var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var random = document.getElementById("random");

function changeGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", "
        + color2.value 
        + ")";
    
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomise() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    changeGradient();
}


color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
document.addEventListener("DOMContentLoaded", changeGradient);
random.addEventListener("click", randomise);

*/





/* var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function changeGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value
        + ", " 
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomise() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    changeGradient();
}

document.addEventListener("DOMContentLoaded", changeGradient);
color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
random.addEventListener("click", randomise);

*/




















// var button = document.getElementById("random");

/* function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} */

/* function randomise() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    changeGradient();
} */

//document.addEventListener("DOMContentLoaded", changeGradient);
//random.addEventListener("click", randomise);













