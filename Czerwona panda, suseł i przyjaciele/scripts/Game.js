class Game {
	
	constructor() {
		
		this.game_innit();
	}
	
	game_innit() {
	
		Cards.push(new Card(0, "O", 0, "none", "url('img/start.png')", false, "Start"));
		
		Cards.push(new Card(1, "Y", 50, "brown", "url('img/b1.png')", true, "Sens życia"));
		Cards.push(new Card(2, "Y", 0, "none", "url('img/szansa.png')", false, "Szansa"));
		Cards.push(new Card(3, "Y", 60, "brown", "url('img/b2.png')", true, "APoKalipZa"));
		Cards.push(new Card(4, "Y", 0, "none", "url('img/podatek.png')", false, "Podatek"));
		Cards.push(new Card(5, "Y", 200, "black", "url('img/kolej1.png')", true, "Kolej 'Szczęścia'"));
		Cards.push(new Card(6, "Y", 100, "lightblue", "url('img/lb1.png')", true, "Kacper"));
		Cards.push(new Card(7, "Y", 110, "lightblue", "url('img/lb2.png')", true, "Wina"));
		Cards.push(new Card(8, "Y", 0, "none", "url('img/szansa.png')", false, "Szansa"));
		Cards.push(new Card(9, "Y", 120, "lightblue", "url('img/lb3.png')", true, "Wszystko"));

		Cards.push(new Card(10, "O", 0, "none", "url('img/prison.png')", false, "Więzienie"));
		
		Cards.push(new Card(11, "X", 130, "pink", "url('img/p1.jpg')", true, "DIO!"));
		Cards.push(new Card(12, "X", 0, "none", "url('img/skarb.jpg')", false, "Skarb"));
		Cards.push(new Card(13, "X", 140, "pink", "url('img/p2.jpg')", true, "Waifu Speedwagooooon"));
		Cards.push(new Card(14, "X", 150, "pink", "url('img/p3.jpg')", true, "HOHO! You dare aproach me?"));
		Cards.push(new Card(15, "X", 200, "black", "url('img/kolej2.jpg')", true, "Tomek The Wpierdolek"));
		Cards.push(new Card(16, "X", 160, "orange", "url('img/o1.jpg')", true, "Cringe"));
		Cards.push(new Card(17, "X", 0, "none", "url('img/skarb.jpg')", false, "Skarb"));
		Cards.push(new Card(18, "X", 170, "orange", "url('img/o2.jpg')", true, "Cringe squared"));
		Cards.push(new Card(19, "X", 180, "orange", "url('img/o3.jpg')", true, "OMG! Lesser PANDA!"));
		
		Cards.push(new Card(20, "O", 0, "none", "url('img/parking.png')", false, "Bezpieczny parking"));
		
		Cards.push(new Card(21, "Y", 190, "red", "url('img/r1.jpg')", true, "MFW in szkoła"));
		Cards.push(new Card(22, "Y", 200, "red", "url('img/r2.jpg')", true, "Mario Roleplay"));
		Cards.push(new Card(23, "Y", 0, "none", "url('img/szansa.png')", false, "Szansa"));
		Cards.push(new Card(24, "Y", 210, "red", "url('img/r3.jpg')", true, "Chad David"));
		Cards.push(new Card(25, "Y", 200, "black", "url('img/kolej3.jpg')", true, "Lego Train"));
		Cards.push(new Card(26, "Y", 220, "yellow", "url('img/y1.jpg')", true, "Papież polak"));
		Cards.push(new Card(27, "Y", 230, "yellow", "url('img/y2.jpg')", true, "Pijany papież"));
		Cards.push(new Card(28, "Y", 0, "none", "url('img/szansa.png')", false, "Szansa"));	
		Cards.push(new Card(29, "Y", 240, "yellow", "url('img/y3.jpg')", true, "Papież predator"));
		
		Cards.push(new Card(30, "O", 0, "none", "url('img/goprison.png')", false, "Policja!"));
		
		Cards.push(new Card(31, "X", 250, "green", "url('img/g1.jpg')", true, "Towarzysz Stalin"));
		Cards.push(new Card(32, "X", 260, "green", "url('img/g2.jpg')", true, "Towarzysz Trotsky"));
		Cards.push(new Card(33, "X", 0, "none", "url('img/skarb.jpg')", false, "Skarb"));
		Cards.push(new Card(34, "X", 270, "green", "url('img/g3.jpg')", true, "Karl Marx"));
		Cards.push(new Card(35, "X", 200, "black", "url('img/kolej4.jpg')", true, "Regio Regionalny"));
		Cards.push(new Card(36, "X", 0, "none", "url('img/skarb.jpg')", false, "Skarb"));	
		Cards.push(new Card(37, "X", 300, "blue", "url('img/bb1.jpg')", true, "Big Hot Rod"));
		Cards.push(new Card(38, "X", 0, "none", "url('img/podatek2.png')", false, "Podatek"));	
		Cards.push(new Card(39, "X", 350, "blue", "url('img/bb2.jpg')", true, "Main character"));
			
		Players.push(new Player(1, "red")); 
		Players.push(new Player(2, "brown"));
		
		console.log("Czerwona panda, suseł i przyjaciele v1.0");
		console.log("Opis: Takie monopoly ale bardziej rpg i na narkotykach");
		console.log("Zmiany od ostatniej wersji: Handel dodany, sanity usunięte. Papież nerfed");
		console.log("Next update: more events");
		
		game_info();
	}
	
}

