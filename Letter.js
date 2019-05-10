function Letter (letter, hasBeenGuessed) {
    this.letter = letter;
    this.hasBeenGuessed = false;

    this.displayUnderscoreOrLetter() = function () {
        if (this.hasBeenGuessed === true) {
            return this.letter;
        } else {
            return "_";
        }
    }

    this.checkIfGuessedLetterIsAMatch() = function (guessedLetter) {
        if (guessedLetter.toLowerCase() === this.letter) {
            this.hasBeenGuessed = true;
        }
    }
}