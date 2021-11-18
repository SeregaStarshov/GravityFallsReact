import { Formik, Field, Form } from 'formik';
import React, { FC } from 'react';

import './ModalAddCharacter.css';
import '../modalViewCharacter/ModalViewCharacter.css';
import iconClose from '../../images/icon_close.png';
import { addCardNewCharacter, closedModal } from '../../store/characterCards/cards.slice';
import { useAppDispatch, useAppSelector } from '../../store/store';

const ModalAddCharacter: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
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
            <Formik
              initialValues={{
                name: '',
                gender: '',
                race: '',
                side: '',
                description: '',
                tags: '',
                image: '',
                nameColor: '#ffff',
                characteristicsColor: '#ffff',
                url: '',
              }}
              onSubmit={(values): void => dispatch(addCardNewCharacter(values))}
            >
              {({ initialValues }): React.ReactElement => (
                <Form action="#" id="add-character" className="form__add-character">
                  <div className="add-name">
                    <label className="label_add-name">
                      Добавить имя
                      <Field className="input-character input__add-name" type="text" name="name" />
                    </label>
                  </div>
                  <div className="container-characteristics">
                    <label className="label-characteristic label-gender">
                      Пол
                      <Field className="input-character characteristic-gender" type="text" name="gender"></Field>
                    </label>
                    <label className="label-characteristic label-rice">
                      Раса
                      <Field className="input-character characteristic-rice" type="text" name="race"></Field>
                    </label>
                    <label className="label-characteristic label-side">
                      Сторона
                      <Field className="input-character characteristic-side" type="text" name="side"></Field>
                    </label>
                  </div>
                  <div className="description">
                    <div className="container-span">
                      <span className="text">Добавить описание</span>
                      <span className="quantity">{`${initialValues.description.length}/100`}</span>
                    </div>
                    <Field as="textarea" className="block-description" name="description" maxLength={100}></Field>
                  </div>
                  <div className="tags">
                    <div className="add-tags">
                      <span className="text">Добавить теги</span>
                      <span className="quantity">0/3</span>
                    </div>
                    <Field className="field-tags" name="tags" as="textarea"></Field>
                  </div>
                  <div className="container__photo-color">
                    <div className="photo">
                      <span className="text">Добавить фото</span>
                      <div className="">
                        <label className="add-photo">
                          <div className="add">
                            <span className="vertical"></span>
                            <span className="gorizontal"></span>
                          </div>
                          <Field type="file" name="image" className="add-photo-hidden"></Field>
                          <Field className="url__add-photo" type="url" name="url" placeholder="URL изображения"></Field>
                        </label>
                      </div>
                      <div className="buttons-add">
                        <button type="button" className="change-button">
                          Изменить
                        </button>
                        <button type="button" className="save-button-img">
                          Сохранить
                        </button>
                      </div>
                    </div>
                    <div className="choice-color">
                      <h3 className="choice-color__title">Выбрать цвет</h3>
                      <div className="color-name">
                        <label className="label-characteristic choice-color-input">
                          <Field type="color" name="nameColor" className="color-input"></Field>
                          Цвет имени
                        </label>
                      </div>
                      <div className="color-background-characteristic">
                        <label className="label-characteristic choice-color-input">
                          <Field type="color" name="characteristicsColor" className="color-input"></Field>
                          Цвет фона параметров
                        </label>
                      </div>
                      <div className="color-characteristic">
                        <label className="label-characteristic choice-color-input">
                          <Field type="color" name="" className="color-input"></Field>
                          Цвет параметров
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="save">
                    <button type="submit" className="save__button">
                      Сохранить
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="preview__card-character">
            <h4 className="preview__title">Предварительный просмотр</h4>
            <div className="preview__card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddCharacter;
