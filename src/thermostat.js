function Thermostat() {
  this._degrees = 20;
};

Thermostat.prototype.temperature = function() {
  return this._degrees;
};
