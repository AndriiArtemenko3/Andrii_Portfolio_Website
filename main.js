var tab = document.getElementById("Popup_w2");
var display = 0;

function TabShowHide() {
    if(display == 1) {
        tab.style.display = 'block';
        display = 0;
    }
    else {
        tab.style.display = 'none';
        display = 1;
    }
}

function changeFontSize(type){

    let ids = ["#text", "#label1", "#label2", "#label3", "#label4"];

    ids.forEach(id => {
        let elements = document.querySelector(id);
    
        let fontSize = window.getComputedStyle(elements, null).getPropertyValue("font-size")
        fontSize = parseFloat(fontSize);
    
        if(type === "increase"){
            elements.style.fontSize = (fontSize + 1) + "px";
    
        }
        else{
            elements.style.fontSize = (fontSize - 1) + "px";
        }
    });
}

const slides = document.querySelectorAll(".slides");
let slideIndex = 0;
let intervalId = null;

function initSlider(){

    slides[slideIndex].style.display = "block";
    intervalId = setInterval(nextSlide, 5000);
    console.log(intervalId);

}

function showSlide(index){

}

function prevSlide(){

}

function nextSlide(){

}

