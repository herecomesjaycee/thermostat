"use strict";

describe ("Thermostat", function() {
  var thermostat;
  var defaultTemp;
  var defaultMin;

  beforeEach(function() {
    thermostat = new Thermostat;
    defaultTemp = thermostat._STARTING;
    defaultMin = thermostat._MINTEMPERATURE
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

  describe("#tempDown", function() {
    it ("decrease temp by one", function() {
      thermostat.tempDown();
      expect(thermostat.temperature()).toEqual(defaultTemp - 1);
    });
  });

  describe("Min temperature is 10 degrees", function() {
    it ("throw error if temperature goes below min value", function() {
      for(var i = 20; i > 10; i--){thermostat.tempDown()}
      var error = "temperature cannot go below minimum value"
      expect(function() {thermostat.tempDown()}).toThrow(error);
    });
  });

});
