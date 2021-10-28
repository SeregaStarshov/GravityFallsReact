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
}

export const dataSelectList: Data = {
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
};
