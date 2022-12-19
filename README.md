## How to setup:
**1.** Install all required node.js modules by running the following command in Aquizzle/:
```bash
npm install
```

**2.** Setup a Firebase project by pressing ['Get started'](https://firebase.google.com/) and following the instructions.

**3.** Setup a Realtime Database in [Firebase](https://console.firebase.google.com/) and set the following rules:
```json
{
  "rules": {
    ".read": true,
    "users": {
      "$uid": {
        ".write": "auth !== null && auth.uid === $uid"
      }
    }
  }
}
```

**4.** Enable Email/Password sign in under Authentication in [Firebase](https://console.firebase.google.com/). While in **Authentication**, go to **Templates**, edit one of the template's contents and press **Customize action URL**. Set this url to `https://YOUR_PROJECT_ID.web.app/#reset`.

**5.** Create a file called firebaseConfig.ts in Aquizzle/src/ containing the following:
```ts
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: YOUR_FIREBASE_KEY,
  authDomain: YOUR_FIREBASEDOMAIN,
  databaseURL: YOUR_FIREBASE_REALTIME_DATABASE_URL,
  projectId: YOUR_FIREBASE_PROJECT_ID,
  storageBucket: YOUR_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: YOUR_FIREBASE_SENDER_ID,
  appId: YOUR_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
export {firebaseApp, firebaseConfig};
```
Everything in firebaseConfig can be found in your [Firebase console](https://console.firebase.google.com/).

**6.** Initialize Firebase by running the following command in Aquizzle/:
```bash
firebase init
```

**6.1**
When asked: *Which Firebase features do you want to set up for this directory?*
Select: **Realtime Database: Configure a security rules file for Realtime Database and (optionally) provis
ion default instance** and **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**

**6.2**
Select **Use an existing project** and select your Firebase project.

**6.3**
When asked: *What file should be used for Realtime Database Security Rules?*
Select: **database.rules.json**

**6.4**
When asked: *What do you want to use as your public directory?*
Select: **build**
When asked: *Configure as a single-page app (rewrite all urls to /index.html)?*
Select: **y**
When asked: *Set up automatic builds and deploys with GitHub?*
Select: **n**

**7.** Create a file called apiConfig.ts in Aquizzle/src/ contaning the following:
```ts
const API_KEY=YOUR_QUIZAPI_KEY;
const BASE_URL='https://quizapi.io/api/v1/questions?';

export {API_KEY, BASE_URL};
```
[Generate an API key](https://quizapi.io/). It is free for developers and easy to do. Make an account on the website and log in. When logged in you will see a menu to the left with the options "Profile settings", "API", "Quizes", and "Contributions". To get an API key you press the "API" option and select "Token" in the dropdown menu.

**8.** Use the command `npm start` to run a local development build, or `npm run build` to create an optimised production build.

## Deploying
First run `npm run build` to create an optimised production build and then deploy using the command `firebase deploy`.

## About this project
This is a project worked on by computer engineering students at KTH. We are developing a quiz website using react redux. The basic functionality for the website is the ability to take a quiz and save your results to a leaderboard which ranks all results accoring to different criteria. We also intend on having a history page where a user can see the different quiz they have performed and the result of said quiz. 

What we have done is deployed the React app to firebase, we setup the code to fetch data from the quiz api and made our first simple quiz with a question and answer that shows if you have chosen the right answer. The setup for the redux react structure with an storing and diplaying a question.

What we plan to do in the future is to fully implement redux for the backend functionality of the website. This includes being able to change the hash state and make custom events that changes questions and answers. We also plan on making a leaderboard and being able to choose the type and difficuly of the quiz.

Our project file structure is made up of views, presenters, states and reducers. We have a store and slices (redux terminology) were we store all the data and reducers that changes the state of that data. Views shows all the components in the UI, presenters communicates with the view and also dispatches an action to the reducer and gets updated in the store.
