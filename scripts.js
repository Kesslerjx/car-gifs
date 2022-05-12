const SEARCH_TERMS = [
    'car',
    'cars',
    'vehicle',
    'honda',
    'acura',
    'nissan',
    'porsche',
    'volkswagen',
    'lamborghini',
    'ferrari',
    'ford',
    'chevrolet',
    'dodge',
    'subaru',
    'audi',
    'toyota',
    'lexus',
    'tesla car',
    'drifting',
    'racing',
    'speeding',
    'saab',
    'cadillac'
];

const ERROR_LINK = 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif';

//Array to track the gifs that have been seen
let history = [];
let currentIndex = -1;

//Get elements
const img = document.querySelector('img');
const previousBtn = document.querySelector('#previous-button');
const anotherBtn = document.querySelector('#another-one');
const forwardBtn = document.querySelector('#forward-button');
const gifLink = document.querySelector('#gif-link');

previousBtn.addEventListener('click', previous);
anotherBtn.addEventListener('click', loadGif);
forwardBtn.addEventListener('click', forward);

//Load a gif when the page is first loaded
loadGif();

//Gets a gif and sets the img src
function loadGif() {
    //Get data using API
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=AZGROnykDbgROhJPnliNZFjfmWVFdFAM&s=${randomTerm()}`, {mode: 'cors'})
        .then(function(response) {
            //Return promise that contains the data
            return response.json();
        })
        .then(function(response){
            //Set img src to the URL
            setHrefAndSrc(response.data.images.original.url);
            addToHistory(img.src);
        })
        .catch(function(error) {
            console.log('There was some sort of error, resorting to backup src.');
            setHrefAndSrc(ERROR_LINK);
        });
}

function previous() {
    if(currentIndex != 0) {
        //Subtrack from index
        currentIndex -= 1;
        setHrefAndSrc(history[currentIndex]);
    }

}

function forward() {
    if(currentIndex < (history.length-1)) {
        //Add to index
        currentIndex += 1;
        setHrefAndSrc(history[currentIndex]); 
    }
}

function randomTerm() {
    return SEARCH_TERMS[Math.floor(Math.random()*SEARCH_TERMS.length)];
}

function setHrefAndSrc(url) {
    img.src = url;
    gifLink.href = url;
}

function addToHistory(url) {
    history.push(url);
    currentIndex = history.length-1;
}

