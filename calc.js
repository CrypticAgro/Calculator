// declares needed global variables
var numObject = {numOne: [], numTwo: []};
var stringNumObject = {numOne: [], numTwo: [],  numOperator: ""};
var finalNumObject = {numOne: [], numTwo: [],  numOperator: ""};
let operatorSwitch = 0;
let operatorCounter = 0;
let decimalSwitch = 0;
let numNew = document.getElementById("numNew");
let numOld = document.getElementById("numOld");
let equalIncrementor = 0;
let decimal = document.getElementById("decimal");
// calculator functions
function add(numOne, numTwo){
    let numThree = numOne + numTwo;
    let endResult = parseFloat(numThree.toFixed(3))
    return endResult;
}

function subtract(numOne, numTwo){
    let numThree = numOne - numTwo;
    let endResult = parseFloat(numThree.toFixed(3))
    return endResult;
}

function multiply(numOne, numTwo){
    let numThree = numOne * numTwo;
    let endResult = parseFloat(numThree.toFixed(3))
    return endResult;
}

function divide(numOne, numTwo){
    let numThree = numOne/numTwo;
    let endResult = parseFloat(numThree.toFixed(3))
    return endResult;
}

// calculates and submits end result
function calculate(){
    console.log(finalNumObject)
    let finalResult = 0;
    numOne = finalNumObject.numOne;
    numTwo = finalNumObject.numTwo;
    operation = finalNumObject.numOperator;
    switch(operation){
        case "+":
            finalResult = add(numOne, numTwo);
            break;
        case "-":
            finalResult = subtract(numOne, numTwo);
            break;
        case "/":
            finalResult= divide(numOne, numTwo);
            break;
        case "*":
            finalResult = multiply(numOne, numTwo);
            break;
    }
    numNew.innerText = finalResult;
    numOld.innerText = finalNumObject.numOne + " " + finalNumObject.numOperator + " " + finalNumObject.numTwo;
    finalNumObject.numOne = [finalResult];
    finalNumObject.numOperator = "";
    finalNumObject.numTwo = [];
    stringNumObject.numOne = [finalResult];
    stringNumObject.numOperator = "";
    stringNumObject.numTwo = [];
    numObject.numOne = [finalResult];
    numObject.numTwo = [];
    operatorSwitch = 0;
    equalIncrementor++;
    decimal.addEventListener("click", calculationGrabber);
    operatorCounter = 0;
    console.log(finalNumObject)
}


 //hover effect and gives to calculationGetter function

const numContainers = document.getElementsByClassName("num")
for (var i = 0 ; i < numContainers.length; i++) {
    numContainers[i].addEventListener('mouseenter' , (e) => { 
        e.target.style = ' background-color: gray;';
        e.stopPropagation();
    });
    numContainers[i].addEventListener('mouseleave' , (e) => {
        e.target.style = ' background-color: white;';
        e.stopPropagation();
    }); 
    numContainers[i].addEventListener('click', calculationGrabber)
 }

 //hover effect and gives to calculationgetter function
 const operatorContainers = document.getElementsByClassName("operator")
 for (var i = 0 ; i < operatorContainers.length; i++) {
    operatorContainers[i].addEventListener('mouseenter' , (e) => { 
         e.target.style = ' background-color: gray;';
         e.stopPropagation();
     });
     operatorContainers[i].addEventListener('mouseleave' , (e) => {
         e.target.style = ' background-color: white;';
         e.stopPropagation();
     }); 
    operatorContainers[i].addEventListener('click', calculationGrabber)
  }

  // hover and resets numbers
const cdContainers = document.getElementsByClassName("cd")
for (var i = 0 ; i < cdContainers.length; i++) {
    cdContainers[i].addEventListener('mouseenter' , (e) => { 
        e.target.style = ' background-color: gray;';
        e.stopPropagation();
    });
    cdContainers[i].addEventListener('mouseleave' , (e) => {
        e.target.style = ' background-color: white;';
        e.stopPropagation();
    }); 
    cdContainers[i].addEventListener('click',() => {
        numObject = {numOne: [], numTwo: []};
        stringNumObject = {numOne: [], numTwo: [],  numOperator: ""};
        finalNumObject = {numOne: [], numTwo: [],  numOperator: ""};
        numNew.innerText = "";
        numOld.innerText = "";
        operatorSwitch = 0;
        decimalSwitch = 0;
        operatorCounter = 0;
        equalIncrementor = 0;
        decimal.addEventListener("click", calculationGrabber);

    })
 }