new Game();

function game_info() {
	
	document.getElementById("money_info").innerHTML = "";
	document.getElementById("cards_owned").innerHTML = "";
	
	function Player_money_info(player) {
		document.getElementById("money_info").innerHTML += "Gracz " + player.id + " Hajs: " + player.money + "$";
		document.getElementById("money_info").innerHTML += "<br>---------------<br>";
	}
	Players.forEach(Player_money_info);
	
	function Player_card_info(player) {
		document.getElementById("cards_owned").innerHTML += "<b>Gracz " + player.id + " Karty: </b>";
		for (let i = 0; i < player.cards_owned.length; i++) {
			document.getElementById("cards_owned").innerHTML += player.cards_owned[i].name;
			document.getElementById("cards_owned").innerHTML += ", ";
		}
		document.getElementById("cards_owned").innerHTML += "<br>";
	}
	Players.forEach(Player_card_info);
	
}

window.onload = function() {
	
	for(let i = 0; i < Cards.length; i++) {
		let target = document.getElementById("c" + i);

		function f() {
			if(Cards[i].color != "none") {
				return "Koszt: "+ Cards[i].buy_cost + " Koszt wizyty: " + Cards[i].visit_cost + " Nazwa: " + Cards[i].name;
			} else if(Cards[i].name == Cards[0].name) {
				return "Start naszej podrózy";
			} else if(Cards[i].name == Cards[10].name) {
				return "Nie zbyt przyjazne miejsce";
			} else if(Cards[i].name == Cards[20].name) {
				return "Bardzo bezpieczny parking";
			} else if(Cards[i].name == Cards[30].name) {
				return "Policja to przyjaciel";
			} else if(Cards[i].name == Cards[4].name) {
				return "Podatki trza płacić";
			} else if(Cards[i].name == Cards[2].name) {
				return "Szansa na sukces";
			} else if(Cards[i].name == Cards[12].name) {
				return "Roblox opening";
			}
		}

		target.setAttribute('title', f());

	}
}

function throw_dice() {
	Players[player_turn - 1].dice_throw();
}

function buy() {
	Players[player_turn - 1].buy_card();
}

function accept(trade_target, my_offer, his_offer) {
		if(trade_target != null) {
			Players[player_turn - 1].trade(trade_target, my_offer, his_offer);
			reject();
		} 
	}
	
