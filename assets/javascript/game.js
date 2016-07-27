var index;
$(document).ready(function(){
		startGame();

	var time;
	// WATCH FOR INDEX
	//INDEX STARTS AT 0
	index = 0;
	console.log("index is: " + index);

	
// THIS IS MY TIMER 
	function countDown(){
		secondsLeft--;
		$("#timer").html(secondsLeft);
		if (secondsLeft < 1) {
			clearInterval(time);
			$("#questiontext").html("Out of time!");
			$("#answertext").html("The Correct Answer was: " + randomObject.answer);
			if (index = 2) {
					finishGame();
				}
				else{
					index = index+1;
					setTimeout(fillWords, 3000);
				}
			
		};
	};
	//TIMER END



	


	//START BUTTON
	// HIDES EVERYTHING EXCEPT START BUTTON UNTIL PRESSED
	// CALLS FUNCTION FILLWORDS()
	function startGame(){
		index = 0;
		console.log("I just set index to 0 in startGame");
		$("#startbutton").show();
		$("#gamecontainer").hide();
		$("#endgame").hide();
		$("#startbutton").click(function(){
			$("#startbutton").fadeOut("slow", function(){
				$("#gamecontainer").fadeIn("slow", fillWords());
			});		
		});
	};

	
	


	

	// THIS FUNCTION FILLS THE QUESTION, BUTTONS, AND TIMER//
	//IT FIRES MANY TIMES 
	// WHY
	function fillWords(){




		// SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		// SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		console.log("At the beginning of fillwords index is: " + index);
		
		// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		
		
		
		

		//TIMER STUFF
		clearInterval(time);
		secondsLeft = 20;
		$("#timer").html(secondsLeft);
		time = setInterval(countDown, 1000);
		// TIMER STUFF END



		// MY OBJECTS
		var firstObject = {
		 	question: "Who defeated Darth Maul?",
		 	answer: "Obi-Wan Kenobi",
		 	guess1: "Anakin Skywalker",
		 	guess2: "Luke Skywalker",
		 	guess3: "Darth Maul",
		 	gif: "darthmaul.gif"
	 	}

		var secondObject = {
			question: "Who killed Jango Fett?", 
			answer: "Mace Windu", 
			guess1: "Yoda", 
			guess2: "Qui-Gon Jinn",
			guess3: "Darth Sidius"
		}
		
		
		// GETS A RANDOM OBJECT
				// I'M GONNA TAKE THEM OUT AS THEY ARE PICKED
		// FILLS THE QUESTION AND GUESSES HTML
		// YEAH IT REPEATS RIGHT NOW
		// NOT THE PROBLEM
		$("#answertext").hide();
		var objectArray = [firstObject, secondObject];
		randomObject = objectArray[Math.floor((Math.random() * objectArray.length))];
		$("#questiontext").html(randomObject.question);
		var guessesArray = [randomObject.answer, randomObject.guess1, randomObject.guess2, randomObject.guess3];
		for (var i = 1; i < 5; i++) {
			var randomNumber = Math.floor((Math.random() * guessesArray.length))
			var randomGuess = guessesArray[randomNumber];
			$("#b" + i).html(randomGuess);
			guessesArray.splice(randomNumber, 1);
		}
		$("#buttongroup").show()
		// BUTTON ONCLICKS
		$(".guess").click(click);
	


	}
	//FUNCTION FILLWORDS END
	//FUNCTION FILLWORDS END
	

	// I MADE THIS FOR DEBUGGING
	function startFillWords(){
		index ++;
		setTimeout(fillWords, 3000);
	}
	// TRYING TO ISOLATE THINGS

	
	
	// GUESS CHECKER
	// THE PROBLEM COULD BE HERE
	function click(){
		debug = index;
		console.log("first on button click index is: " + index);
			var yourGuess = $(this).html();
			
			if(yourGuess == randomObject.answer){
				clearInterval(time);
				$("#questiontext").html("Correct!");
				$("#buttongroup").fadeOut();
				$("#answertext").html("The Correct Answer was: " + randomObject.answer);
				$("#answertext").fadeIn();	
				console.log("on button click index is: " + index);
				if (index > 2) {
					console.log("still in click function, index > 2 if you see this");
					finishGame();

				}
				else{
					console.log("still in click function, index <= 2 if you see this");
					
					startFillWords();
				}
				
			}
			else{
				clearInterval(time);
				$("#questiontext").html("Nope!");
				$("#buttongroup").fadeOut();
				$("#answertext").html("The Correct Answer was: " + randomObject.answer);
				$("#answertext").fadeIn();
				console.log("on button click index is: " + index);
				if (index > 2) {
					console.log("still in click function, index > 2 if you see this");
					finishGame();

				}
				else{
					console.log("still in click function, index <= 2 if you see this");
					
					startFillWords();
				}
			};
		};
		//FUNCTION CLICK END
		//FUNCTION CLICK END
		//FUNCTION CLICK END


	

	// THIS IS RIDICULOUS WTF
	// THIS IS RIDICULOUS WTF
	function finishGame(){
		console.log("First in function finishGame index is: " + index);
		$("#gamecontainer").fadeOut();
		
		$("#endgame").fadeIn()
		
		var playAgain = confirm("PLAY AGAIN?");
		if (playAgain === true) {
			console.log("in function finishGame index is: " + index);
			// index = 0
			// console.log("I just set index as 0");
			startGame();
		}
		else{

		};
	};

	// THIS IS RIDICULOUS WTF
	// THIS IS RIDICULOUS WTF




});// END END END END END END END END 