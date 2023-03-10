import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));
  }
  const clearData=(e)=>{
    setResult("");
  }
  const deletOne=(e)=>{
    setResult(result.slice(0, result.length-1));
  }
  const answer=(e)=>{
    try{
    setResult(eval(result));}
    catch(err){
      setResult("Error")
    }

  }



  return (
    <>
    

    <div className='grid-container'>
<div className='play'>
  
  <div className='curr'>{result}</div>

</div>
      
        <button name='' onClick={clearData}className='span-two' id='clr'>AC</button>
        <button onClick={deletOne} id='clr'>DEL</button>
        <button name='/' onClick={handleClick} id='clr'>/</button>
        <button  name='1' onClick={handleClick} >1</button>
        <button  name='2' onClick={handleClick}>2</button>
        <button  name='3' onClick={handleClick}>3</button>
        <button  name='*' onClick={handleClick} id='clr'>*</button>
        <button  name='4' onClick={handleClick}>4</button>
        <button  name='5' onClick={handleClick}>5</button>
        <button  name='6' onClick={handleClick}>6</button>
        <button name='+' onClick={handleClick} id='clr'>+</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='-' onClick={handleClick} id='clr'>-</button>
        <button name='.' onClick={handleClick}>.</button>
        <button name='0' onClick={handleClick}>0</button>
        <button onClick={answer} className='span-two'id='clr'>=</button>
      </div>
      </>
  );
}

export default App;
