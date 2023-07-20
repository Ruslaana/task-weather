const FORECAST_BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const TODAY_BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const API_KEY = 'EWQUHM4BL87DA9JZMMS43GGX2';

export const fetchWeatherForecast = async (city) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toString().split('T')[0];
    const forecastResponse = await fetch(
      `${FORECAST_BASE_URL}${city}/${today}/${nextWeek}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    const forecastData = await forecastResponse.json();

    const todayResponse = await fetch(
      `${TODAY_BASE_URL}${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    const todayData = await todayResponse.json();

    return [...todayData.days, ...forecastData.days];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchWeatherForecast;