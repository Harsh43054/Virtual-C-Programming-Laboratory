let steps = [];
let currentStep = 0;

window.onload = () => {
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
};

function start() {

    steps = [
        "Create Base Class: Animal",
        "Add Virtual Function: sound()",
        "Create Derived Class: Dog inherits Animal",
        "Dog overrides sound()",
        "Create Derived Class: Cat inherits Animal",
        "Cat overrides sound()",
        "Declare Base Class Pointer: Animal *ptr",
        "Assign ptr = new Dog()",
        "Call ptr->sound()",
        "Dog::sound() executes",
        "Assign ptr = new Cat()",
        "Call ptr->sound()",
        "Cat::sound() executes",
        "Runtime Polymorphism Demonstrated",
        "Simulation Completed Successfully"
    ];

    currentStep = 0;

    document.getElementById("steps").innerHTML =
        steps.map((s,i)=>`<pre id="step-${i}">${s}</pre>`).join("");

    document.getElementById("result").innerHTML =
        "<strong>Output :</strong> Click Next to execute step-by-step.";

    document.querySelector(".start").disabled = true;
    document.querySelector(".next").disabled = false;
    document.querySelector(".reset").disabled = false;
}

function nextStep(){

    if(currentStep >= steps.length){
        alert("Simulation Completed");
        return;
    }

    document.getElementById(`step-${currentStep-1}`)?.classList.remove("active");
    document.getElementById(`step-${currentStep}`)?.classList.add("active");

    let output = "";

    output += `
    <div style="text-align:center;">
        <div class="class-box ${currentStep>=0?'highlight':''}">
            Animal<br><small>Base Class</small>
        </div>
        <span class="arrow">↓</span>
        <div class="class-box ${currentStep>=2?'highlight':''}">
            Dog
        </div>
        <div class="class-box ${currentStep>=4?'highlight':''}">
            Cat
        </div>
    </div>
    <hr>
    `;

    output += `<b>Current Step:</b> ${steps[currentStep]}<br><br>`;

    if(currentStep >= 7)
        output += "<b>Pointer:</b> Animal *ptr → Dog Object<br>";

    if(currentStep >= 9)
        output += "<b>Output:</b> Dog says Woof!<br>";

    if(currentStep >= 10)
        output += "<br><b>Pointer Reassigned:</b> Animal *ptr → Cat Object<br>";

    if(currentStep >= 12)
        output += "<b>Output:</b> Cat says Meow!<br>";

    if(currentStep >= 13)
        output += `
        <hr>
        <b>Polymorphism:</b> Same function call (sound()) produces different outputs depending on the object.<br>
        <b>Inheritance:</b> Dog and Cat inherit properties of Animal.
        `;

    document.getElementById("result").innerHTML = output;

    currentStep++;

    if(currentStep >= steps.length)
        document.querySelector(".next").disabled = true;
}

function resetSim(){

    steps = [];
    currentStep = 0;

    document.getElementById("steps").innerHTML = "";

    document.getElementById("result").innerHTML =
        "<strong>Output :</strong> Click Start to begin the simulation.";

    document.querySelector(".start").disabled = false;
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
}