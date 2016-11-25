var randComp;
var i = 0;
var allActions = ['<i class="twa twa-punch"></i>', '<i class="twa twa-hand"></i>', '<i class="twa twa-v"></i>'];
var total = allActions.length;
var compActionHTML = document.getElementById('ComputerAction');
var playerActionHTML = document.getElementById('PlayerAction');

function updateScore(data) {
    var jason = JSON.parse(data);
    document.getElementById('PlayerWins').innerHTML = jason.totalWins;
    document.getElementById('TotalDraws').innerHTML = jason.totalDraws;
    document.getElementById('ComputerWins').innerHTML = jason.totalLosses;
}

function updateActions(data) {
    var jason = JSON.parse(data);
    playerActionHTML.innerHTML = allActions[jason.playerAction];
    compActionHTML.innerHTML = allActions[jason.computerAction];
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
             updateScore(data);
             randomComputer();
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
             updateScore(data);
             stopRandom();
             updateActions(data);
             setTimeout(randomComputer ,2000);
         },
         error: function () {
             console.log("No bueno.");
         }
     });
}

function randomComputer() {
    //Stops the roll when player has chosen
    playerActionHTML.innerHTML = '<i class="twa twa-boy"></i>';
    randComp = window.setInterval(changeComputer, 65);
}

function changeComputer() {
    console.log("changed");
    if (i === total) {
        i = 0;
    }
    //Find the emoji in array, assigns to the span
    compActionHTML.innerHTML = allActions[i++];
}

function stopRandom() {
    window.clearTimeout(randComp);
}

$('.newGame').click(function(){
    //Removes the 'NewGameButton' and unhides the score banner.
    document.getElementById('NewGameButton').className = "dispNone";
    document.getElementById('Score').className = "scoreCounters";
    ServiceCall("/newGame");
});