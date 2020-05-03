import axios from 'axios'

import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_STARTED, FETCH_WEATHER_SUCCESS, REMOVE_CITY } from './types'

export const fetchWeather = (city = '') => async (dispatch) => {
	dispatch({ type: FETCH_WEATHER_STARTED })
	try {
		const res = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb2f2da95a6ededbf91df44398d6a7e2`
		)

		if (res.status === 200) dispatch({ type: FETCH_WEATHER_SUCCESS, weatherData: res.data })
	} catch (error) {
		dispatch({
			type: FETCH_WEATHER_FAILURE,
			error: `City ${city} is not found`
		})
	}
}

export const removeCity = (name) => ({ type: REMOVE_CITY, name })
