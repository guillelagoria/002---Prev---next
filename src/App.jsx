import React, { useState } from 'react'
import './App.css';

export const App = () => {

const [counter, setCounter] = useState(1);

const add = () => {
  setCounter(counter+1);
  console.log(counter);
};

const subs = () => {
  setCounter(counter-1);
  console.log(counter);
};



  return (
    <div>
        
          <div className="container">
            <div className="progress-container" >
              <div className="progress" id="progress"></div>
              <div className={counter===1 ? "circle active" : "circle"}>1</div>
              <div className={counter===2 ? "circle active" : "circle"}>2</div>
              <div className={counter===3 ? "circle active" : "circle"}>3</div>
              <div className={counter===4 ? "circle active" : "circle"}>4</div>
            </div>

            <button className='btn' id="prev" onClick={subs} disabled={counter === 1}>Prev</button>
            <button className='btn' id="next" onClick={add} disabled={counter === 4}>Next</button>

          </div>
          
    </div>
    )
}


export default App
