var pressed = false
var P1extras = false
var P2extras = false
var lastFieldClicked;

function randomNumberBetween(low,high){
	return Math.floor(Math.random()*(high-low)+low);
}
$("body").css("background-color", "rgb(" + randomNumberBetween(47,126).toString() + "," + randomNumberBetween(47,126).toString() + "," + randomNumberBetween(47,126).toString() + ")"); //Random background-color :D

function printLine(content){//Prints content on screen
	$("#results").append("<span></span><br>");
	$("#results span").last().append(content);
}

function openCharacterMenu(selector){
	$(".blackout").css("display", "block");

	lastFieldClicked = selector;
}

function chooseCharacter(character){
	$(lastFieldClicked).empty();
	$(lastFieldClicked).append('<div class="' + character + '"></div>');
	$(lastFieldClicked).css("padding", "14px")
	$(lastFieldClicked).css("width", "23px")
	$(lastFieldClicked).css("height", "auto")
	$(".blackout").css("display", "none");
}

function showExtras(num){
	if(num === 1){
		$(".player-one .expand-extras").css("display", "none");

		$(".player-one .extra").css("display", "block");
		$(".player-one div").css("margin-top", "0");

		P1extras = true;
	}	
	if(num === 2){
		$(".player-two .expand-extras").css("display", "none");

		$(".player-two .extra").css("display", "block");
		$(".player-two div").css("margin-top", "0");

		P2extras = true;
	}
}

function setDynamicName(){
	if($("#PlayerOne").val() === ""){
		$(".P1-dynamic-name").text("P1's");
	}else{
		$(".P1-dynamic-name").text($("#PlayerOne").val());
	}

	if($("#PlayerTwo").val() === ""){
		$(".P2-dynamic-name").text("P2's");
	}else{
		$(".P2-dynamic-name").text($("#PlayerTwo").val());
	}
}

$("#PlayerOne").focusout(setDynamicName); //FIX ROGUE 's!!!!!!!!!!!!
$("#PlayerTwo").focusout(setDynamicName);

function showGame(num){
	$(".game-toggle div").css("background-color", "rgba(0, 0, 0, 0.2)");
	$(".game-toggle div:nth-child(" + (num+1).toString() + ")").css("background-color", "rgba(0, 0, 0, 0.6)");

	$(".game-info section").css("display", "none");
	$(".game-info section:nth-child(" + (num).toString() + ")").css("display", "block");
}

