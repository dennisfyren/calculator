let displayValue = '';
let currentCalc = 0;
let calcOutput = [];
calcOutput[0] = '';
let output = 0;
const nums = [];
nums[0] = '';
nums[1] = '';

function btnDetect (buttonClick) {
    if (calcOutput[9] === 1){ //Checks if calculations should be removed or not.
        clear()
    }
    calcOutput[9] = 0; //Reset flag after first input.
    nums[0] = nums[0] + buttonClick; 
    displayValue = nums[0];
    document.querySelector("#result").textContent = displayValue;
    document.querySelector('#input').textContent = nums[1] + ' ' + calcOutput[0];
};

function addComma(){
    if (calcOutput[9] === 1){ //Checks if calculations should be removed or not.
        clear()
    }
    calcOutput[9] = 0; //Reset flag after first input.
    if (nums[0] === '') {
        nums[0] = 0;
    }
    nums[0] = nums[0] + '.';
    displayValue = nums[0];
    document.querySelector("#result").textContent = displayValue;
    document.querySelector('#input').textContent = nums[1] + ' ' + calcOutput[0];
}

const btnC = document.querySelector("#btn14");
btnC.addEventListener("click", () => {
    document.querySelector("#result").textContent = '';
    document.querySelector("#input").textContent = '';
    displayValue = '';
    nums[0] = '';
    nums[1] = '';
    calcOutput[0] = '';
    currentCalc = 0;
});

const btnCe = document.querySelector("#btn15")
btnCe.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    nums[0] = nums[0].slice(0, -1);
    document.querySelector("#result").textContent = displayValue;
});

function add(){
    if (currentCalc !== 0) {
        operate();
    }
    currentCalc = 1;
    calcOutput[0] = ' +'
    displayValue = nums[0] + ' +'
    document.querySelector("#result").textContent = displayValue;
    nums[1] = nums[0];
    nums[0] = '';
    calcOutput[9] = 0; //Prevent calculations to disappear after operator call.
};

function subtract() {
    if (currentCalc !== 0) {
        operate();
    }
    currentCalc = 2;
    calcOutput[0] = ' -'
    displayValue = nums[0] + ' -'
    document.querySelector("#result").textContent = displayValue;
    nums[1] = nums[0];
    nums[0] = '';
    calcOutput[9] = 0; //Prevent calculations to disappear after operator call.
};

function multiply() {
    if (currentCalc !== 0) {
        operate();
    }
    currentCalc = 3;
    calcOutput[0] = ' *'
    displayValue = nums[0] + ' *'
    document.querySelector("#result").textContent = displayValue;
    nums[1] = nums[0];
    nums[0] = '';
    calcOutput[9] = 0; //Prevent calculations to disappear after operator call.
};

function divide() {
    if (currentCalc !== 0) {
        operate();
    }
    currentCalc = 4;
    calcOutput[0] = ' /'
    displayValue = nums[0] + ' /'
    document.querySelector("#result").textContent = displayValue;
    nums[1] = nums[0];
    nums[0] = '';
    calcOutput[9] = 0; //Prevent calculations to disappear after operator call.
};

function operate() {
    let result;
    if (currentCalc === 1){
        result = Math.round(nums.map(Number).reduce((a, b) => (a + b)) * 100) / 100; 
    } else if (currentCalc === 2){
        result = Math.round(nums.map(Number).reduce((a, b) => (b - a)) * 100) / 100; 
    } else if (currentCalc === 3){
        result = Math.round(nums.map(Number).reduce((a, b) => (b * a)) * 100) / 100; 
    } else if (currentCalc === 4){
        result = Math.round(nums.map(Number).reduce((a, b) => (b / a)) * 100) / 100; 
    }
    document.querySelector("#result").textContent = result;
    nums[0] = result;
    calcOutput[0] = 0;
    currentCalc = 0;
    calcOutput[9] = 1; //Flags calculations to clear if the next input is a number and not a operator.
    document.querySelector("#input").textContent = '';
};

function clear() {
    document.querySelector("#result").textContent = '';
    nums[0] = '';
    nums[1] = '';
    calcOutput[0] = '';
};