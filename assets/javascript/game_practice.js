//GLOBAL VARIABLES
var randomWineArr = ["pinot grigio", "sauvignon blanc", "chardonnay", "sancerre", "pinot noir", "barbaresco", "barolo", "malbec", "syrah", "cabernet sauvignon", "zinfandel", "viognier", "gamay", "bordeaux", "nebbiolo", "merlot", "chianti", "champagne"];
var answerArr = [];
var randomWine = "";
var lettersInRandomWine = [];
var blankLetters = 0;
var lettersGuessed = [];
var userWin = 0;
var userLoss = 0;
var guessesRem = 12;


//FUNCTIONS

function beginGame() {
    document.onkeyup = function(event) {
        var userLetter = event.key;
    
    
    randomWine = randomWineArr[Math.floor(Math.random() * randomWineArr.length)];

    for (var i = 0; i < randomWine.length; i++) {
        answerArr[i] = "_";
    }

    document.getElementById("random-word").innerHTML = answerArr.join(" ");
    document.getElementById("guesses-remaining").innerHTML = guessesRem;
    document.getElementById("wins").innerHTML = userWin
    document.getElementById("losses").innerHTML = userLoss 
    document.getElementById("letters-guessed").innerHTML = lettersGuessed


    // DEBUGGING
    console.log(randomWine);
    console.log(lettersInRandomWine);
    console.log(blankLetters);
    console.log(answerArr);
    }
}

function userLetter () {
    var letter = document.getElementById("letter").value;
    console.log(letter);



    function letter() {
        document.onkeyup = function(event) {
            var letterGuessed = event.key.toLowerCase();
            console.log(letterGuessed);
            lettersGuessed.push(letterGuessed);
            for (var j = 0; j < randomSelectedWine.length; j++) {
                if (letterGuessed == randomSelectedWine[j]) {
                    randomAnswerArray[j] = letterGuessed;
    
                    document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
                    document.getElementById("letters-guessed").innerHTML = "Letters already guessed: " + lettersGuessed;
                }
            }
    }
    }
    
// if (letter.length > 0){
//     for (var i = 0; i < randomWine.length; i++) {
//         if (randomWine[i] === letter) {
//             answerArr[i] = letter;
//             alert("worjking");
//         }
//     }
// }
}

function letter (array, element) { //if wrong guesses, push to lettersGuessed array
    if(array.indexOf(element) === -1) {
        lettersGuessed.push(element);
        guessesLeft--;
        document.getElementById("letters-guessed").innerHTML = "Letters already guessed " + lettersGuessed.join(" ");

    }

    else if(array.indexOf(element) !== -1) {
        for(var j = 0; j<randomSelectedWine.length;j++);
        if(randomSelectedWine[j] === element) {
            randomAnswerArray[j] = element;
            document.getElementById("random-word").innerHTML = randomAnswerArray.join(" ");
        }
    }
}







//CALL ON FUNCTIONS/MAIN GAME

beginGame();

// for (var i = 0; i < randomWine.length; i++) {
//     answerArr[i] = "_";
// }

// function clickFunction() {
//     document.getElementById("click");
// }

//create a variable to show remaining letters to be guessed
// var remainingLetters = randomWine.length;

// functions



// while (remainingLetters > 0) {
//     document.write(answerArr.join(" "));

//     var guess = document.write("Guess a letter to start playing");
//     if (guess == null) {
//         break;
//     }
//     else if (guess.length !== 1) {
//     alert("Press a single letter only");
//     }
//     else {
//         for (var j = 0; j < randomWine.length; j++) {
//             if (randomWine[j] === guess) {
//                 answerArr[j] = guess;
//             }
//         }
//     }



// }


// function begin () {
//     for (var i = 0, i < randomWine.length, i++) {
//         answerArr[i] = "_";
//     }
//     w = answerArr.join(" ");
//     document.getElementById("answer").innerHTML = w;
// }