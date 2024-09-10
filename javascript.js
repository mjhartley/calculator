// constants

const display = document.querySelector(".display");
let workingStorage = 0;
let num1 = "";
let num2 = "";
let wsAction;


//Add event listeners to buttons

const myNumButtons = document.querySelectorAll(".button");

myNumButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.innerText);
        console.log(e.target.dataset.action);
        console.log("wsAction: " + wsAction);

        // perhaps do with with a case statement

        if(e.target.dataset.action == "add"){
            console.log("Setting WSAction to add");
            wsAction = "add";
            return;
        }

        if(e.target.dataset.action == "subtract"){
            wsAction = "subtract";
            return;
        }

        if(e.target.dataset.action == "divide"){
            wsAction = "divide";
            return;
        }

        if(e.target.dataset.action == "multiply"){
            wsAction = "multiply";
            return;
        }

        if(e.target.dataset.action == "clear"){
            clear();
            return;
        }


        if(e.target.dataset.action == "equals"){
            calculate(num1, num2, wsAction);
            return;
        }

        // store the input for num1 while action is undefined 

        if (wsAction == undefined ){
            num1 = num1 + e.target.innerText;
            console.log("Num 1 is " + num1 );

        }

        if (wsAction !== undefined){
            num2 = num2 + e.target.innerText;
            console.log("Num 2 is " + num2 );
        }




    });
});




function add(num1, num2){
    console.log("Adding :" + num1 + "and " + num2);
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    console.log("Subtracting :" + num1 + "and " + num2);
    return num1 - num2;
}

function divide(num1, num2){
    console.log("Dividing :" + num1 + "and " + num2);
    return num1 / num2;
}

function multiply(num1, num2){
    console.log("Multiplying :" + num1 + "and " + num2);
    return num1 * num2
}

function calculate (num1, num2, operation){
    if(operation == "add"){
        display.innerText = add(num1, num2);
    }

    if(operation == "divide"){
        display.innerText = divide(num1, num2);
    }

    if(operation == "divide"){
        display.innerText = divide(num1, num2);
    }
}

function clear (){
    num1 = "";
    num2 = "";
    wsAction = "";
    display.innerText = "0";
}

