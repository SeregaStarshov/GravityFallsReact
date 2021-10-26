import React, { FC } from 'react';

import './CharactersPage.css';
import Icon from '../../../images/icon.png';

import CreateButtonAdd from './addBtn/ButtonAdd';
import Cards from './cards/Cards';
import CreateInput from './input/Input';
import PaginationBlock from './pagination/PaginationBlock';
import CreateSelect from './select/Select';

export type Gender = {
  id: number;
  gender: string;
  date: {
    men: string;
    women: string;
    undefined: string;
  };
};

interface Rice {
  id: number;
  rice: string;
  date: {
    man: string;
    monster: string;
    unknown: string;
  };
}

interface Side {
  id: number;
  side: string;
  date: {
    discipline: string;
    chaos: string;
  };
}

export type Button = {
  id: number;
  type: string;
  value: string;
};

const CreateCharactersPage: FC = (): React.ReactElement => {
  const gender: Gender = {
    id: 1,
    gender: 'Пол',
    date: {
      men: 'Мужской',
      women: 'Женский',
      undefined: 'Неопределен',
    },
  };

  const rice: Rice = {
    id: 2,
    rice: 'Раса',
    date: {
      man: 'Человек',
      monster: 'Монстр',
      unknown: 'Неизвестно',
    },
  };

  const side: Side = {
    id: 3,
    side: 'Сторона',
    date: {
      discipline: 'Порядок',
      chaos: 'Хаос',
    },
  };

  const button: Button = {
    id: 4,
    type: 'button',
    value: 'Добавить   +',
  };

  return (
    <main className="characters-page">
      <div className="container">
        <div className="form__wrapper">
          <form className="form__search-characters">
            <div className="form__search">
              <CreateInput />
            </div>
            <div className="form__filter">
              <CreateSelect icon={Icon} />
              <CreateSelect icon={Icon} />
              <CreateSelect icon={Icon} />
              <CreateButtonAdd text={'Добавить  +'} />
            </div>
          </form>
        </div>
        <div className="cards__container">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <PaginationBlock />
      </div>
    </main>
  );
};

export default CreateCharactersPage;
