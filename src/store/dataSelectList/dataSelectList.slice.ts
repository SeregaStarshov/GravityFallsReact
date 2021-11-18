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
  race: boolean;
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
  race: false,
  side: false,
  closeSelectList: false,
};

export const outputSelectList = createSlice({
  name: 'outputSelectList',
  initialState: initialStateSelectList,
  reducers: {
    gender: (state, action: PayloadAction<null>) => {
      if (!state.gender) {
        state.indexSelect = action.payload;
        state.gender = true;
      } else {
        state.indexSelect = null;
        state.gender = false;
      }
    },
    race: (state, action: PayloadAction<null>) => {
      if (!state.race) {
        state.indexSelect = action.payload;
        state.race = true;
      } else {
        state.indexSelect = null;
        state.race = false;
      }
    },
    side: (state, action: PayloadAction<null>) => {
      if (!state.side) {
        state.indexSelect = action.payload;
        state.side = true;
      } else {
        state.indexSelect = null;
        state.side = false;
      }
    },
    closeSelectList: (state) => {
      if (state.gender || state.race || state.side) {
        // console.log('close');
      } else {
        return;
      }
    },
  },
});
export const gender = outputSelectList.actions.gender;
export const race = outputSelectList.actions.race;
export const side = outputSelectList.actions.side;
export const closeSelectList = outputSelectList.actions.closeSelectList;
export default outputSelectList.reducer;
