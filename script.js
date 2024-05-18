addSum = function (num1,num2){

    let sum = num1 + num2
    calcOutput.textContent = sum;
}

subtractAll = function(num1, num2){

    let sum = num1 - num2
    calcOutput.textContent = sum;
}

divde = function(num1, num2){

    return num1 / num2; 
}

multiply = function(num1, num2){

    return num1 * num2;
}

let num1 = null;
let num2 = null;

let operator = null;

operate = function (operator,num1,num2){

    if (operator.includes('+')){
        addSum(num1,num2);
    }

    else if (operator.includes('-')){
        subtractAll(num1,num2);
    }

    else if (operator.includes('/')){
        divde(num1,num2);
    }
    else if (operator.includes('*')){
        multiply(num1,num2);
    }

    else {
        calcOutput.textContent = "ERR0R"
    }

    
}


function decimalValidation (){
    if (calcOutput.textContent === ''){
        decimalBtn.disabled = true;
        decimalBtn.disabled = false;
    }
    getCurrentNumber();
}
function getCurrentNumber() {
    // Get the entire expression entered so far
    const expression = calcOutput.textContent;

    // Split the expression by operators to get individual numbers
    const numbers = expression.split(/[+\-*/]/);

    // Return the last number in the array, which is the current number being entered
    let lastTypeNum =  numbers[numbers.length - 1];

    if (lastTypeNum.includes('.') ) {
        decimalBtn.disabled = true;
        decimalBtn.disabled = false;

        
        return;
    } 
    else if (lastTypeNum === ''){

        calcOutput.textContent += "0";
        calcOutput.textContent += decimalBtn.value;
    }
    
    else {
        
        decimalBtn.disabled = false;
        calcOutput.textContent += decimalBtn.value;
    }
}

// Logic Code Below
const calcInput = document.querySelector('.calc-input')
const allClearBtn = document.querySelector('.all-clear')
const calcOutput = document.querySelector('.calc-output')
const numericButtons = document.querySelectorAll('#number')
const backspaceBtn = document.querySelector('#backspace')
const divideBtn = document.querySelector('#divide')
const multiBtn = document.querySelector('#multiply')
const subtractBtn = document.querySelector('#subtract')
const addBtn = document.querySelector('#add')
const equalBtn = document.querySelector('#equals')
const decimalBtn = document.querySelector('#decimal')
const CalInputText = calcOutput.textContent;

 function setDefaultCalcVisual () {

    calcOutput.textContent = "0";
 }


function displayOperator(element){
    if (element.value === '/' && calcOutput.textContent === '' || calcOutput.textContent.includes(element.value)){
        
        return;
    }
else if (element.value === '*' && calcOutput.textContent === '' || calcOutput.textContent.includes(element.value)) {
        
    return;
}
else if (element.value === '+' && calcOutput.textContent === '' || calcOutput.textContent.includes(element.value)) {
        
    return;
}
else if (element.value === '=' && calcOutput.textContent === '' || calcOutput.textContent.includes(element.value)) {
        
    return;
}
  else {



    calcOutput.textContent += element.value;
    
  }
}

// Functions Created For Buttons Below

// Buttons Below Clears Input
function clearDisplay (){
    calcInput.textContent = ""
    calcOutput.textContent= ""

}


allClearBtn.addEventListener('click', function (){
    clearDisplay()
})
// Clear Buton End
// Function Below Utlizies BackSpace

function backSpce () {
    calcOutput.textContent = calcOutput.textContent.slice(0, -1)

}
backspaceBtn.addEventListener('click', backSpce)
// BackSpace End
// Code Below For Operating Functions
// Divide



divideBtn.addEventListener('click', function () {

    
    displayOperator(divideBtn)
})

// Multiply
multiBtn.addEventListener('click', function () {
   
    displayOperator(multiBtn)
})
// Subtract
subtractBtn.addEventListener('click', function(){

  
    displayOperator(subtractBtn)
})

// Add
addBtn.addEventListener('click', function (){

    
    displayOperator(addBtn)
} )

// Equals
equalBtn.addEventListener('click', function(){


    calcInput.textContent= calcOutput.textContent + "=" ;
    equationInStr = calcOutput.textContent;
    if (equationInStr.includes("+")){
        let splitArray = equationInStr.split('+');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

    
        operate("+",num1,num2);
    }
    else  if (equationInStr.includes("-")){
        let splitArray = equationInStr.split('-');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

    
        operate("-",num1,num2);
    }
    else if (equationInStr.includes("*")){
        let splitArray = equationInStr.split('*');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

    
        operate("*",num1,num2);
    }


})


//Adding Event Listeners for All Numeric Btns

numericButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {

    if (calcOutput.textContent === "0"){

        backSpce();
    }
        updateDisplay(event);
    });
});


function updateDisplay (event) {
    const outputText = calcOutput.textContent;
    if (outputText.charAt(0) == '0' && event.currentTarget.value === '0'){
        return
    }

    else{
        calcOutput.textContent += event.currentTarget.value;  
    }

}

// Decimals
decimalBtn.addEventListener('click', decimalValidation)


