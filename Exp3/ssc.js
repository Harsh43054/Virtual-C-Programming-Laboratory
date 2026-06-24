let steps = [];
let currentStep = 0;

const concepts = {

array:[
"Array declared: int arr[5] = {10,20,30,40,50};",
"Array elements are stored in contiguous memory.",
"Traversal starts from index 0.",
"Each element is accessed one by one.",
"Array traversal completed."
],

search:[
"Searching for value 30.",
"Check arr[0] = 10.",
"Check arr[1] = 20.",
"Check arr[2] = 30.",
"Element found successfully at index 2."
],

update:[
"Array before update: [10,20,30,40,50]",
"Select index 2.",
"Replace 30 with 99.",
"Updated array: [10,20,99,40,50]",
"Array update completed."
],

string:[
'String = "HELLO"',
"Character H accessed.",
"Character E accessed.",
"Character L accessed.",
"String traversal completed."
],

concat:[
'String 1 = "Hello"',
'String 2 = "World"',
"Concatenation operation starts.",
'Result = "HelloWorld"',
"String concatenation completed."
]

};

window.onload = () => {
document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;
};

function highlight(concept){

["array","search","update","string","concat"]
.forEach(c=>{
document.getElementById("l-"+c)?.classList.remove("active");
});

document.getElementById("l-"+concept)
?.classList.add("active");
}

function start(){

const concept =
document.getElementById("concept").value;

if(!concept){
alert("Select a concept.");
return;
}

steps = concepts[concept];
currentStep = 0;

document.getElementById("steps").innerHTML =
steps.map((s,i)=>
`<pre id="step-${i}">${s}</pre>`
).join("");

highlight(concept);

document.querySelector(".start").disabled = true;
document.querySelector(".next").disabled = false;
document.querySelector(".reset").disabled = false;
}

function nextStep(){

if(currentStep >= steps.length){
alert("Simulation Completed.");
return;
}

document.getElementById(`step-${currentStep-1}`)
?.classList.remove("active");

document.getElementById(`step-${currentStep}`)
?.classList.add("active");

document.querySelectorAll(".cell")
.forEach(cell =>
cell.classList.remove("active")
);

if(currentStep <= 4){
document.getElementById("c"+Math.min(currentStep,4))
?.classList.add("active");
}

if(
document.getElementById("concept").value==="update"
&& currentStep===3
){
document.getElementById("c2").innerHTML="99";
}

currentStep++;

if(currentStep >= steps.length){
document.querySelector(".next").disabled = true;
}
}

function resetSim(){

steps = [];
currentStep = 0;

document.getElementById("concept").selectedIndex = 0;
document.getElementById("steps").innerHTML = "";

document.querySelectorAll(".layer")
.forEach(x=>x.classList.remove("active"));

document.querySelectorAll(".cell")
.forEach(x=>x.classList.remove("active"));

document.getElementById("c0").innerHTML="10";
document.getElementById("c1").innerHTML="20";
document.getElementById("c2").innerHTML="30";
document.getElementById("c3").innerHTML="40";
document.getElementById("c4").innerHTML="50";

document.querySelector(".start").disabled = false;
document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;
}