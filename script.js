const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("[#uppercase]");
const lowercaseCheck = document.querySelector("[#lowercase]");
const numbersCheck = document.querySelector("[#numbers]");
const symbolsCheck = document.querySelector("[#symbols]");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector("[.generatebutton]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");


let password = "";
let checkCount = 1;
let passwordLength = 10
handleSlider();
// set strength circle color to gray


// set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(){
    indicator.style.backgroundColor = color;
    // shadow
}

function getRndInteger(min, max){
    Math.floor (Math.random() * (max - min)) + min


}