// appends numbers to numObject.numOne
function showNumOne(e){
    let numOne = "";
    for(i = 0; i < numObject.numOne.length; i++){
        numOne += numObject.numOne[i]
    }
    stringNumObject.numOne = numOne;
    finalNumObject.numOne = parseInt(numOne);
    numNew.innerText = stringNumObject.numOne;
}

function showNumOneDecimal(e){
    let numOne = "";
    for(i = 0; i < numObject.numOne.length; i++){
        numOne += numObject.numOne[i]
    }
    stringNumObject.numOne = numOne;
    finalNumObject.numOne = parseFloat(numOne);
    numNew.innerText = stringNumObject.numOne;
}

// appends numbers to numObject.numTwo

function showNumTwo(e){
    let numTwo = "";
    for(i = 0; i < numObject.numTwo.length; i++){
        numTwo += numObject.numTwo[i]
    }
    stringNumObject.numTwo = numTwo;
    finalNumObject.numTwo = parseInt(numTwo);
    numNew.innerText = stringNumObject.numTwo;
}

function showNumTwoDecimal(e){
    let numTwo = "";
    for(i = 0; i < numObject.numTwo.length; i++){
        numTwo += numObject.numTwo[i]
    }
    stringNumObject.numTwo = numTwo;
    finalNumObject.numTwo = parseFloat(numTwo);
    numNew.innerText = stringNumObject.numTwo;
}

// Gathers the numbers and stores them in an object to submit to calculate function

function calculationGrabber(e){
    if(e.target.id == 'decimal'){
        decimalSwitch += 1;
        decimal.removeEventListener("click", calculationGrabber);
    }

    else if(operatorCounter != 0 && e.target.classList.contains('operator') && finalNumObject.numTwo != []){
        if(equalIncrementor != 0){
            let holdThisPls = finalNumObject.numOne[0];
            finalNumObject.numOne = holdThisPls;
        }
        holdThisPls = e.target.getAttribute("data-operator");
        calculate();
        finalNumObject.numOperator = holdThisPls;
        operatorSwitch += 1;
        decimalSwitch = 0;
        numNewToOld = numNew.innerText;
        numOld.innerText = numNewToOld + " " + finalNumObject.numOperator;
        decimal.addEventListener("click", calculationGrabber);
        operatorCounter++;
        console.log(operatorCounter);
    }

    else if(e.target.classList.contains('operator')){
        finalNumObject.numOperator = e.target.getAttribute("data-operator");
        operatorSwitch += 1;
        decimalSwitch = 0;
        numNewToOld = numNew.innerText;
        numNew.innerText = "";
        numOld.innerText = numNewToOld + " " + finalNumObject.numOperator;
        decimal.addEventListener("click", calculationGrabber);
        operatorCounter++;
        console.log(operatorCounter);
    }

    else if(e.target.id == 'equal'){
        calculate();
    }
    switch(operatorSwitch){
        case 0:
            let placeholder1 = e.target.getAttribute("data-number");
            if(!placeholder1){
            placeholder1 = ""
            }
            else{
            numObject.numOne.push(placeholder1);
            
            switch(decimalSwitch){
                case 1:
                    showNumOneDecimal(e);
                    break;
                default:
                    showNumOne(e);
                    break;
            }
            }
        break;
        case 1:
            let placeholder2 = e.target.getAttribute("data-number");
            if(!placeholder2)
            {placeholder2 = ""}
            else{
            numObject.numTwo.push(placeholder2);
            
            switch(decimalSwitch){
                case 1:
                    showNumTwoDecimal(e);
                    break;
                default:
                    showNumTwo(e);
                    break;
            }
            }
        break;

    }

    }