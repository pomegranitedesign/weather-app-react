import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_STARTED, FETCH_WEATHER_SUCCESS, REMOVE_CITY } from '../Actions/types'

const _initialState = {
	isWeatherFetching: false,
	weatherData: [],
	cityName: '',
	error: null,
	errorShown: false
}

export default (state = _initialState, action) => {
	switch (action.type) {
		case REMOVE_CITY:
			return {
				...state,
				weatherData: state.weatherData.filter((weather) => weather.name !== action.name),
				isWeatherFetching: false
			}

		case FETCH_WEATHER_FAILURE:
			return { ...state, isWeatherFetching: false, error: action.error, weatherData: [], errorShown: true }

		case FETCH_WEATHER_SUCCESS: {
			const dataID = action.weatherData.id
			const cityIncluded = state.weatherData.some((data) => data.id === dataID)
			if (!cityIncluded)
				return {
					...state,
					isWeatherFetching: false,
					weatherData: [ ...state.weatherData, action.weatherData ]
				}
			else return { ...state, isWeatherFetching: false, weatherData: [ ...state.weatherData ] }
		}

		case FETCH_WEATHER_STARTED:
			return { ...state, isWeatherFetching: true }

		default:
			return state
	}
}
