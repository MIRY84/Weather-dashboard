var APIKey = "0cfea648363320704e44344ecbc38810";


//creating a button search
$("#search-button").on("click", function (event) {
    
    event.preventDefault();// preventing page refresh

    cityVal = $("#search-input").val();// cretaed a cityvalue
    
    searchBtn = $("<button>").text(cityVal)// button with city text
    
    $(".list-group").append(searchBtn)// appending city lists

    if (!cityVal) {
      alert("You must chose a city name!")
    }
    
// url for the weather API
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityVal + "&appid=" + APIKey;

// I  created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(queryURL);
  console.log(response);

//cretaing variables for today weather
var today = $("<div>");
var city =$("<h1>").text(response.city.name);
var date = moment().format("DD/MM/YYYY")
var icon = response.list[0].weather[0].icon;
var iconImg = $("<img>");
iconImg.attr("src","https://openweathermap.org/img/wn/" + icon + ".png")
city.append(iconImg);
var temp = $("<p>")
temp.text("Temp: "  + response.list[0].main.temp + "C")
var humidity = $("<p>")
humidity.text("Humidity: " + response.list[0].main.humidity + "%")
var wind = $("<p>")
wind.text("Wind: " + response.list[0].wind.speed + "KPH") 

//appending all variables and results 
$("#today").prepend(today)
today.append(city, date, temp, humidity, wind)




})
})


