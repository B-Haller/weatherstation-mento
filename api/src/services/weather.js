import fetch from "node-fetch";

export const getWeatherByZip = async ({ zip }) => {
  //Appended imperial metrics to avoid unnecessary conversion
  //TODO: remove API key and store in safe config
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${process.env.WEATHER_API_KEY}`
  )
  const weatherData = await response.json()

  if (weatherData.cod === '404') {
    return new Error(`${zip} isn't a valid US zip code, please try again`)
  }

  return {
    zip,
    city: weatherData.name,
    conditions: weatherData.weather[0].main,
    temp: Math.round(weatherData.main.temp),
    icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  }
}
