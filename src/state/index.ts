import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {useDispatch} from "react-redux";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
	sagaMiddleware,
	...getDefaultMiddleware(),
];

const store = configureStore({
	reducer: rootReducer,
	middleware,
});

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;
