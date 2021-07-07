import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from "redux-persist";
import {authReducer, columnsReducer, sessionReducer, cardsReducer, commentsReducer} from './ducks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};

const rootReducer = combineReducers({
	auth: authReducer,
	column: columnsReducer,
	session: sessionReducer,
	card: cardsReducer,
	comment: commentsReducer
});

export default rootReducer

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;
