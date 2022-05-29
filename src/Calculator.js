import React,{useState,useEffect,useRef} from 'react'
import './Calculator.css'

const Calculator = () => {
  const [result,setResult] = useState("");
  const inputRef = useRef(null)

  useEffect(()=>inputRef.current.focus())

  function handlClick(e){
    setResult(result.concat(e.target.name))
  }

  function deleteNumber(){
    setResult(result.slice(0,result.length-1))
  }

  function clearAll(){
    setResult("")
  }

  function calculate(){
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <div className="calc-app">
      <input type="text" value={result} ref={inputRef}/>

      <div className="keypad">
        <button id="AC" onClick={clearAll}>AC</button>
        <button id="DEL" onClick={deleteNumber}>DEL</button>
        <button name="+" onClick={handlClick}>+</button>
        <button name="7" onClick={handlClick}>7</button>
        <button name="8" onClick={handlClick}>8</button>
        <button name="9" onClick={handlClick}>9</button>
        <button name="-" onClick={handlClick}>-</button>
        <button name="4" onClick={handlClick}>4</button>
        <button name="5" onClick={handlClick}>5</button>
        <button name="6" onClick={handlClick}>6</button>
        <button name="*" onClick={handlClick}>*</button>
        <button name="1" onClick={handlClick}>1</button>
        <button name="2" onClick={handlClick}>2</button>
        <button name="3" onClick={handlClick}>3</button>
        <button name="÷" onClick={handlClick}>÷</button>
        <button name="0" onClick={handlClick}>0</button>
        <button name="." onClick={handlClick}>.</button>        
        <button id="result" onClick={calculate}>=</button>
      </div>
    </div>  
  )
}

export default Calculator