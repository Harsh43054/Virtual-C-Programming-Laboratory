let steps = [];
let currentStep = 0;

window.onload = () => {
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
};

function start() {

    steps = [
        "Program starts execution.",
        "Create an ofstream object for file handling.",
        "Open file 'student.txt' in write mode.",
        "Write data into file: Name = Rahul, Roll No = 101.",
        "Close the file after writing.",
        "Create an ifstream object.",
        "Open file 'student.txt' in read mode.",
        "Read data from the file.",
        "Display file contents on screen.",
        "Enter try block for exception handling.",
        "File opened successfully. No exception thrown.",
        "Catch block skipped because no exception occurred.",
        "Program execution completed successfully."
    ];

    currentStep = 0;

    document.getElementById("steps").innerHTML =
        steps.map((step, index) =>
            `<pre id="step-${index}">${step}</pre>`
        ).join("");

    document.getElementById("result").innerHTML =
        "<strong>Output :</strong> Click Next to execute the simulation step-by-step.";

    document.querySelector(".start").disabled = true;
    document.querySelector(".next").disabled = false;
    document.querySelector(".reset").disabled = false;
}

function nextStep() {

    if (currentStep >= steps.length) {
        alert("Simulation Completed");
        return;
    }

    const prev = document.getElementById(`step-${currentStep - 1}`);
    if (prev) prev.classList.remove("active");

    const current = document.getElementById(`step-${currentStep}`);
    if (current) current.classList.add("active");

    let output = "<strong>Output :</strong><br><br>";

    if (currentStep >= 2) {
        output += "📄 File Created: <b>student.txt</b><br>";
    }

    if (currentStep >= 4) {
        output += "✍️ Data Written Successfully<br>";
    }

    if (currentStep >= 7) {
        output += "📖 File Read Successfully<br>";
    }

    if (currentStep >= 8) {
        output += "<br><b>File Contents:</b><br>";
        output += "Name = Rahul<br>";
        output += "Roll No = 101<br>";
    }

    if (currentStep >= 10) {
        output += "<br><span style='color:green'><b>✓ No Exception Occurred</b></span>";
    }

    if (currentStep >= 12) {
        output += "<br><br><b>Simulation Completed Successfully.</b>";
    }

    document.getElementById("result").innerHTML = output;

    currentStep++;

    if (currentStep >= steps.length) {
        document.querySelector(".next").disabled = true;
    }
}

function resetSim() {

    steps = [];
    currentStep = 0;

    document.getElementById("steps").innerHTML = "";

    document.getElementById("result").innerHTML =
        "<strong>Output :</strong> Click Start to begin the simulation.";

    document.querySelector(".start").disabled = false;
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
}