
$(document).ready(function(){
	var time;
	var count;
	startGame();
	
	function startGame(){
		count = 0
		correct = 0;
		incorrect = 0;
		unAnswered = 0;
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
			$("#answertext").html("The Correct Answer was: " + randomObject.answer);
			$("#answertext").show();
			// startFillWords();
			unAnswered++;
			console.log(unAnswered);
			// count++;
			// if(count > objectArray.length){
			// 	console.log("yooooooo");
			// 	setTimeout(finishGame, 1500);
			// }
			// else{
			// 	console.log("ayyyeee");
			// 	$("#answers").hide();
			// 	setTimeout(fillWords, 1500);
			// };
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
		console.log("YOU SHOULD SEE THIS ONCE PER QUESTION");

		// SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		// // SOMEHOW INDEX IS INCREASING BY MORE THAN 1, LIKE EXPONENTIALLY. 
		// console.log("At the beginning of fillwords index is: " + index);
		
		// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		// THIS ALL FIRES MORE THAN ONCE
		

		//TIMER STUFF
		secondsLeft = 8;
		clearInterval(time);
		$("#timer").html(secondsLeft);
		time = setInterval(countDown, 1000);
		// TIMER STUFF END

		
		
		// GETS A RANDOM OBJECT
				// I'M GONNA TAKE THEM OUT AS THEY ARE PICKED
		// FILLS THE QUESTION AND GUESSES HTML
		// YEAH IT REPEATS RIGHT NOW
		// NOT THE PROBLEM
		objectArray = [{question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: "darthmaul.gif"}, {question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius"}];
		var randomNumber = Math.floor((Math.random() * objectArray.length))
		randomObject = objectArray[0];
		$("#questiontext").html(randomObject.question);
		console.log(randomObject.gif);
		
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
			console.log("count: " + count);
			count++
			// return correct;
			
		}
		else{
			$("#questiontext").html("Nope!");			
			console.log("count: " + count);
			count++
			incorrect++;
			// return incorrect;
		};
		

		console.log("count2: " + count);
		$("#buttongroup").hide();
		$("#answers").show();
		$("#answers").html("<h2>The Correct Answer was: " + randomObject.answer + "</h2><br><img src='assets/images/" + randomObject.gif + "'>");
		
		console.log($("#answers").html());
		
		if(count > objectArray.length){
			console.log("ayyyyyeeee");
			setTimeout(finishGame, 1500);
		}else {
			console.log("yoooo");
			
			setTimeout(fillWords, 1500);
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
		var play = confirm("PLAY AGAIN?");
		if (play) {
			console.log("yo");
			startGame();
		}
		else{
			$("#gamecontainer").hide();
			$("#endgame").fadeIn("slow");
		};
	};


	


});
