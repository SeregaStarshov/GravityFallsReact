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
import { List } from '../dataSelectList/dataSelectList.slice';

export interface Card {
  id: number;
  background: string;
  img: string;
  person: List;
  dataPerson: List;
  tags?: string[];
}

export interface InitialState {
  dataCards: Card[];
  startIndex: number;
  endIndex: number;
  step: number;
  modalView: boolean;
  viewModalAddCharacter: boolean;
  modalCard: Card;
}

const initialState: InitialState = {
  dataCards: [
    {
      id: 1,
      background: ellipse,
      img: maible,
      person: {
        title: 'Мэйбл Пайнс',
        titleColor: '#D9335E',
      },
      dataPerson: {
        color: '#D9335E',
        gender: 'Женщина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 2,
      background: ellips_2,
      img: maison,
      person: {
        title: 'Мейсон Пайнс',
        titleColor: '#007CA8',
      },
      dataPerson: {
        color: '#007CA8',
        gender: 'Мужчина',
        race: 'Человек',
        side: 'Порядок',
        description:
          'Диппер — двенадцатилетний мальчик, брат-близнец Мэйбл. Один из главных героев мультсериала.  Он пытается раскрыть тайны городка Гравити Фолз и найти автора дневников. Очень сообразителен и рассудителен, но часто нерешителен. Влюблён в Венди Кордрой. Любит настольную игру под названием «Подземелья, подземелья и ещё подземелья».',
      },
      tags: ['умный', 'смелый', 'нерешительный'],
    },
    {
      id: 3,
      background: ellips_3,
      img: bill,
      person: {
        title: 'Билл Шифр',
        titleColor: '#F2E43D',
      },
      dataPerson: {
        color: '#000000',
        gender: 'Мужчина',
        race: 'Неизвестно',
        side: 'Хаос',
        description: '',
      },
      tags: [],
    },
    {
      id: 4,
      background: ellipse_4,
      img: stanly,
      person: {
        title: 'Стэнли Пайнс',
        titleColor: '#922B31',
      },
      dataPerson: {
        color: '#922B31',
        gender: 'Мужчина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 5,
      background: ellips_5,
      img: shmebulok,
      person: {
        title: 'Шмебьюлок',
        titleColor: '#61B4C0',
      },
      dataPerson: {
        color: '#61B4C0',
        gender: 'Мужчина',
        race: 'Монстр',
        side: 'Хаос',
        description: '',
      },
      tags: [],
    },
    {
      id: 6,
      background: ellipse_4,
      img: zus,
      person: {
        title: 'Зус Рамирес',
        titleColor: '#B3A287',
      },
      dataPerson: {
        color: '#26514E',
        gender: 'Мужчина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 7,
      background: ellips_6,
      img: baby_gideon,
      person: {
        title: 'Малыш Гидеон',
        titleColor: '#8ACFFF',
      },
      dataPerson: {
        color: '#7EB6DD',
        gender: 'Мужчина',
        race: 'Человек',
        side: 'Хаос',
        description:
          'Диппер — двенадцатилетний мальчик, брат-близнец Мэйбл. Один из главных героев мультсериала.  Он пытается раскрыть тайны городка Гравити Фолз и найти автора дневников. Очень сообразителен и рассудителен, но часто нерешителен. Влюблён в Венди Кордрой. Любит настольную игру под названием «Подземелья, подземелья и ещё подземелья».',
      },
      tags: [],
    },
    {
      id: 8,
      background: ellips_7,
      img: vendri,
      person: {
        title: 'Венди Кордрой',
        titleColor: '#009471',
      },
      dataPerson: {
        color: '#009471',
        gender: 'Женщина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 9,
      background: ellipse,
      img: sheil_shifter,
      person: {
        title: 'Шейл Шифтер ',
        titleColor: '#F74B8A',
      },
      dataPerson: {
        color: '#F74B8A',
        gender: 'Мужчина',
        race: 'Монстр',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 10,
      background: ellipse,
      img: maible,
      person: {
        title: 'Мэйбл Пайнс',
        titleColor: '#D9335E',
      },
      dataPerson: {
        color: '#D9335E',
        gender: 'Женщина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 11,
      background: ellips_2,
      img: maison,
      person: {
        title: 'Мейсон Пайнс',
        titleColor: '#007CA8',
      },
      dataPerson: {
        color: '#007CA8',
        gender: 'Мужчина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
      tags: [],
    },
    {
      id: 12,
      background: ellips_3,
      img: bill,
      person: {
        title: 'Билл Шифр',
        titleColor: '#F2E43D',
      },
      dataPerson: {
        color: '#000000',
        gender: 'Мужчина',
        race: 'Неизвестно',
        side: 'Хаос',
        description: '',
      },
      tags: [],
    },
    {
      id: 13,
      background: ellipse_4,
      img: stanly,
      person: {
        title: 'Стэнли Пайнс',
        titleColor: '#922B31',
      },
      dataPerson: {
        color: '#922B31',
        gender: 'Мужчина',
        race: 'Человек',
        side: 'Порядок',
        description: '',
      },
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
    person: {
      title: '',
      titleColor: '',
    },
    dataPerson: {
      color: '',
      gender: '',
      race: '',
      side: '',
    },
  },
};
export type ActionInterface<Item> = {
  type: string;
  payload: Item;
};

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
  },
});

export const nextAction = outputCards.actions.nextSlide;
export const prevAction = outputCards.actions.prevSlide;
export const clickPunkt = outputCards.actions.clickPunkt;
export const viewModal = outputCards.actions.viewModal;
export const viewModalAddCharacter = outputCards.actions.viewModalAddCharacter;
export const closedModal = outputCards.actions.closedModal;
export default outputCards.reducer;
