var words = ["rock", "paper", "scissors"];
var wins = 0
var losses = 0
var draws = 0

for (var i = 0; i < 10; i++) {
    var userAnswer = prompt("rock, paper or scissors?");
    userAnswer = userAnswer.toLowerCase()

    // if (userAnswer !== 'rock' && userAnswer !== 'paper' && userAnswer !== 'scissors') 
    if (!words.includes(userAnswer)) { alert('Try again!'); i-- }
    else {
        console.log(userAnswer);

        let randomNumber = Math.floor((Math.random() * 3));
        var computerAnswer = words[randomNumber];
        console.log(computerAnswer)

        if (userAnswer === computerAnswer) {
            console.log('Its a draw!')
            alert('Its a draw!')
            draws++
        }
        else if ((userAnswer === 'rock' && computerAnswer === 'scissors') ||
            (userAnswer === 'paper' && computerAnswer === 'rock') ||
            (userAnswer === 'scissors' && computerAnswer === 'paper')) {
            console.log('You won!');
            alert("You won!")
            wins++
        }
        else {
            console.log('You lost!')
            alert('You lost!')
            losses++
        }
    }
}
console.log('Number of Draws;', draws);
console.log('Number of wins', wins);
console.log('Number of losses', losses);
alert("You won " + wins + " " + 'times\n' + "You drew " + draws + " " + 'times\n' + "You lost " + losses + " " + 'times\n')
