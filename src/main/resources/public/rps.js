var gameOver = true;
var i = 0;
var symbol = $('#computerAction');
var allActions = ['<i class="twa twa-punch"></i>', '<i class="twa twa-hand"></i>', '<i class="twa twa-v"></i>'];
var total = allActions.length;


function updateScore(data) {
    var jason = JSON.parse(data);
    console.log("STATE is: " + jason.gameStatus);
    if(jason.gameStatus == -1) {
        gameOver = false;
    }
    console.log("game over is: " + this.gameOver);
    document.getElementById('PlayerWins').innerHTML = jason.totalWins;
    document.getElementById('TotalDraws').innerHTML = jason.totalDraws;
    document.getElementById('ComputerWins').innerHTML = jason.totalLosses;
}

function updateActions(data) {
    var jason = JSON.parse(data);
    document.getElementById('PlayerAction').innerHTML = allActions[jason.playerAction];
    document.getElementById('ComputerAction').innerHTML = allActions[jason.computerAction];
}

$('.pAction').click(function(){
    ServiceCalls("/action",this.id);
});

function ServiceCall(ServiceURL){
	$.ajax({
         type: "PUT",
         data: null,
         url: ServiceURL,
         success: function (data) {
             console.log("Line 30");
             updateScore(data);
             //randomComputer();
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
             console.log(data);
             console.log("before: " + gameOver);
             updateScore(data);
             updateActions(data);
             console.log("after: " + gameOver);
             setTimeout(randomComputer() ,2000);
         },
         error: function () {
             console.log("No bueno.");
         }
     });
}

function randomComputer() {
    //Stops the roll when player has chosen
    while(!gameOver) {
        setTimeout(changeComputer(), Math.random() * 130 + 42);
    }
}

function changeComputer() {
    if (this.i === this.total) {
        this.i = 0;
    }
    //Find the emoji in array, assigns to the span
    var currAction = this.allActions[i++];
    document.getElementById('ComputerAction').innerHTML = currAction;
}

$('.newGame').click(function(){
    //Removes the 'NewGameButton' and unhides the score banner.
    document.getElementById('NewGameButton').className = "dispNone";
    document.getElementById('Score').className = "scoreCounters";
    ServiceCall("/newGame");
});