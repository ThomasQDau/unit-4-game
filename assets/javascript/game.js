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
    target = Math.floor(Math.random() * (120 - 20) + 19);
    emerald = Math.floor(Math.random() * (12) + 1);
    opal = Math.floor(Math.random() * (12) + 1);
    diamond = Math.floor(Math.random() * (12) + 1);
    saph = Math.floor(Math.random() * (12) + 1);
    score = 0;
    console.log(opal);
}

$(".jewels").on("click", function(){
    var jewelVal = $(this).val();
    alert(jewelVal);
    $("#score").text(score);
    
})

gameStart ();

