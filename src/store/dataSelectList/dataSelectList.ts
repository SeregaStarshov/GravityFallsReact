import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type List = {
  [key: string]: string;
};

export interface DataSelectList {
  id: number;
  title: string;
  selectList: List;
}

export interface Data {
  data: DataSelectList[];
  indexSelect: null;
}

export const initialStateSelectList: Data = {
  data: [
    {
      id: 1,
      title: 'Пол',
      selectList: {
        men: 'Мужской',
        women: 'Женский',
        undefined: 'Неопределен',
      },
    },
    {
      id: 2,
      title: 'Раса',
      selectList: {
        man: 'Человек',
        monster: 'Монстр',
        unknown: 'Неизвестно',
      },
    },
    {
      id: 3,
      title: 'Сторона',
      selectList: {
        discipline: 'Порядок',
        chaos: 'Хаос',
      },
    },
  ],
  indexSelect: null,
};

export const outputSelectList = createSlice({
  name: 'outputSelectList',
  initialState: initialStateSelectList,
  reducers: {
    gender: (state, action) => {
      state.indexSelect = action.payload;
    },
    rice: (state, action) => {
      state.indexSelect = action.payload;
    },
    side: (state, action) => {
      state.indexSelect = action.payload;
    },
  },
});
export const gender = outputSelectList.actions.gender;
export const rice = outputSelectList.actions.rice;
export const side = outputSelectList.actions.side;
export default outputSelectList.reducer;
