let playButton = document.getElementsByTagName("button");

function correctAnswer(button){
    button.style.backgroundColor = "#1bab55"
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
        swapButton(titles, randomStartingIndex);
      })
}

function swapButton(titles, rightIndex){
    playButton[0].remove();
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let div = document.getElementsByTagName("div");
    button1.innerHTML = titles[0];
    button2.innerHTML = titles[1];
    button3.innerHTML = titles[2];
    button1.style.fontSize = "20px";
    button2.style.fontSize = "20px";
    button3.style.fontSize = "20px";
    div[0].appendChild(button1);
    div[0].appendChild(button2);
    div[0].appendChild(button3);
    let buttons = document.getElementsByTagName("button");
    button.forEach(elem => elem.addEventListener("click", () => {
    }))
        

}

function swapContent(quote){
    //Swap anime title
    let h1 = document.getElementsByTagName("h1");
    h1[0].style.fontSize = "50px";
    h1[0].style.textAlign = "match-parent";
    h1[0].innerHTML = quote.quote;

    fetchTitles(quote.anime);
}

function fetchQuote(){
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => swapContent(quote));
}

playButton[0].addEventListener("click", fetchQuote);