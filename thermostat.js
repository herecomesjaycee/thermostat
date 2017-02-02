console.log("IM HERE")

function Thermostat(initialTemperature=20){
	this._defaultTemperature = 20;
	this._psmOnMaxTemperature = 25;
	this._psmOffMaxTemperature = 32;
	this._psm = true;
	this._temperature = initialTemperature;
	this._defaultMaxTemperature = this._psmOnMaxTemperature;
}

Thermostat.prototype.temperature = function(){
	return this._temperature;
}

Thermostat.prototype.checkMaxTemperature = function(){
	if (this._temperature >= this._defaultMaxTemperature){return true}else{return false};
}

Thermostat.prototype.up = function(){
	if (this.checkMaxTemperature()){
		throw("temperature cannot go above maximum value")
	}
	this._temperature++;
}

Thermostat.prototype.down = function(){
	if (this._temperature <=10){
		throw("temperature cannot go below minimum value")
	}
	this._temperature--;
}

Thermostat.prototype.togglePMS = function(){
	this._psm = !this._psm;
	if(this._psm)
		{this._defaultMaxTemperature = this._psmOnMaxTemperature;}
	else
		{this._defaultMaxTemperature = this._psmOffMaxTemperature;
	}
	if (this.checkMaxTemperature()){this._temperature = this._defaultMaxTemperature};
}

Thermostat.prototype.reset = function(){
	this._temperature = this._defaultTemperature;
}

Thermostat.prototype.usage = function(){
	switch(true){
		case(this._temperature < 18): return "low-usage";
		case(this._temperature < 25): return "medium-usage";
		default: return "high-usage"
	}
}

Thermostat.prototype.powerSaveDisplay = function() {
	if (this._psm) {return "on"} else {return "off"}
}
