var gameOver = false;
var i = 0;
var symbol = $('#computerAction');
var compActions = ['<i class="twa twa-punch"></i>', '<i class="twa twa-hand"></i>', '<i class="twa twa-v"></i>'];
var total = compActions.length;

//This is only for testing
randomComputer();

function randomComputer() {
	//Stops the roll when player has chosen
    if(this.gameOver) {
        symbol.html(this.compActions[0]);
    	return;
	}

	//Keeps the endless loop inside the array
    if(this.i === this.total){
        this.i = 0;
    }

	//Find the emoji in array, assigns to the span
    var currAction = this.compActions[i++];
    symbol.html(currAction);
    //Calls itself again to keep rolling
    setTimeout(randomComputer, Math.random() * 130 + 42);
}


$('.newGame').click(function(){
	gameOver = false;
    doTheRandom();
});


function isGameOver(param){
	var message;

	switch (param) {
	    case "0":
	        message = null;
	        break;
	    case "1":
	        message = "You win!";
	        this.gameOver = true;
	        break;
	    case "2":
	        message = "You've been outsmarted!";
            this.gameOver = true;
	        break;
	    case "3":
	    	message = "It's a Draw!";
            this.gameOver = true;
	    	break;
	}
}


function newGame(disItem){
	ServiceCalls("/newGame");
}

function ServiceCalls(ServiceURL){
	$.ajax({
         type: "POST",
         data: null,
         url: ServiceURL,
         success: function (data) {
             console.log("All good my man!");         
         },
         error: function () {
             console.log("No bueno.");
         }
     });
}


function ServiceCalls(ServiceURL, param){
	$.ajax({
         type: "POST",
         data: {"cellId":param},
         url: ServiceURL,
         success: function (data) {
             console.log("All good my man!");
             console.log(data);      
         },
         error: function () {
             console.log("No bueno.");
         }
     });
}
