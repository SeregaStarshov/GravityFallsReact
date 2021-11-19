import React, { FC, useEffect } from 'react';

import './CharactersPage.css';
import { useHistory, useParams } from 'react-router-dom';

import CreateButtonAdd from '../../Components/addBtn/ButtonAdd';
import Cards from '../../Components/cards/Cards';
import CreateInput from '../../Components/input/Input';
import PaginationBlock from '../../Components/pagination/PaginationBlock';
import CreateSelect from '../../Components/select/Select';
import SelectList from '../../Components/select/selectList/SelectList';
import ModalAddCharacter from '../../core/modalAddCharacter/ModalAddCharacter';
import ModalViewCharacter from '../../core/modalViewCharacter/ModalViewCharacter';
import Icon from '../../images/Icon.png';
import {
  returnInitialState,
  changeStateOnFilter,
  outputCardsFromInput,
  addCardsFromInput,
  viewModal,
  viewModalAddCharacter,
  changeInput,
  selectItem,
} from '../../store/characterCards/cards.slice';
import { closeSelectList, gender, race, side } from '../../store/dataSelectList/dataSelectList.slice';
import { useAppDispatch, useAppSelector } from '../../store/store';

const CreateCharactersPage: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const dataCards = useAppSelector((state) => state.cards.dataCards);
  const arrayCheckedInputs = useAppSelector((state) => state.cards.arrayCheckedInputs);
  const filterCards = useAppSelector((state) => state.cards.filterCards);
  const valueInput = useAppSelector((state) => state.cards.valueInput);
  const cardsFromInput = useAppSelector((state) => state.cards.cardsFromInput);
  const selectList = useAppSelector((state) => state.selectList.data);
  const value = useAppSelector((state) => state.selectList.indexSelect);
  const start = useAppSelector((state) => state.cards.startIndex);
  const end = useAppSelector((state) => state.cards.endIndex);
  const newDataCards = dataCards.slice(start, end);
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  console.log(id);
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

  useEffect(() => {
    if (location.pathname !== '/characters') {
      dataCards.forEach((item) => {
        if (location.pathname === `/characters/${item.id}`) {
          dispatch(viewModal(item));
        }
      });
    }
    if (location.pathname === '/characters/new') {
      dispatch(viewModalAddCharacter());
    }
  }, []);

  return (
    <main className="characters-page" onClick={(): void => dispatch(closeSelectList())}>
      <div className="container">
        <div className="form__wrapper">
          <form className="form__search-characters">
            <div className="form__search">
              <CreateInput changeInput={changeInput} />
            </div>
            <div className="form__filter">
              {selectList.map((item, index) => {
                return (
                  <>
                    <SelectList key={index} item={item} index={index} value={value} selectItem={selectItem} />
                    <CreateSelect
                      key={item.id}
                      icon={Icon}
                      index={index}
                      name={item.title}
                      gender={gender}
                      race={race}
                      side={side}
                    />
                  </>
                );
              })}
              <CreateButtonAdd text={'Добавить  +'} viewModalAddCharacter={viewModalAddCharacter} />
            </div>
          </form>
        </div>
        <div className="cards__container">
          {newDataCards.map((item, index) => {
            return <Cards key={index} item={item} index={index} viewModal={viewModal} />;
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
