import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ellipse from '../../images/Ellipse.png';
import ellips_2 from '../../images/Ellipse_2.png';
import ellips_3 from '../../images/Ellipse_3.png';
import ellipse_4 from '../../images/Ellipse_4.png';
import ellips_5 from '../../images/Ellipse_5.png';
import ellips_6 from '../../images/Ellipse_6.png';
import ellips_7 from '../../images/Ellipse_7.png';
import baby_gideon from '../../images/baby_gideon.png';
import bill from '../../images/bill.png';
import maible from '../../images/maible.png';
import maison from '../../images/maison.png';
import sheil_shifter from '../../images/sheil_shifter.png';
import shmebulok from '../../images/shmebulok.png';
import stanly from '../../images/stanly.png';
import vendri from '../../images/vendri.png';
import zus from '../../images/zus.png';

export interface Card {
  id: number;
  background: string;
  img: string;
  name: string;
  nameColor: string;
  characteristicsColor: string;
  gender: string;
  race: string;
  side: string;
  description?: string;
  tags?: string[];
}
interface Payload {
  item: string;
  check: boolean;
}
export interface InitialState {
  dataCards: Card[];
  startIndex: number;
  endIndex: number;
  step: number;
  modalView: boolean;
  viewModalAddCharacter: boolean;
  modalCard: Card;
  arrayCheckedInputs: Payload[];
  filterCards: Card[];
  valueInput: string[];
  cardsFromInput: Card[];
}

