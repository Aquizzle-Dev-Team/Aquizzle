import React from 'react';
import logo from './logo.svg';
import '../css/App.css';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const Logo = require('../presenters/logoPresenter.tsx').default;
const HomePageButtons = require('../presenters/homePageButtonsPresenter').default;
const StartQuiz = require('../presenters/startQuizPresenter').default;
const Quiz = require('../presenters/quizPresenter').default;
const Footer = require('../presenters/footerPresenter').default;
const QuizSelector = require('../presenters/quizSelectorPresenter').default;

function App() {

  return (
    <div className="App">
      <Logo className="logo"/>
      <HomePageButtons className="homePageButtons"/>

      <QuizSelector className="quizSelector"/>

      <StartQuiz class="startHomePage"/>
      <Quiz className="quiz"/>
      {<Footer className="footer"/>}
    </div>
  );
}

export default App;

/*return (
  <div className="App">
    <Logo className="logo"/>
    <HomePageButtons className="homePageButtons"/>

    <QuizSelector className="quizSelector"/>

    <StartQuiz class="startHomePage"/>
    <Quiz className="quiz"/>
    {<Footer className="footer"/>}
  </div>
);*/