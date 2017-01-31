function Thermostat() {
  this._STARTING = 20;
  this._MIN_TEMP = 10;
  this._MAX_TEMP = 32;
  this._MAX_TEMP_SAVE = 32;
  this._degrees = this._STARTING;
  this._powerSave = true;
};

Thermostat.prototype.temperature = function() {
  return this._degrees;
};

Thermostat.prototype.tempUp = function () {
  if (this._degrees + 1 > this._MAX_TEMP){
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

Thermostat.prototype.getPowerSave = function () {return this._powerSave};
Thermostat.prototype.setPowerSave = function (args) {this._powerSave = args};
