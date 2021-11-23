import { Formik, Field, Form } from 'formik';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import './ModalAddCharacter.css';
import '../modalViewCharacter/ModalViewCharacter.css';
import iconClose from '../../images/icon_close.png';
import { addCardNewCharacter, closedModal } from '../../store/characterCards/cards.slice';
import { useAppDispatch, useAppSelector } from '../../store/store';

import DescriptionCharacter from '../modalViewCharacter/descriptionCharacter/DescriptionCharacter';

export interface Values {
  name: string;
  gender: string;
  race: string;
  side: string;
  description: string;
  tags: string;
  image: string;
  nameColor: string;
  backgroundСolorCharacteristic: string;
  colorCharacteristic: string;
  url: string;
}

const ModalAddCharacter: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const viewModal = useAppSelector((state) => state.cards.viewModalAddCharacter);
  const REQUIRED_FIELD = 'Обязательное поле';
  const TYPE_ERROR = 'Ввод только Кирилицы';
  const validation = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(REQUIRED_FIELD)
      .typeError(TYPE_ERROR)
      .matches(/[ ,а-яё]+/gi, TYPE_ERROR),
    gender: Yup.string()
      .trim()
      .required(REQUIRED_FIELD)
      .typeError(TYPE_ERROR)
      .matches(/[ ,а-яё]+/gi, TYPE_ERROR),
    race: Yup.string()
      .trim()
      .required(REQUIRED_FIELD)
      .typeError(TYPE_ERROR)
      .matches(/[ ,а-яё]+/gi, TYPE_ERROR),
    side: Yup.string()
      .trim()
      .required(REQUIRED_FIELD)
      .typeError(TYPE_ERROR)
      .matches(/[ ,а-яё]+/gi, TYPE_ERROR),
    description: Yup.string()
      .notRequired()
      .typeError(TYPE_ERROR)
      .matches(/[ ,а-яё]+/gi, TYPE_ERROR),
    tags: Yup.string()
      .notRequired()
      .typeError(TYPE_ERROR)
      .matches(/[ ,а-яё]+/gi, TYPE_ERROR),
  });
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
            history.replace('/characters');
            break;
        }
      }}
    >
      <div className="modal__add-character">
        <div
          className="closed"
          onClick={(): void => {
            dispatch(closedModal());
            history.replace('/characters');
          }}
        >
          <img className="icon-closed" src={iconClose} alt="close"></img>
        </div>
        <Formik
          initialValues={{
            name: '',
            gender: '',
            race: '',
            side: '',
            description: '',
            tags: '',
            image: '',
            nameColor: '#036E94',
            backgroundСolorCharacteristic: '#007CA8',
            colorCharacteristic: '#ffffff',
            url: '',
          }}
          onSubmit={(values): void => dispatch(addCardNewCharacter(values))}
          validationSchema={validation}
        >
          {({ values, errors, touched }): React.ReactElement => (
            <div className="wrap-form__add-character">
              <div className="wrap-fields__add-character">
                <Form action="#" id="add-character" className="form__add-character">
                  <div className="add-name">
                    <label className="label_add-name">
                      Добавить имя
                      <Field className="input-character input__add-name" type="text" name="name" />
                      {errors.name && touched.name && <p className="error">{errors.name}</p>}
                    </label>
                  </div>
                  <div className="container-characteristics">
                    <label className="label-characteristic label-gender">
                      Пол
                      <Field className="input-character characteristic-gender" type="text" name="gender"></Field>
                      {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}
                    </label>
                    <label className="label-characteristic label-rice">
                      Раса
                      <Field className="input-character characteristic-rice" type="text" name="race"></Field>
                      {errors.race && touched.race && <p className="error">{errors.race}</p>}
                    </label>
                    <label className="label-characteristic label-side">
                      Сторона
                      <Field className="input-character characteristic-side" type="text" name="side"></Field>
                      {errors.side && touched.side && <p className="error">{errors.side}</p>}
                    </label>
                  </div>
                  <div className="description">
                    <div className="container-span">
                      <span className="text">Добавить описание</span>
                      <span className="quantity">{`${values.description.length}/100`}</span>
                    </div>
                    <Field as="textarea" className="block-description" name="description" maxLength={100}></Field>
                    {errors.description && touched.description && <p className="error">{errors.description}</p>}
                  </div>
                  <div className="tags">
                    <div className="add-tags">
                      <span className="text">Добавить теги</span>
                      <span className="quantity">
                        {values.tags !== '' ? `${values.tags.split(', ', 3).length}/3` : '0/3'}
                      </span>
                    </div>
                    <Field className="field-tags" name="tags" as="textarea"></Field>
                    {errors.tags && touched.tags && <p className="error">{errors.tags}</p>}
                  </div>
                  <div className="container__photo-color">
                    <div className="photo">
                      <span className="text">Добавить фото</span>
                      <div className="wrap-photo">
                        <label className="add-photo" style={{ backgroundImage: `url(${values.url || values.image})` }}>
                          <div className="add">
                            <span className="vertical"></span>
                            <span className="gorizontal"></span>
                          </div>
                          <Field
                            type="file"
                            name="image"
                            className="add-photo-hidden"
                            onChange={(values): void => {
                              console.log(values);
                            }}
                          ></Field>
                          <Field className="url__add-photo" type="url" name="url" placeholder="URL изображения"></Field>
                        </label>
                      </div>
                      <div className="buttons-add">
                        <button type="button" className="change-button">
                          Изменить
                        </button>
                        <button
                          type="button"
                          className="save-button-img"
                          // onClick={(values): void => {
                          //   console.log(values.target);
                          // }}
                        >
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
                          <Field type="color" name="backgroundСolorCharacteristic" className="color-input"></Field>
                          Цвет фона параметров
                        </label>
                      </div>
                      <div className="color-characteristic">
                        <label className="label-characteristic choice-color-input">
                          <Field type="color" name="colorCharacteristic" className="color-input"></Field>
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
              </div>
              <div className="preview__card-character">
                <h4 className="preview__title">Предварительный просмотр</h4>
                <div
                  className="preview__card"
                  style={{
                    backgroundImage: `url(${values.url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPositionX: 'right',
                  }}
                >
                  <DescriptionCharacter character={values} />
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalAddCharacter;
