import React, { FC, useRef } from 'react';

import './ModalAddCharacter.css';
import '../modalViewCharacter/ModalViewCharacter.css';
import iconClose from '../../../../images/icon_close.png';
import { closedModal } from '../../../../store/characterCards/cards.slice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

const ModalAddCharacter: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const lengthDescription = useRef<HTMLSpanElement>(null);
  const viewModal = useAppSelector((state) => state.cards.viewModalAddCharacter);
  const viewModalCharacter = (): string => {
    if (viewModal) {
      return 'active';
    } else {
      return 'disable';
    }
  };
  return (
    <div
      className={`modal__background ${viewModalCharacter()}`}
      onClick={(event): void => {
        switch (true) {
          case (event.target as HTMLElement).matches('.modal__background'):
            dispatch(closedModal());
            break;
        }
      }}
    >
      <div className="modal__add-character">
        <div className="closed" onClick={(): void => dispatch(closedModal())}>
          <img className="icon-closed" src={iconClose} alt="close"></img>
        </div>
        <div className="wrap-form__add-character">
          <div className="wrap-fields__add-character">
            <form action="#" id="add-character" className="form__add-character">
              <div className="add-name">
                <label className="label_add-name">
                  Добавить имя
                  <input className="input-character input__add-name" type="text" name="name-character"></input>
                </label>
              </div>
              <div className="container-characteristics">
                <label className="label-characteristic label-gender">
                  Пол
                  <input
                    className="input-character characteristic-gender"
                    type="text"
                    name="characteristic-gender"
                  ></input>
                </label>
                <label className="label-characteristic label-rice">
                  Раса
                  <input className="input-character characteristic-rice" type="text" name="characteristic-rice"></input>
                </label>
                <label className="label-characteristic label-side">
                  Сторона
                  <input className="input-character characteristic-side" type="text" name="characteristic-side"></input>
                </label>
              </div>
              <div className="description">
                <div className="container-span">
                  <span className="text">Добавить описание</span>
                  <span ref={lengthDescription} className="quantity">
                    0/100
                  </span>
                </div>
                <textarea
                  form="add-character"
                  className="block-description"
                  name="description"
                  maxLength={100}
                  onChange={(event): void => {
                    const valueDescription = event.currentTarget.value;
                    if (lengthDescription.current) {
                      lengthDescription.current.textContent = `${valueDescription.length}/100`;
                    }
                  }}
                ></textarea>
              </div>
              <div className="tags">
                <div className="add-tags">
                  <span className="text">Добавить теги</span>
                  <span className="quantity">0/3</span>
                </div>
                <textarea className="field-tags" name="tags" form=""></textarea>
              </div>
              <div className="container__photo-color">
                <div className="photo">
                  <span className="text">Добавить фото</span>
                  <div className="add-photo">
                    <div className="add">
                      <span className="vertical"></span>
                      <span className="gorizontal"></span>
                    </div>
                    <input className="url__add-photo" type="text" placeholder="URL изображения"></input>
                  </div>
                  <div className="buttons-add">
                    <button type="button" className="change-button">
                      Изменить
                    </button>
                    <button type="button" className="save-button">
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="preview__card-character">
            <h4 className="preview__title">Предварительный просмотр</h4>
            <div className="preview__card"></div>
            <div className="save">
              <button type="submit" className="preview__button">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddCharacter;
