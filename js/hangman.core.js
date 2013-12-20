/**
 * Hangman game
 *
 * Core module
 */

function resetGame() {
    resetUI();
    gameAnswer = chooseWord();
    gameShownAnswer = blanksFromAnswer(gameAnswer);
    hangmanState = 0;
    drawWord(gameShownAnswer);
}

$(document).ready(resetGame);

function win() {
    alert('Congrats lucky guy!');
    resetGame();
}

function lose() {
    alert('Oh no, it\'s not your day today!');
    resetGame();
}

function doKeypress() {
    var $inputLetter = $('#letter-input');
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = '';

    // Prevent keyup event firing
    if (!$inputLetter.val().length) {
        return false;
    }

    $inputLetter.val('');

    tempString = guessLetter(tempChar, gameShownAnswer, gameAnswer);
    if (tempString != gameShownAnswer) {
        updateWord(tempString);
        gameShownAnswer = tempString;
        if (gameShownAnswer === gameAnswer) {
            win();
        }
    } else {
        wrongLetter(tempChar);
        drawSequence[hangmanState++ ]();
        if (hangmanState === drawSequence.length) {
            lose();
        }
    }
}

$('#letter-input').keyup(doKeypress);