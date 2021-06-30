import createSagaMiddleware from 'redux-saga';
import persistedReducer from './rootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
	sagaMiddleware,
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];

const store = configureStore({
	reducer: persistedReducer,
	middleware: middleware,
});

export const persistor = persistStore(store);

export default store;
