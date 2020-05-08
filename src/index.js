import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { loadState, saveState } from './misc'
import App from './App'
import rootReducer from './Reducers'
import './index.scss'

const persistedState = loadState()
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

// store.subscribe(() => saveState(store.getState()))

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
