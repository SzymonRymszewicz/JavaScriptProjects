class Player {
	constructor(position) {
		this.position = position;
		this.owned_pokemons = [];
		
		this.fighting_pokemon;
		
		Players.push(this);
	}
	
	add_pokemon(pokemon) {
		this.owned_pokemons.push(pokemon);
	}
	
	display_pokemon() {

		ctx.drawImage(this.fighting_pokemon.img, this.position[0], this.position[1]);
			
		ctx.fillStyle = "black";
		ctx.fillText(this.fighting_pokemon.name + " HP: " + this.fighting_pokemon.hp + "/" + this.fighting_pokemon.max_hp, this.position[0], this.position[1]);

	}
}