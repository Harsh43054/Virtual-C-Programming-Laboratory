let steps = [];
let currentStep = 0;
let resultValue = "";

window.onload = () => {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
};

function start() {

  const str = document.getElementById("inputString").value.trim();
  const op = document.getElementById("operation").value;

  if (!str) {
    alert("Please enter a string.");
    return;
  }

  if (!op) {
    alert("Please select an operation.");
    return;
  }

  steps = [];
  currentStep = 0;

  steps.push(`Input String: "${str}"`);

  switch(op) {

    case "length":
      steps.push("Using string.length() to find total characters.");
      resultValue = str.length;
      break;

    case "uppercase":
      steps.push("Converting all characters to uppercase.");
      resultValue = str.toUpperCase();
      break;

    case "lowercase":
      steps.push("Converting all characters to lowercase.");
      resultValue = str.toLowerCase();
      break;

    case "reverse":
      steps.push("Traversing string from end to beginning.");
      resultValue = str.split("").reverse().join("");
      break;

    case "concat":
      steps.push('Appending "_CPP" to the original string.');
      resultValue = str + "_CPP";
      break;
  }

  steps.push(`Final Result: ${resultValue}`);

  document.getElementById("steps").innerHTML =
    steps.map((s,i)=>`<pre id="step-${i}">${s}</pre>`).join("");

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;

  document.getElementById("result").innerHTML =
    "<strong>Output :</strong> Click Next to execute.";
}

function nextStep() {

  if(currentStep >= steps.length){
    alert("Simulation Completed.");
    return;
  }

  document.getElementById(`step-${currentStep-1}`)?.classList.remove("active");

  document.getElementById(`step-${currentStep}`)?.classList.add("active");

  if(currentStep === steps.length-1){
    document.getElementById("result").innerHTML =
      `<strong>Output :</strong><br><h3>${resultValue}</h3>`;
  }

  currentStep++;

  if(currentStep >= steps.length){
    document.querySelector(".next").disabled = true;
  }
}

function resetSim() {

  steps = [];
  currentStep = 0;
  resultValue = "";

  document.getElementById("inputString").value = "";
  document.getElementById("operation").selectedIndex = 0;
  document.getElementById("steps").innerHTML = "";

  document.getElementById("result").innerHTML =
    "<strong>Output :</strong> Enter a string and click Start.";

  document.querySelector(".start").disabled = false;
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
}