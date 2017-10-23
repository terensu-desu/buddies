const languageReducer = (state = {
	language: 0,
	lastValue: 0
}, action) => {
	switch (action.type) {
		case "SET_JAPANESE":
			state = {
				...state,
				language: action.payload,
				lastValue: state.language
			}
			break
		case "SET_CHINESE":
			state = {
				...state,
				language: action.payload,
				lastValue: state.language
			}
			break
		case "SET_ENGLISH":
			state = {
				...state,
				language: action.payload,
				lastValue: state.language
			}
			break
	}
	return state
}

export default languageReducer
