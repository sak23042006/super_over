//button
var strike = document.querySelector('#strike');

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

var team2Wicket_initial = 0;

var balls1_initial = 0;

var balls2_initial = 0;

var turn = 1;

var possibleOutcomes = ['w', 1, 2, 3, 4, 5, 0, 6];

strike.addEventListener('click', strikeButtonClicked);

function strikeButtonClicked(){
  strikeAudio.pause()
  strikeAudio.currentTime = 0;
  strikeAudio.play()

  var random = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
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
    if (balls1_initial == 6 || team1Wicket_initial > 2) {
      turn = 2;
    }
  update()
}
if (turn == 2) {
  //india batting
  balls2_initial++;
  var ball = document.querySelector(
    `#team2-supervisior div:nth-child(${balls2_initial})`
  );
  ball.innerHTML = random;

  if (random == 'w') {
    team2Wicket_initial++;
  } else {
    team2Score_initial += random;
  }
  update()
        if(team2Score_initial > team1Score_initial || team2Wicket == 2 || balls2_initial ==6 ){
            turn = 3;
            setTimeout(()=>{
                gameOver();
      },100)
    }
  }

};
function update() {
  team1Score.innerHTML = team1Score_initial;
  team1Wicket.innerHTML = team1Wicket_initial;
  team2Score.innerHTML = team2Score_initial;
  team2Wicket.innerHTML = team2Wicket_initial;
}

function gameOver(){
  gameOverAudio.pause()
  gameOverAudio.currentTime=0
  gameOverAudio.play()
  if(team1Score_initial>team2Score_initial){
      alert("INDIA WIN")
  }else if(team1Score_initial<team2Score_initial){
      alert("PAK WINS")
  }else if(team1Score_initial==team2Score_initial){
      alert("It's is a tie!")
  }
  document.querySelectorAll(".ball").forEach(kalvium=>{
      if(kalvium.innerHTML==""){
          kalvium.innerHTML="X"
          kalvium.style.backgroundColor = "grey"
      }
  }
      )
  }
reset.addEventListener("click",resetFunction)
function resetFunction(){
  window.location.reload()
}
