# Update all experiment folders with OS lab content (same UI structure)
$base = Split-Path -Parent $MyInvocation.MyCommand.Path

$experiments = @(
  @{ n=1; title="Introduction to C++ Program Structure"; aim="In this experiment, students will learn the basic structure of a C++ program, understand compilation and execution, and write simple programs using C++ syntax." },
  @{ n=2; title="Input, Output and Data Types in C++"; aim="In this experiment, students will use input/output statements, variables, constants, and different data types available in C++." },
  @{ n=3; title="Conditional Statements and Loops"; aim="In this experiment, students will implement decision-making and iterative control structures including if-else statements, switch statements, for loops, while loops, and do-while loops." },
  @{ n=4; title="Functions and Recursion"; aim="In this experiment, students will create user-defined functions, understand parameter passing, return values, and implement recursive solutions to programming problems." },
  @{ n=5; title="Arrays in C++"; aim="In this experiment, students will declare, initialize, access, and manipulate one-dimensional and two-dimensional arrays in C++." },
  @{ n=6; title="String Handling in C++"; aim="In this experiment, students will perform string operations such as concatenation, comparison, searching, and manipulation using C++ strings." },
  @{ n=7; title="Pointers and Dynamic Memory Allocation"; aim="In this experiment, students will understand pointers, pointer arithmetic, dynamic memory allocation, and memory management using new and delete operators." },
  @{ n=8; title="Classes and Objects in C++"; aim="In this experiment, students will create classes and objects, use constructors, member functions, and access specifiers to implement object-oriented programming concepts." },
  @{ n=9; title="Inheritance and Polymorphism"; aim="In this experiment, students will implement inheritance, function overriding, virtual functions, and runtime polymorphism in C++." },
  @{ n=10; title="File Handling and Exception Handling"; aim="In this experiment, students will perform file input/output operations and implement exception handling mechanisms to manage runtime errors in C++ programs." }
)

$aoTemplate = @'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Virtual Operating System Laboratory</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="menu-bar">
      <div class="menu-icon" id="menuToggle">&#9776;</div>
      <div class="logo">
        <img src="../logo.jpg" alt="Virtual Labs Logo" />
      </div>
    </div>
    <div class="orange-line"></div>
    <h2 align="left" style="color:#4a90e2"><div class="section"><a href="#">Computer Science and Engineering</a> > <a href="../index.html">Virtual Operating System Laboratory</a> > <a href="../LOE.html">Experiments</a></div></h2>
    <div class="grey-line"></div>
  </header>

  <main class="content">
   <h1 align="center">__TITLE__</h1>
  </main>
   <p>
    <div class="section">__AIM__</div>
   </p>
  
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <div class="modal-header">
        <img src="../logo.jpg" alt="Logo" class="modal-logo"/>
        <span class="close-btn" id="closeModal">&times;</span>
      </div>
      <ul class="modal-menu">
        <li><a href=AO.html class="active">Aim</a></li>
        <li><a href=theory.html>Theory</a></li>
        <li><a href=quiz.html>Pretest</a></li>
        <li><a href=pro.html>Procedure</a></li>
        <li><a href=sim.html>Simulation</a></li>
        <li><a href="postt.html">Posttest</a></li>
        <li><a href=ref.html>References</a></li>
        <li><a href=feed2.html>Feedback</a></li>
      </ul>
    </div>
  </div>
   <script src="script.js"></script>
</body>
</html>
'@

foreach ($exp in $experiments) {
  $dir = Join-Path $base ("Exp" + $exp.n)
  if (-not (Test-Path $dir)) { continue }

  $ao = $aoTemplate -replace '__TITLE__', $exp.title -replace '__AIM__', $exp.aim
  Set-Content -Path (Join-Path $dir "AO.html") -Value $ao -Encoding UTF8

  $content = $content -replace '<h1 align="center">.*?</h1>', "<h1 align=`"center`">$($exp.title)</h1>"

Write-Host "Updated $($experiments.Count) experiment folders."
