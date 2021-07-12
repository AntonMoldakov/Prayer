import {combineReducers} from 'redux';
import {reducers} from './ducks';


const rootReducer = combineReducers({
	auth: reducers.authReducer,
	column: reducers.columnsReducer,
	card: reducers.cardsReducer,
	comment: reducers.commentsReducer
});

export default rootReducer
