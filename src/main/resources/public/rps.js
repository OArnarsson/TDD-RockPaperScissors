$(function() {
	var gameOver = false;
	console.log("The game is: " + gameOver);
	   
});


$('.newGame').click(function(){
	gameOver = false;
	ResetGame(this);
});

function isGameOver(param){
	var message;
	var isOver;

	switch (param) {
	    case "0":
	        message = null;
	        isOver = false;
	        break;
	    case "1":
	        message = "You win!";
	        isOver = true;
	        break;
	    case "2":
	        message = "You've been outsmarted!";
	        isOver = true;
	        break;
	    case "3":
	    	message = "It's a Draw!";
	    	isOver = true;
	    	break;
	}

	if(isOver){
		document.getElementById('GState').innerHTML = message;
		$('.GameBoard').css( "opacity", "0.5");
		$('.newGame').css( "display", "block");		

	}

	return isOver;
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
