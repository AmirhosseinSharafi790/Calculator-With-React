import { evaluate } from "mathjs"
import "./Calculator.css"
import { useState } from "react";
import Container from './../node_modules/react-bootstrap/esm/Container';
function Calculator(){
    let [result , setResult] = useState("");
    let [hasdot , setHasDot] = useState(false);
    let oprators = ["+" , "-" , "*" , "/"];
    const checkOprator = (text)=>{
        if(text === "×") return "*"
        if(text === "÷") return "/"
        return text
    }
    const clickHandler = (event)=>{
        let input = checkOprator(event.target.innerText)
        if(input === '.'){
            if(hasdot === true) return
            else setHasDot(true)
        }
        if(oprators.includes(input)){
            setHasDot(false)
        }
        setResult(result + input);
    }
    const clearHandler = ()=>{
        setResult("");
        setHasDot(false)
    }
    const backSpaceHandler = ()=>{
        setResult(result.slice(0 , -1))
        if(result.endsWith(".")){
            setHasDot(false)
        }
    }
    const equlHandler = ()=>{
        setResult(String(evaluate(result)))
        setHasDot(false)
    }
    return(
        <Container className="container">
            <div className="screen radius">{result}</div>
            <div className="buttons">
                <button onClick={clearHandler} className="color w-200">Clear</button>
                <button onClick={backSpaceHandler} className="color">C</button>
                <button onClick={clickHandler} className="color">÷</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler} className="color">×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className="color">-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler} className="color">+</button>
                <button onClick={clickHandler} className="radius-bottom-s">0</button>
                <button onClick={clickHandler}>.</button>
                <button onClick={equlHandler} className="color w-200 radius-bottom-e">=</button>
                </div>
        </Container>
    )
}

export default Calculator