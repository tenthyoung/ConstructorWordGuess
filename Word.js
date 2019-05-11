var Letter = require("./Letter.js");

function Word (word) {
    this.word = word;
    this.letters = [];
    this.hasWon = false;

    for (let index = 0; index < word.length; index++) {
        this.letters.push(new Letter(word[index]));   
    }

    this.display = function () {
        let array = [];
        for (let index = 0; index < this.letters.length; index++) {
            array.push(this.letters[index].displayUnderscoreOrLetter());
        }

        if (array.join("").replace(/,/g, "") === this.word) {
            this.hasWon = true;
            return array.join(" ");
        }

        return array.join(" ");
    }
    
    this.fillBlanks = function(userGuess) {
        for (let index = 0; index < this.letters.length; index++) {
            this.letters[index].doesUserGuessMatch(userGuess);
        }
    }
}

module.exports = Word;