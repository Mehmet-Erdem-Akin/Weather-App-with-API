var city = document.querySelector('#bul');
var temp = document.querySelector('#temp');
var icon = document.querySelector('#icon');
var weather = document.querySelector('#weather');
var button = document.querySelector('#submit');
var place = document.querySelector('#place');


button.addEventListener('click', function(name) {
    place.innerHTML = city.value;

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=cc68cb5c2ac185a4c9d578122ae9f1a2")
        .then(response => response.json())
        .then(data => {
            var derece = Math.floor(data.main.temp);
            var gorsel = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            var hava = data.weather[0].main;
            var place1 = document.querySelector('#bul').value;

            icon.src = gorsel;
            weather.innerHTML = hava;
            temp.innerHTML = derece - 273 + " °C";
            city.value = "";
            place.innerHTML = place1;
        })

    .catch(err => alert("Wrong city name!"));
})