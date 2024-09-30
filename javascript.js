// constants

const display = document.querySelector(".display");
const myNumButtons = document.querySelectorAll(".button");
let wsSubTotal = "";
let num1 = "";
let num2 = "";
let wsAction = "";
let displayText = ""; 
let temp;
let result;


//Add event listeners to buttons

myNumButtons.forEach((button) => {
    button.addEventListener('click', function(e) {

        console.log("****** Values ******");
        console.log("Input: " + e.target.innerText);
        console.log("Input Action: " + e.target.dataset.action);
        console.log("wsAction: " + wsAction);
        console.log("DisplayText: " + displayText);


        // perhaps do with with a case statement
        
        if(e.target.dataset.action == "clear"){
            clear();
            return;
        }

        if(e.target.dataset.action == "equals"){

            if((wsSubTotal == "") || (num2 == "") || (wsAction == "")){
                //do nothing 
                return;
            } else {

            result = calculate(wsSubTotal, num2, wsAction);
            updateDisplay(result);
            num2 = "";
            num1 = "";
            wsSubTotal = result;     
            return;
            }
        }    

        // process action key press

        if (e.target.dataset.action !== undefined) {


                if((num2 == "") && (wsSubTotal !== "")){
                    // set action
                    
                    wsAction = e.target.dataset.action;
                    updateDisplay(wsSubTotal + " " + wsAction);

                } else {
                    // if we have num1 and num2 ans action, calculate subtotal
                    result = calculate(wsSubTotal, num2, wsAction);
                    updateDisplay(result);
                    num2 = "";
                    num1 = "";
                    wsSubTotal = result;  
                }  

            return;        
        }        

        // if not operation has been set, capture the first number and keep going until an action is required

        if (wsAction == ""){
            num1 = num1 + e.target.innerText;
            wsSubTotal = num1;
            console.log("Num is " + wsSubTotal );          
            updateDisplay(wsSubTotal);
        }

        // if an action has been requested, capture the second number 

        if (wsAction !== ""){
            num2 = num2 + e.target.innerText;
            console.log("Num2 is " + num2 );
            display.innerText = wsSubTotal + " " + wsAction + " " + num2;
        }
     });
});



function add(num1, num2){
    console.log("Adding : " + num1 + " and " + num2);
    workingStorage =  parseFloat(num1) + parseFloat(num2);
    return workingStorage;
}

function subtract(num1, num2){
    console.log("Subtracting : " + num1 + " and " + num2);
    return parseFloat(num1) - parseFloat(num2);
}

function divide(num1, num2){
    console.log("Dividing : " + num1 + " and " + num2);
    return parseFloat(num1) / parseFloat(num2);
}

function multiply(num1, num2){
    console.log("Multiplying : " + num1 + " and " + num2);
    return parseFloat(num1) * parseFloat(num2);
}

function calculate (calNum1, calNum2, operation){

    if(operation == "+"){
        workingStorage = add(calNum1, calNum2);
    }

    if(operation == "/"){
        workingStorage = divide(calNum1, calNum2);
    }

    if(operation == "-"){
        workingStorage = subtract(calNum1, calNum2);
    }

    if(operation == "*"){
        workingStorage = multiply(calNum1, calNum2);

    }

    wsAction = "";
    return workingStorage;

}

function clear (){
    num1 = "";
    num2 = "";
    workingStorage = "";
    wsSubTotal = "";
    wsAction = "";  
    displayText = "0";
    updateDisplay(displayText);

}

function updateDisplay(displayText){
    display.innerText = displayText;
}