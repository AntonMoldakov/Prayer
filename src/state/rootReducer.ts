import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {authReducer, columnsReducer} from './ducks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};

const rootReducer = combineReducers({
	auth: authReducer,
	column: columnsReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;
