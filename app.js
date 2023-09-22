//button
var strike = document.getElementById('strike');

var reset = document.querySelector('reset');

//score
var team1Score = document.querySelector('score-team1');

var team2Score = document.querySelector('score-team2');

//wicket
var team1Wicket = document.querySelector('wicket-team1');

var team1Wicket = document.querySelector('wicket-team2');

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

var possibleOutcomes = [0, 1, 2, 3, 4, 5, 6, 'W'];

strike.addEventListener('click', function () {
  strikeAudio.play();
  strikeAudio.currentTime = 0;

  var random =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
});
