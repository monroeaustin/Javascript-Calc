function hasOperator(expression) {
const operatorPattern = /[+\-*/]/;
console.log("Debug20")
return operatorPattern.test(expression[0]) && operatorPattern.test(expression[1]);
}

function hasAtleastOneOperator(expression) {
const operatorPattern = /[+\-*/]/;
return operatorPattern.test(expression);
}



const operatorPattern = /[+\-*/]/;

addSum = function (num1,num2){
    let sumPreRound = num1 + num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
    console.log("Debug21");
}

subtractAll = function(num1, num2){
    console.log(num1, num2)
    let sumPreRound = num1 - num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
    console.log("Debug22");
}

divide = function(num1, num2){

    let sumPreRound = num1 / num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
    console.log("Debug23");
}

multiply = function(num1, num2){

    let sumPreRound = num1 * num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
    console.log("Debug24");
}

let num1 = null;
let num2 = null;

let operator = null;

operate = function (operator,num1,num2){
console.log("DeBUG192 Operate")
    if (operator.includes('+')){
        addSum(num1,num2);
        console.log("Debug25");
    }

    else if (operator.includes('-')){
        subtractAll(num1,num2);
        console.log("We've tried to subtract" + num1 +"-" + num2)
        console.log("Debug26");
    }

    else if (operator.includes('/')){
        divide(num1,num2);
        console.log("We've tried to divide" + num1 +"/" + num2)
        console.log("Debug27");
    }
    else if (operator.includes('*')){
        multiply(num1,num2);
        console.log("We've tried to multiply" + num1 +"*" + num2)
        console.log("Debug28");
    }

    else {
        calcOutput.textContent = "ERR0R"
        console.log("Debug29");
    }

    
}

function CalculateAnswer(operator,num1, num2){

console.log('debug A in Calculate')
    calcInput.textContent= calcOutput.textContent + "=" ;
    equationInStr = calcOutput.textContent;

    if (equationInStr.includes("+")){
        console.log('debug B in Calculate')
        let splitArray = equationInStr.split('+');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

    
        calcInput.textContent= calcOutput.textContent + "=" ;
        equationInStr = calcOutput.textContent;
        operate("+",num1,num2);
        console.log("Debug1");
        return
        }
        
    else if (equationInStr.includes("*")){
        console.log('debug C in Calculate')
        let splitArray = equationInStr.split('*');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

    
        operate("*",num1,num2);
        console.log("Debug2");
        return
    }
    
    else if (equationInStr.includes("/")){
        console.log("Debug3");
    
        let splitArray = equationInStr.split('/');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);
        if (num1 === 0 || num2 === 0) {
            calcOutput.textContent = "GOT EM!";
            return;
        } else {
        operate("/",num1,num2)}
    }
        else  if (equationInStr.includes("-")){
            console.log("Debug Alpha A")
            let regex = /(-?\d+(\.\d+)?)|(\d+(\.\d+)?)/g;
            let IdentifyMultiNegs = equationInStr.split('-')
            if (IdentifyMultiNegs.length > 2 && IdentifyMultiNegs[0] !== ''){
                
                let FindMatch = equationInStr.match(regex);
                let num1 = parseFloat(letFindMatch[0])
                let num2 = parseFloat(letFindMatch[1])
                operate("-",num1,num2);
            console.log("Debug Alpha D");
            return
                

            } else if (IdentifyMultiNegs.length <= 2 && IdentifyMultiNegs[0] !== '' ) {

            console.log('debug D in Calculate')
        let splitArray = equationInStr.split('-');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);
    
        
            operate("-",num1,num2);
            console.log("Debug4");
            return
        }
        else {
            console.log('debug F in Calculate')
            let regex = /(-?\d+(\.\d+)?)|(\d+(\.\d+)?)/g;
            
            let IdentifyMultiNegs = equationInStr.split('-')
            let lastArrayReg = IdentifyMultiNegs[IdentifyMultiNegs.length -1]
            let FindMe = equationInStr.match(regex);
            subtractAll(FindMe[0],lastArrayReg)
    
console.log(FindMe,num2)
let FindMatch = equationInStr.match(regex);
        console.log("Debug5");
        return
    
}
}}

