import React, { FC, useEffect } from 'react';

import './CharactersPage.css';
// import { useHistory, useParams } from 'react-router-dom';

import Icon from '../../../images/Icon.png';
import {
  returnInitialState,
  changeStateOnFilter,
  outputCardsFromInput,
  Card,
  addCardsFromInput,
} from '../../../store/characterCards/cards.slice';
import { closeSelectList, List } from '../../../store/dataSelectList/dataSelectList.slice';
import { useAppDispatch, useAppSelector } from '../../../store/store';

import CreateButtonAdd from './addBtn/ButtonAdd';
import Cards from './cards/Cards';
import CreateInput from './input/Input';
import ModalAddCharacter from './modalAddCharacter/ModalAddCharacter';
import ModalViewCharacter from './modalViewCharacter/ModalViewCharacter';
import PaginationBlock from './pagination/PaginationBlock';
import CreateSelect from './select/Select';
import SelectList from './select/selectList/SelectList';

const CreateCharactersPage: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const dataCards = useAppSelector((state) => state.cards.dataCards);
  const arrayCheckedInputs = useAppSelector((state) => state.cards.arrayCheckedInputs);
  const filterCards = useAppSelector((state) => state.cards.filterCards);
  const valueInput = useAppSelector((state) => state.cards.valueInput);
  const cardsFromInput = useAppSelector((state) => state.cards.cardsFromInput);
  const selectList = useAppSelector((state) => state.selectList.data);
  const start = useAppSelector((state) => state.cards.startIndex);
  const end = useAppSelector((state) => state.cards.endIndex);
  const newDataCards = dataCards.slice(start, end);

  useEffect(() => {
    if (arrayCheckedInputs.length === 0) {
      dispatch(returnInitialState());
    }
    if (arrayCheckedInputs.length !== 0) {
      dispatch(changeStateOnFilter());
    }
  }, [arrayCheckedInputs, filterCards]);

  useEffect(() => {
    const searchCardsFromValueInput = (): void => {
      dataCards.forEach((item) => {
        for (const key in item) {
          if (item[key] === valueInput[0]) {
            dispatch(addCardsFromInput(item));
          }
        }
      });
    };
    if (valueInput.length !== 0) {
      searchCardsFromValueInput();
    }
  }, [valueInput]);

  useEffect(() => {
    const checkValueInputLength = (): void => {
      valueInput.forEach((item) => {
        if (item === '' || valueInput.length === 0) {
          dispatch(returnInitialState());
        }
      });
    };
    checkValueInputLength();
  }, [valueInput]);

  useEffect(() => {
    if (cardsFromInput.length !== 0) {
      dispatch(outputCardsFromInput());
    }
  }, [cardsFromInput]);

  return (
    <main className="characters-page" onClick={(): void => dispatch(closeSelectList())}>
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
            return <Cards key={index} item={item} index={index} />;
          })}
        </div>
        <PaginationBlock start={start} end={end} dataCards={dataCards} />
      </div>
      <ModalViewCharacter />
      <ModalAddCharacter />
    </main>
  );
};

export default CreateCharactersPage;
