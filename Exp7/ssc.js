let steps = [];
let currentStep = 0;

let value = 0;
let address = "";

window.onload = () => {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
};

function start() {

  value = parseInt(document.getElementById("varValue").value);

  if (isNaN(value)) {
    alert("Enter valid value");
    return;
  }

  address = "0x" + Math.floor(Math.random()*9000+1000).toString(16);

  steps = [
    "Declare integer variable x.",
    `Store value ${value} inside variable x.`,
    `Allocate memory address ${address} to x.`,
    "Create pointer ptr.",
    "Assign address of x using ptr = &x.",
    `Dereference pointer (*ptr) and access value ${value}.`,
    "Allocate dynamic memory using new operator.",
    `Store value ${value*2} in dynamically allocated memory.`,
    "Release allocated memory using delete operator.",
    "Simulation Completed."
  ];

  currentStep = 0;

  document.getElementById("steps").innerHTML =
    steps.map((s,i)=>`<pre id="step-${i}">${s}</pre>`).join("");

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;

  resetView();
}

function nextStep() {

  if(currentStep >= steps.length){
    alert("Simulation Completed");
    return;
  }

  document.getElementById(`step-${currentStep-1}`)?.classList.remove("active");
  document.getElementById(`step-${currentStep}`)?.classList.add("active");

  const varBox = document.getElementById("varBox");
  const ptrBox = document.getElementById("ptrBox");
  const dynBox = document.getElementById("dynBox");

  if(currentStep <= 2){

    varBox.classList.add("active");
    varBox.innerHTML = `
      <h3>Variable x</h3>
      <p>Value : ${value}</p>
      <p>${address}</p>
    `;
  }

  if(currentStep >=3 && currentStep <=5){

    ptrBox.classList.add("active");

    ptrBox.innerHTML = `
      <h3>Pointer ptr</h3>
      <p>${address}</p>
      <p>*ptr = ${value}</p>
    `;
  }

  if(currentStep >=6 && currentStep <=7){

    dynBox.classList.add("active");

    dynBox.innerHTML = `
      <h3>Dynamic Memory</h3>
      <p>${value*2}</p>
      <p>Allocated by new</p>
    `;
  }

  if(currentStep === 8){

    dynBox.innerHTML = `
      <h3>Dynamic Memory</h3>
      <p>Released</p>
      <p>delete used</p>
    `;
  }

  currentStep++;

  if(currentStep >= steps.length){
    document.querySelector(".next").disabled = true;
  }
}

function resetView(){

  document.getElementById("varBox").innerHTML =
  `<h3>Variable x</h3><p>Not Created</p>`;

  document.getElementById("ptrBox").innerHTML =
  `<h3>Pointer ptr</h3><p>NULL</p>`;

  document.getElementById("dynBox").innerHTML =
  `<h3>Dynamic Memory</h3><p>Not Allocated</p>`;

  document.getElementById("varBox").classList.remove("active");
  document.getElementById("ptrBox").classList.remove("active");
  document.getElementById("dynBox").classList.remove("active");
}

function resetSim(){

  steps = [];
  currentStep = 0;

  document.getElementById("steps").innerHTML = "";

  resetView();

  document.querySelector(".start").disabled = false;
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
}