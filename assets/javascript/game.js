


{/* Computer needs to think of a random letter betwee a-z  
    When user selects a key from the keyboard the following happens 
    - need to store the value 
    - validate the value against the computer letter
        * If not match, add guess letter guessLetters and take away from GuessLeft total 
        * If matcch 
            - add point to Wins
            - restart game 
            - restarting the count for guesses left
            - clearing the letters for guesses made 

    
*/}



function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var getLetter = letters[Math.floor(Math.random() * letters.length)];
    return getLetter;
}

// function reset() {

// }

var chances = 9;
var letter = randLetter(); 
var win = 0;
var loss = 0;

    document.onkeyup = function(event) {
            
            var userGuess = event.key;
            
            document.getElementById("guessedLetters").innerHTML = userGuess; 

            if (userGuess != letter) {
                chances = chances - 1; 
                userGuess;
            }

            else if (userGuess == letter) {
                win++; 
                userChoiceText = userGuess;
                //call reset game function
            }

            // if (chances == 0) {

            //call reset game function 
                

            // }

        console.log(letter);
        console.log(win);
        console.log(chances);
        console.log(userGuess); 
    
    }; 

   








