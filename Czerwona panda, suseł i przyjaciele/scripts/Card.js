class Card {
	
	constructor(id, orient, buy_cost, color, img, can_buy, name) {
		
		this.id = id;
		this.orient = orient;
		this.color = color;
		this.img = img;
		this.name = name;
		
		this.buy_cost = buy_cost;
		this.visit_cost = this.buy_cost / 2;

		this.can_buy = can_buy;
		
		this.card = document.createElement("div");
		
		this.create_card(this.id, this.orient, this.card, this.color, this.img);
	}
	
	create_card(id, orient, card, color, img) {
		
		card.style.backgroundColor = color;
		this.assign_color_group(color);
		card.style.backgroundImage = img;
		card.id = "c" + id;
		
		card.style.position = "absolute";
		
		this.pos_left = 250;
		this.pos_top = 50;
		
		if(orient == "Y") {
			card.style.width = "60";
			card.style.height = "100";
			
			if (id > 0 && id < 10) {
				card.style.left = 640 - (60 * id) + this.pos_left;
				card.style.top = 100 + 60 * 9 + this.pos_top;
			} else if (id > 20 && id < 30) {
				card.style.left = (id - 20) * 60 + 40 + this.pos_left;
				card.style.top = 0 + this.pos_top;
			}
		} else if (orient == "X") {
			card.style.width = "100";
			card.style.height = "60";
			
			if (id > 10 && id < 20) {
				card.style.left = 0 + this.pos_left;
				card.style.top = 640 - (60 * (id - 10)) + this.pos_top;
			} else if (id > 30 && id < 40) {
				card.style.left = 100 + 60 * 9 + this.pos_left;
				card.style.top = (id - 30) * 60 + 40 + this.pos_top;
			}
		} else if (orient == "O") {
			card.style.width = "100";
			card.style.height = "100";
			
			if (id == 0) {
				card.style.left = 100 + 60 * 9 + this.pos_left;
				card.style.top = 100 + 60 * 9 + this.pos_top;
			} else if (id == 10) {
				card.style.top = 100 + 60 * 9 + this.pos_top;
				card.style.left = 0 + this.pos_left;
			} else if (id == 20) {
				card.style.top = 0 + this.pos_top;
				card.style.left = 0 + this.pos_left;
			} else if (id == 30) {
				card.style.left = 100 + 60 * 9 + this.pos_left;
				card.style.top = 0 + this.pos_top;
			} else {
				console.log(card.id + " zjebałeś");
			}
		} else {
			console.log(card.id + " wrong orientation");
		}
	
		document.body.appendChild(this.card);
	}
	
	assign_color_group(color) {
		switch(color) {
			case "brown":
				Brown.push(this);
				break;
			case "lightblue":
				LightBlue.push(this);
				break;
			case "pink":
				Pink.push(this);
				break;
			case "orange":
				Orange.push(this);
				break;
			case "red":
				Red.push(this);
				break;
			case "yellow":
				Yellow.push(this);
				break;
			case "green":
				Green.push(this);
				break;
			case "blue":
				Blue.push(this);
				break;
			case "black":
				Black.push(this);
				break;
			default: 
				break;
		}
	}
}