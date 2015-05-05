function Dice(numOfSides) {

	this.roll = function() {
		//return numOfSides;
		var playSheet = [];
		var play = Math.ceil(Math.random() * numOfSides);
		// record number from last roll ??
		//return play;
		playSheet.push(play);
		return playSheet;
	}

}

////////////////////

function Starship(model, ownerName) {
	this.model = model;
	this.ownerName = ownerName;
	this.currentSpeed = 0;
	
	this.setTopSpeed = function(topSpeed) {
		return topSpeed;
	};
	
	this.getTopSpeed = function(topSpeed) { 
		return topSpeed;
	};

} // end Starship

Starship.prototype.accelerateTo = function(newSpeed) {
	if(this.currentSpeed < newSpeed) {
		return newSpeed;
	}
	else {
		alert("That's too fast!");
	}
};

//////////////////////

function Radio(ownerName, signalType) {
	this.ownerName = ownerName;
	this.signalType = signalType;

}


Radio.prototype.setStation = function(station) { 
	if(station > 535 && station < 1705) {
		this.signalType = "AM"; 
		return this.signalType;

	} else if(station > 88 && station < 108) {
		this.signalType = "FM";
		return this.signalType;		
	} else {
		alert("That station is outside the range.");
	}
};


Radio.prototype.listen = function() {
	if(this.signalType === "AM") {
		return "distorted music";
	}
	else if(this.signalType === "FM") {
		return "smooth jazz";
	} else {
		return false;
	}
};


