import React, { FC } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../src/Components/Header/Header';

import logo from '../src/images/logo.png';

import CreateCharactersPage from './pages/CharactersPage/CharactersPage';
import CreateHomePage from './pages/HomePage/HomePage';

const App: FC = (): React.ReactElement => {
  return (
    <>
      <Header image={logo} />
      <Switch>
        <Route
          exact
          path="/"
          render={(): React.ReactElement => {
            return (
              <CreateHomePage
                title={'Найди любимого персонажа “Gravity Falls”'}
                subtitle={'Вы сможете узнать тип героев, их способности, сильные стороны и недостатки.'}
                textBtn={'Начать'}
              />
            );
          }}
        />
        <Route
          path="/characters"
          render={(): React.ReactElement => {
            return <CreateCharactersPage />;
          }}
        />
        <Route exact path="/characters/:id">
          <CreateCharactersPage />
        </Route>
        <Route exact path="/characters/new">
          <CreateCharactersPage />
        </Route>
        <Redirect to={'/'}></Redirect>
      </Switch>
    </>
  );
};

export default App;
