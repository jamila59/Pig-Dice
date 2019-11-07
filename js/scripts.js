
// back-end logic
function Player (name, isActive) {
  this.name = name,
  this.score = 0,
  this.totalScore = 0,
  this.number = 0,
  this.active = isActive
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
  }
}

Player.prototype.changeActive = function () {
  if (this.active === true) { //checks player is active, if active player is not set to inactive
    this.active = false;
  } else {                    //otherwise, inactive is now set to active
    this.active = true;
  }
}

Player.prototype.alert = function() {
  if (this.totalScore >= 100) {
    alert("Congrats! You have won the game!");
  }
}
Player.prototype.getName = function() {
  console.log("getName: " + this.name);
  return this.name;
}
// user-interface
var nameFirstPlayer = "";
var nameSecondPlayer = "";
$(document).ready(function() {

$("#formOne").submit(function(event){
    event.preventDefault();
     nameFirstPlayer = $("input#nameID").val();
     nameSecondPlayer = $("input#nameID7").val();
});
   var newPlayer  = new Player(nameFirstPlayer , true);
   var newPlayer2  = new Player(nameSecondPlayer , false);
     console.log(nameFirstPlayer, nameSecondPlayer;
   //Rolling button
    $("#roll").click(function(){
      if (newPlayer.active === true) {
        // alert(" It is " + newPlayer.getName() + "'s turn ");
        newPlayer.roll();
        newPlayer.addScore();
        newPlayer.alert();
        $(".scorePerThisTurn1").text(newPlayer.number);
        $(".overallScore1").text(newPlayer.totalScore);
      } else {
        console.log(newPlayer2);
        newPlayer2.roll();
        newPlayer2.addScore();
        newPlayer2.alert();
        $(".scorePerThisTurn2").text(newPlayer2.number);
        $(".overallScore2").text(newPlayer2.totalScore);
      }
    });

    // "HOLD" button functionality
    $("#pause").click(function() {
    newPlayer.changeActive();
    alert(" It is " + newPlayer2.getName() + "'s turn ")
    console.log(newPlayer2.getName());
    newPlayer2.changeActive();
  });

 });
