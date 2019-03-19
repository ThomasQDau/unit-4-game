$(document).ready(function(){

var score = 0;
var wins = 0;
var losses = 0;
var emerald = 0;
var opal = 0;
var saph = 0;
var diamond = 0;
var target = 0;

// Starts or Restarts the game
function gameStart () {
    target = Math.floor(Math.random() * (100) + 19);
    emerald = Math.floor(Math.random() * (12) + 1);
    opal = Math.floor(Math.random() * (12) + 1);
    diamond = Math.floor(Math.random() * (12) + 1);
    saph = Math.floor(Math.random() * (12) + 1);
    score = 0;
    $("#target").text(target);
    // console.log(opal);
}

$(".jewels").on("click", function(){
    var jewelVal = $(this).attr("value");
    // alert("You've selected: " + jewelVal);
    switch (jewelVal) {
        case "diamond":
            score = score + diamond;
            break;
        case "emerald":
            score = score + emerald;
            break;
        case "saph":
            score = score + saph;
            break;
        case "opal":
            score = score + opal;
            break;
    }
    if (score == target) {
        wins++;
        $("#wins").text(wins);
        alert("You've won!");
        gameStart ();
    } else if (score > target) {
        losses++;
        $("#losses").text(losses);
        alert("You've lost!");
        gameStart ();
    }
    $("#score").text(score);
})

gameStart ();

})