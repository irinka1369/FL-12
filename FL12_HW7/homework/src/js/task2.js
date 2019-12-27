let gameQuestion = confirm('Do you want to play a game?');
let userPrize = 0;
let userAttempts = 3;
let rangeStep = 4;
let gameCoeff = 2;
let countReset = -1;

if (gameQuestion) {
  while (gameQuestion) {
    let startMaxPrize = 100;
    let possiblePrize = startMaxPrize;
    let i = 0;
    let maxRange = 8;
    let gameRandomNumb = Math.floor(Math.random() * (maxRange + 1));
    console.log(gameRandomNumb);
    for (i; i < userAttempts; i++) {
      if (i > 0) {
        possiblePrize /= gameCoeff;
      }
      let userNumber = parseInt(
        prompt(`Choose a roulette pocket number from 0 to ${maxRange}
            Attemts left:${userAttempts - i} 
            Total prize: ${userPrize}$ 
            Possible prize on current userAttempts:${possiblePrize}$`)
      );
      if (userNumber === gameRandomNumb) {
        userPrize += possiblePrize;
        alert(`Congratulation, you won! Your prize is:${userPrize}$`);
        if (confirm('Do you want to continue?')) {
          gameRandomNumb = Math.floor(Math.random() * (maxRange + 1));
          console.log(gameRandomNumb);
          maxRange += rangeStep;
          startMaxPrize *= gameCoeff;
          possiblePrize = startMaxPrize;
          i = countReset;
        } else {
          alert(
            `Thank you for your participation.Your prize is: ${userPrize}$`
          );
          userPrize = 0;
          break;
        }
      } else if (isNaN(userNumber)) {
        alert(`Thank you for your participation.Your prize is: ${userPrize}$`);
        break;
      }
    }
    gameQuestion = confirm('Do you want to play again?');
    userPrize = 0;
  }
} else {
  alert('You did not become a billionaire, but can.');
}
