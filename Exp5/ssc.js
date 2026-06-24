let arr = [];
let steps = [];
let currentStep = 0;

window.onload = () => {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
};

function renderArray(highlight = -1) {
  let html = '<div class="array-container">';

  arr.forEach((value, index) => {
    html += `
      <div>
        <div class="box ${index === highlight ? 'active' : ''}">
          ${value}
        </div>
        <div class="index">${index}</div>
      </div>
    `;
  });

  html += '</div>';
  document.getElementById("result").innerHTML = html;
}

function start() {

  const input = document.getElementById("arrayInput").value;

  if (!input) {
    alert("Enter array elements");
    return;
  }

  arr = input.split(",").map(Number);

  const operation = document.getElementById("operation").value;
  steps = [];

  if (operation === "traverse") {

    arr.forEach((val, i) => {
      steps.push(`Accessing arr[${i}] = ${val}`);
    });

  }

  else if (operation === "search") {

    const key = parseInt(document.getElementById("searchKey").value);

    if (isNaN(key)) {
      alert("Enter search element");
      return;
    }

    for (let i = 0; i < arr.length; i++) {

      steps.push(`Compare ${key} with arr[${i}] = ${arr[i]}`);

      if (arr[i] === key) {
        steps.push(`Element Found at Index ${i}`);
        break;
      }

      if (i === arr.length - 1) {
        steps.push("Element Not Found");
      }
    }
  }

  else {
    alert("Select an operation");
    return;
  }

  currentStep = 0;

  document.getElementById("steps").innerHTML =
    steps.map((s, i) =>
      `<pre id="step-${i}">${s}</pre>`
    ).join("");

  renderArray();

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;
}

function nextStep() {

  if (currentStep >= steps.length) {
    alert("Simulation Completed");
    return;
  }

  document.getElementById(`step-${currentStep - 1}`)?.classList.remove("active");

  document.getElementById(`step-${currentStep}`)?.classList.add("active");

  renderArray(currentStep);

  currentStep++;

  if (currentStep >= steps.length) {
    document.querySelector(".next").disabled = true;
  }
}

function resetSim() {

  arr = [];
  steps = [];
  currentStep = 0;

  document.getElementById("arrayInput").value = "";
  document.getElementById("searchKey").value = "";
  document.getElementById("operation").selectedIndex = 0;

  document.getElementById("steps").innerHTML = "";
  document.getElementById("result").innerHTML =
    "<strong>Output :</strong> Enter array and start simulation.";

  document.querySelector(".start").disabled = false;
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
}