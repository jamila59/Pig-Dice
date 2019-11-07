// back-end logic
var turn = true
function Player (name) {
  this.name = name,
  this.score = 0,
  this.totalScore = 0,
  this.number = 0
  this.active = active
}

Player.prototype.roll = function () {
  this.number = Math.ceil( Math.random() * 6 );
}

Player.prototype.addScore = function () {
  if (this.number !== 1 ){
    this.totalScore += this.number;
    console.log(this.totalScore);
  } else if (this.number === 1) {
    this.score = 0;
    this.totalScore = 0;
    }
}

Player.prototype.alert = function() {
  if (this.totalScore >= 10) {
    alert("Congrats! You have won the game!");
  }
}
// user-interface
$(document).ready(function() {
  var newPlayer  = new Player();
  $("#formOne").submit(function(event){
    event.preventDefault();
    newPlayer.roll();
    newPlayer.addScore();
    newPlayer.alert();
    newPlayer.inputtedName = $("input#name").val();
    $(".whatRoll").text(newPlayer.number);
    $(".score").text(newPlayer.totalScore);
  });
 });
