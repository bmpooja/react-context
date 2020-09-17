import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeContext from './ThemeContext';
//ThemeContext will have ThemeContest.Provider and ThemeContext.Consumer
//we can destructure it and write it like const {Prvider, Consumer} = ThemeContext

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value ={"dark"}>
    <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