function printFormattedTable(){
	$("#results").css("display", "block"); //Show results area
	$("#results").text(""); //Clear last table

	if(!pressed){ //scroll to bottom on first button press
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	}
	pressed = true;

	var round = "#" + $("#Round").val();

	var P1 = $("#PlayerOne").val();
	var P1mains = $("#PlayerOneMains").val().split(/, */g);
	var P1name = $("#PlayerOneName").val();
	var P1twitch = $("#PlayerOneTwitch").val();
	var P1twitter = $("#PlayerOneTwitter").val();
	var P1liquipedia = $("#PlayerOneLiquipedia").val();
	var P1media = "";

	var P2 = $("#PlayerTwo").val();
	var P2mains = $("#PlayerTwoMains").val().split(/, */g);
	var P2name = $("#PlayerTwoName").val();
	var P2twitch = $("#PlayerTwoTwitch").val();
	var P2twitter = $("#PlayerTwoTwitter").val();
	var P2liquipedia = $("#PlayerTwoLiquipedia").val();
	var P2media = "";

	var game1Winner = $("#GameOne .Winner").val().toUpperCase();
	var game1P1Character = $("#GameOne .PlayerOneCharacter").val();
	var game1P2Character = $("#GameOne .PlayerTwoCharacter").val();
	var game1StockCount = parseInt($("#GameOne .StocksRemaining").val());
	var game1Stage = $("#GameOne .Stage").val();

	var game2Winner = $("#GameTwo .Winner").val().toUpperCase();
	var game2P1Character = $("#GameTwo .PlayerOneCharacter").val();
	var game2P2Character = $("#GameTwo .PlayerTwoCharacter").val();
	var game2StockCount = parseInt($("#GameTwo .StocksRemaining").val());
	var game2Stage = $("#GameTwo .Stage").val();

	var game3Winner = $("#GameThree .Winner").val().toUpperCase();
	var game3P1Character = $("#GameThree .PlayerOneCharacter").val();
	var game3P2Character = $("#GameThree .PlayerTwoCharacter").val();
	var game3StockCount = parseInt($("#GameThree .StocksRemaining").val());
	var game3Stage = $("#GameThree .Stage").val();

	var game4Winner = $("#GameFour .Winner").val().toUpperCase();
	var game4P1Character = $("#GameFour .PlayerOneCharacter").val();
	var game4P2Character = $("#GameFour .PlayerTwoCharacter").val();
	var game4StockCount = parseInt($("#GameFour .StocksRemaining").val());
	var game4Stage = $("#GameFour .Stage").val();

	var game5Winner = $("#GameFive .Winner").val().toUpperCase();
	var game5P1Character = $("#GameFive .PlayerOneCharacter").val();
	var game5P2Character = $("#GameFive .PlayerTwoCharacter").val();
	var game5StockCount = parseInt($("#GameFive .StocksRemaining").val());
	var game5Stage = $("#GameFive .Stage").val();


	if(!P1extras){ //if P1 extras are hidden, don't use the pre-installed choices
		P1name = "";
		P1twitch = "";
		P1twitter = "";
		P1liquipedia = "";
	}
	if(!P2extras){//if P2 extras are hidden, don't use the pre-installed choices
		P2name = "";
		P2twitch = "";
		P2twitter = "";
		P2liquipedia = "";
	}

	function makeFlair(str){
		return "[](/"+str+")";
	};

	function multiplyStock(winner,stock,num){
		var str = "";

		/*if(winner === "P1"){
			for(var i = 0;i < (4 - num);i++){
				str = str.concat("x ")
			};
		}*/

		for(var i = 0;i < num;i++){
			str = str.concat(stock)
		};

		/*if(winner === "P2"){
			for(var i = 0;i < (4 - num);i++){
				str = str.concat(" x")
			};
		}*/

		return str;
	};

	function generatePlayerMedia(){

		if(P1twitter != "" || P1twitch != "" || P1liquipedia){
			if(P1name === ""){
				P1name = P1;
			}

			P1media = "**" + P1name + "** // "

			if(P1twitch != ""){
				P1media = P1media.concat("[Twitch](http://www.twitch.tv/" + P1twitch + ")");
			}
			if(P1twitter != ""){
				if(P1twitch != ""){
					P1media = P1media.concat(" | ")
				}
				P1media = P1media.concat("[Twitter](https://twitter.com/" + P1twitter + ")");
			}
			if(P1liquipedia != ""){
				if(P1twitch != "" || P1twitter != ""){
					P1media = P1media.concat(" | ")
				}
				P1media = P1media.concat("[Liquipedia](" + P1liquipedia + ")");
			}
		}

		if(P2twitter != "" || P2twitch != "" || P2liquipedia){
			if(P2name === ""){
				P2name = P2;
			}

			P2media = "**" + P2name + "** // "

			if(P2twitch != ""){
				P2media = P2media.concat("[Twitch](http://www.twitch.tv/" + P2twitch + ")");
			}
			if(P2twitter != ""){
				if(P2twitch != ""){
					P2media = P2media.concat(" | ")
				}
				P2media = P2media.concat("[Twitter](https://twitter.com/" + P2twitter + ")");
			}
			if(P2liquipedia != ""){
				if(P2twitch != "" || P2twitter != ""){
					P2media = P2media.concat(" | ")
				}
				P2media = P2media.concat("[Liquipedia](" + P2liquipedia + ")");
			}
		}
	}

	function displayRow(winner, P1Char, P2Char, Stage, stockCount){
		if(winner === "P1"){
			printLine(multiplyStock("P1",makeFlair(P1Char),stockCount) + " | `==` " + makeFlair(P1Char) + " " + Stage + " " + makeFlair(P2Char) + " `==` | ---")
		}else if(winner === "P2"){
			printLine("--- | `==` " + makeFlair(P1Char) + " " + Stage + " " + makeFlair(P2Char) + " `==` | " + multiplyStock("P2",makeFlair(P2Char),stockCount))
		}else{
			printLine("ERROR: WINNER MUST BE 'P1' OR 'P2'")
		}
	}

	function getSetCount(){
		var P1score = 0;
		var P2score = 0;

		[game1Winner,game2Winner,game3Winner,game4Winner,game5Winner].forEach(function(winner){
			if(winner === "P1"){
				P1score += 1;
			}
			if(winner === "P2"){
				P2score += 1;
			}
		});

		return P1score.toString() + " - " + P2score.toString();
	}

	generatePlayerMedia();

	printLine("---");
	printLine(round);

	if(P1media != ""){
		printLine("")
		printLine(P1media)
	}

	printLine("")

	if(P2media != ""){
		printLine(P2media)
		printLine("")
	}

	printLine(P1mains.map(makeFlair).toString().replace(/,/g , " ") + " " + P1 + " | " + getSetCount() + " | " + P2 + " " + P2mains.map(makeFlair).toString().replace(/,/g , " "));
	printLine("---:|:--:|:---");

	displayRow(game1Winner, game1P1Character, game1P2Character, game1Stage, game1StockCount)
	displayRow(game2Winner, game2P1Character, game2P2Character, game2Stage, game2StockCount)
	
	if($("#GameThree .Stage").val() != ""){
		displayRow(game3Winner, game3P1Character, game3P2Character, game3Stage, game3StockCount)
	}
	if($("#GameFour .Stage").val() != ""){
		displayRow(game4Winner, game4P1Character, game4P2Character, game4Stage, game4StockCount)
	}
	if($("#GameFive .Stage").val() != ""){
		displayRow(game5Winner, game5P1Character, game5P2Character, game5Stage, game5StockCount)
	}
	printLine("<span style=\"color: white\">*^^Generated ^^by [^^Tournament ^^Tabler](http://darylpinto.github.io)*</span>");
	printLine("___");
}

setDynamicName()