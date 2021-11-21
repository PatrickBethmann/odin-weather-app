import Weather from './Weather';

async function getWeather(location, units = 'metric') {
  console.log(location);
  console.log(units);
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=afe27c4e375966c49eaea24984167756`
  );

  let weatherData = await response.json();

  let weatherObject = new Weather(weatherData);
  return Promise.resolve(weatherObject);
}

export { getWeather };