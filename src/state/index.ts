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
import {useDispatch} from "react-redux";
import rootSaga from "./rootSagas";

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

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const persistor = persistStore(store);

export default store;
