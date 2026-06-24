let steps = [], currentStep = 0;

const info = {

  header: [
    "Header files contain declarations for standard library functions.",
    "#include <iostream> enables input and output operations.",
    "iostream provides cin and cout objects.",
    "The preprocessor includes this file before compilation.",
    "It is one of the most commonly used C++ headers."
  ],

  namespace: [
    "Namespaces help organize code and avoid naming conflicts.",
    "The standard library is contained inside namespace std.",
    "using namespace std; avoids writing std:: repeatedly.",
    "It simplifies access to cout, cin, endl, etc.",
    "Namespaces improve code readability."
  ],

  main: [
    "Every C++ program starts execution from main().",
    "The operating system calls main() when the program starts.",
    "Executable statements are placed inside this function.",
    "Control remains inside main() until completion.",
    "main() returns a value to the operating system."
  ],

  output: [
    "cout is the standard output stream object.",
    "It is used to display information on the screen.",
    "The insertion operator << sends data to cout.",
    "cout can print text, numbers, and variables.",
    "Output appears on the console window."
  ],

  return: [
    "return 0; terminates the program.",
    "It returns a status code to the operating system.",
    "Zero indicates successful execution.",
    "Non-zero values usually indicate errors.",
    "return statement is typically the last line of main()."
  ]
};

window.onload = () => {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
};

function highlight(comp) {

  ["header","namespace","main","output","return"]
  .forEach(c =>
    document.getElementById("l-"+c)?.classList.remove("active")
  );

  if(comp)
    document.getElementById("l-"+comp)?.classList.add("active");
}

function start() {

  const c =
  document.getElementById("component").value;

  if(!c){
    alert("Select a component.");
    return;
  }

  steps = info[c];
  currentStep = 0;

  document.getElementById("steps").innerHTML =
  steps.map((s,i)=>
    `<pre id="step-${i}">${s}</pre>`
  ).join("");

  highlight(null);

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;
}

function nextStep() {

  if(currentStep >= steps.length){
    alert("Component exploration completed.");
    return;
  }

  document
  .getElementById(`step-${currentStep-1}`)
  ?.classList.remove("active");

  document
  .getElementById(`step-${currentStep}`)
  .classList.add("active");

  highlight(
    document.getElementById("component").value
  );

  currentStep++;

  if(currentStep >= steps.length)
    document.querySelector(".next").disabled = true;
}

function resetSim() {

  steps = [];
  currentStep = 0;

  document.getElementById("component")
  .selectedIndex = 0;

  document.getElementById("steps")
  .innerHTML = "";

  highlight(null);

  document.querySelector(".start").disabled = false;
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
}