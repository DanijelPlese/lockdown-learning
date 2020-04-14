
/*
const datetime = new Date();

const datetimeElement = document.querySelector('datetime');

datetimeElement.textContent = datetime;

//document.title = `Hello ${document.title}`;

document.title = `${datetime.getHours()}`;
*/

const languageElement = navigator.language('div');

languageElement.textContent = `Browser language is ${navigator.language}.`;

document.body.appendChild(languageElement);

const platformElement = document.createElement('img');

if(navigator.platform === 'Win32') {
    platformElement.src = './images/Windows.png'
};

const sizeElement = document.createElement('div');

sizeElement.textContent = `${window.innerWidth}x${window.innerHeight}`;

const helloElement = document.createElement('div');

helloElement.textContent = 'Hello World';



const urlParam = new URLSearchParams(window.location.search);

const name = urlParam.get('name');

if(name) { 
    helloElement.textContent = `Hello, my name is ${name}!`;
} else {
    helloElement = `Hello World!`;
};

document.body.appendChild(languageElement);
document.body.appendChild(platformElement);
document.body.appendChild(sizeElement);
document.body.appendChild(helloElement);
