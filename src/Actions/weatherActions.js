import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_STARTED,
  FETCH_WEATHER_SUCCESS,
} from './types'

export const setWeather = (weatherData) => ({
  type: FETCH_WEATHER_SUCCESS,
  weatherData,
})

export const fetchWeather = (city = '', country = '') => async (dispatch) => {}
