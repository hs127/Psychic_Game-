


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
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let getLetter = letters[Math.floor(Math.random() * letters.length)];
    return getLetter;
}

 function reset() {
    //reset chances back to 9 
    //call new randLetter 
    //clear the guessesLetter HTML 
    chances = 9;
    letter = randLetter(); 
    console.log("hit reset function");
    console.log(chances); 
    console.log(letter);
    guessed=[]; 
 }

let chances = 9;
let letter = randLetter(); 
let win = 0;
let loss = 0;
let guessed = []; 
//when a key is pressed 
    document.onkeyup = function(event) {
            
            let userGuess = event.key;
            
            document.getElementById("guessedLetters").innerHTML = userGuess; 

            if (userGuess != letter) {
                chances--; 
                userGuess; 
                checker(chances); 
                //add letter to guessed array and show change id guessedLetters
                guessed.push(userGuess); 
            }

            else if (userGuess == letter) {
                win++; 
                userChoiceText = userGuess;
                reset(); 
            }
            function checker(e) {
                if (chances == 0) {
                    loss++; 
                    reset(); 

            }
        }
            
            document.getElementById("guessedLetters").innerHTML = guessed;
            document.getElementById("loss").innerHTML = loss;
            document.getElementById("left").innerHTML = chances;
            document.getElementById("wins").innerHTML = win;

            
        console.log(chances); 
        console.log(letter);
        console.log(win); 
        console.log(userGuess); 
    
    }; 

   








