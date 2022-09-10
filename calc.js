// declares needed global variables
var numObject = {numOne: [], numTwo: []};
var stringNumObject = {numOne: [], numTwo: [],  numOperator: []};
var finalNumObject = {numOne: [], numTwo: [],  numOperator: []};
let operatorSwitch = 0;
let decimalSwitch = 0;
let numNew = document.getElementById("numNew");
let numOld = document.getElementById("numOld");

// calculator functions
function add(numOne, numTwo){
    return numOne + numTwo;
}

function subtract(numOne, numTwo){
    return numOne - numTwo;
}

function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function divide(numOne, numTwo){
    return numOne/numTwo;
}

// calculates and submits end result
function calculate(){
    let finalResult = 0;
    numOne = finalNumObject.numOne;
    numTwo = finalNumObject.numTwo;
    operation = finalNumObject.numOperator;
    numNew.replaceChildren();
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
    finalNumObject.numOperator = [];
    finalNumObject.numTwo = [];
    stringNumObject.numOne = [finalResult];
    stringNumObject.numOperator = [];
    stringNumObject.numTwo = [];
    numObject.numOne = [finalResult];
    numObject.numTwo = [];
    console.log(operatorSwitch)
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
        numObject.numOne = []
        numObject.numTwo = []
        numObject.numOperator = []
        finalNumObject.numOne = []
        finalNumObject.numTwo = []
        finalNumObject.numOperator = []
        numNew.innerText = "";
        numOld.innerText = "";
        operatorSwitch = 0;
        decimalSwitch = 0;
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
    }
    else if(decimalSwitch != 0 && e.target.id == 'decimal'){

    }
    else if(e.target.classList.contains('operator')){
        finalNumObject.numOperator = e.target.getAttribute("data-operator");
        operatorSwitch += 1;
        decimalSwitch = 0;
    }
    else if(e.target.id == 'equal'){
        numNewToOld = numNew.innerText;
        numNew.innerText = "";
        calculate();
    }
    switch(operatorSwitch){
        case 0:
            let placeholder1 = e.target.getAttribute("data-number");
            if(!placeholder1){placeholder1 = ""}
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
            numNewToOld = numNew.innerText;
            numNew.innerText = "";
            numOld.innerText = numNewToOld + " " + finalNumObject.numOperator;
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