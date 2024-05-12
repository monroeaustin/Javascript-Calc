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

let operator
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


// Functions Created For Buttons Below

// Buttons Below Clears Input
function clearDisplay (){
    calcInput.innerHTML = ""
    calcOutput.innerHTML= ''

}


allClearBtn.addEventListener('click', function (){
    clearDisplay()
})
// Clear Buton End

//Adding Event Listeners for All Numeric Btns

numericButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        updateDisplay(event);
    });
});


function updateDisplay (event) {
calcInput.textContent += event.currentTarget.value;
}


