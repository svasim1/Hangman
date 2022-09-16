
const guessedLetters = [];
let correctWord = prompt("Enter the word for the other player/s to guess!");
let guessesLeft = 10;

function stringContainsOnlyLetters(str) {
    return /^[a-zA-Zåäö]+$/.test(str);
}

if(stringContainsOnlyLetters(correctWord) == false) {
    correctWord = "ERROR";
    alert("Word can't contain any spaces or special characters.");
}

const correctLetters = correctWord.toLowerCase().split("");

console.log(correctLetters);

function guess() {
    let guessInput = document.getElementById("guessInput").value.toLowerCase();
    console.log(guessInput);
    if(guessedLetters.includes(guessInput)) {
        alert("You have already guessed this letter!")
    }
    else guessedLetters.push(guessInput);

    let [partialWord, finished] = getPartialWord();
    console.log("Partial word:", partialWord, "correct:", finished);
}


/* if(guessedLetters.includes(correctLetters)) {
    alert("RÄTT");
}  */

function getPartialWord() {
    let wrong = 0;
    let out = "";
    for(let i = 0; i < correctWord.length; i++) {
        const c = correctWord.charAt(i);
        if(guessedLetters.includes(c)) {
            out += c+" ";
        } else {
            out += "_ ";
            wrong++;
        }
    }

    return [out.substring(0, out.length-1), wrong == 0];
}