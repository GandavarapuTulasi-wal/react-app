import {useState} from 'react'
function Counter(){
    let [count,setCount]=useState(0)
    function increase(){
        setCount(count+2)
    }
    function decrease(){
        setCount(count-2)
    }
    function reset(){
        setCount(0)
    }
    return(
       
        <div>
            <h1>Counter App</h1>
            count={count}<br/>
            <button onClick={increase} className="button-one">Increase</button>
            <button onClick={decrease} className="button-two">Decrease</button>
            <button onClick={reset} className="button-three">Reset</button>
        </div>
    )
}
export default Counter