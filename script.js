function hasOperator(expression) {
const operatorPattern = /[+\-*/]/;
return operatorPattern.test(expression[0]) && operatorPattern.test(expression[1]);
}

function hasAtleastOneOperator(expression) {
const operatorPattern = /[+\-*/]/;
return operatorPattern.test(expression);
}

addSum = function (num1,num2){
    let sumPreRound = num1 + num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
}

subtractAll = function(num1, num2){
    let sumPreRound = num1 - num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
}

divide = function(num1, num2){

    let sumPreRound = num1 / num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
}

multiply = function(num1, num2){

    let sumPreRound = num1 * num2
    let sum = Math.round(sumPreRound * 100) / 100
    calcOutput.textContent = sum;
}

operate = function (operator,num1,num2){
    if (operator.includes('+')){
        addSum(num1,num2);
    }

    else if (operator.includes('-')){
        subtractAll(num1,num2);
    }

    else if (operator.includes('/')){
        divide(num1,num2);
    }
    else if (operator.includes('*')){
        multiply(num1,num2);
    }

    else {
        calcOutput.textContent = "ERR0R"
    }
}

function CalculateAnswer(operator,num1, num2){

    calcInput.textContent= calcOutput.textContent + "=" ;
    equationInStr = calcOutput.textContent;

    if (equationInStr.includes("+")){
        let splitArray = equationInStr.split('+');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

    
        calcInput.textContent= calcOutput.textContent + "=" ;
        equationInStr = calcOutput.textContent;
        operate("+",num1,num2);
        console.log("Debug1");
        return;
        }
        
    else if (equationInStr.includes("*")){
        let splitArray = equationInStr.split('*');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);

        operate("*",num1,num2);
        return;
    }
    
    else if (equationInStr.includes("/")){
    
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
            let regex = /(-?\d+(\.\d+)?)|(\d+(\.\d+)?)/g;
            let IdentifyMultiNegs = equationInStr.split('-')
            if (IdentifyMultiNegs.length > 2 && IdentifyMultiNegs[0] !== ''){
                
                let FindMatch = equationInStr.match(regex);
                let num1 = parseFloat(letFindMatch[0])
                let num2 = parseFloat(letFindMatch[1])
                operate("-",num1,num2);
            console.log("Debug Alpha D");
            return;
                

            } else if (IdentifyMultiNegs.length <= 2 && IdentifyMultiNegs[0] !== '' ) {

        let splitArray = equationInStr.split('-');
        let digit1 = splitArray[0].toString();
        let digit2 = splitArray[1].toString();
        let num1 = parseFloat(digit1);
        let num2 = parseFloat(digit2);
    
        
            operate("-",num1,num2);
            return;
        }
        else {
            console.log('debug F in Calculate')
            let regex = /(-?\d+(\.\d+)?)|(\d+(\.\d+)?)/g;
            
            let IdentifyMultiNegs = equationInStr.split('-')
            let lastArrayReg = IdentifyMultiNegs[IdentifyMultiNegs.length -1]
            let FindMe = equationInStr.match(regex);
            subtractAll(FindMe[0],lastArrayReg)
    
                return;
    
}
}}

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
        return
    }
    
    else {
        
        decimalBtn.disabled = false;
        calcOutput.textContent += decimalBtn.value;
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
    let lastChar = calcOutput.textContent.slice(-1);
    let FirstChar = calcOutput.textContent.slice(0, 1);
    customFunction = calcOutput.textContent.slice('-')
    let evrytingButFirstChar = calcOutput.textContent.slice(1);
    let lastTwoChar = calcOutput.textContent.slice(-2);

if (hasOperator(lastTwoChar) == true ){
    console.log('B4')
    return;
}
    else if (hasOperator(lastChar) == false &&  hasAtleastOneOperator(calcOutput.textContent) == false){
        console.log('B5')
    calcOutput.textContent += element.value; 
    return
}

// else if (hasOperator(FirstChar) == true){
//     calcOutput.textContent += element.value; 
// }
else if (hasAtleastOneOperator(calcOutput.textContent) == true && hasAtleastOneOperator(lastChar) == false && FirstChar !== '-'){
    console.log('B6')
    CalculateAnswer()

    calcOutput.textContent += element.value; 
    return
}
else if (hasAtleastOneOperator(calcOutput.textContent) == true && customFunction.length > 2 && customFunction[0] ==! '' ){
    console.log('B7')
    CalculateAnswer();
}
else if (FirstChar == "-" && hasAtleastOneOperator(lastChar) == false && hasAtleastOneOperator(evrytingButFirstChar) == false){
    console.log('B4')
calcOutput.textContent += element.value; 
    
}
else if (FirstChar == '-' && hasAtleastOneOperator(evrytingButFirstChar) == true){
    console.log('B9')
    let fullEquation = calcOutput.textContent;
    let regex = /(-?\d+(\.\d+)?)|(\d+(\.\d+)?)/g;
    let IdentifyMultiNegs = fullEquation.split('-')
    let FindMatch = fullEquation.match(regex);
    const num1 = FindMatch[0]
    const num2 = FindMatch[1]
    CalculateAnswer(num1, num2)
}
else if (FirstChar == "-" && hasAtleastOneOperator(lastChar) == false){
    console.log('B8')
    calcOutput.textContent += element.value; 

}
else if (FirstChar == "-"){
    console.log('B20')
        CalculateAnswer();
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
    return;
}


allClearBtn.addEventListener('click', function (event){
    clearDisplay();
    event.stopPropagation();
})
// Clear Buton End
// Function Below Utlizies BackSpace

function backSpce () {
    calcOutput.textContent = calcOutput.textContent.slice(0, -1)
}
backspaceBtn.addEventListener('click', function(event){
    backSpce()
    event.stopPropagation();
})




divideBtn.addEventListener('click', function (event) {
    let lastChar = calcOutput.textContent.slice(-1);
    if (calcOutput.textContent === '' || hasAtleastOneOperator(lastChar) == true) {
        divideBtn.disabled= true;
        divideBtn.disabled= false;
        return;
       }
       else{
    displayOperator(divideBtn)
    event.stopPropagation();}
})

// Multiply
multiBtn.addEventListener('click', function (event) {
    let lastChar = calcOutput.textContent.slice(-1);
   if (calcOutput.textContent  === '' || hasAtleastOneOperator(lastChar) == true) {
    multiBtn.disabled= true;
    multiBtn.disabled= false;
   }
   else{
    displayOperator(multiBtn)
    event.stopPropagation();}
})
// Subtract
subtractBtn.addEventListener('click', function(event){
    let lastTwoChar = calcOutput.textContent.slice(-2);
if (calcOutput.textContent  == '') {
    subtractBtn.disabled= true;
    subtractBtn.disabled= false;
   }

   else if(hasAtleastOneOperator(lastTwoChar) == true){
    subtractBtn.disabled= true;
    subtractBtn.disabled= false;}
   else{
    displayOperator(subtractBtn);
    event.stopPropagation();}
})

// Add
addBtn.addEventListener('click', function (event){
    let lastChar = calcOutput.textContent.slice(-1);

if (calcOutput.textContent == '' || hasAtleastOneOperator(lastChar) == true) {
    addBtn.disabled= true;
    addBtn.disabled= false;
   }
   else{
    displayOperator(addBtn);
    event.stopPropagation();}
} )

// Equals
equalBtn.addEventListener('click', function(event){
    let lastChar = calcOutput.textContent.slice(-1);
    if (calcOutput.textContent == '0' || (hasAtleastOneOperator(calcOutput.textContent) !== true && hasAtleastOneOperator(lastChar) === false)) {
        equalBtn.disabled = true;
        equalBtn.disabled = false;
    } else {
        CalculateAnswer();
        event.stopPropagation();
    }})


//Adding Event Listeners for All Numeric Btns

numericButtons.forEach(btn => {
    
    btn.addEventListener('click', (event) => {
    if (calcOutput.textContent === "0"){
        
        backSpce();
        console.log('87')
    }
        updateDisplay(event);
        event.stopPropagation();
    });
});


function updateDisplay (event) {
    const outputText = calcOutput.textContent;
     let lastTwoChar = outputText.slice(-2);
    
    if (outputText.charAt(0) == '0' && event.currentTarget.value === '0'){
        return;
    }
if (hasOperator(lastTwoChar) == true){
    calcOutput.textContent += event.currentTarget.value; 
    return;

}
    else{
        calcOutput.textContent += event.currentTarget.value;  
        return;
    }

}

// Decimals
decimalBtn.addEventListener('click', function(event){
    decimalValidation()
    event.stopPropagation();
})

function displayNegativeInteger (element){
   let expression = calcOutput.textContent;
   let array = expression.split("-")
   if (array.length > 2){
    return
   }
    else {
        calcOutput.textContent += element.value
        return
    }

}


negativeBtn.addEventListener('click', function(event){
    console.log("Debug115 At Negative")
    displayNegativeInteger(negativeBtn);
    event.stopPropagation();
})



