// Creating Functions for Calc

const add = function (num,newNum) {
    // num is the pressed number// newNum is the number pressed after applying 'the operator"
    const totalNum = num + newNum
    return  totalNum
    
}

const subtract = function (num,newNum){
    return num - newNum
}

const multiply = function (num,newNum){
    return num * newNum
}

const divide = function (num,newNum){
    return num * newNum
}

// Functions End Here

let operator = ['+','-','/','*']
let num 
let newNum

function operate (operator,num,newNum) {
    if (operator === 'add'){
        add(num,newNum)
        
        sum = num + newNum
        return sum
    }

    else {
        console.log('try-again')
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

function calculate (){
    let sum = null
    calcInput.textContent = calcOutput.textContent
    calcOutput.textContent = "555"

}

function displayOperator(element){
    if (element.value === '/' && calcOutput.textContent === '' || calcOutput.textContent.includes(element.value) ) {
        
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
    calcOutput.textContent = calcInput.textContent.slice(0, -1)

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

    displayOperator(equalBtn)


    calculate ()
})


//Adding Event Listeners for All Numeric Btns

numericButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        updateDisplay(event);
    });
});


function updateDisplay (event) {
    calcOutput.textContent += event.currentTarget.value;
}

// Decimals
decimalBtn.addEventListener('click', function() {
    if (calcOutput.textContent.includes('.') || calcOutput.textContent === null) {
        return
    } else {
        displayOperator(decimalBtn)
    }
});


