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
const Leaderboard = require('../presenters/leaderboardPresenter').default;
const Show=require("../presenters/show.tsx").default;
const AboutUs=require("../presenters/aboutUsPresenter.tsx").default;
const Death=require("../presenters/deathPresenter.tsx").default;
const History=require("../presenters/historyPresenter.tsx").default;
const Auth=require("../presenters/authPresenter").default;
const SetUsername=require("../presenters/setUsernamePresenter").default;
const ForgottenPassword=require("../presenters/forgottenPasswordPresenter").default;
const ResetPassword=require("../presenters/resetPasswordPresenter").default;
const ResetSuccess=require("../presenters/resetSuccessPresenter").default;
const Account=require("../presenters/accountPresenter").default;
const ChangeEmail=require("../presenters/changeEmailPresenter").default;

function App() {
  if((window.location.hash === "") ){
    window.location.hash = "#homepage"
  }

  return (
    <div className="App">
      <Logo className="logo"/>
      <HomePageButtons className="homePageButtons"/>

      <Show hash = "#death"><Death/></Show>

      <Show hash = "#history"><History/></Show>

      <Show hash = "#leaderboard"><Leaderboard className="leaderboard"/></Show>
      
      <Show hash="#auth"><Auth className="auth"/></Show>

      <Show hash="#setusername"><SetUsername className="setUsername"/></Show>

      <Show hash="#forgottenpassword"><ForgottenPassword className="forgottenPassword"/></Show>

      <Show hash="#resetpassword"><ResetPassword className="resetPassword"/></Show>

      <Show hash="#resetsuccess"><ResetSuccess className="resetSuccess"/></Show>

      <Show hash="#account"><Account className="account"/></Show>

      <Show hash="#changeemail"><ChangeEmail className="changeEmail"/></Show>

      <Show hash = "#quizselector"><QuizSelector className="quizSelector"/></Show>

      <Show hash = "#homepage"><StartQuiz class="startHomePage"/></Show>
    
      <Show hash = "#aboutus"><AboutUs className="aboutUs"/></Show>

      <Show hash = "#quiz"><Quiz className="quiz"/></Show>
      {<Footer className="footer"/>}
    </div>
  );
}

export default App;