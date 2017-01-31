function Thermostat() {
  this._STARTING = 20;
  this._degrees = this._STARTING;
};

Thermostat.prototype.temperature = function() {
  return this._degrees;
};

Thermostat.prototype.tempUp = function () {
  this._degrees += 1;
};
