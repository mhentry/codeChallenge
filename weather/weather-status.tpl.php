<?php
/**
 * @file
 * Block template to render a weather block.
 */
?>
<div>
  <form id="weather_data_form">
    <label for="city">City</label>
    <input type="text" id="weather_city" name="city" /></br>
    <label for="units">Units</label>
    <input type="radio" id="units_metric" name="units" value="metric"/> Celsius
    <input type="radio" id="units_imperial" name="units" value="imperial"/> Fahrenheit</br>
    <button type="submit">Change</button>
  </form>
  <p id="weather_description"></p>
  <p>Temperature: <span id="weather_temp"></span></p>
  <p>Wind speed: <span id="weather_wind"></span></p>
</div>
