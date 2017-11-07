/**
 * Renders the weather for a city based on user entered zipcode.
 */
(function ($) {
  /**
   * Process the form on submission.
   */
  Drupal.behaviors.weatherData = {
    attach: function (context, settings) {
      $('#weather_data_form', context).once('jquery').submit(function (e) {
        e.preventDefault();
        processForm();
      });
    }
  };

  /**
   * Process the form on page load.
   */
  $(document).ready(function() {
    $('#weather_city').val('Madison'),
    $('#units_metric').attr('checked', 'checked');
    processForm();
  });

  /**
   * Callback to process the form.
   */
  function processForm() {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.
    $.ajax({
      type:'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#weather_city').val(),
        units: $('#weather_data_form input[name="units"]:checked').val(),
        appid: 'c69ac6c1757fb9956a36585299f01fa9'
      },

      // work with the response
      success: function (response) {
        $('#weather_description').text(response.weather[0].description);
        $('#weather_temp').text(response.main.temp);
        $('#weather_wind').text(response.wind.speed);
      },
    });
  }
})(jQuery);
