"use strict";

describe ("Thermostat", function() {
  var thermostat;
  var defaultTemp;

  beforeEach(function() {
    thermostat = new Thermostat;
    defaultTemp = thermostat._STARTING;
  });

  describe("#initialize", function() {
    it ("returns initial temperature as the default", function() {
      expect(thermostat.temperature()).toEqual(defaultTemp);
    });
  });

  describe("#tempUp", function() {
    it ("increases temp by one", function() {
      thermostat.tempUp();
      expect(thermostat.temperature()).toEqual(defaultTemp + 1);
    });
  });
});
