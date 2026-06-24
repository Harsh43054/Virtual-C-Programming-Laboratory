let steps = [];
let currentStep = 0;
let stack = [];

// UI init
window.onload = () => {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
  updateDisplay();
};

function updateDisplay() {
  const box = document.getElementById("visualBox");
  box.innerHTML = "";

  stack.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.textContent = item;
    box.appendChild(div);
  });
}

function start() {
  const concept = document.getElementById("concept").value;
  steps = [];
  stack = [];

  if (concept === "function") {

    steps = [
      "Main() starts execution",
      "Function add(a,b) is called",
      "Parameters passed to function",
      "Function executes addition",
      "Return value sent back to Main()",
      "Output displayed"
    ];

    stack = ["Main()", "add()", "return", "output"];

  } 
  else if (concept === "recursion") {

    steps = [
      "Factorial(4) called",
      "Factorial(4) calls Factorial(3)",
      "Factorial(3) calls Factorial(2)",
      "Factorial(2) calls Factorial(1)",
      "Base case reached (n=1)",
      "Stack unwinding starts",
      "Final result returned"
    ];

    stack = ["f(4)", "f(3)", "f(2)", "f(1)", "base", "return"];

  } 
  else if (concept === "recursion_fib") {

    steps = [
      "Fibonacci(5) called",
      "Break into Fibonacci(4) + Fibonacci(3)",
      "Further breakdown continues",
      "Base cases reached (0,1)",
      "Values start returning",
      "Tree resolves into final result"
    ];

    stack = ["fib(5)", "fib(4)", "fib(3)", "fib(2)", "fib(1)"];

  } 
  else if (concept === "callstack") {

    steps = [
      "Main() pushed to stack",
      "Func A called → pushed",
      "Func B called → pushed",
      "Func B returns → popped",
      "Func A returns → popped",
      "Main() ends"
    ];

    stack = ["Main()", "A()", "B()", "return"];

  } 
  else if (concept === "modular") {

    steps = [
      "Program starts in Main()",
      "Module 1 executed",
      "Module 2 executed",
      "Module 3 executed",
      "All modules combined",
      "Final output generated"
    ];

    stack = ["Main()", "Module1", "Module2", "Module3"];

  } else {
    alert("Select a concept first");
    return;
  }

  currentStep = 0;

  document.getElementById("steps").innerHTML =
    steps.map((s, i) => `<pre id="step-${i}">${s}</pre>`).join("");

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;

  updateDisplay();
}

function nextStep() {
  if (currentStep >= steps.length) {
    alert("Simulation Completed");
    updateDisplay();
    return;
  }

  document.getElementById(`step-${currentStep}`)?.classList.add("active");
  currentStep++;

  if (currentStep >= steps.length) {
    document.querySelector(".next").disabled = true;
  }

  updateDisplay();
}

function resetSim() {
  steps = [];
  currentStep = 0;
  stack = [];

  document.getElementById("steps").innerHTML = "";

  document.querySelector(".start").disabled = false;
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;

  updateDisplay();
}