// create an array of words
const cars = ["porsche", "audi", "bmw", "lotus", "mclaren"]
// choose word randomly
let ranNum = Math.floor(Math.random() * cars.length);
let rightWord = [];
let wrongWord = [];
let underScore = [];
let chosenWord = cars[ranNum];
console.log(chosenWord);

//dom manipulation 
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        
        
    }
     return underScore;
}

console.log(generateUnderscore());
// get user guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    // if Users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(keyword);
        // replace the underscore with the right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;

    }
    //checks to see if user word matches guesses
    if (underScore.join('') == chosenWord) {
        alert("You Win!");
    }

    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});
// generateUnderscore();


