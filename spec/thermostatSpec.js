"use strict";

describe ("Thermostat", function() {
  var thermostat;
  var defaultTemp;
  var defaultMin;
  var defaultMaxSaveOn;
  var defaultMaxSaveOff;

  beforeEach(function() {
    thermostat = new Thermostat;
    defaultTemp = thermostat._STARTING;
    defaultMin = thermostat._MIN_TEMP;
    defaultMaxSaveOn = thermostat._MAX_SAVER_ON;
    defaultMaxSaveOff = thermostat._MAX_SAVER_OFF;
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
    it ("can't go above 25 degrees", function(){
      for(var i = defaultTemp; i < defaultMaxSaveOn; i++){
        thermostat.tempUp();
      }
      var error = "temperature cannot go above maximum value"
      expect(function() {thermostat.tempUp()}).toThrow(error);
    });
    it ("can toggle power saving",function(){
      thermostat.togglePowerSave()
      expect(thermostat.getPowerSave()).toEqual(false)
    });
  });

  describe("power saving off",function() {
    beforeEach(function() {
      thermostat = new Thermostat;
      thermostat.setPowerSave(false);
    });
    it ("can toggle power saving",function(){
      thermostat.togglePowerSave()
      expect(thermostat.getPowerSave()).toEqual(true)
    });
    it ("goes to the new max temp if powersave is toggled", function(){
      thermostat._degrees = 35;
      thermostat.setPowerSave(false);
      expect(thermostat.temperature()).toEqual(25)
    });

    it ("can tell it's off", function() {
      expect(thermostat.getPowerSave()).toEqual(false)
    });
    it ("can't go above 32 degrees", function(){
      for(var i = defaultTemp; i < defaultMaxSaveOff; i++){
        thermostat.tempUp();
      }
      var error = "temperature cannot go above maximum value"
      expect(function() {thermostat.tempUp()}).toThrow(error);
    });
  });

  describe("#reset", function(){
    it ("expect temperature to reset value to 20", function() {
      thermostat.tempUp();
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(defaultTemp);
    });
  });
  describe("#energy", function(){
    it ("expect energy usage to equal 'low-useage'", function() {
      thermostat._degrees = 17;
      expect(thermostat.energy()).toEqual("low-useage");
    });
    it ("expect energy usage to equal 'medium-useage'", function() {
      thermostat._degrees = 24;
      expect(thermostat.energy()).toEqual("medium-useage");
    });
    it ("expect energy usage to equal 'high-useage'", function() {
      thermostat._degrees = 26;
      expect(thermostat.energy()).toEqual("high-useage");
    });
  });
  describe("#_maxTemp",function(){
    it ("returns 32 when powersave is on",function(){
      expect(thermostat._maxTemp()).toEqual(defaultMaxSaveOn)
    })
    it ("returns 25 when powersave is off",function(){
      thermostat.togglePowerSave();
      expect(thermostat._maxTemp()).toEqual(defaultMaxSaveOff);
    })
  });

});
