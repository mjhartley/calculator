// constants

const display = document.querySelector(".display");
let workingStorage = null;



//Add event listeners to buttons

const myNumButtons = document.querySelectorAll(".button");

myNumButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.innerText);
        if (workingStorage === null){
            workingStorage = e.target.innerText;
        } else {
            workingStorage = add(workingStorage, e.target.innerText)
        }
        display.innerText = workingStorage;
    });
});




function add(num1, num2){
    console.log("Adding :" + num1 + "and " + num2);
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2
}