const initialState: InitialState = {
  dataCards: [
    {
      id: 1,
      background: ellipse,
      img: maible,
      name: 'Мэйбл Пайнс',
      nameColor: '#D9335E',
      characteristicsColor: '#D9335E',
      gender: 'Женский',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 2,
      background: ellips_2,
      img: maison,
      name: 'Мейсон Пайнс',
      nameColor: '#007CA8',
      characteristicsColor: '#007CA8',
      gender: 'Мужской',
      race: 'Человек',
      side: 'Порядок',
      description:
        'Диппер — двенадцатилетний мальчик, брат-близнец Мэйбл. Один из главных героев мультсериала.  Он пытается раскрыть тайны городка Гравити Фолз и найти автора дневников. Очень сообразителен и рассудителен, но часто нерешителен. Влюблён в Венди Кордрой. Любит настольную игру под названием «Подземелья, подземелья и ещё подземелья».',
      tags: ['умный', 'смелый', 'нерешительный'],
    },
    {
      id: 3,
      background: ellips_3,
      img: bill,
      name: 'Билл Шифр',
      nameColor: '#F2E43D',
      characteristicsColor: '#000000',
      gender: 'Мужской',
      race: 'Неизвестно',
      side: 'Хаос',
      description: '',
      tags: [],
    },
    {
      id: 4,
      background: ellipse_4,
      img: stanly,
      name: 'Стэнли Пайнс',
      nameColor: '#922B31',
      characteristicsColor: '#922B31',
      gender: 'Мужской',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 5,
      background: ellips_5,
      img: shmebulok,
      name: 'Шмебьюлок',
      nameColor: '#61B4C0',
      characteristicsColor: '#61B4C0',
      gender: 'Мужской',
      race: 'Монстр',
      side: 'Хаос',
      description: '',
      tags: [],
    },
    {
      id: 6,
      background: ellipse_4,
      img: zus,
      name: 'Зус Рамирес',
      nameColor: '#B3A287',
      characteristicsColor: '#26514E',
      gender: 'Мужской',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 7,
      background: ellips_6,
      img: baby_gideon,
      name: 'Малыш Гидеон',
      nameColor: '#8ACFFF',
      characteristicsColor: '#7EB6DD',
      gender: 'Мужской',
      race: 'Человек',
      side: 'Хаос',
      description:
        'Диппер — двенадцатилетний мальчик, брат-близнец Мэйбл. Один из главных героев мультсериала.  Он пытается раскрыть тайны городка Гравити Фолз и найти автора дневников. Очень сообразителен и рассудителен, но часто нерешителен. Влюблён в Венди Кордрой. Любит настольную игру под названием «Подземелья, подземелья и ещё подземелья».',
      tags: [],
    },
    {
      id: 8,
      background: ellips_7,
      img: vendri,
      name: 'Венди Кордрой',
      nameColor: '#009471',
      characteristicsColor: '#009471',
      gender: 'Женский',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 9,
      background: ellipse,
      img: sheil_shifter,
      name: 'Шейл Шифтер ',
      nameColor: '#F74B8A',
      characteristicsColor: '#F74B8A',
      gender: 'Мужской',
      race: 'Монстр',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 10,
      background: ellipse,
      img: maible,
      name: 'Мэйбл Пайнс',
      nameColor: '#D9335E',
      characteristicsColor: '#D9335E',
      gender: 'Женский',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 11,
      background: ellips_2,
      img: maison,
      name: 'Мейсон Пайнс',
      nameColor: '#007CA8',
      characteristicsColor: '#007CA8',
      gender: 'Мужской',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
    {
      id: 12,
      background: ellips_3,
      img: bill,
      name: 'Билл Шифр',
      nameColor: '#F2E43D',
      characteristicsColor: '#000000',
      gender: 'Мужской',
      race: 'Неизвестно',
      side: 'Хаос',
      description: '',
      tags: [],
    },
    {
      id: 13,
      background: ellipse_4,
      img: stanly,
      name: 'Стэнли Пайнс',
      nameColor: '#922B31',
      characteristicsColor: '#922B31',
      gender: 'Мужской',
      race: 'Человек',
      side: 'Порядок',
      description: '',
      tags: [],
    },
  ],
  startIndex: 0,
  endIndex: 3,
  step: 3,
  modalView: false,
  viewModalAddCharacter: false,
  modalCard: {
    id: 0,
    background: '',
    img: '',
    name: '',
    nameColor: '',
    characteristicsColor: '',
    gender: '',
    race: '',
    side: '',
  },
  arrayCheckedInputs: [],
  filterCards: [],
  valueInput: [],
  cardsFromInput: [],
};
// export type ActionInterface<Item> = {
//   type: string;
//   payload: Item;
// };

export const outputCards = createSlice({
  name: 'outputCards',
  initialState,
  reducers: {
    nextSlide: (state) => {
      if (state.startIndex < state.dataCards.length && state.endIndex < state.dataCards.length) {
        state.startIndex += state.step;
        state.endIndex += state.step;
      }
    },
    prevSlide: (state) => {
      if (state.startIndex > 0) {
        state.startIndex -= state.step;
        state.endIndex -= state.step;
      }
    },
    clickPunkt: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload;
      state.endIndex = action.payload + state.step;
    },
    viewModal: (state, action: PayloadAction<Card>) => {
      state.modalView = true;
      state.modalCard = action.payload;
    },
    viewModalAddCharacter: (state) => {
      state.viewModalAddCharacter = true;
    },
    closedModal: (state) => {
      if (state.modalView) {
        state.modalView = false;
      }
      if (state.viewModalAddCharacter) {
        state.viewModalAddCharacter = false;
      }
    },
    selectItem: (state, action: PayloadAction<{ item: string; check: boolean }>) => {
      if (action.payload.check) {
        state.arrayCheckedInputs.push(action.payload);
        state.dataCards.filter((item) => {
          for (const key in item) {
            if (item[key] === action.payload.item) {
              state.filterCards.push(item);
            }
          }
        });
      } else if (action.payload.check === false) {
        state.arrayCheckedInputs.forEach((item, index) => {
          if (item.item === action.payload.item) {
            state.arrayCheckedInputs.splice(index, 1);
          }
        });
      }
    },
    returnInitialState: (state) => {
      return initialState;
    },
    changeStateOnFilter: (state) => {
      state.dataCards = state.filterCards;
    },
    changeInput: (state, action: PayloadAction<string>) => {
      const value = action.payload.replace(/(?<![а-яё])[а-яё]/gi, (match) => match.toUpperCase());
      state.valueInput = value.split(', ', 3);
    },
    addCardsFromInput: (state, action: PayloadAction<Card>) => {
      state.cardsFromInput.push(action.payload);
    },
    outputCardsFromInput: (state) => {
      state.dataCards = state.cardsFromInput;
    },
    addCardNewCharacter: (state, action) => {
      console.log(action.payload);
      state.dataCards.push(action.payload);
    },
  },
});

export const nextAction = outputCards.actions.nextSlide;
export const prevAction = outputCards.actions.prevSlide;
export const clickPunkt = outputCards.actions.clickPunkt;
export const viewModal = outputCards.actions.viewModal;
export const viewModalAddCharacter = outputCards.actions.viewModalAddCharacter;
export const closedModal = outputCards.actions.closedModal;
export const selectItem = outputCards.actions.selectItem;
export const returnInitialState = outputCards.actions.returnInitialState;
export const changeStateOnFilter = outputCards.actions.changeStateOnFilter;
export const changeInput = outputCards.actions.changeInput;
export const outputCardsFromInput = outputCards.actions.outputCardsFromInput;
export const addCardsFromInput = outputCards.actions.addCardsFromInput;
export const addCardNewCharacter = outputCards.actions.addCardNewCharacter;
export default outputCards.reducer;
