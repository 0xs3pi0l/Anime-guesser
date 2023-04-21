let playButton = document.getElementsByTagName("button");

function fetchQuote(){
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
}

playButton[0].addEventListener("click", fetchQuote);