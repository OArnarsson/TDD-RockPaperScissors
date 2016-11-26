var randComp;
var i = 0;
var gameOver = false;
var allActions = ['<i class="twa twa-punch"></i>', '<i class="twa twa-hand"></i>', '<i class="twa twa-v"></i>'];
var total = allActions.length;
var compActionHTML = document.getElementById('ComputerAction');
var playerActionHTML = document.getElementById('PlayerAction');
var winText = document.getElementById('winText');
var drawText = document.getElementById('drawText');
var loseText = document.getElementById('loseText');
var winNumber = document.getElementById('PlayerWins');
var drawNumber = document.getElementById('TotalDraws');
var loseNumber = document.getElementById('ComputerWins');

function updateScore(data) {
    var jason = JSON.parse(data);
    winNumber.innerHTML = jason.totalWins;
    drawNumber.innerHTML = jason.totalDraws;
    loseNumber.innerHTML = jason.totalLosses;
    if(jason.gameStatus === -1) { gameOver = false; }
    else { gameOver = true; }
}

function updateActions(data) {
    var jason = JSON.parse(data);
    playerActionHTML.innerHTML = allActions[jason.playerAction];
    compActionHTML.innerHTML = allActions[jason.computerAction];

    if(jason.gameStatus == 1) {
        playerActionHTML.className = "winner";
        compActionHTML.className = "loser";
        winText.className = "pWins winText";
    }
    else if(jason.gameStatus == 2) {
        playerActionHTML.className = "loser";
        compActionHTML.className = "winner";
        loseText.className = "cWins loseText";
    }
    else {
        playerActionHTML.className = "draw";
        compActionHTML.className = "draw";
        drawText.className = "tGames drawText";
    }

}

$('.pAction').click(function(){
    if(!gameOver) { ServiceCalls("/action", this.id); }
});

function ServiceCall(ServiceURL){
	$.ajax({
         type: "PUT",
         data: null,
         url: ServiceURL,
         success: function (data) {
             updateScore(data);
             randomComputer();
         },
         error: function () {
             console.log("No bueno.");
         }
     });
}

function ResetAction(ServiceURL){
    $.ajax({
        type: "PUT",
        data: null,
        url: ServiceURL,
        success: function (data) {
            //Sets all colors back to normal
            resetColors();
            //Starts rolling the computer actions
            randomComputer();
            //Sets gameOver to false
            updateScore(data);
        },
        error: function () {
            console.log("No bueno.");
        }
    });
}

function ServiceCalls(ServiceURL, param){
	$.ajax({
         type: "PUT",
         data: {"actionID":param},
         url: ServiceURL,
         success: function (data) {
             stopRandom();
             updateScore(data);
             updateActions(data);
             setTimeout(resetGame, 1000);
         },
         error: function () {
             console.log("No bueno.");
         }
     });
}

function resetGame() {
    ResetAction("/newGame");
}

function resetColors() {
    playerActionHTML.innerHTML = '<i class="twa twa-boy"></i>';
    playerActionHTML.className = "";
    compActionHTML.className = "";
    loseText.className = "cWins";
    drawText.className = "tGames";
    winText.className = "pWins";
}

$('.newGame').click(function(){
    //Removes the 'NewGameButton' and unhides the score banner.
    document.getElementById('NewGameButton').className = "dispNone";
    document.getElementById('Score').className = "scoreCounters";
    ServiceCall("/newGame");
});

function randomComputer() {
    //Starts rolling the computer action
    randComp = window.setInterval(changeComputer, 65);
}

function changeComputer() {
    if (i === total) { i = 0; }
    //Find the emoji in array, assigns to the span
    compActionHTML.innerHTML = allActions[i++];
}

function stopRandom() {
    window.clearTimeout(randComp);
}