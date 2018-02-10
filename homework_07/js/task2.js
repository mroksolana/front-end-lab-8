    var randNum = Math.floor(Math.random() * 5) + 1;
    console.log(randNum);
    var guessCount = 3;
    
    confirm ("Do you want to play a game?")
    var textMessage = "So, we will start a GAME!"
    
    while (guessCount > 0) {
      var userNum = prompt(" You have " + guessCount + " guesses left." );
      if (!userNum) break;
      userNum = Number(userNum);
      if (userNum == randNum) {
        alert ("you win!")
       
        
      } else {
        alert("No.You have one more chance");
        guessCount = guessCount - 1;
      }
    }


   
    alert ('The secret number was ' + randNum + '.')
   



