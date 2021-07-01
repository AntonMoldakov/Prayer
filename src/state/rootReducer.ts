import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {authReducer} from './ducks';
import {AsyncStorage} from 'react-native';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};

const rootReducer = combineReducers({
	auth: authReducer
});

// export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
