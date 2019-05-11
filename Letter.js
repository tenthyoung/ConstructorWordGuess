function Letter (letter) {
    this.letter = letter;
    this.hasBeenGuessed = false;

    this.displayUnderscoreOrLetter = function () {
        if (this.hasBeenGuessed === true) {
            return this.letter;
        } else {
            if(this.letter === " ") {
                return " "
            } else {
                return "_";
            }
        }
    }

    this.doesUserGuessMatch = function (guessedLetter) {
        if (guessedLetter.toLowerCase() === this.letter.toLowerCase()) {
            this.hasBeenGuessed = true;
        } 
    }
}

var test = new Letter ("a")
test.doesUserGuessMatch("a")

module.exports = Letter;

