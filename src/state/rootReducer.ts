import {combineReducers} from 'redux';
// import {persistReducer} from "redux-persist";
import {reducers} from './ducks';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const persistConfig = {
// 	key: 'root',
// 	storage: AsyncStorage
// };

const rootReducer = combineReducers({
	auth: reducers.authReducer,
	column: reducers.columnsReducer,
	card: reducers.cardsReducer,
	comment: reducers.commentsReducer
});

export default rootReducer

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;
