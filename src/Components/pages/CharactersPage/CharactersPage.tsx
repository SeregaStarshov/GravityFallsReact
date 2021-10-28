import React, { FC } from 'react';

import './CharactersPage.css';
import { dataCards } from './dataCards';
import Icon from '../../../images/icon.png';

import CreateButtonAdd from './addBtn/ButtonAdd';
import Cards from './cards/Cards';
import { dataSelectList } from './dataSelectList';
import CreateInput from './input/Input';
import PaginationBlock from './pagination/PaginationBlock';
import CreateSelect from './select/Select';
import SelectList from './select/selectList/SelectList';

export type Button = {
  id: number;
  type: string;
  value: string;
};

const CreateCharactersPage: FC = (): React.ReactElement => {
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
              {dataSelectList.data.map((item, index) => {
                return (
                  <>
                    <SelectList key={index} item={item} />
                    <CreateSelect key={item.id} icon={Icon} name={item.title} />
                  </>
                );
              })}
              <CreateButtonAdd text={'Добавить  +'} />
            </div>
          </form>
        </div>
        <div className="cards__container">
          {dataCards.map((item, index) => {
            return <Cards key={index} item={item} />;
          })}
        </div>
        <PaginationBlock />
      </div>
    </main>
  );
};

export default CreateCharactersPage;
