let steps = [], currentStep = 0;

const concepts = {

datatype: {
title:"Data Types",
steps:[
"Data types define the type of data stored in memory.",
"int is used for integer values.",
"float is used for decimal values.",
"char stores a single character.",
"Different data types require different memory sizes."
]
},

variable: {
title:"Variable Declaration",
steps:[
"Variables are used to store data.",
"A variable must be declared before use.",
"Example: int age;",
"Memory is allocated for the variable.",
"Values can now be stored and modified."
]
},

input: {
title:"Input using cin",
steps:[
"cin is used to accept input from the user.",
"The >> operator sends data into a variable.",
"Example: cin >> age;",
"The entered value is stored in memory.",
"Input operation completed successfully."
]
},

output: {
title:"Output using cout",
steps:[
"cout is used to display output.",
"The << operator sends data to the screen.",
"Example: cout << age;",
"The stored value is fetched from memory.",
"Output is displayed on the console."
]
},

execution: {
title:"Program Execution",
steps:[
"Program execution begins from main().",
"Variables are declared and memory is allocated.",
"Input values are accepted using cin.",
"Processing is performed by statements.",
"Results are displayed using cout and program ends."
]
}

};

window.onload = () => {
document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;
};

function highlight(concept){

["datatype","variable","input","output","execution"]
.forEach(c => {
const el = document.getElementById("l-"+c);
if(el) el.classList.remove("active");
});

if(concept){
document.getElementById("l-"+concept)
?.classList.add("active");
}
}

function updateProgress(){

const progress =
((currentStep)/steps.length)*100;

const bar =
document.getElementById("progressBar");

if(bar)
bar.style.width =
progress + "%";
}

function start(){

const c =
document.getElementById("component").value;

if(!c){
alert("Select a concept.");
return;
}

const concept =
concepts[c];

steps = concept.steps;

currentStep = 0;

document.getElementById("steps").innerHTML =
steps.map((s,i)=>
`<pre id="step-${i}">${s}</pre>`
).join("");

highlight(c);

document.getElementById("infoBox").innerHTML =
"<strong>"+concept.title+"</strong><br>Click Next to explore step-by-step.";

document.querySelector(".start").disabled = true;
document.querySelector(".next").disabled = false;
document.querySelector(".reset").disabled = false;

document.getElementById("badgeArea").innerHTML = "";
document.getElementById("quizArea").innerHTML = "";

updateProgress();
}

function nextStep(){

if(currentStep >= steps.length){
alert("Simulation Completed.");
return;
}

document.getElementById(
`step-${currentStep-1}`
)?.classList.remove("active");

document.getElementById(
`step-${currentStep}`
).classList.add("active");

currentStep++;

updateProgress();

if(currentStep >= steps.length){

document.querySelector(".next").disabled = true;

document.getElementById("badgeArea").innerHTML =
"🏆 Concept Mastered Successfully";

document.getElementById("quizArea").innerHTML = `
<hr>
<h4>Quick Check</h4>

<p>Which operator is used with cout?</p>

<button onclick="checkQuiz(true)"><<</button>
<button onclick="checkQuiz(false)">>></button>

<div id="quizResult" style="margin-top:10px;"></div>
`;
}
}

function checkQuiz(correct){

document.getElementById("quizResult").innerHTML =
correct
? "✅ Correct Answer!"
: "❌ Incorrect. Correct answer is <<";
}

function resetSim(){

steps = [];
currentStep = 0;

document.getElementById("component").selectedIndex = 0;

document.getElementById("steps").innerHTML = "";

document.getElementById("infoBox").innerHTML =
"Select a concept and click Start.";

document.getElementById("badgeArea").innerHTML = "";
document.getElementById("quizArea").innerHTML = "";

const bar =
document.getElementById("progressBar");

if(bar)
bar.style.width = "0%";

highlight(null);

document.querySelector(".start").disabled = false;
document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;
}