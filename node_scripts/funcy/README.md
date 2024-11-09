
# Functions

Functions are essential to leveraging code for any kind of developement. For some basic documentation on functions, check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions). Here are some basic ways to leverage functions.

## Function Examples

### Named Function

The most basic approach to functions. The below example illustrates an argument being passed into the function.
```js
//define (or initialize) the function
function sayHello(name){
    return `hello ${name}`
}

//call the function
console.log(sayHello('ro')) //Output: hello ro
```

### Anonymous Functions

These functions don't have names, but are normally passed as arguments or assigned to variables. The below example slightly adjusts the named function example to illustrate this concept.
```js
//define (or initialize) the function
const sayHello = function(name) {
    return `hello ${name}`
}

//call the function
console.log(sayHello('ro')) //Output: hello ro
```

### Arrow Functions
Similar to anonymous functions, these functions can be assigned to a variable. This is a shorter syntax for writing functions.
```js
const sayHello = (name) => `hello ${name}`
console.log(sayHello('ro')) //Output: hello ro
```

### Immediately Invoked Function Expressions (IFFE)
This approach is a little more advanced in practice, but an IFFE defines and calls a function immediately in a code. This is useful for running subroutines within the scope of a larger function.
```js
//another function that has been defined in the program
function createName(letter1,letter2) {
    return letter1 + letter2
}

//immediately invoke the function. here - another function (createName) is being called and the results are being handled in this IIFE
(function() {
    const name = createName('r','o')
    const sayHello = 'hello ' + name
    console.log(sayHello)
})(); //Output: hello ro
```

## Asynchronous Functions
Asynchronous functions make it easy to ensure code isn't executing out of order. For example, a problem often calls for a solution that leverages calling an API and processing the response from that API. The code shouldn't process the response from the API until the API returns a response. Without an async function, code has the potential to run too quickly, processing data that has not yet been returned. `async` can be used in any of the example methods above, but here is an example of how this would be leveraged:
```js
//define the function
async function sayHello() {
    const response = await fetch('https://randomuser.me/api/'); // will not proceed until fetch returns response from api
    const data = await response.json(); // will not proceed until the response from the api is parseable json
    const firstName = data.results[0].name.first //parses json for the first name
    console.log(`hello ${firstName}`)
}

//call the function
sayHello(); //Output: hello <name from api>
```
