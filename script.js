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
const symbols = '~!@#$%^&*)(_+/*-+"><,.?/\|[]{}=`'


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

function generateRandomNumber(){
    return getRndInteger(0,9);
}


function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97, 123));
}



function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65, 90));
}


function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}


function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }  else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent(){
try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText  = "copied";

}

catch(e){
    copyMsg.innerText = "failed";
    
}
// to make copy wala span visible
copyMsg.classList.add("active");
setTimeout( () => {
    copyMsg.classList.remove("active")
}, 2000 );
    

}

