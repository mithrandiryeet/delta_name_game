/* //demo of js and jQ functions

//todo: define a f/n, invoke (or call) a f/n 

//most simple named f/n
function simpleNamedFunctionNoParameters () {} 
//params = arguments

//anonymous f/n 
console.log(function (){}) //has no name. IIFE 

//f/n w/params or args. 
function analyzeText (inputText) {
    //creating a param in f/n kinda same as saying let varName = something. 
    //f/n signature = name + parmams that go in
    //params are variables you use INSIDE the f/n, can't see them outside.  

    //void f/n = returns no value. 
    console.log(inputText);

    //let's make it not void by giving a return value
    // return "cooooo090000000ool";     // example of hardcoded return value 

    //instead, return something that "processed" from our function
    //let textLength = inputText.length; 

    let analysisResults = ''; //empty it out. 

    // analysisResults += 'Your text string of ' + inputText + ' is ' + getStringLength(inputText) + ' characters long.'; 

    // analysisResults += "here are some more results too <br>"
    
    analysisResults += "cat length = " + getStringLength("cat")
 


    return analysisResults; 
    
} 

function getStringLength(inputString) {

    let stringLength = inputString.length; 
    return stringLength; 
}

let userText = "_ is the string to analyze."

//invoke or call f/n
let analyzeResult = analyzeText(userText);

console.log("result is...:", analyzeResult) */