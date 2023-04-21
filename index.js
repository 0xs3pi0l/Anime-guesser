let playButton = document.getElementsByTagName("button");

function insertQuote(quote){
    let h1 = document.getElementsByTagName("h1");
    h1[0].style.fontSize = "50px";
    h1[0].style.textAlign = "match-parent";
    h1[0].innerHTML = quote;
}

function fetchQuote(){
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => insertQuote(quote.quote));
    
}

playButton[0].addEventListener("click", fetchQuote);