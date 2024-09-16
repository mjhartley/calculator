// constants

const display = document.querySelector(".display");
let workingStorage = "";
let workingStorage1 = "";
let workingStorage2 ="";
let subTotal = 0;
let num1 = "";
let num2 = "";
let wsAction = "";
let displayText = ""; 


//Add event listeners to buttons

const myNumButtons = document.querySelectorAll(".button");

myNumButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.innerText);
        console.log(e.target.dataset.action);
        console.log("wsAction: " + wsAction);

        // perhaps do with with a case statement

        if(e.target.dataset.action == "+"){

            if ((num1 !== "") && (num2 !== "") && (wsAction !== "")){
              //  calculate(num1, num2, wsAction); 
            }

            console.log("Setting WSAction to add");
            wsAction = "+";
            updateDisplay(workingStorage+ " " + wsAction)

            return;
        }

        if(e.target.dataset.action == "-"){
            
            if ((num1 !== "") && (num2 !== "") && (wsAction !== "")){
             //   calculate(num1, num2, wsAction); 
            }
            
            console.log("Setting WSAction to subtract");
            wsAction = "-";
            updateDisplay(workingStorage+ " " + wsAction)
            return;
        }

        if(e.target.dataset.action == "/"){
            
            if ((num1 !== "") && (num2 !== "") && (wsAction !== "")){
           //     calculate(num1, num2, wsAction); 
            }
            
            console.log("Setting WSAction to divide");
            wsAction = "/";
            updateDisplay(workingStorage+ " " + wsAction)
            return;
        }

        if(e.target.dataset.action == "*"){
            
            if ((num1 !== "") && (num2 !== "") && (wsAction !== "")){
         //       calculate(num1, num2, wsAction); 
            }
           
            console.log("Setting WSAction to multiply");
            wsAction = "*";
            updateDisplay(workingStorage+ " " + wsAction)
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

        if (wsAction == "" ){
            num1 = num1 + e.target.innerText;
            workingStorage = num1;
            console.log("Num 1 is " + workingStorage );
            updateDisplay(num1 + " " + wsAction);

        }

        if (wsAction !== ""){
            num2 = num2 + e.target.innerText;
      //      workingStorage = workingStorage + " " + " " + wsAction + " "  + num2;
            displayText = workingStorage + " " + wsAction + " " + num2;
            console.log("Num2 is " + num2 );
            updateDisplay(displayText);
        }


//        if ((num1 !== "") && (num2 !== "") && (wsAction !== "")){
//            calculate(num1, num2, wsAction); 
//      }

    });
});




function add(num1, num2){
    console.log("Adding : " + num1 + " and " + num2);
    return parseFloat(num1) + parseFloat(num2);
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

    updateDisplay(workingStorage);
    wsAction = "";
    num1 = workingStorage;
    num2 = "";

}

function clear (){
    num1 = "";
    num2 = "";
    wsAction = "";
    display.innerText = "0";
    workingStorage = "";
    displayText = "";

}

function updateDisplay(displayText){
    display.innerText = displayText;
}