async function get_weather(event) {
  event.preventDefault();

  const cityNames = document
    .querySelector("#cityName")
    .value.split(",")
    .map((city) => city.trim());

  document.getElementById("weather-results").innerHTML = "";

  const api_key = "api_key_dekhega_babu_hat";

  for (const cityName of cityNames) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}&units=metric`
      );

      const kelvin = response.data.list[0].main.temp;
      const celsius = kelvin; // Convert to Celsius as we already use 'metric' units

      const weatherDiv = document.createElement("div");
      weatherDiv.classList.add("weather-card");

      weatherDiv.innerHTML = `
                <h2>${cityName}</h2>
                <p class="country">${response.data.city.country}</p>
                <h3 class="temp">${celsius.toFixed(1)} °C</h3>
            `;

      document.getElementById("weather-results").appendChild(weatherDiv);
    } catch (error) {
      const weatherDiv = document.createElement("div");
      weatherDiv.classList.add("weather-card");
      weatherDiv.innerHTML = `<p>Sorry, we couldn't find weather data for ${cityName}.</p>`;
      document.getElementById("weather-results").appendChild(weatherDiv);
    }
  }
}
get_weather("London");
