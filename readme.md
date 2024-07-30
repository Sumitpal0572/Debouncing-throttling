# Closure:

- Closures in JavaScript are a powerful and fundamental concept that involves a function bundled together with references to its surrounding state or lexical environment.
- They allow a function to retain access to variables from its outer function even after the outer function has executed.

Note: A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and scope.

# Ex.code

function createCounter() {
let count = 0; // a variable in the outer scope

    function increment() {  // a nested function
        count++;  // accessing outer scope variable
        console.log(count);
    }

    return increment;  // returning the nested function

}

let counter = createCounter(); // store the returned function in a variable
counter(); // Output: 1
counter(); // Output: 2

# Debouncing:

- Debouncing is a crucial concept in web development that addresses challenges related to handling continuous user input, such as search bars or text inputs.
- It helps control the rate at which a function is invoked, preventing excessive calls and optimizing performance.

function deBounce(fun, delay) {
let timer;

return function () {
if (timer) {
clearTimeout(timer);
}

    timer = setTimeout(function () {
      // fetchData()
      fun();
    }, delay);

};
}

let deBounce1 = deBounce(fetchData, 1000);

# Throttling:

- Throttling is a crucial concept in web development that helps control the rate at which a function is invoked, ensuring it does not execute more often than a specified time interval.
- This optimization technique is particularly useful in scenarios like scroll events or continuous user-triggered actions.

function throttling(fun,delay){
let flag = false;//timer is not running

    return function (){
        if(flag==true){
            //if timer is running i will simply return or do nothing
            return;
        }
        fun()

        flag =true;//timer is starting
        setTimeout(function(){
            flag =false;
            //timer is end
        },delay)

    }

}

let throttling1 = throttling(fetchData,1000);
