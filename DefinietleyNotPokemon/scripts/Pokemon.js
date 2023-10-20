class Pokemon {
	constructor(name, type, hp, attack, defense, img, Moves) {
		this.name = name;
		
		this.type = type;
		
		this.max_hp = hp;
		this.hp = hp;  
		
		this.attack = attack;
		this.defense = defense;
		
		this.img = new Image();
		this.img.src = img;
		
		this.did_faint = false;
		
		this.Moves = Moves;
		
		Pokemons.push(this);
	}
	
	moves() {
		for(let i = 0; i < this.Moves.length; i++) {
			Game.create_variable_button(this.Moves[i].name + " | type: " + this.Moves[i].type, Game.battle, this.Moves[i]);
		}
	}
	
	is_weak(move) {
		switch(move.type) {
			case "fire":
				if(this.type == "plant") {
					return true;
				}
				break;
			case "air":
				if(this.type == "plant") {
					return true;
				}
				break;
			case "plant":
				if(this.type == "water") {
					return true;
				}
				break;
			case "water":
				if(this.type == "fire") {
					return true;
				}
				break;
			default:
				return false;
				break;
		}
	}
}