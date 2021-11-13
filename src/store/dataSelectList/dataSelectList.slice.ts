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
  gender: boolean;
  rice: boolean;
  side: boolean;
  closeSelectList: boolean;
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
  gender: false,
  rice: false,
  side: false,
  closeSelectList: false,
};

export const outputSelectList = createSlice({
  name: 'outputSelectList',
  initialState: initialStateSelectList,
  reducers: {
    gender: (state, action) => {
      if (!state.gender) {
        state.indexSelect = action.payload;
        state.gender = true;
      } else {
        state.indexSelect = null;
        state.gender = false;
      }
    },
    rice: (state, action) => {
      if (!state.rice) {
        state.indexSelect = action.payload;
        state.rice = true;
      } else {
        state.indexSelect = null;
        state.rice = false;
      }
    },
    side: (state, action) => {
      if (!state.side) {
        state.indexSelect = action.payload;
        state.side = true;
      } else {
        state.indexSelect = null;
        state.side = false;
      }
    },
    closeSelectList: (state) => {
      if (state.gender || state.rice || state.side) {
        console.log('close');
      } else {
        return;
      }
    },
  },
});
export const gender = outputSelectList.actions.gender;
export const rice = outputSelectList.actions.rice;
export const side = outputSelectList.actions.side;
export const closeSelectList = outputSelectList.actions.closeSelectList;
export default outputSelectList.reducer;
