import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_STARTED,
  FETCH_WEATHER_SUCCESS,
} from '../Actions/types'

const _initialState = {
  isWeatherFetching: false,
  weatherData: [],
  cityName: '',
  error: null,
}

export default (state = _initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_FAILURE:
      return { ...state, isWeatherFetching: false, error: action.error }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isWeatherFetching: false,
        weatherData: state.weatherData.includes(action.weatherData.name)
          ? [...state.weatherData]
          : [...state.weatherData, action.weatherData],
      }

    case FETCH_WEATHER_STARTED:
      return { ...state, isWeatherFetching: true }

    default:
      return state
  }
}
