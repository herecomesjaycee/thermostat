function Thermostat(){
	this._defaultTemperature = 20;
	this._temperature = this._defaultTemperature;
	this._psmOnMaxTemperature = 25;
	this._psmOffMaxTemperature = 32;
	this._defaultMaxTemperature = this._psmOnMaxTemperature;
	this._psm = true;
}

Thermostat.prototype.temperature = function(){
	return this._temperature;
}

Thermostat.prototype.up = function(){
	if (this._temperature>=this._defaultMaxTemperature){
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
	if(this._psm){
		this._defaultMaxTemperature = this._psmOnMaxTemperature;
	}
	else {
		this._defaultMaxTemperature = this._psmOffMaxTemperature;
	}
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