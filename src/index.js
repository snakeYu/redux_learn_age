import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入顶级组件Provider,单词意思为：供应商  
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers'

import * as serviceWorker from './serviceWorker';
// 创建store数据库
const store=createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
