import { configureStore } from '@reduxjs/toolkit';

import { Dispatch } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

import { outputCards } from './characterCards/cards.slice';
import { outputSelectList } from './dataSelectList/dataSelectList.slice';

export const store = configureStore({
  reducer: {
    cards: outputCards.reducer,
    selectList: outputSelectList.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
