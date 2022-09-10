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

var numObject = {numOne: [], numTwo: [],  numOperator: []};
var finalNumObject = {numOne: [], numTwo: [],  numOperator: []};

//hover effect

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
// calculation getter
    numContainers[i].addEventListener('click', (e) => {
    let mommy = e.target.getAttribute("data-number");
    numObject.numOne.push(mommy);

    if(!mommy){
        numObject.numOne.pop();
        mommy = e.target.getAttribute("data-operator");
        numObject.numOperator.push(mommy);
    }
    showNumOne(e);
    })
 }
 

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
    })
 }
 
function showNumOne(e){
    let numOne = "";
    for(i = 0; i < numObject.numOne.length; i++){
        numOne += numObject.numOne[i]
    }
    finalNumObject.numOne = parseInt(numOne);
    console.log(finalNumObject.numOne)
    document.getElementById("numNew").innerText = finalNumObject.numOne;
}