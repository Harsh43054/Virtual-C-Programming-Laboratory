# Update procedure pages with OS lab steps
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$titles = @{
  1="Introduction to C++ Program Structure"
  2="Input, Output and Data Types in C++"
  3="Conditional Statements and Loops"
  4="Functions and Recursion"
  5="Arrays in C++"
  6="String Handling in C++"
  7="Pointers and Dynamic Memory Allocation"
  8="Classes and Objects in C++"
  9="Inheritance and Polymorphism"
  10="File Handling and Exception Handling"
}

$steps = @{
  1=@(
    "Read the theory section on C++ program structure."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Observe the structure of a basic C++ program."
    "Identify header files, main() function, and statements."
    "Execute the sample program."
    "Analyze the output."
    "Take the posttest quiz."
  )

  2=@(
    "Read the theory section on data types and I/O."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter values using input statements."
    "Observe variable declarations and data types."
    "Execute the program."
    "Verify the displayed output."
    "Take the posttest quiz."
  )

  3=@(
    "Read the theory section on conditional statements and loops."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Provide input values."
    "Execute if-else, switch, and loop examples."
    "Observe program flow step by step."
    "Analyze generated output."
    "Take the posttest quiz."
  )

  4=@(
    "Read the theory section on functions and recursion."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Create and call functions."
    "Observe parameter passing and return values."
    "Execute recursive examples."
    "Analyze function execution."
    "Take the posttest quiz."
  )

  5=@(
    "Read the theory section on arrays."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter array elements."
    "Perform traversal and manipulation operations."
    "Observe array indexing."
    "Verify the output."
    "Take the posttest quiz."
  )

  6=@(
    "Read the theory section on string handling."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter sample strings."
    "Perform concatenation, comparison, and searching."
    "Observe string manipulation results."
    "Analyze the output."
    "Take the posttest quiz."
  )

  7=@(
    "Read the theory section on pointers and dynamic memory allocation."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Create pointer variables."
    "Observe memory addresses and dereferencing."
    "Allocate and deallocate memory dynamically."
    "Analyze memory management behavior."
    "Take the posttest quiz."
  )

  8=@(
    "Read the theory section on classes and objects."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Create a class with data members and member functions."
    "Instantiate objects."
    "Access members using objects."
    "Observe object-oriented behavior."
    "Take the posttest quiz."
  )

  9=@(
    "Read the theory section on inheritance and polymorphism."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Create base and derived classes."
    "Implement function overriding."
    "Observe runtime polymorphism."
    "Analyze program execution."
    "Take the posttest quiz."
  )

  10=@(
    "Read the theory section on file handling and exception handling."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Perform file read/write operations."
    "Generate and handle exceptions."
    "Observe error handling behavior."
    "Analyze the output."
    "Take the posttest quiz."
  )
}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Virtual C++ Programming Laboratory</title><link rel="stylesheet" href="style.css"></head>
<body>
<header><div class="menu-bar"><div class="menu-icon" id="menuToggle">&#9776;</div><div class="logo"><img src="../logo.jpg" alt="Logo"/></div></div>
<div class="orange-line"></div>
<h2 align="left" style="color:#4a90e2"><div class="section"><a href="../index.html">Virtual C++ Programming Laboratory</a></div></h2>
<div class="grey-line"></div></header>
<main class="content"><h1 align="center">$($titles[$n]) - Procedure</h1>
<ol class="section">$ol</ol></main>
<div class="modal-overlay" id="modalOverlay"><div class="modal"><div class="modal-header"><img src="../logo.jpg" class="modal-logo"/><span class="close-btn" id="closeModal">&times;</span></div>
<ul class="modal-menu"><li><a href=AO.html>Aim</a></li><li><a href=theory.html>Theory</a></li><li><a href=quiz.html>Pretest</a></li><li><a href=pro.html class="active">Procedure</a></li><li><a href=sim.html>Simulation</a></li><li><a href=postt.html>Posttest</a></li><li><a href=ref.html>References</a></li><li><a href=feed2.html>Feedback</a></li></ul></div></div>
<script src="script.js"></script></body></html>
"@
  Set-Content -Path (Join-Path $base "Exp$n\pro.html") -Value $html -Encoding UTF8
}
Write-Host "Procedure pages updated."
