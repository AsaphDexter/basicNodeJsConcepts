/*Node.js Errors
The Node.js applications generally face four types of errors:

Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
System errors
User-specified errors
Assertion errors
Node.js Errors Example 1
Let's take an example to deploy standard JavaScript error - ReferenceError.*/

// Throws with a ReferenceError because b is undefined  
/*try {  
    const a = 1;  
    const c = a + b;  
  } catch (err) {  
    console.log(err);  
  }*/

//Node.js Errors Example 2

const fs = require('fs');  
function nodeStyleCallback(err, data) {  
 if (err) {  
   console.error('There was an error', err);  
   return;  
 }  
 console.log(data);  
}  
fs.readFile('/some/file/that/does-not-exist', nodeStyleCallback);  
fs.readFile('/some/file/that/does-exist', nodeStyleCallback);  


  //moreNodeExamplesConcepts
  //node nodeErrors.js