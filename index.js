let playButton = document.getElementsByTagName("button");

function swapButton(animeTitle){
    playButton[0].remove();
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    button1.innerHTML = button2.innerHTML = button3.innerHTML = animeTitle;
    let div = document.getElementsByTagName("div");
    div[0].appendChild(button1);
    div[0].appendChild(button2);
    div[0].appendChild(button3);
}

function swapContent(quote){
    let h1 = document.getElementsByTagName("h1");
    h1[0].style.fontSize = "50px";
    h1[0].style.textAlign = "match-parent";
    h1[0].innerHTML = quote.quote;
    swapButton(quote.anime);
}

function fetchQuote(){
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => swapContent(quote));
    
}



playButton[0].addEventListener("click", fetchQuote);