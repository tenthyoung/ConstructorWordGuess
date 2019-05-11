var Word = require("./Word.js");
var inquirer = require("inquirer");

var randomWordsArr = [
    "Harry Potter",
    "Lord of the Rings",
    "Avengers Endgame",
    "Spiderman",
    "Javascript",
    
]

var randomWord = new Word(randomWordsArr[Math.floor(Math.random()*randomWordsArr.length)]);

promptUser();

function promptUser() {
    console.log("\nGuess a letter!\n" + randomWord.display() + "\n")

    if (randomWord.hasWon === true) {
        console.log("You won!!")
        return;
    }

    inquirer
        .prompt([
            {
                type: "input",
                name: "userGuess",
                message: "Your guess:"
                
            }
        ]).then(function (response) {
            if (randomWord.hasWon !== true) {
                console.log(response.userGuess)
                randomWord.fillBlanks(response.userGuess);
            }
            promptUser();
        });
}