import React, { useState } from 'react';
import '../Styles/Counter.css';
function Counter(){
    const [count, setCount] = useState(0);
    const inc = () => {
        setCount(count+1);
    }
    const dec = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(count*0);
    }
    return(
        <>
            <div className="wrapper">
                <div className="minor-wrapper">
                <div className="c">
                <h1>count: {count}</h1>
                </div>
                    <div className="btns">
                    <button onClick={inc} className="inc text-light">Increment</button>
                    <button onClick={reset} className="reset text-light">Reset</button>
                    <button onClick={dec} className="dec text-light">Decrement</button>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Counter;