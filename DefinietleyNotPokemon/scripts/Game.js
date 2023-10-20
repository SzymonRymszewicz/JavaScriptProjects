class Game {
	constructor() {
		
		Pokemons = [];
		Players = [];
		turn = 0;
		consol.innerHTML = "";
		
		let normal_attack = new Move("Normal attack", "attack", type.neutral, 1.2, "none");
		let guard = new Move("Guard", "defense", type.neutral, 1, "none");
		let fire_breath = new Move("Fire Breath", "attack", type.fire, 1.4, "none");
		let regrowth = new Move("Regrowth", "heal", type.plant, 1, "none");
		let stando = new Move("Panda stando", "attack", type.neutral, 1.6, "none");
		let seed_shot = new Move("Seed shot", "attack", type.plant, 1.2, "none");
		let laser_eye = new Move("Laser eyes", "attack", type.air, 1.8, "none");
		
		this.RedPanda = new Pokemon("Red Panda", type.fire, 50, 12, 6, "img/redpanda.png", [normal_attack, stando, fire_breath, guard]); //HP, ATK, DEF
		this.Florges = new Pokemon("Florges", type.plant, 78, 8, 8, "img/florges.png", [normal_attack, seed_shot, regrowth, guard]);
		this.Xyos = new Pokemon("Xyos", type.air, 69, 10, 2, "img/xyos.png", [normal_attack, laser_eye, fire_breath, guard]);
		
		new Player([100, 150]); // X and Y 
		new Player([700, 150]);
		
		this.game_innit();
		
	}
	
	game_innit() {
		
		let picked_pokemons = 0;
		
		function update_empty_canvas() {
			ctx.clearRect(0 , 0, canv_width, canv_height);
		
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canv_width, canv_height);
			
			ctx.fillStyle = "black";
			
			ctx.fillText("Turn: Player " + (turn + 1), 10, 30);
			ctx.fillText("Curennty picked: " + picked_pokemons + "/6", parseInt(canv_width / 2 - 125), parseInt(canv_height / 2));
		}
		update_empty_canvas();

		for(let i = 0; i < Pokemons.length; i++) {
			
			let pokemon = document.createElement("button");
			pokemon.innerHTML = Pokemons[i].name;
			 
			function add_pokemon(p) {
				let poke = Object.create(p);
				Players[turn].add_pokemon(poke);
				picked_pokemons += 1;
				update_empty_canvas();
				if(picked_pokemons == 6) {
					turn += 1;
					picked_pokemons = 0;
					update_empty_canvas();
					if(turn == 2) {
						turn = 0;
						function start_game() {
							Players[0].fighting_pokemon = Players[0].owned_pokemons[0];
							Players[1].fighting_pokemon = Players[1].owned_pokemons[0];
							consol.innerHTML = "All pokemons picked! "
							Game.create_button("NEXT TURN", Game.start_turn);
						}
						start_game(); 
					}
				}
			}
			pokemon.onclick = function () { add_pokemon(Pokemons[i]); };
			consol.appendChild(pokemon);
		}
		 
	}
	
	static start_turn() {
		consol.innerHTML = "";
		Game.pick_action();
		Game.update_canvas();
	}
	
	static pick_action() {
		consol.innerHTML = "";
		Players[turn].fighting_pokemon.moves();
		
		Game.create_button("Switch Pokemon", Game.change_pokemon);
	}
	
	static change_pokemon() {
		consol.innerHTML = "";
		
		for(let i = 0; i < Players[turn].owned_pokemons.length; i++) {
			Game.create_variable_button(Players[turn].owned_pokemons[i].name, Game.pick_pokemon, Players[turn].owned_pokemons[i]);
		}
		Game.create_button("Return", Game.pick_action);
	}
	
	static pick_pokemon(poke) {
		Players[turn].fighting_pokemon = poke;
		Game.update_canvas();
		consol.innerHTML = "Player " + (turn + 1) + " changed his pokemon to " + poke.name;
		Game.create_button("NEXT", Game.change_turn);
	}
	
	static battle(move) {
		let attacker;
		let defender;
		if(turn == 0) {
			attacker = Players[0];
			defender = Players[1];
		} else if (turn == 1) {
			attacker = Players[1];
			defender = Players[0];
		}
		switch(move.effect) {
			case "attack":
				function atk_normal(attack) {
					if(attack >= defender.fighting_pokemon.hp) {
						attack = defender.fighting_pokemon.hp;
						defender.fighting_pokemon.hp -= attack;
						Game.pokemon_fainted(defender, defender.fighting_pokemon);
					} else {
						defender.fighting_pokemon.hp -= attack;
						Game.move(move.effect, attack);						
					}
				}
				function atk_effective(attack) {
					attack *= 2;
					if(attack >= defender.fighting_pokemon.hp) {
						attack = defender.fighting_pokemon.hp;
						defender.fighting_pokemon.hp -= attack;
						Game.pokemon_fainted(defender, defender.fighting_pokemon);
					} else {
						defender.fighting_pokemon.hp -= attack;
						consol.innerHTML = "The attack was super effective! " + attack + " damage dealt! ";
						Game.create_button("NEXT", Game.change_turn);
					}
				}
				
				let attack = parseInt(attacker.fighting_pokemon.attack * move.base - defender.fighting_pokemon.defense);
				
				if(attack < 3) {
					attack = 3;
				}
				
				let is_weak = false;
				
				if(defender.fighting_pokemon.is_weak(move)) {
					is_weak = true;
				}
				
				if(is_weak) {
					atk_effective(attack)
				} else {
					atk_normal(attack);
				}
				
				break;
			case "defense":
				function def(defense) {
					attacker.fighting_pokemon.defense += defense;
					Game.move(move.effect, defense);
				}
				
				let defense = parseInt(move.base);
				def(defense);
				
				break;
			case "heal":
				function hl(heal) {
					if(attacker.fighting_pokemon.hp + heal > attacker.fighting_pokemon.max_hp) {
						heal = attacker.fighting_pokemon.max_hp - attacker.fighting_pokemon.hp;
					} 
					attacker.fighting_pokemon.hp += heal;
					Game.move(move.effect, heal);
				}
				let heal = parseInt(attacker.fighting_pokemon.attack * move.base);
				hl(heal);
		} 
		Game.update_canvas();
	}
	
	static move(effect, value) {
		switch(effect) {
			case "attack":
				consol.innerHTML = "You dealt " + value + " damage ";
				Game.create_button("NEXT", Game.change_turn);
				break;
			case "defense":
				consol.innerHTML = "You increased your defense by " + value;
				Game.create_button("NEXT", Game.change_turn);
				break;
			case "heal":
				consol.innerHTML = "You healed by " + value + " hp";
				Game.create_button("NEXT", Game.change_turn);
				break;
		}
	}
	
	static pokemon_fainted(player, pokemon) {
		let index  = player.owned_pokemons.indexOf(pokemon);
		player.owned_pokemons.splice(index, 1);
		if(player.owned_pokemons.length == 0) {
			consol.innerHTML = "Player " + turn + " lost ";
		} else {
			consol.innerHTML = pokemon.name + " fainted and will by replaced by " + player.owned_pokemons[0].name;
			player.fighting_pokemon = player.owned_pokemons[0];
			Game.create_button("NEXT TURN", Game.start_turn);
		}
	}
	
	static update_canvas() {
		ctx.clearRect(0 , 0, canv_width, canv_height);
		
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canv_width, canv_height);
		
		ctx.fillStyle = "black";
		ctx.fillText("Turn: Player " + (turn + 1), 10, 30);
		
		for(let i = 0; i < Players.length; i++) {
			Players[i].display_pokemon(Players[i].fighting_pokemon);
		}
	}
	
	static change_turn() {
		turn += 1;
		consol.innerHTML = "End of the Player's " + turn + " turn ";
		if(turn == 2) {
			turn = 0;
		}
		Game.create_button("NEXT TURN", Game.start_turn);
	}
	
	static create_button(name, func) {
		let butt = document.createElement("button");
		butt.innerHTML = name;
		butt.style.height = "60px";
		butt.style.fontFamily = "cursive";
		butt.onclick = function () { func(); };
		consol.appendChild(butt);
	}
	
	static create_variable_button(name, func, variable) {
		let butt = document.createElement("button");
		butt.innerHTML = name;
		butt.style.height = "60px";
		butt.style.fontFamily = "cursive";
		butt.onclick = function () { func(variable); };
		consol.appendChild(butt);
	}
}

new Game();