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
 
})
})

