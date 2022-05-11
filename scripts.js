//Get img
const img = document.querySelector('img');
const btn = document.querySelector('button');

btn.addEventListener('click', loadGif);

//Load a gif when the page is first loaded
loadGif();

//Gets a gif and sets the img src
function loadGif() {
    //Get data using API
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=AZGROnykDbgROhJPnliNZFjfmWVFdFAM&s=car', {mode: 'cors'})
        .then(function(response) {
            //Return promise that contains the data
            return response.json();
        })
        .then(function(response){
            //Set img src to the URL
            img.src = response.data.images.original.url;
        })
        .catch(function(error) {
            console.log('There was some sort of error, resorting to backup src.');
            img.src = 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif';
        });
}

