import React from 'react';
import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import '../css/App.css';

const Logo = require('../presenters/logoPresenter.tsx').default;
const HomePageButtons = require('../presenters/homePageButtonsPresenter').default;
const StartQuiz = require('../presenters/startQuizPresenter').default;
const Quiz = require('../presenters/quizPresenter').default;

function App() {
  return (
    <div className="App">
      <Logo className="logo"/>
      <HomePageButtons className="homePageButtons"/>
      <StartQuiz class="startHomePage"/>
      {<Quiz className="quiz"/>}
    </div>
  );
}

export default App;
