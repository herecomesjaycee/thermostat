# thermostat
Thermostat built in JavaScript

## Objectives
To learn Javascript, Jasmine, API, AJAX and jQuery by building a Thermostat web app. 

## Business Logic
<b>Specification:</b>

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Installation
1) Git fork/clone this repository `git clone https://github.com/herecomesjaycee/thermostat.git`

2) Change file directory `cd thermostat`

3) Launch the index.html in any browsers and enjoy the thermostat. 

<b>Optional - Remote API</b>

1) Change file directory `cd server`

2) Run `gem install bundler` if bundler is not installed previously and run `bundle`

3) Run `rackup` to launch the server and the server will persist the session data of the thermostat

*If using server to persist browser data, please use Safari as the browser. 

## Screenshot
![screen shot 2017-02-03 at 18 04 03](https://cloud.githubusercontent.com/assets/13175171/22602474/370ff042-ea3b-11e6-8419-d23e624d6907.png)
