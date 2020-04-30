import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'

import Header from './Components/Header'
import Search from './Components/Search'

import { fetchWeather } from './Actions/weatherActions'
import WeatherData from './Components/WeatherData'

const App = ({ weather, fetchWeather }) => {
  const [search, setSearch] = useState('')
  const [searchBy, setSearchBy] = useState('city')

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
        setSearch={setSearch}
      />

      {weather.isWeatherFetching ? (
        <ReactLoading color="#000000" type="spin" />
      ) : null}

      {weather.error && <h1>{weather.error}</h1>}

      {weather.weatherData.length >= 1 ? (
        <WeatherData data={weather.weatherData} />
      ) : null}
    </div>
  )
}

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps, { fetchWeather })(App)
