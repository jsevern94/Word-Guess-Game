// Create the array of words to choose from
var wordChoices = [["s ", "p ", "i ", "d ", "e ", "r ", "m ", "a ", "n "], ["w ", "o ", "l ", "v ", "e ", "r ", "i ", "n ", "e "], ["d ", "e ", "a ", "d ", "p ", "o ", "o ", "l "], ["c ", "y ", "c ", "l ", "o ", "p ", "s "], ["s ", "t ", "o ", "r ", "m "], ["t ", "h ", "o ", "r "], ["t ", "h ", "a ", "n ", "o ", "s "], ["h ", "u ", "l ", "k "], ["s ", "t ", "a ", "r ", "l ", "o ", "r ", "d "], ["g ", "r ", "o ", "o ", "t "]]

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Display array
var display = [];

//Show player guesses
var letterGuessesDiv = document.getElementById("letter-guesses");
var letterGuesses = [];

//Set variables for wins, guesses remaining
var winsDiv = document.getElementById("wins");
var wins = 0;
var remainingGuessesDiv = document.getElementById("remaining-guesses");
var remainingGuesses = 8;

winsDiv.textContent = wins;

remainingGuessesDiv.textContent = remainingGuesses;

function lose () {
    alert("Almost! Try again!");
}
function win () {
    alert("You win! Good job!");
}
function empty () {
    letterGuesses.length = 0;
}
function empty2 () {
    display.length = 0;
}

//When page is loaded, computer chooses a random word from the array
var wordSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log (wordSelection);
//Array is put into the mystery-word <div>, one character at a time and displayed as underscores (_)
var mysteryWordDiv = document.getElementById("mystery-word");
for (var i = 0; i < wordSelection.length; i++) {
    console.log (wordSelection[i])
    display.push("_ ");
    }
mysteryWordDiv.textContent = display.join("");
/*On key event that puts letters into section that shows previous guesses, reduces remaining guesses by one, and exchanges
(_) for correct letter if guessed correctly*/
document.onkeypress = function(event) {
    var playerGuess = event.key;
    for (var j = 0; j<letters.length; j++)
    if (playerGuess === letters[j]) {
    var stop = letterGuesses.includes(playerGuess.toUpperCase() + " ");
        if (stop) {
            return;
        }
        else {
            for (var i = 0; i<wordSelection.length; i++) {
                if (playerGuess + " " == wordSelection[i]) {
                display[i] = playerGuess.toUpperCase() + " ";
                mysteryWordDiv.textContent = display.join("");
                } 
            }
            if (wordSelection.includes(playerGuess + " ") == false) {
                remainingGuesses--;
            }

            letterGuesses.push(playerGuess.toUpperCase() + " ");
            letterGuessesDiv.textContent = letterGuesses.join("");
            remainingGuessesDiv.textContent = remainingGuesses;
        }
        console.log(display);
}
}

// Alert player when he has won or lost
document.onkeyup = function() {
if (remainingGuesses < 1) {
    lose();
    empty2();
    wordSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log (wordSelection)
    for (var i = 0; i < wordSelection.length; i++) {
        console.log (wordSelection[i])
        display.push("_ ");
        }
    empty();
    letterGuessesDiv.textContent = "";
    mysteryWordDiv.textContent = display.join("");
    remainingGuesses = 8;
    remainingGuessesDiv.textContent = remainingGuesses;
}
if (display.includes("_ ") == false) {
    win();
    wins++;
    winsDiv.textContent = wins;
    empty2();
    wordSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log (wordSelection)
    for (var i = 0; i < wordSelection.length; i++) {
        console.log (wordSelection[i])
        display.push("_ ");
        }
    empty();
    letterGuessesDiv.textContent = "";
    mysteryWordDiv.textContent = display.join("");
    remainingGuesses = 8;
    remainingGuessesDiv.textContent = remainingGuesses;
}    
}