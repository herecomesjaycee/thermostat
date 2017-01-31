function Thermostat() {
  this._STARTING = 20;
  this._MINTEMPERATURE = 10;
  this._degrees = this._STARTING;
};

Thermostat.prototype.temperature = function() {
  return this._degrees;
};

Thermostat.prototype.tempUp = function () {
  this._degrees += 1;
};

Thermostat.prototype.tempDown = function () {
  if (this._degrees - 1 < this._MINTEMPERATURE){throw "temperature cannot go below minimum value"}
  this._degrees -= 1;
};
