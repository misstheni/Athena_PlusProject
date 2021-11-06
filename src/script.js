let now = new Date();
let todaysDate = document.querySelector("#todays-date");
let todaysTime = document.querySelector("#todays-time");
let currentDate = now.getDate();
let temperatureToday = document.querySelector("#temperature-today");

let days = [
  { day: "SUN", high: 60, low: 55, wind: 10 },
  { day: "MON", high: 68, low: 44, wind: 5 },
  { day: "TUES", high: 70, low: 63, wind: 15 },
  { day: "WED", high: 75, low: 60, wind: 10 },
  { day: "THURS", high: 61, low: 49, wind: 16 },
  { day: "FRI", high: 68, low: 55, wind: 4 },
  { day: "SAT", high: 80, low: 65, wind: 8 },
];
let currentDay = days[now.getDay()].day;
let currentHigh = days[now.getDay()].high;
let currentLow = days[now.getDay()].low;

let sundayH = days[0].high;
let sundayL = days[0].low;
let mondayH = days[1].high;
let mondayL = days[1].low;
let tuesdayH = days[2].high;
let tuesdayL = days[2].low;
let wednesdayH = days[3].high;
let wednesdayL = days[3].low;
let thursdayH = days[4].high;
let thursdayL = days[4].low;
let fridayH = days[5].high;
let fridayL = days[5].low;
let saturdayH = days[6].high;
let saturdayL = days[6].low;

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = months[now.getMonth()];
todaysDate.innerHTML = `${currentDay} | ${currentMonth} ${currentDate}`;

let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

if (currentHour >= 12) {
  currentMinutes = `${currentMinutes} PM`;
} else {
  currentMinutes = `${currentMinutes} AM`;
}

todaysTime.innerHTML = `${currentHour}:${currentMinutes}`;

let sundayTemps = document.querySelector("#sundayTemps");
sundayTemps.innerHTML = `${sundayH}°F </br> ${sundayL}°F`;
let mondayTemps = document.querySelector("#mondayTemps");
mondayTemps.innerHTML = `${mondayH}°F </br> ${mondayL}°F`;
let tuesdayTemps = document.querySelector("#tuesdayTemps");
tuesdayTemps.innerHTML = `${tuesdayH}°F </br> ${tuesdayL}°F`;
let wednesdayTemps = document.querySelector("#wednesdayTemps");
wednesdayTemps.innerHTML = `${wednesdayH}°F </br> ${wednesdayL}°F`;
let thursdayTemps = document.querySelector("#thursdayTemps");
thursdayTemps.innerHTML = `${thursdayH}°F </br> ${thursdayL}°F`;
let fridayTemps = document.querySelector("#fridayTemps");
fridayTemps.innerHTML = `${fridayH}°F </br> ${fridayL}°F`;
let saturdayTemps = document.querySelector("#saturdayTemps");
saturdayTemps.innerHTML = `${saturdayH}°F </br> ${saturdayL}°F`;

function toFahrenheitWeekly(event) {
  event.preventDefault();

  let sundayTemps = document.querySelector("#sundayTemps");
  let mondayTemps = document.querySelector("#mondayTemps");
  let tuesdayTemps = document.querySelector("#tuesdayTemps");
  let wednesdayTemps = document.querySelector("#wednesdayTemps");
  let thursdayTemps = document.querySelector("#thursdayTemps");
  let fridayTemps = document.querySelector("#fridayTemps");
  let saturdayTemps = document.querySelector("#saturdayTemps");

  sundayTemps.innerHTML = `${sundayH}°F </br> ${sundayL}°F`;
  mondayTemps.innerHTML = `${mondayH}°F </br> ${mondayL}°F`;
  tuesdayTemps.innerHTML = `${tuesdayH}°F </br> ${tuesdayL}°F`;
  wednesdayTemps.innerHTML = `${wednesdayH}°F </br> ${wednesdayL}°F`;
  thursdayTemps.innerHTML = `${thursdayH}°F </br> ${thursdayL}°F`;
  fridayTemps.innerHTML = `${fridayH}°F </br> ${fridayL}°F`;
  saturdayTemps.innerHTML = `${saturdayH}°F </br> ${saturdayL}°F`;
}

function toCelsiusWeekly(event) {
  event.preventDefault();

  let sundayTemps = document.querySelector("#sundayTemps");
  let mondayTemps = document.querySelector("#mondayTemps");
  let tuesdayTemps = document.querySelector("#tuesdayTemps");
  let wednesdayTemps = document.querySelector("#wednesdayTemps");
  let thursdayTemps = document.querySelector("#thursdayTemps");
  let fridayTemps = document.querySelector("#fridayTemps");
  let saturdayTemps = document.querySelector("#saturdayTemps");

  sundayTemps.innerHTML = `${Math.round(
    (sundayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((sundayL - 32) * (5 / 9))}°C`;
  mondayTemps.innerHTML = `${Math.round(
    (mondayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((mondayL - 32) * (5 / 9))}°C`;
  tuesdayTemps.innerHTML = `${Math.round(
    (tuesdayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((tuesdayL - 32) * (5 / 9))}°C`;
  wednesdayTemps.innerHTML = `${Math.round(
    (wednesdayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((wednesdayL - 32) * (5 / 9))}°C`;
  thursdayTemps.innerHTML = `${Math.round(
    (thursdayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((thursdayL - 32) * (5 / 9))}°C`;
  fridayTemps.innerHTML = `${Math.round(
    (fridayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((fridayL - 32) * (5 / 9))}°C`;
  saturdayTemps.innerHTML = `${Math.round(
    (saturdayH - 32) * (5 / 9)
  )}°C </br> ${Math.round((saturdayL - 32) * (5 / 9))}°C`;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search");
  let city = document.querySelector("#city-name");
  if (cityInput.value) {
    let units = "metric";
    let apiKey = "5678cd202ad8609baa4c102a770e20ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;

    city.innerHTML = `${cityInput.value}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  } else {
    city.innerHTML = null;
    alert(`Please enter a city.`);
  }
}

function showTemperature(Response) {
  let currentTemp = Math.round(Response.data.main.temp);
  let cityTempMax = Math.round(Response.data.main.temp_max);
  let cityTempMin = Math.round(Response.data.main.temp_min);
  let tempNow = document.querySelector("#temperature-today");
  tempNow.innerHTML = `${Math.round(
    currentTemp * (9 / 5) + 32
  )}°F / ${Math.round(currentTemp)}°C`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "5678cd202ad8609baa4c102a770e20ac";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showLocalWeather);

  function showLocalWeather(Response) {
    let localCity = Response.data.name;
    let localCityElement = document.querySelector("#city-name");
    localCityElement.innerHTML = `${localCity}`;

    let localCityTemp = Math.round(Response.data.main.temp);
    let localCityTempElement = document.querySelector("#temperature-today");
    localCityTempElement.innerHTML = `${localCityTemp}°C`;
  }
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentPosition);

let fahrenheitLink = document.querySelector(".fahrenheit-link");
fahrenheitLink.addEventListener("click", toFahrenheitWeekly);

let celsiusLink = document.querySelector(".celsius-link");
celsiusLink.addEventListener("click", toCelsiusWeekly);

let form = document.querySelector("#city-form");
form.addEventListener("submit", search);
