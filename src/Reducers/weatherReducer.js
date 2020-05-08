import {
	FETCH_WEATHER_FAILURE,
	FETCH_WEATHER_STARTED,
	FETCH_WEATHER_SUCCESS,
	REMOVE_CITY,
	SET_SEARCH
} from '../Actions/types'
import { notification } from 'antd'

const _initialState = {
	isWeatherFetching: false,
	weatherData: [],
	search: '',
	error: null
}

export default (state = _initialState, action) => {
	switch (action.type) {
		case SET_SEARCH:
			return { ...state, search: action.search }

		case REMOVE_CITY:
			return {
				...state,
				weatherData: state.weatherData.filter(
					(weather) => weather.name !== action.name
				),
				isWeatherFetching: false
			}

		case FETCH_WEATHER_FAILURE:
			return {
				...state,
				isWeatherFetching: false,
				error: action.error
			}

		case FETCH_WEATHER_SUCCESS: {
			const dataID = action.weatherData.id
			const cityIncluded = state.weatherData.some(
				(data) => data.id === dataID
			)
			if (!cityIncluded)
				return {
					...state,
					isWeatherFetching: false,
					weatherData: [ ...state.weatherData, action.weatherData ]
				}
			else {
				notification.open({
					message: 'City is already in the list',
					type: 'warning'
				})
				return {
					...state,
					isWeatherFetching: false,
					weatherData: [ ...state.weatherData ]
				}
			}
		}

		case FETCH_WEATHER_STARTED:
			return { ...state, isWeatherFetching: true }

		default:
			return state
	}
}
