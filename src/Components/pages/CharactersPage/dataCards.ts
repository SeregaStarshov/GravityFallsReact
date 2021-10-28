import ellipse from '../../../images/Ellipse.png';
import ellipse_4 from '../../../images/Ellipse_4.png';
import baby_gideon from '../../../images/baby_gideon.png';
import bill from '../../../images/bill.png';
import maible from '../../../images/maible.png';
import maison from '../../../images/maison.png';
import sheil_shifter from '../../../images/sheil_shifter.png';
import shmebulok from '../../../images/shmebulok.png';
import stanly from '../../../images/stanly.png';
import vendri from '../../../images/vendri.png';
import zus from '../../../images/zus.png';

import { List } from './dataSelectList';

export interface Card {
  id: number;
  background: string;
  img: string;
  person: List;
  dataPerson: List;
}
export const dataCards: Card[] = [
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
    },
  },
  {
    id: 2,
    background: 'src/images/Ellips_2.png',
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
    },
  },
  {
    id: 3,
    background: 'src/images/Ellips_3.png',
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
    },
  },
  {
    id: 4,
    background: 'src/images/Ellips_4.png',
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
    },
  },
  {
    id: 5,
    background: 'src/images/Ellips_5.png',
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
    },
  },
  {
    id: 6,
    background: 'src/images/Ellips_5.png',
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
    },
  },
  {
    id: 7,
    background: 'src/images/Ellips_6.png',
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
    },
  },
  {
    id: 8,
    background: 'src/images/Ellips_7.png',
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
    },
  },
  {
    id: 9,
    background: 'src/images/Ellips.png',
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
    },
  },
];
