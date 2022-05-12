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

//Get img
const img = document.querySelector('img');
const anotherBtn = document.querySelector('#another-one');
const gifLink = document.querySelector('#gif-link');

anotherBtn.addEventListener('click', loadGif);

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
            img.src = response.data.images.original.url;
            setLinkHref(img.src);
        })
        .catch(function(error) {
            console.log('There was some sort of error, resorting to backup src.');
            img.src = 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif';
            setLinkHref(img.src);
        });
}

function randomTerm() {
    return SEARCH_TERMS[Math.floor(Math.random()*SEARCH_TERMS.length)];
}

function setLinkHref(url) {
    gifLink.href = url;
}

