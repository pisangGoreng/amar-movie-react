import { combineReducers } from 'redux';
import Movies from './movies';

const rootReducer = combineReducers({
	// All reducers will be here
	movies: Movies,
});

export default rootReducer;
