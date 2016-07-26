$(document).ready(function(){
	var count = 0;


	// THIS FUNCTION WILL FIRE AT INTERVALS UPON START BUTTON CLICK
	function fillWords(){


		//JUST IN CASE I WANT TO USE ARRAYS INSTEAD OF OBJECTS
		// var firstArray = ["Who defeated Darth Maul?", "Anakin Skywalker", "Obi-Wan Kenobi", "Yoda", "Darth Maul"];
		// var secondArray = ["Who killed Jango Fett?", "Mace Windu", "Yoda", "Obi-Wan Kenobi", "Darth Sidius"];
		//JUST IN CASE I WANT TO USE ARRAYS INSTEAD OF OBJECTS






		var firstSlide = {
		 	question: "Who defeated Darth Maul?",
		 	answer: "Anakin Skywalker",
		 	guess1: "Obi-Wan Kenobi",
		 	guess2: "Luke Skywalker",
		 	guess3: "Darth Maul",
	 	}

		var secondSlide = {
			question: "Who killed Jango Fett?", 
			answer: "Mace Windu", 
			guess1: "Yoda", 
			guess2: "Qui-Gon Jinn",
			guess3: "Darth Sidius"
		}
		var everything = [firstSlide, secondSlide]
		// randomObject = everything[Math.floor((Math.random() * everything.length))];
		

		randomObject = everything[count];
		$("#questiontext").html(randomObject.question);
		

		var keysArray = [randomObject.answer, randomObject.guess1, randomObject.guess2, randomObject.guess3];
		var randumNumber = Math.floor((Math.random() * keysArray.length))
		var randomGuess = keysArray[randumNumber];

		$("#b1").html(randomObject.answer);
		$("#b2").html(randomObject.guess1);
		$("#b3").html(randomObject.guess2);
		$("#b4").html(randomObject.guess3);
	
	}//FUNCTION FILLWORDS END
	



	// s = setInterval(fillWords, 1000);



	fillWords();



});// DOCUMENT READY FUNCTION END