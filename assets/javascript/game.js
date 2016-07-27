var index = 0;
$(document).ready(function(){
	startGame();
	var debug;
	var time;
	// WATCH FOR INDEX
	//INDEX STARTS AT 0

	
// THIS IS MY TIMER 
	function countDown(){
		secondsLeft--;
		$("#timer").html(secondsLeft);
		if (secondsLeft < 1) {
			clearInterval(time);
			$("#questiontext").html("Out of time!");
			$("#answertext").html("The Correct Answer was: " + randomObject.answer);
			if (index < 3) {
					console.log("this is the countDown index++");
					index++;
					setTimeout(fillWords, 3000);
				}
				else{
					startFillWords();
				}
			
		};
	};
	//TIMER END



	


	//START BUTTON
	// HIDES EVERYTHING EXCEPT START BUTTON UNTIL PRESSED
	// CALLS FUNCTION FILLWORDS()
	function startGame(){

		console.log("BEFORE I set index to 0 in startGame: " + index);
		index = 0;
		$("#startbutton").show();
		$("#gamecontainer").hide();
		$("#endgame").hide();
		$("#startbutton").click(startButtonFade);
	};


	//I MADE THIS TO ISOLATE IT, DEBUGGING
	function startButtonFade(){
			$("#startbutton").fadeOut("slow", function(){
				$("#gamecontainer").fadeIn("slow", fillWords);
			});		
		};
	


	

	// THIS FUNCTION FILLS THE QUESTION, BUTTONS, AND TIMER//
	

	//IT FIRES MANY TIMES 
	// AFTER ROUND 1 IT FIRES OVER AND OVER
	// WHY
	function fillWords(){
		clearTimeout(debug);

		console.log("YOU SHOULD SEE THIS ONCE PER ROUND index is: " + index);
		// SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		// SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 

		
		// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		
		
		
		

		//TIMER STUFF
		clearInterval(time);
		clearTimeout(debug);
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

		var thirdObject = {
			question: "Who trained Obi-Wan?", 
			answer: "Qui-Gon Jinn", 
			guess1: "Yoda", 
			guess2: "Mace Windu",
			guess3: "Darth Sidius"
		}
		
		
		// GETS A RANDOM OBJECT
				// I'M GONNA TAKE THEM OUT AS THEY ARE PICKED
		// FILLS THE QUESTION AND GUESSES HTML
		// YEAH IT REPEATS RIGHT NOW
		// NOT THE PROBLEM
		$("#answertext").hide();
		var objectArray = [firstObject, secondObject, thirdObject];
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
		$(".guess").mouseup(click);
	


	}
	//FUNCTION FILLWORDS END
	//FUNCTION FILLWORDS END
	

	// I MADE THIS FOR DEBUGGING
	function startFillWords(){
		
		console.log("BEFORE startFillWords index++" + index);
		index ++;
		var debug = setTimeout(fillWords, 3000);
	}
	// TRYING TO ISOLATE THINGS

	
	// CLICK
	// GUESS CHECKER
	// THE PROBLEM COULD BE HERE
	function click(){
		
		console.log("ONCLICK index is: " + index);
			var yourGuess = $(this).html();
			
			if(yourGuess == randomObject.answer){
				console.log("RIGHT ANSWER");
				clearInterval(time);
				$("#questiontext").html("Correct!");
				$("#buttongroup").fadeOut();
				$("#answertext").html("The Correct Answer was: " + randomObject.answer);
				$("#answertext").fadeIn();
				changes();

				
			}
			else{
				console.log("WRONG ANSWER");
				clearInterval(time);
				$("#questiontext").html("Nope!");
				$("#buttongroup").fadeOut();
				$("#answertext").html("The Correct Answer was: " + randomObject.answer);
				$("#answertext").fadeIn();
				changes()
				
				
			};
		};
		//FUNCTION CLICK END
		//FUNCTION CLICK END
		//FUNCTION CLICK END

		function changes(){
				if (index < 3) {
					startFillWords();

				}
				else{
					
					finishGame();
				};
		};

	

	// THIS FIRES TWICE
	function finishGame(){
		console.log("FINISHGAME index is: " + index);
		$("#gamecontainer").fadeOut();
		
		$("#endgame").fadeIn()
		
		var playAgain = confirm("PLAY AGAIN?");
		if (playAgain === true) {
			// index = 0
			// console.log("I just set index as 0");
			startGame();
		}
		else{

		};
	};
	// THIS FIRES TWICE




});// END END END END END END END END 