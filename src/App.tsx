import React, { FC } from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from '../src/Components/Header/Header';
import CreateHomePage from '../src/Components/pages/HomePage/HomePage';
import logo from '../src/images/logo.png';

import CreateCharactersPage from './Components/pages/CharactersPage/CharactersPage';
import Cards from './Components/pages/CharactersPage/cards/Cards';

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
        <Route exact path="/characters:id" render={(): React.ReactElement => <CreateCharactersPage />} />
      </Switch>
    </>
  );
};

export default App;