function decimalValidation (){
    if (calcOutput.textContent === ''){
        decimalBtn.disabled = true;
        decimalBtn.disabled = false;
        console.log('Debug 50')
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

        console.log('Debug 51')
        return;
    } 
    else if (lastTypeNum === ''){

        calcOutput.textContent += "0";
        calcOutput.textContent += decimalBtn.value;
        console.log('Debug 52')
        return
    }
    
    else {
        
        decimalBtn.disabled = false;
        calcOutput.textContent += decimalBtn.value;
        console.log('Debug 53')
        return
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
const negativeBtn = document.querySelector('#negative')

 function setDefaultCalcVisual () {

    calcOutput.textContent = "0";
 }


  function displayOperator(element){
    console.log("DisplayOp Start")
    let lastChar = calcOutput.textContent.slice(-1);
    let FirstChar = calcOutput.textContent.slice(0, 1);
    customFunction = calcOutput.textContent.slice('-')
    let evrytingButFirstChar = calcOutput.textContent.slice(1);


if (hasOperator(lastChar) == true ){
    return;
}

    else if (hasOperator(lastChar) == false &&  hasAtleastOneOperator(calcOutput.textContent) == false){
    calcOutput.textContent += element.value; 
    console.log("Debug10");
    return
}

// else if (hasOperator(FirstChar) == true){
//     calcOutput.textContent += element.value; 
// }
else if (hasAtleastOneOperator(calcOutput.textContent) == true && hasOperator(lastChar) == false && FirstChar !== '-'){
    console.log("77DeBUG Preparing For Cal")

    CalculateAnswer()
    console.log("Debug9");

    calcOutput.textContent += element.value; 
    return
}
else if (hasAtleastOneOperator(calcOutput.textContent) == true && customFunction.length > 2 && customFunction[0] ==! '' ){
    console.log("ID#9404");
    CalculateAnswer();
    console.log("ID#94554");
}
else if (FirstChar == "-" && hasAtleastOneOperator(lastChar) == false && hasAtleastOneOperator(evrytingButFirstChar) == false){
console.log("#BETAiD393")
calcOutput.textContent += element.value; 
    
}
else if (FirstChar == '-' && hasAtleastOneOperator(evrytingButFirstChar) == true){

    console.log("#BETdnd3")
    let fullEquation = calcOutput.textContent;
    let regex = /(-?\d+(\.\d+)?)|(\d+(\.\d+)?)/g;
    let IdentifyMultiNegs = fullEquation.split('-')
    let FindMatch = fullEquation.match(regex);
    const num1 = FindMatch[0]
    const num2 = FindMatch[1]
    console.log("#B444nd3")
    CalculateAnswer(num1, num2)
    console.log("#BET04543")
}
else if (FirstChar == "-" && hasAtleastOneOperator(lastChar) == false){
    calcOutput.textContent += element.value; 
    console.log('FIXEID393');

}
else if (FirstChar == "-"){
        console.log('Prior to Calculattion');
        CalculateAnswer();
        console.log("B4TA Bug");
        return;
    }
    else {
        console.log("000")
    }
}


    
// Functions Created For Buttons Below

// Buttons Below Clears Input
function clearDisplay (){
    calcInput.textContent = ""
    calcOutput.textContent= ""
    console.log('Debug 55')
    return
}


allClearBtn.addEventListener('click', function (event){
    clearDisplay();
    console.log('80')
    event.stopPropagation();
})
// Clear Buton End
// Function Below Utlizies BackSpace

function backSpce () {
    calcOutput.textContent = calcOutput.textContent.slice(0, -1)
}
backspaceBtn.addEventListener('click', function(event){
    backSpce()
    console.log('81')
    event.stopPropagation();
})




divideBtn.addEventListener('click', function (event) {
    
    if (calcOutput.textContent === '') {
        divideBtn.disabled= true;
        divideBtn.disabled= false;
       }
       else{
    displayOperator(divideBtn)
    console.log('82')
    event.stopPropagation();}
})

// Multiply
multiBtn.addEventListener('click', function (event) {
   if (calcOutput.textContent  === '') {
    multiBtn.disabled= true;
    multiBtn.disabled= false;
   }
   else{
    displayOperator(multiBtn)
    console.log('83')
    event.stopPropagation();}
})
// Subtract
subtractBtn.addEventListener('click', function(event){
    const calcOutput = document.querySelector('.calc-output')
    let lastTwoChar = calcOutput.textContent.slice(-2);
console.log("Alpha BBY in Subtrack")
if (calcOutput.textContent  == '') {
    subtractBtn.disabled= true;
    subtractBtn.disabled= false;
   }

   else if(hasOperator(lastTwoChar) == true){
    subtractBtn.disabled= true;
    subtractBtn.disabled= false;}
   else{
    displayOperator(subtractBtn);
    console.log('84')
    event.stopPropagation();}
})

// Add
addBtn.addEventListener('click', function (event){
console.log("Debug 69 At add")
if (calcOutput.textContent == '') {
    addBtn.disabled= true;
    addBtn.disabled= false;
   }
   else{
    displayOperator(addBtn);
    console.log('85')
    event.stopPropagation();}
} )

// Equals
equalBtn.addEventListener('click', function(event){

    if (calcOutput.textContent == '0' || (hasAtleastOneOperator(calcOutput.textContent) !== true && hasAtleastOneOperator(lastChar) === false)) {
        equalBtn.disabled = true;
        equalBtn.disabled = false;
    } else {
        CalculateAnswer();
        console.log('86');
        event.stopPropagation();
    }})


//Adding Event Listeners for All Numeric Btns

numericButtons.forEach(btn => {
    
    btn.addEventListener('click', (event) => {
        console.log("Debug101 At Number Event Lisenter")
    if (calcOutput.textContent === "0"){
        
        backSpce();
        console.log('87')
    }
        updateDisplay(event);
        console.log('Debug 59');
        event.stopPropagation();
    });
});


function updateDisplay (event) {
    const outputText = calcOutput.textContent;
     let lastTwoChar = outputText.slice(-2);
console.log("Debug 100")
    
    if (outputText.charAt(0) == '0' && event.currentTarget.value === '0'){
        console.log('Debug 60');
        return
    }
if (hasOperator(lastTwoChar) == true){
    calcOutput.textContent += event.currentTarget.value; 
    console.log('Debug 61');
    return

}
    else{
        calcOutput.textContent += event.currentTarget.value;  
        console.log('Debug 62');
        return
    }

}

// Decimals
decimalBtn.addEventListener('click', function(event){
    decimalValidation()
    console.log('88')
    event.stopPropagation();
})

function displayNegativeInteger (element){
   let expression = calcOutput.textContent;
   let array = expression.split("-")
   if (array.length > 2){
    console.log('Debug 63');
    return
   }
    else {
        calcOutput.textContent += element.value
        console.log('Debug 64')
        return
    }

}


negativeBtn.addEventListener('click', function(event){
    console.log("Debug115 At Negative")
    displayNegativeInteger(negativeBtn);
    console.log('89')
    event.stopPropagation();
})



