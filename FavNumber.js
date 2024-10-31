let favNumber = 7; // Example favorite number
let guess; // Variable to store the user's guess

while (true) {
    guess = parseInt(prompt("Guess my favorite number:"));
    if (guess === favNumber) {
        console.log("Correct! You guessed my favorite number.");
        break;
    } else if (guess < favNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}





