function Thermostat() {
  this._STARTING = 20;
  this._MIN_TEMP = 10;
  this._MAX_SAVER_ON = 32;
  this._MAX_SAVER_OFF = 25;
  this._maxTemp = this._MAX_SAVER_ON;
  this._degrees = this._STARTING;
  this._powerSave = true;
};

Thermostat.prototype.temperature = function() {
  return this._degrees;
};

Thermostat.prototype.tempUp = function () {
  if (this._degrees + 1 > this._maxTemp){
    throw "temperature cannot go above maximum value";
  };
  this._degrees += 1;
};

Thermostat.prototype.tempDown = function () {
  if (this._degrees - 1 < this._MIN_TEMP){
    throw "temperature cannot go below minimum value";
  };
  this._degrees -= 1;
};
Thermostat.prototype.togglePowerSave = function (){ this._powerSave = !this._powerSave}

Thermostat.prototype.getPowerSave = function () {return this._powerSave};

Thermostat.prototype.setPowerSave = function (args) {
  if (args === true){
    this._maxTemp = this._MAX_SAVER_ON
  }else{
    this._maxTemp = this._MAX_SAVER_OFF
  }
  this._powerSave = args};

Thermostat.prototype.reset = function () {
  this._degrees = this._STARTING;
}

Thermostat.prototype.energy = function () {
  switch(true) {
    case (this._degrees < 18): return "low-useage"; break;
    case (this._degrees < 25): return "medium-useage"; break;
    default: return "high-useage"
  }
}
