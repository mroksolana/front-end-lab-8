let iAmMilioner = confirm("Do you want to play a game?");

while (iAmMilioner) {
    var curentPrise, totalPrise, firstPrise = 10,
        secondPrise = 5,
        thirdPrise = 2,
        diapason = 6,
        chance = 0,
        guessCount = 0,
        guessCountLeft = 3,
        nextGuess = true,
        maxPossiblePrize = 10,
        currentPrize = 10
    var randNum = Math.floor(Math.random() * diapason);


    while (guessCountLeft < 3 && nextGuess) {
        var userNum = prompt(`Enter a number from 0 to ${diapason - 1}\nAttempts left: ${guessCountLeft}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${currentPrize}$`);
    }
    if (!isNaN(parseFloat(userNum)) && isFinite(userNum) && Number(userNum) === randNum) {
        totalPrize += currentPrize;
        var guessCount = 0,
            guessCountLeft = 0,
            diapason = range * 2,
            var maxPossiblePrize *= 3;
        currentPrize = maxPossiblePrize;
        randNum = Math.floor(Math.random() * diapason);
        nextGuess = confirm('Do you want to continue a game?');
    } else {

        guessCountLeft--;
        guessCount++;

        currentPrize = Math.floor(maxPrize / (guessCount * 2));
    }
}

console.log(`Thank you for a game. Your prize is ${totalPrize}`);
iAmMilioner = confirm('Do you want to try again?');
chance++;


if (!chance) {
    console.log('You did not become a millionaire');
}
