function playGame() {
    let number = Math.floor(Math.random() * 5) + 1;
    let guess = prompt("Guess a number (1-5)");

    if (guess == number) {
        document.getElementById("result").innerText = "You Win! 🎉";
    } else {
        document.getElementById("result").innerText = "You Lose! Number was " + number;
    }
}
