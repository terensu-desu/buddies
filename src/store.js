import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import language from "./reducers/languageReducer"

export default createStore(
	combineReducers({
		language
	}),
	{},
	applyMiddleware(logger(), thunk)
)