import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers/counter'
import * as serviceWorker from './serviceWorker';

const store=createStore(reducer)

store.subscribe(()=>console.log('state change',store.getState()))


store.dispatch({
  type:"INCREMENT"
})


const render=()=>{
  ReactDOM.render(<App 
    onIncrement={()=>store.dispatch({type:"INCREMENT"})} 
    onDecrease={()=>store.dispatch({type:'DECREASE'})}
     value={store.getState()}/>, document.getElementById('root'));
}
render()
// subscribe用于监视
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
