"use strict";

describe ("Thermostat", function() {
  var thermostat;
  var defaultTemp;
  var defaultMin;
  var defaultMaxSave;

  beforeEach(function() {
    thermostat = new Thermostat;
    defaultTemp = thermostat._STARTING;
    defaultMin = thermostat._MIN_TEMP;
    defaultMaxSave = thermostat._MAX_TEMP_SAVE;
  });
  describe("power saving on",function() {
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
        for(var i = defaultTemp; i > defaultMin; i--){thermostat.tempDown()}
        var error = "temperature cannot go below minimum value"
        expect(function() {thermostat.tempDown()}).toThrow(error);
      });
    });
  });
  describe("power saving off",function() {
    beforeEach(function() {
      thermostat = new Thermostat;
      thermostat.setPowerSave(false);
    });
    it ("can tell it's off", function() {
      expect(thermostat.getPowerSave()).toEqual(false)
    });
    it ("can't go above 32 degrees", function(){
      for(var i = defaultTemp; i < defaultMaxSave; i++){
        thermostat.tempUp();
      }
      var error = "temperature cannot go above maximum value"
      expect(function() {thermostat.tempUp()}).toThrow(error);
    });
  });
});
