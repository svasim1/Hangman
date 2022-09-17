window.addEventListener("DOMContentLoaded", function(ev) {
    document.getElementById("partialWord").innerText = getPartialWord()[0];
})

const guessedLetters = [];

//Prevent correctWord from containing spaces or special characters
function stringContainsOnlyLetters(str) {
    return /^[a-zA-ZåäöÅÄÖ]+$/.test(str);
}
if(!stringContainsOnlyLetters(correctWord)) {
    correctWord = "ERROR";
    alert("Word can't contain any spaces or special characters.");
}

function guess() {
    //Get the guessInput
    let guessInput = document.getElementById("guessInput").value.toLowerCase();

    if(!stringContainsOnlyLetters(guessInput)) {
        alert("Please enter a valid character.");
        return;
    }

    //TEMPORARY
    console.log(guessInput);

    //Clear input after guess
    document.getElementById("guessInput").value = "";

    //Prevent the user from guessing the same letter twice
    if(guessedLetters.includes(guessInput)) {
        alert("You have already guessed this letter!");
    }
    //Push the guessInput to the guessedLetters array
    else guessedLetters.push(guessInput);

    let [partialWord, finished] = getPartialWord();

    document.getElementById("partialWord").innerText = partialWord.toUpperCase();
    
    //TEMPORARY
    console.log("Partial word:", partialWord, "finished:", finished);

    //Congratulate you when you win
    if(finished) {
        if(confirm("Congratulations, you guessed it!\nPlay again?")) {
            window.location.href = "/";
        }
    }
}

function getPartialWord() {
    let wrong = 0;
    let out = "";
    for(let i = 0; i < correctWord.length; i++) {
        const c = correctWord.charAt(i);
        if(guessedLetters.includes(c.toLowerCase())) {
            out += c+" ";
        } else {
            out += "_ ";
            wrong++;
        }
    }

    return [out.substring(0, out.length-1), wrong == 0];
}