function changingDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let dateChange = document.querySelector("#date");
let currentTime = new Date();
dateChange.innerHTML = changingDate(currentTime);

function changeCity(event) {
  event.preventDefault();
  let element = document.querySelector("#cities");
  let enterInput = document.querySelector("#Enter-city-bottom");
  element.innerHTML = enterInput.value;
}

////
function searchCity() {
  let apiKey = "b771ea1fd8adfbfe0481d82cbd501c05";
  let city = document.querySelector("#Enter-city-bottom").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metricappid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  document.querySelector("#cities").innerHTML = response.data.name;
  document.querySelector("nineteen").innerHTML = Math.round(
    response.data.main.temp
  );
}

let form = document.querySelector("form");
form.addEventListener("submit", showTemperature);

searchCity();
