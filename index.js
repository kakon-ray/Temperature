function currentApi() {
  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fb1d5f8dfa522bb452dd09c919a0ec56`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function setInnerText(id, text) {
  document.getElementById(id).innerText = text;
}

function displayData(data) {
  setInnerText("cityName", data.name);
  setInnerText("temp", data.main.temp);
  setInnerText("cloud", data.weather[0].main);

  iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById("icon").src = iconUrl;
}
