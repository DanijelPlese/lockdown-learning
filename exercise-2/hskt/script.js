
let currentImageId;
let result = 0;

function getPoints(number) {
    const resultElement = document.querySelector('#result');
    
    result = result + number;

    resultElement.textContent = result;
}

function testResult(event) {
    if (event.target.id === currentImageId) {
        getPoints(1);
    } else {
        getPoints(-1);
    }
    getNewImage();
}

function  getNewImage() {
    const imageElement = document.querySelector('#image');
    const rand = Math.floor(Math.random() * 4 + 1);

    if(rand === 1) {
        currentImageId = 'head'
       imageElement.src = './images/head.png';
    } else if  (rand === 2) {
        currentImageId = 'shoulders'
       imageElement.src = './images/shoulders.png';
    } else if  (rand === 3) {
        currentImageId = 'knees'
       imageElement.src = './images/knees.png';
    } else if  (rand === 4) {
        currentImageId = 'toes'
         imageElement.src = './images/toes.png';
    }
}

getNewImage();

const headButtonElement = document.querySelector('#head');
const shouldersButtonElement = document.querySelector('#shoulders');
const kneesButtonElement = document.querySelector('#knees');
const toesButtonElement = document.querySelector('#toes');

headButtonElement.onclick = getNewImage;
shouldersButtonElement.onclick = getNewImage;
kneesButtonElement.onclick = getNewImage;
toesButtonElement.onclick = getNewImage;



