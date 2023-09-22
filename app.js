//button
var strike = document.getElementById('strike');

var reset = document.querySelector('#reset');

//score
var team1Score = document.querySelector('#score-team1');

var team2Score = document.querySelector('#score-team2');

//wicket
var team1Wicket = document.querySelector('#wicket-team1');

var team2Wicket = document.querySelector('#wicket-team2');

//audio
var strikeAudio = new Audio('http://bit.ly/so-ball-hit');

var gameOverAudio = new Audio('http://bit.ly/so-crowd-cheer');

//values

var team1Score_initial = 0;

var team2Score_initial = 0;

var team1Wicket_initial = 0;

var team1Wicket_initial = 0;

var balls1_initial = 0;

var balls2_initial = 0;

var turn = 1;

var possibleOutcomes = ['w', 1, 2, 3, 4, 5, 0, 6];

strike.addEventListener('click', function () {
  strikeAudio.play();
  strikeAudio.currentTime = 0;

  var random =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
  console.log(random);
  if (turn == 1) {
    //india batting
    balls1_initial++;
    var ball = document.querySelector(
      `#team1-supervisior div:nth-child(${balls1_initial})`
    );
    ball.innerHTML = random;

    if (random == 'w') {
      team1Wicket_initial++;
    } else {
      team1Score_initial += random;
    }
    if (balls1_initial == 6 || team1Wicket > 2) {
      turn = 2;
    }
  }
  console.log(team1Wicket_initial);
  update1();
});
function update1() {
  team1Score.innerHTML = team1Score_initial;
  team1Wicket.innerHTML = team1Wicket_initial;
}
