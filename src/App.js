import { useState } from 'react';
import './App.css';



function App() {
  
  const [string ,setString] = useState('')
  const checkCount = (num)=> {
    if (string.length < 4){
  setString(string + num)
}
}

  const handleBackButton = () => {
    setString(string.slice(0, string.length - 1))
  }

const validateButton = () => {
  string === "1234" ? setString("Welcome"): setString("Denied")
}

  return (

    <div className="App">
      <header className="App-header">
        <section class="w3=container">
        <h1>Jayden Keypad</h1>
        <h2>{string}</h2>
        </section>
        <section>
       {/* <button onClick={()=>checkCount('1')</button>  */}
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '1')}}>1</button> 
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '2')}}>2</button>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '3')}}>3</button>
        
        </section>

        <section>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '4')}}>4</button>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '5')}}>5</button>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '6')}}>6</button>
        </section>

        <section>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '7')}}>7</button>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '8')}}>8</button>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '9')}}>9</button>
        </section>

        <section>
        <button onClick={handleBackButton}>⬅️</button>
        <button onClick={()=>{
          if(string.length < 4)
          setString(string + '0')}}>0 </button>
        <button onClick={validateButton}>✅</button>
        </section>
        <section>
        <button onClick={()=>setString(null)}>🔄</button>
        </section>
        </header>
    </div>
  );
}

export default App;
