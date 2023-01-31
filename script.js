var APIKey = "0cfea648363320704e44344ecbc38810";





//creating a button search
$("#search-button").on("click", function (event) {
  

  

  event.preventDefault();// preventing page refresh
  //added empty values forecasts 
  $("#today").empty();
  $("#forecast").empty()

  cityVal = $("#search-input").val();// cretaed a cityvalue

  searchBtn = $("<button>").text(cityVal)// button with city text

  $(".list-group").append(searchBtn)// appending city lists

  if (!cityVal) {
    alert("You must chose a city name!")
  };


  // url for the weather API
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityVal + "&appid=" + APIKey;

  // I  created an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
   



    //cretaing variables for today weather
    var card = $("<div>");
    card.addClass("card text-white bg-dark mb-3 p-2")
    var city = $("<h1>").text(response.city.name);
    var date = moment().format("DD/MM/YYYY")
    var icon = response.list[0].weather[0].icon;
    var iconImg = $("<img>");
    iconImg.attr("src", "https://openweathermap.org/img/wn/" + icon + ".png");
    city.append(iconImg);
    var temp = $("<p>");
    temp.text("Temp: " + response.list[0].main.temp + "C");
    var humidity = $("<p>");
    humidity.text("Humidity: " + response.list[0].main.humidity + "%");
    var wind = $("<p>");
    wind.text("Wind: " + response.list[0].wind.speed + "KPH");

    //appending all variables and results 
    $("#today").prepend(card)
    card.append(city, date, temp, humidity, wind);
  

    //creating cards and variables for 5DAY forecast
    for (i = 0; i < 5; i++) {// loop through the days
      var card = $("<div>");
      card.addClass("card text-white bg-secondary mb-3 p-2 ");
      $('#forecast').append(card);

      var name = $("<h4>");
      var date = moment().add(i + 1, 'days').format('DD/MM/YYYY'); // moment.js
      name.html(date).addClass("card-title");

      var icon = $("<img>");
      icon.attr("src", "https://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + ".png");


      var temp = $("<p>");
      temp.html("Temp: " + response.list[i].main.temp + "°C");
      var wind = $("<p>");
      wind.text("Wind: " + response.list[i].wind.speed + "KPH");

      var humidity = $("<p>");
      humidity.html("Humidity: " + response.list[i].main.humidity + "%");

      card.append(card, name, icon, temp, humidity, wind);
    }
  })
  });
 

  









