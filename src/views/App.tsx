import React from 'react';
import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import '../css/App.css';

const Logo = require('../presenters/logoPresenter.tsx').default;
const HomePageButtons = require('../presenters/homePageButtonsPresenter').default;
const HomePageStart = require('../presenters/homePageStartPresenter').default;

function App() {
  return (
    <div className="App">
      <Logo className="logo"/>
      <HomePageButtons className="homePageButtons"/>
      <HomePageStart class="startHomePage"/>
    </div>
  );
}

export default App;
