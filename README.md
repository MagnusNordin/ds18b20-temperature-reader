#Temperature reader for DS18B20 temperature sensor
Driver for reading the temperature from a DS18B20 sensor. [Product](https://www.adafruit.com/products/381)

###Installation
```sh
npm install ds18b20-temperature-reader
```
Hardware schematics: [Here](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware)

```sh
dtoverlay=w1-gpio
sudo reboot
sudo modprobe w1-gpio
sudo modprobe w1-therm
ls /sys/bus/w1/devices
```
Check for folder starting with 28-. This path is used in the example below.

###Example
```js
var Temperature = require('./temperature');
var sensor = new Temperature('/sys/bus/w1/devices/28-000006d62e64/');

sensor.Read().then( function(temperature) {
  console.log('Current temperature is:', temperature)
}
```

###Licensing
MIT

###Copyright
Magnus Nordin 2016