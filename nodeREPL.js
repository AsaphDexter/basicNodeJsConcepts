/*The term REPL stands for Read Eval Print and Loop. 
It specifies a computer environment like a window console or a Unix/Linux shell where you can enter the 
commands and the system responds with an output in an interactive mode.

REPL Environment
The Node.js or node come bundled with REPL environment. Each part of the REPL environment has a specific work.

Read: It reads user's input; parse the input into JavaScript data-structure and stores in memory.

Eval: It takes and evaluates the data structure.

Print: It prints the result.

Loop: It loops the above command until user press ctrl-c twice.

How to start REPL
You can start REPL by simply running "node" on the command prompt. See this:

You can execute various mathematical operations on REPL Node.js command prompt:

Node.js Simple expressions
After starting REPL node command prompt put any mathematical expression:

Using variable
Variables are used to store values and print later. If you don't use var keyword then value is stored in the variable and printed whereas if var keyword is used then value is stored but not printed. You can print variables using console.log().

Example:

Node.js Multiline expressions
Node REPL supports multiline expressions like JavaScript. See the following do-while loop example:

var x = 0  
undefined  
> do {  
... x++;  
... console.log("x: " + x);  
... } while ( x < 10 ); 

Node.js Underscore Variable
You can also use underscore _ to get the last result.

Node.js REPL Commands
Commands	Description
ctrl + c	It is used to terminate the current command.
ctrl + c twice	It terminates the node repl.
ctrl + d	It terminates the node repl.
up/down keys	It is used to see command history and modify previous commands.
tab keys	It specifies the list of current command.
.help	It specifies the list of all commands.
.break	It is used to exit from multi-line expressions.
.clear	It is used to exit from multi-line expressions.
.save filename	It saves current node repl session to a file.
.load filename	It is used to load file content in current node repl session.


*/