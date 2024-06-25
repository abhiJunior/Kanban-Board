import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hw from "./Components/HelloWorld"
import {Champlist,JakassStudent} from './Components/Champlist'; // Component name should be in capital letters
import Like from './Components/Like';
import Counter from './Components/Counter';
import RandomName from './Components/RandomName';
import Todo from './Components/Todo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (
    <div className='app'>
      <Todo/>
      {/*<Like/>*/ }
      {/*<RandomName/>*/}
      {/*<Counter counterName={"Abhishek's"} initialValue = {1}/>*/ }
      {/*<Counter counterName={"Rohan's"} initialValue = {5}/>*/ }
      {/*<Counter counterName={"Ashish's"} initialValue = {6}/>*/ }
      {/*<Hw/>*/ }
      {/*<Champlist/>*/ }
      {/*<JakassStudent/>*/ }
      
    </div>
  ) 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
