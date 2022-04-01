import { combineReducers } from 'redux';

export default combineReducers({
	// temp for now, to stop error
	temp: () => {
		return { nothing: null };
	},
});