function reject() {
		document.getElementById("throw_dice").innerHTML = "Rzut kostką";
		document.getElementById("throw_dice").onclick = function() { throw_dice(); };
		
		document.getElementById("buy").innerHTML = "Kup kartę";
		document.getElementById("buy").onclick = function() { buy(); };
		
		function reset_cards(card) {
			card.card.onclick = "";
		}
		
		Cards.forEach(reset_cards);
		document.getElementById("console-output").innerHTML = "";
		game_info();
	}
	
function trade() {

	document.getElementById("console-output").innerHTML = "Wybierz z kim chcesz handlować: <br>";
	
	let trade_target = null;
	let my_offer = [];
	let his_offer = [];
	
	for(let i = 0; i < Players.length; i++) {
		if(Players[i].id != player_turn) {
			
			let button = document.createElement("button");
			button.id = "button" + i;
			button.innerHTML = "Gracz " + (i + 1);
			button.style.position = "relative";
			button.style.top = "10";
			button.style.left = "5";
			
			function target() {
					
				trade_target = i;
				document.getElementById("console-output").removeChild(button);
				document.getElementById("console-output").innerHTML = "";
				
				function update_trade_info() {
					
					document.getElementById("console-output").innerHTML = "";
					document.getElementById("console-output").innerHTML += "Moja oferta: ";
					for(let j = 0; j < my_offer.length; j++) {
						document.getElementById("console-output").innerHTML += my_offer[j].name + ", ";
					}
					document.getElementById("console-output").innerHTML += "<br>Oferta gracza " + (trade_target + 1) + ": ";
					for(let j = 0; j < his_offer.length; j++) {
						document.getElementById("console-output").innerHTML += his_offer[j].name + ", ";
					}
				}
				
				update_trade_info();
				
				for (let j = 0; j < Players[trade_target].cards_owned.length; j++) {
					function f1() {
						if(his_offer.includes(Players[trade_target].cards_owned[j])) {
							let index = his_offer.indexOf(Players[trade_target].cards_owned[j]);
							his_offer.splice(index, 1);
						} else {
							his_offer.push(Players[trade_target].cards_owned[j]);
						}
						update_trade_info();
					}
					Players[trade_target].cards_owned[j].card.onclick = function() { f1(); };
				}
				
				for (let j = 0; j < Players[player_turn - 1].cards_owned.length; j++) {
					function f2() {
						if(my_offer.includes(Players[player_turn - 1].cards_owned[j])) {
							let index = my_offer.indexOf(Players[player_turn - 1].cards_owned[j]);
							my_offer.splice(index, 1);
						} else {
							my_offer.push(Players[player_turn - 1].cards_owned[j]);
						}
						update_trade_info();
					}
					Players[player_turn - 1].cards_owned[j].card.onclick = function() { f2(); };
				}
					
			}
			document.getElementById("console-output").appendChild(button);
			document.getElementById("button" + i).onclick = function() { target(); };
		}
	}
	
	document.getElementById("throw_dice").innerHTML = "Akceptuj";
	document.getElementById("throw_dice").onclick = function() { accept(trade_target, my_offer, his_offer); };
	
	document.getElementById("buy").innerHTML = "Anuluj";
	document.getElementById("buy").onclick = function() { reject(); };
}

function end_turn() {

	if(Players[player_turn - 1].did_throw == true) {
		if (player_turn + 1 <= Players.length) {
			player_turn++;
		}
		else if (player_turn + 1 >= Players.length) {
			player_turn = 1;
		}
		function logic(player) {
			if (player_turn == player.id) {
				player.end();
				document.getElementById("console-output").innerHTML = " ";
				document.getElementById("console-output").innerHTML += "Teraz tura gracza " + player_turn + "<br>";
			}
		}
		Players.forEach(logic);
	} else if(Players[player_turn - 1].did_throw == false){

		document.getElementById("console-output").innerHTML += "Musisz rzucić! <br>"
	}
	reject();
	game_info();
}