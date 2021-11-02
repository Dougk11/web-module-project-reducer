import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, {initialState} from './reducers/index';
import {clearMemory, changeMemory, applyMemory, clearDisplay, addOne, applyNumber, changeOperator} from './actions/index'



function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addingOne = () => {
    dispatch(addOne());
  }

  const applyingNumber = input => {
    dispatch(applyNumber(input));
  }

  const changingOperator = input => {
    console.log('button clicked!')
    console.log(input)
    dispatch(changeOperator(input));
  }

  const clearingDisplay = () => {
    dispatch(clearDisplay());
  }

  const changingMemory = () => {
    dispatch(changeMemory());
  }

  const clearingMemory = () => {
    dispatch(clearMemory());
  }

  const applyingMemory = () => {
    dispatch(applyMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => changingMemory()}/>
              <CalcButton value={"MR"} onClick={() => applyingMemory()}/>
              <CalcButton value={"MC"} onClick={() => clearingMemory()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => applyingNumber(1)}/>
              <CalcButton value={2} onClick={() => applyingNumber(2)}/>
              <CalcButton value={3} onClick={() => applyingNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyingNumber(4)}/>
              <CalcButton value={5} onClick={() => applyingNumber(5)}/>
              <CalcButton value={6} onClick={() => applyingNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyingNumber(7)}/>
              <CalcButton value={8} onClick={() => applyingNumber(8)}/>
              <CalcButton value={9} onClick={() => applyingNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changingOperator('+')}/>
              <CalcButton value={"*"} onClick={() => changingOperator('*')}/>
              <CalcButton value={"-"} onClick={() => changingOperator('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearingDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
