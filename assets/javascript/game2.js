$(document).ready(function(){
	var time;
	var count;
	// var music = 
	var audio = new Audio("assets/jedi2.mp3");
	



	var objectArray = [
		{question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: ["darthmaullose.gif", "darthmaul.gif"]}, 
		{question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius", gif: ["jango.gif", "jango.gif"]}, 
		{question: "Trained Obi-Wan?",answer: "Qui-Gon Jinn", guess1: "Anakin Skywalker", guess2: "Mace Windu", guess3: "Darth Sidius", gif: ["qui-gonlose.gif", "qui-gonwin.gif"]}, 
		{question: "Who is Princess Leia's brother?", answer: "Luke Skywalker", guess1: "Anakin Skywalker", guess2: "Han Solo", guess3: "Obi-Wan Kenobi", gif: ["lukelose.gif", "lukewin.gif"]}, 
		{question: "What planet is Chewbacca from?", answer: "Kashyyyk", guess1: "Alderaan", guess2: "Tatooine", guess3: "Yavin", gif: ["chewylose.gif", "chewywin.gif"]},
		// {question: "What planet is Chewbacca from?", answer: "Kashyyyk", guess1: "Alderaan", guess2: "Tatooine", guess3: "Yavin", gif: ["chewylose.gif", "chewywin.gif"]}
		];

		
	startGame();

	function startGame(){
		workingArray = [
		{question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: ["darthmaullose.gif", "darthmaul.gif"]}, 
		{question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius", gif: ["jango.gif", "jango.gif"]}, 
		{question: "Who trained Obi-Wan?",answer: "Qui-Gon Jinn", guess1: "Anakin Skywalker", guess2: "Mace Windu", guess3: "Darth Sidius", gif: ["qui-gonlose.gif", "qui-gonwin.gif"]}, 
		{question: "Who is Princess Leia's brother?", answer: "Luke Skywalker", guess1: "Anakin Skywalker", guess2: "Han Solo", guess3: "Obi-Wan Kenobi", gif: ["lukelose.gif", "lukewin.gif"]}, 
		{question: "What planet is Chewbacca from?", answer: "Kashyyyk", guess1: "Alderaan", guess2: "Tatooine", guess3: "Yavin", gif: ["chewylose.gif", "chewywin.gif"]}
		];
		count = 0;
		correct = 0;
		incorrect = 0;
		unAnswered = 0;

		$("#mutebutton").hide();
		$("#mute").hide();
		$("#startbutton").show();
		$("#gamecontainer").hide();
		$("#answers").hide();
		$("#replaybutton").click(resetGame);
		$("#endgame").hide();
		
		$("#startbutton").click(function(){
				audio.play();
				$("#mutebutton").show();
				// $("#play").show();
				$(".themecol").addClass("disappear");
				$("#startbutton").fadeOut("slow", fillWords);		
			}

		);
	};


	$("#mutebutton").click(function(){
        var bool = audio.paused;
        console.log(audio.paused);
        if(bool === true){
        	console.log("HEY");
        	audio.play();
        }else{
        	console.log("YO");
        	audio.pause();
        }
        $("#play").toggle();
        $("#mute").toggle();
	});


	function fillWords(){
		$("#answers").hide();

		//TIMER STUFF
		secondsLeft = 15;
		clearInterval(time);
		$("#timer").html(secondsLeft);
		time = setInterval(countDown, 1000);
		// TIMER STUFF END
		
		var randomNumber = Math.floor((Math.random() * workingArray.length));
		
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
		$("#gamecontainer").fadeIn();
		$("#buttongroup").fadeIn();

	}
	//FUNCTION FILLWORDS END


	// THIS IS MY TIMER 
	function countDown(){
		secondsLeft--;
		$("#timer").html(secondsLeft);
		if (secondsLeft < 1) {
			// console.log("TIME");
			clearInterval(time);
			$("#questiontext").html("Out of time!");
			$("#buttongroup").hide();
			$("#answers").html("<h2>The Correct Answer was: " + randomObject.answer + "</h2><br><img src='assets/images/" + randomObject.gif[0] + "'>");
			$("#answers").show();
			
			unAnswered++;
			// console.log(unAnswered);
			count++;
			
			if(count >= objectArray.length){
				// console.log("finish");
				setTimeout(finishGame, 5000);
			}
			else{
				// console.log("Continue");
				
				setTimeout(fillWords, 5000);
			};
		};
	};//TIMER END
	

	$(".guess").on("click", function(){
		clearInterval(time);
		var yourGuess = $(this).html();
		
		if(yourGuess == randomObject.answer){
			$("#questiontext").html("Correct!");
			correct++
		
			count++	
			$("#answers").html("<img src='assets/images/" + randomObject.gif[1] + "'>");
		}
		else{
			$("#questiontext").html("Nope!");			
		
			count++
			incorrect++;
			$("#answers").html("<h2>The Correct Answer was: " + randomObject.answer + "</h2><br><img src='assets/images/" + randomObject.gif[0] + "'>");
		};
		
		$("#buttongroup").hide();
		$("#answers").show();
		
				
		if(count >= objectArray.length){
		
			setTimeout(finishGame, 5000);
		}else {
			// console.log("Continue");
			
			setTimeout(fillWords, 5000);
		};

	});



	function finishGame(){
		$("#gamecontainer").fadeOut("slow", function(){
			$("#score").html("Your Score: <br>Correct Answers: " + correct + "<br>Wrong Answers: " + incorrect + "<br>Unanswered: " + unAnswered);
			$("#endgame").fadeIn("slow");
		});	
		
		};


	function resetGame(){
		workingArray = [
		{question: "Who defeated Darth Maul?",answer: "Obi-Wan Kenobi", guess1: "Anakin Skywalker", guess2: "Luke Skywalker", guess3: "Darth Maul", gif: ["darthmaullose.gif", "darthmaul.gif"]}, 
		{question: "Who killed Jango Fett?", answer: "Mace Windu", guess1: "Yoda", guess2: "Qui-Gon Jinn", guess3: "Darth Sidius", gif: ["jango.gif", "jango.gif"]}, 
		{question: "Trained Obi-Wan?",answer: "Qui-Gon Jinn", guess1: "Anakin Skywalker", guess2: "Mace Windu", guess3: "Darth Sidius", gif: ["qui-gonlose.gif", "qui-gonwin.gif"]}, 
		{question: "Who is Princess Leia's brother?", answer: "Luke Skywalker", guess1: "Anakin Skywalker", guess2: "Han Solo", guess3: "Obi-Wan Kenobi", gif: ["lukelose.gif", "lukewin.gif"]}, 
		{question: "What planet is Chewbacca from?", answer: "Kashyyyk", guess1: "Alderaan", guess2: "Tatooine", guess3: "Yavin", gif: ["chewylose.gif", "chewywin.gif"]}
		];
		count = 0;
		correct = 0;
		incorrect = 0;
		unAnswered = 0;
		clearInterval(time);
		$(".themecol").removeClass("disappear");
		$("#startbutton").show();
		$("#gamecontainer").hide();
		$("#answers").hide();
		$("#endgame").hide();

	};

});
