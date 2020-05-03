import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'

import Header from './Components/Header'
import Search from './Components/Search'
import WeatherData from './Components/WeatherData'
import Error from './Components/Error'
import { fetchWeather, removeCity } from './Actions/weatherActions'

const App = ({ weather, fetchWeather, removeCity }) => {
	const [ search, setSearch ] = useState('')
	const [ searchBy, setSearchBy ] = useState('city')

	const handleSearch = (newSearch) => setSearch(newSearch)
	const handleSetSearchBy = (searchBy) => setSearchBy(searchBy)

	const handleSubmit = (event) => {
		event.preventDefault()
		fetchWeather(search)
		setSearch('')
	}

	return (
		<div>
			<Header />
			<Search
				search={search}
				searchBy={searchBy}
				handleSetSearchBy={handleSetSearchBy}
				handleSubmit={handleSubmit}
				handleSearch={handleSearch}
			/>

			{weather.isWeatherFetching ? (
				<ReactLoading style={{ margin: '20px auto', width: '200px' }} color="#000000" type="spin" />
			) : null}

			{weather.errorShown ? <Error text={weather.error} /> : null}

			{weather.weatherData.length >= 1 ? (
				<WeatherData data={weather.weatherData} removeCity={removeCity} />
			) : null}
		</div>
	)
}

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps, { fetchWeather, removeCity })(App)
