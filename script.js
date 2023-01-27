var APIKey = "0cfea648363320704e44344ecbc38810";

// Here we are building the URL we need to query the database

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=" + APIKey;

// I  created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(queryURL);
  console.log(response);
  var celsiusTemperature = Math.floor(response.main.temp - 273.15);
  // Create CODE HERE to transfer content to HTML
  var myTempDiv = $('.temp');
  myTempDiv.text(celsiusTemperature + " degrees Celsius");
  var city = response.name;
  var humidity = response.main.humidity;
  var wind = response.wind.speed;
  $('.city').text("Weather for " + city);
  $('.humidity').text("Relative humidity: " + humidity + "%");
  $('.wind').text("Wind speed: " + wind + " m/s");
    
})