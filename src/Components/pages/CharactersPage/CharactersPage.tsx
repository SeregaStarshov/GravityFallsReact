import React, { FC } from 'react';

import './CharactersPage.css';
import Icon from '../../../images/icon.png';
import { useAppSelector } from '../../../store/store';

import CreateButtonAdd from './addBtn/ButtonAdd';
import Cards from './cards/Cards';
import CreateInput from './input/Input';
import PaginationBlock from './pagination/PaginationBlock';
import CreateSelect from './select/Select';
import SelectList from './select/selectList/SelectList';

// export type Button = {
//   id: number;
//   type: string;
//   value: string;
// };

const CreateCharactersPage: FC = (): React.ReactElement => {
  // const button: Button = {
  //   id: 4,
  //   type: 'button',
  //   value: 'Добавить   +',
  // };

  const dataCards = useAppSelector((state) => state.cards.dataCards);
  const selectList = useAppSelector((state) => state.selectList.data);
  const start = useAppSelector((state) => state.cards.startIndex);
  const end = useAppSelector((state) => state.cards.endIndex);
  const newDataCards = dataCards.slice(start, end);

  return (
    <main className="characters-page">
      <div className="container">
        <div className="form__wrapper">
          <form className="form__search-characters">
            <div className="form__search">
              <CreateInput />
            </div>
            <div className="form__filter">
              {selectList.map((item, index) => {
                return (
                  <>
                    <SelectList key={index} item={item} index={index} />
                    <CreateSelect key={item.id} icon={Icon} index={index} name={item.title} />
                  </>
                );
              })}
              <CreateButtonAdd text={'Добавить  +'} />
            </div>
          </form>
        </div>
        <div className="cards__container">
          {newDataCards.map((item, index) => {
            return <Cards key={index} item={item} />;
          })}
        </div>
        <PaginationBlock start={start} end={end} dataCards={dataCards} />
      </div>
    </main>
  );
};

export default CreateCharactersPage;
