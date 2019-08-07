var wineArray = ["pinot grigio", "sauvignon blanc", "chardonnay", "sancerre", "pinot noir", "barbaresco", "barolo", "malbec", "syrah", "cabernet sauvignon", "zinfandel", "viognier", "gamay", "bordeaux", "nebbiolo", "merlot", "chianti", "champagne"];
var randomSelectedWine = wineArray[Math.floor(Math.random() * wineArray.length)];
var randomAnswerArray = [];
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];



function beginGame() {
    for (var i = 0; i < randomSelectedWine.length; i++) {
        randomAnswerArray[i] = "_";
    }

    console.log(randomAnswerArray);


    document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
}


function reset () {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
    document.getElementById("guesses-remaining").innerHTML = "Number of guesses left: " + guessesLeft;
    document.getElementById("letters-guessed").innerHTML = "Letters already guessed " + lettersGuessed;
}




function letter() {
    document.onkeyup = function(event) {
        var letterGuessed = event.key.toLowerCase();
        console.log(letterGuessed);
        lettersGuessed.push(letterGuessed);
        // var letterInAnswer = false;
        for (var i = 0; i < randomSelectedWine.length; i++) {
            if (letterGuessed == randomSelectedWine[i]) {
                randomAnswerArray[i] = letterGuessed;
                document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
                document.getElementById("letters-guessed").innerHTML = "Letters already guessed " + lettersGuessed;
            }
        }
}
}






reset ();
beginGame();
letter ();
