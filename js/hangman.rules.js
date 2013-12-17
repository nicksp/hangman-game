/**
 * Hangman game
 *
 * Rules module
 */

// Words we're going to choose from
var words = ['propensity', 'provisional', 'pugnacious', 'ramshackle', 'rattlesnake', 'reciprocate',
    'recrimination', 'redoubtable', 'relinquish', 'remonstrate', 'repository', 'resolution', 'skyscraper',
    'underscore', 'cat', 'tree', 'swing', 'around', 'history'];

// This function will pick our word
function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function blanksFromAnswer(answer) {
    var result = '', i;
    // Concatenate a '_' to result for every letter in answer
    for (i in answer) {
        result = '_' + result;
    }
    return result;
}

// Replacing a letter
function alterAt(n, c, srcString) {
    return srcString.substr(0, n) + c + srcString.substr(n+1, srcString.length);
}

// Guess a letter
function guessLetter(letter, shown, answer) {
    var checkIndex = 0;

    checkIndex = answer.indexOf(letter);
    while (checkIndex >= 0) {
        shown = alterAt(checkIndex, letter, shown);
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}