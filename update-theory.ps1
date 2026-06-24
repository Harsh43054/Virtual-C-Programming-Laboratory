# Generate OS theory pages (same UI structure as original)
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$theories = @{
  1 = @{
    title="Introduction to C++ Program Structure"
    body=@"
<h2>Introduction to C++</h2>
<p>C++ is a powerful, object-oriented programming language developed by Bjarne Stroustrup. It supports procedural, object-oriented, and generic programming.</p>

<h2>Structure of a C++ Program</h2>
<ul>
<li>Documentation Section</li>
<li>Preprocessor Directives</li>
<li>Main Function</li>
<li>Variable Declarations</li>
<li>Executable Statements</li>
</ul>

<h2>Main Function</h2>
<p>The <b>main()</b> function is the entry point of every C++ program. Program execution starts from this function.</p>
"@
  }

  2 = @{
    title="Input, Output and Data Types in C++"
    body=@"
<h2>Input and Output</h2>
<p>C++ uses <b>cin</b> for input and <b>cout</b> for output through the iostream library.</p>

<h2>Data Types</h2>
<ul>
<li>int - Integer values</li>
<li>float - Decimal values</li>
<li>double - Double precision numbers</li>
<li>char - Single characters</li>
<li>bool - Boolean values</li>
</ul>

<h2>Variables</h2>
<p>Variables are named memory locations used to store data during program execution.</p>
"@
  }

  3 = @{
    title="Conditional Statements and Loops"
    body=@"
<h2>Decision Making</h2>
<p>Conditional statements allow programs to make decisions based on conditions.</p>

<h2>Conditional Statements</h2>
<ul>
<li>if</li>
<li>if-else</li>
<li>nested if</li>
<li>switch</li>
</ul>

<h2>Loops</h2>
<p>Loops execute a block of code repeatedly.</p>
<ul>
<li>for loop</li>
<li>while loop</li>
<li>do-while loop</li>
</ul>
"@
  }

  4 = @{
    title="Functions and Recursion"
    body=@"
<h2>Functions</h2>
<p>Functions are reusable blocks of code designed to perform specific tasks.</p>

<h2>Advantages of Functions</h2>
<ul>
<li>Code reusability</li>
<li>Easy debugging</li>
<li>Modular programming</li>
</ul>

<h2>Recursion</h2>
<p>Recursion is a technique in which a function calls itself until a base condition is reached.</p>
"@
  }

  5 = @{
    title="Arrays in C++"
    body=@"
<h2>Arrays</h2>
<p>An array is a collection of elements of the same data type stored in contiguous memory locations.</p>

<h2>Array Declaration</h2>
<p>Syntax: <code>int arr[5];</code></p>

<h2>Array Operations</h2>
<ul>
<li>Traversal</li>
<li>Insertion</li>
<li>Searching</li>
<li>Sorting</li>
</ul>
"@
  }

  6 = @{
    title="String Handling in C++"
    body=@"
<h2>Strings</h2>
<p>A string is a sequence of characters used to store text data.</p>

<h2>String Class</h2>
<p>The C++ string class provides built-in functions for manipulation.</p>

<h2>Common Operations</h2>
<ul>
<li>Concatenation</li>
<li>Comparison</li>
<li>Length Calculation</li>
<li>Substring Extraction</li>
</ul>
"@
  }

  7 = @{
    title="Pointers and Dynamic Memory Allocation"
    body=@"
<h2>Pointers</h2>
<p>A pointer is a variable that stores the memory address of another variable.</p>

<h2>Pointer Operators</h2>
<ul>
<li>&amp; : Address-of operator</li>
<li>* : Dereference operator</li>
</ul>

<h2>Dynamic Memory Allocation</h2>
<p>C++ provides <b>new</b> and <b>delete</b> operators to allocate and free memory during runtime.</p>
"@
  }

  8 = @{
    title="Classes and Objects"
    body=@"
<h2>Object-Oriented Programming</h2>
<p>Object-Oriented Programming organizes programs using classes and objects.</p>

<h2>Class</h2>
<p>A class is a user-defined data type that groups data members and member functions.</p>

<h2>Object</h2>
<p>An object is an instance of a class used to access its members.</p>

<h2>Benefits</h2>
<ul>
<li>Data abstraction</li>
<li>Encapsulation</li>
<li>Code reusability</li>
</ul>
"@
  }

  9 = @{
    title="Inheritance and Polymorphism"
    body=@"
<h2>Inheritance</h2>
<p>Inheritance allows one class to acquire properties and behaviors of another class.</p>

<h2>Types of Inheritance</h2>
<ul>
<li>Single</li>
<li>Multiple</li>
<li>Multilevel</li>
<li>Hierarchical</li>
</ul>

<h2>Polymorphism</h2>
<p>Polymorphism allows the same function or operator to behave differently in different situations.</p>
"@
  }

  10 = @{
    title="File Handling and Exception Handling"
    body=@"
<h2>File Handling</h2>
<p>File handling enables reading and writing data to files using ifstream, ofstream, and fstream.</p>

<h2>Exception Handling</h2>
<p>Exceptions are runtime errors that can be handled using try, throw, and catch blocks.</p>

<h2>Advantages</h2>
<ul>
<li>Error management</li>
<li>Program reliability</li>
<li>Data persistence</li>
</ul>
"@
  }
}