/*
console.log('Hello from SubtleCrypto.js');

function showExample () {
   console.log('Hello from SubtleCrypto.js');
};

showExample();
showExample();
showExample();
*/
/*
function multiplyNumbers() {
    const result = 4 * 6;
    return result;
}
const multiplication = multiplyNumbers();
console.log(multiplication);
console.log(multiplyNumbers())
*/
/*
function multiplyNumbers(a, b) {
    const result = a * b;
    return result;
}
const multiplication = multiplyNumbers(2, 3);
console.log(multiplication);
*/
/*
// primjer 1
function sayHello(name) {
    return `Hello, ${name}!`
}
console.log(sayHello('David'));

//primjer II
function sayHello(name = 'Danijel') {
    return `Hello, ${name}!`
}
console.log(sayHello());

function yellSomething(text) {
    return `THIS IS VERY IMPORTANT: ${text.toUpperCase()}`;
}

const hello = sayHello();
const scream = yellSomething(hello)

console.log(yellSomething(sayHello()));
*/

function sayHello(name = 'Danijel') {
    return `Hello, ${name}!`
}
function yellSomething(text) {
    return `THIS IS VERY IMPORTANT: ${text.toUpperCase()}`;
}

const buttonElement = document.querySelector('#button');

buttonElement.onclick = sayHello;

console.dir(buttonElement);

function buttonElementOnClick(event) {
    const textElement = document.querySelector(`#name`)

    const text = yellSomething(sayHello(textElement.value));

    const yellElement = donument.createElement('div');

    yellElement.textContent = text;
    
    document.body.appendChild(yellElement);
}
buttonElement.onclick = buttonElementOnClick;

const imageButtonElement = document.querySelector('#button-image');

function imageButtonElementOnClick() {
    const imageTextElement = document.querySelector('img');

    const 

    imageTextElement.src=imageTextElement.value;

    document.body.appendChild(imageTextElement);
}

imageButtonElement.onclick = imageButtonElementOnClick;
