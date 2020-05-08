import React from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import { notification } from 'antd'
import 'antd/dist/antd.css'

import { Container, Header, Search, WeatherData } from './Components'
import { fetchWeather, removeCity, setSearch } from './Actions/weatherActions'

const App = ({ weather, fetchWeather, removeCity, setSearch }) => {
	return (
		<div>
			<Header />
			<Search
				search={weather.search}
				fetchWeather={fetchWeather}
				setSearch={setSearch}
			/>

			{weather.isWeatherFetching && (
				<ReactLoading
					style={{ margin: '20px auto', width: '200px' }}
					color="#000000"
					type="spin"
				/>
			)}

			{weather.error &&
				notification.open({
					message: weather.error,
					type: 'error',
					placement: 'topRight'
				})}

			{weather.weatherData.length > 0 ? (
				<WeatherData
					data={weather.weatherData}
					removeCity={removeCity}
				/>
			) : (
				<Container>
					<h1 style={{ fontWeight: '900' }}>
						Please Enter a weather name
					</h1>
				</Container>
			)}
		</div>
	)
}

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps, {
	fetchWeather,
	removeCity,
	setSearch
})(App)
