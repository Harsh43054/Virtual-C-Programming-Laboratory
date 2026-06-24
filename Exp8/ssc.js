let steps = [], currentStep = 0;

window.onload = () => {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
};

function start() {

  steps = [
    "Step 1: Define class Student.",
    "Step 2: Add data members: name and rollNo.",
    "Step 3: Add member function display().",
    "Step 4: Create object s1 of class Student.",
    "Step 5: Assign values: name='Rahul', rollNo=101.",
    "Step 6: Call s1.display().",
    "Step 7: Output displayed successfully.",
    "Simulation Completed."
  ];

  currentStep = 0;

  document.getElementById("steps").innerHTML =
    steps.map((s,i)=>`<pre id="step-${i}">${s}</pre>`).join("");

  document.getElementById("result").innerHTML =
    `
    <h3>Class Structure</h3>
    <pre>
class Student {
public:
    string name;
    int rollNo;

    void display();
};
    </pre>
    `;

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;
}

function nextStep() {

  if(currentStep >= steps.length){
    alert("Simulation Completed");
    return;
  }

  document.getElementById(`step-${currentStep-1}`)?.classList.remove("active");
  document.getElementById(`step-${currentStep}`)?.classList.add("active");

  let output = `
    <h3>Class Structure</h3>
    <pre>
class Student {
public:
    string name;
    int rollNo;

    void display();
};
    </pre>
  `;

  if(currentStep >= 3){
    output += `
    <h3>Object Created</h3>
    <pre>Student s1;</pre>
    `;
  }

  if(currentStep >= 4){
    output += `
    <h3>Object Data</h3>
    <pre>
s1.name = "Rahul";
s1.rollNo = 101;
    </pre>
    `;
  }

  if(currentStep >= 6){
    output += `
    <h3>Output</h3>
    <pre>
Name : Rahul
Roll No : 101
    </pre>
    `;
  }

  document.getElementById("result").innerHTML = output;

  currentStep++;

  if(currentStep >= steps.length){
    document.querySelector(".next").disabled = true;
  }
}

function resetSim() {

  steps = [];
  currentStep = 0;

  document.getElementById("steps").innerHTML = "";
  document.getElementById("result").innerHTML =
    "<strong>Output :</strong> Click Start to begin simulation.";

  document.querySelector(".start").disabled = false;
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
}