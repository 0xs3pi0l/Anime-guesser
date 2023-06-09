function reset(){
    let buttonsDiv = document.getElementById("play+titles");
    buttonsDiv.innerHTML = "";
    let playAgainButton = document.getElementById("playAgain");
    playAgainButton.innerHTML = "";
}

function addReplayButton(){
    let playAgainDiv = document.getElementById("playAgain");
    let playAgainButton = document.createElement("button");
    playAgainButton.style.fontSize = "1rem";
    playAgainButton.innerHTML = "Play again";
    playAgainDiv.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", () => {
        reset();
        fetchQuote();
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function fetchTitles(rightTitle){
    fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(animes => {
        let randomIndex = getRandomInt(60);
        let wrongTitle1 = animes[randomIndex];
        randomIndex = getRandomInt(60);
        let wrongTitle2 = animes[randomIndex];
        let titles = new Array(3);
        let randomStartingIndex = getRandomInt(3);
        switch(true){
            case (randomStartingIndex == 0):
                titles[0] = rightTitle;
                titles[1] = wrongTitle1;
                titles[2] = wrongTitle2;
                break;
            case (randomStartingIndex == 1):
                titles[0] = wrongTitle1;
                titles[1] = rightTitle;
                titles[2] = wrongTitle2;
                break;
            case (randomStartingIndex == 2):
                titles[0] = wrongTitle1;
                titles[1] = wrongTitle2;
                titles[2] = rightTitle;
                break;
        }
        reset();
        swapButton(titles, randomStartingIndex);
      })
}

function swapButton(titles, rightIndex){
    console.log("OK");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let div = document.getElementsByTagName("div");
    button1.innerHTML = titles[0];
    button2.innerHTML = titles[1];
    button3.innerHTML = titles[2];
    button1.style.fontSize = "1rem";
    button2.style.fontSize = "1rem";
    button3.style.fontSize = "1rem";
    div[0].appendChild(button1);
    div[0].appendChild(button2);
    div[0].appendChild(button3);
    let buttons = [...document.getElementsByTagName("button")];
    buttons.forEach(elem => elem.addEventListener("click", () => {
        if (rightIndex == 0){
            buttons[0].style.backgroundColor = "#28e032"
            buttons[1].style.backgroundColor = "#e72c2c"
            buttons[2].style.backgroundColor = "#e72c2c"
        } else if (rightIndex == 1) {
            buttons[0].style.backgroundColor = "#e72c2c"
            buttons[1].style.backgroundColor = "#28e032"
            buttons[2].style.backgroundColor = "#e72c2c"
        } else {
            buttons[0].style.backgroundColor = "#e72c2c"
            buttons[1].style.backgroundColor = "#e72c2c"
            buttons[2].style.backgroundColor = "#28e032"
        }
        buttons[0].style.cursor = "auto"
        buttons[1].style.cursor = "auto"
        buttons[2].style.cursor = "auto"
        addReplayButton();
    }))
        
}

function swapContent(quote){
    let h1 = document.getElementsByTagName("h1");
    console.log(quote.quote.length);
    if (quote.quote.length >= 200) {
        if (window.matchMedia("(max-width: 650px")){
            h1[0].style.fontSize = "1em";
        } else {
            h1[0].style.fontSize = "3em";
        }
    } else {
        if (window.matchMedia("(max-width: 650px")){
            h1[0].style.fontSize = "2em";
        } else {
            h1[0].style.fontSize = "4em";
        }
    }
    h1[0].style.textAlign = "match-parent";
    h1[0].innerHTML = "\"" + quote.quote + "\"";
    fetchTitles(quote.anime);
}

function fetchQuote(){
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => swapContent(quote));
}

let playButton = document.getElementsByTagName("button");
playButton[0].addEventListener("click", fetchQuote);