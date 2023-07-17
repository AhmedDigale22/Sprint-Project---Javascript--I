// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation (Min 50 words):
// In this code, we have two functions: myFunction and nestedFunction. nestedFunction is defined inside myFunction.

// In JavaScript, nested functions have access to variables defined in their parent functions due to lexical scoping. This behavior is known as "closure." The nested function can "remember" and access variables in its lexical environment, even after the myFunction has finished executing.
