var wineArray = ["pinot grigio", "sauvignon blanc", "chardonnay", "sancerre", "pinot noir", "barbaresco", "barolo", "malbec", "syrah", "cabernet sauvignon", "zinfandel", "viognier", "gamay", "bordeaux", "nebbiolo", "merlot", "chianti", "champagne"];
var randomSelectedWine = wineArray[Math.floor(Math.random() * wineArray.length)];
var randomAnswerArray = [];
var blanksAndGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];

document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    console.log(guess);
    letter(blanksAndGuesses, guess);

};

// FUNCTIONS

function beginGame() {
    for (var i = 0; i < randomSelectedWine.length; i++) {
        randomAnswerArray[i] = "_";
    }

    console.log(randomAnswerArray);
    console.log(randomSelectedWine);


    document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
}


function reset () {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
    document.getElementById("guesses-remaining").innerHTML = "Number of guesses left: " + guessesLeft;
    document.getElementById("letters-guessed").innerHTML = "Letters already guessed " + lettersGuessed;
}

function letter (array, element) { //if wrong guesses, push to lettersGuessed array
    var found= false;
    for(var j = 0; j<randomSelectedWine.length;j++) {
        if(randomSelectedWine[j] == element) {
            randomAnswerArray[j] = element;
            document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
            found = true;
        }
        // else if (randomSelectedWine[j] !== element) {
        //     lettersGuessed[j] = element;
        //     document.getElementById("letters-guessed").innerHTML = "Letters already guessed " + lettersGuessed.join(" ");
        // }
        else {
            lettersGuessed.push(element);
            guessesLeft--;
            document.getElementById("letters-guessed").innerHTML = "Letters already guessed " + lettersGuessed;
        }
    }
};



reset ();
beginGame();