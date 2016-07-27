
$(document).ready(function(){
	var time;
	var count;
	var objectArray = [
		{question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: "darthmaul.gif"}, 
		{question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius", gif: "jango.gif"}, 
		{question: "Trained Obi-Wan?",answer: "Qui-Gon Jinn", guess1: "Anakin Skywalker", guess2: "Mace Windu", guess3: "Darth Sidius", gif: "qui-gon.gif"},
		];
	
	function resetValues(){
		workingArray = [
		{question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: "darthmaul.gif"}, 
		{question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius", gif: "jango.gif"}, 
		{question: "Trained Obi-Wan?",answer: "Qui-Gon Jinn", guess1: "Anakin Skywalker", guess2: "Mace Windu", guess3: "Darth Sidius", gif: "qui-gon.gif"},
		];
		count = 0;
		correct = 0;
		incorrect = 0;
		unAnswered = 0;
		clearInterval(time);
		startGame();

	}




	resetValues();
	
	function startGame(){
		
		// WHY IS THIS ASSIGNING BACKWARDS?????
		// WHY IS THIS ASSIGNING BACKWARDS?????
		// WHY IS THIS ASSIGNING BACKWARDS?????
		


		$("#startbutton").show();
		$("#gamecontainer").hide();
		$("#answers").hide();
		$("#endgame").hide();
		$("#startbutton").click(function(){
			$("#startbutton").hide()
			$("#gamecontainer").show()
			fillWords()
			// function(){
			// 	$("#startbutton").fadeOut("slow", function(){
			// 		$("#gamecontainer").fadeIn("slow", fillWords);
			// 	});		
			// }
		});
	};

	

	// THIS IS MY TIMER 
	function countDown(){
		secondsLeft--;
		$("#timer").html(secondsLeft);
		if (secondsLeft < 1) {
			console.log("TIME");
			clearInterval(time);
			$("#questiontext").html("Out of time!");
			$("#buttongroup").hide();
			$("#answers").html("<h2>The Correct Answer was: " + randomObject.answer + "</h2><br><img src='assets/images/" + randomObject.gif + "'>");
			$("#answers").show();
			
			unAnswered++;
			// console.log(unAnswered);
			count++;
			
			if(count >= objectArray.length){
				// console.log("finish");
				setTimeout(finishGame, 4000);
			}
			else{
				// console.log("Continue");
				
				setTimeout(fillWords, 4000);
			};
		};
	
		





	};
	//TIMER END



	// function startFillWords(){
	// 	$("#startbutton").hide();
	// 	$("#answertext").hide();
	// 	setTimeout(fillWords, 3000);
	// }


	function fillWords(){
		$("#answers").hide();
		// console.log("correct: " + correct);
		// console.log("incorrect: " + incorrect);
		// console.log("unAnswered: " + unAnswered);
		console.log("YOU SHOULD ONLY SEE THIS ONCE PER QUESTION");

		// SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		// // SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		// console.log("At the beginning of fillwords index is: " + index);
		
		// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		

		//TIMER STUFF
		secondsLeft = 10;
		clearInterval(time);
		$("#timer").html(secondsLeft);
		time = setInterval(countDown, 1000);
		// TIMER STUFF END

		
		
		// GETS A RANDOM OBJECT
				// I'M GONNA TAKE THEM OUT AS THEY ARE PICKED
		// FILLS THE QUESTION AND GUESSES HTML
		// YEAH IT REPEATS RIGHT NOW
		// NOT THE PROBLEM

		
		// workingObjectArray = [
		// {question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: "darthmaul.gif"}, 
		// {question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius", gif: "jango.gif"}, 
		// {question: "Who trained Obi-Wan Kenobi?",answer: "Qui-Gon Jinn", guess1: "Anakin Skywalker", guess2: "Mace Windu", guess3: "Darth Sidius", gif: "qui-gon.gif"},
		// ];
		
		var randomNumber = Math.floor((Math.random() * workingArray.length))
		
		randomObject = workingArray[randomNumber];
		workingArray.splice(randomNumber, 1);
		
		$("#questiontext").html(randomObject.question);
		
		
		var guessesArray = [randomObject.answer, randomObject.guess1, randomObject.guess2, randomObject.guess3];
		for (var i = 1; i < 5; i++) {
			var randomNumber = Math.floor((Math.random() * guessesArray.length))
			var randomGuess = guessesArray[randomNumber];
			$("#b" + i).html(randomGuess);
			guessesArray.splice(randomNumber, 1);
		}
		$("#buttongroup").show()
		
	


	}
	//FUNCTION FILLWORDS END


	$(".guess").on("click", function(){
		clearInterval(time);
		var yourGuess = $(this).html();
		if(yourGuess == randomObject.answer){
			$("#questiontext").html("Correct!");
			correct++
			// console.log("count: " + count);
			count++
			// return correct;
			
		}
		else{
			$("#questiontext").html("Nope!");			
			// console.log("count: " + count);
			count++
			incorrect++;
			// return incorrect;
		};
		

		console.log("count++ is: " + count);
		$("#buttongroup").hide();
		$("#answers").show();
		$("#answers").html("<h2>The Correct Answer was: " + randomObject.answer + "</h2><br><img src='assets/images/" + randomObject.gif + "'>");
				
		if(count >= objectArray.length){
			// console.log("Finish");
			setTimeout(finishGame, 4000);
		}else {
			// console.log("Continue");
			
			setTimeout(fillWords, 4000);
		};

	});

	// function correctAnswer(){
	// 	correct++;
	// 	return correct;
	// }
	// function incorrectAnswer(){
	// 	return incorrect++;
	// 	console.log(incorrect);
	// }
	// function unAnswered(){
	// 	return unAnswered++;
	
	

	// if(correct + incorrect + unAnswered > 1){
	// 			finishGame();
	// 		}

	function finishGame(){
		$("#gamecontainer").fadeOut("slow");
		$("#endgame").fadeIn("slow", function(){
			play = confirm("PLAY AGAIN?");
			if (play) {
			console.log("RESTARTING GAME");
			resetValues();
		}
		else{
			$("#gamecontainer").fadeOut("slow");
			$("#endgame").fadeIn("slow");
		};
		});

		
		
	};


	


});
