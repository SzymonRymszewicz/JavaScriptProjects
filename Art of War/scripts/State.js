class State {
	
	constructor(name, position, border_states) {
		this.name = name;
		this.x = position[0];
		this.y = position[1];
		this.border_states = border_states;
		this.ownership;

		States.push(this);
		
		//console.log("State " + this.name + " defined");
	}
	
	update_state(color) {
		this.update_color(color);
		this.link_states();
	}
	
	update_color(color) {
		ctx.fillStyle = color;
		ctx.fillRect(this.x , this.y, state_size, state_size);
	}
	
	set_ownership(country_id) {
		this.ownership = country_id;
	}
	
	link_states() {
		for(let i = 0; i < this.border_states.length; i++) {
			ctx.moveTo(this.x + state_size / 2, this.y + state_size / 2);
			ctx.lineTo(States[this.border_states[i]].x + state_size / 2, States[this.border_states[i]].y + state_size / 2);
			ctx.stroke();
		}
	}
}