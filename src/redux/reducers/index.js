import { combineReducers } from 'redux';
import Movies from './movies';

const rootReducer = combineReducers({
	movies: Movies,
});

export default rootReducer;
