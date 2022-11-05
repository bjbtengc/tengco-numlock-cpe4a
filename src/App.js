import {useState} from 'react';
import "./App.css";

function CalcDisplay({display}){
  return(
    <div className="calcDisplay">
    {display}
    </div>
  );
}

function CalcButton({value, onClick}){
  return(
    <button className = "calcButton"
      onClick = {onClick}>
    {value}
    </button>
  );
}
function App(){

  const [userCreds] = useState(2019001599);
  const [inputNum,setNumber] = useState(0);
  const [disp,setDisp] = useState("Enter Code");

  const numberClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
        if(inputNum === 0){
          setNumber(value)
          setDisp(value);
        } 
        else{
          setNumber(inputNum+value)
          setDisp(disp+value);
        }
        console.log(inputNum +'|'+disp +'|'+ userCreds);    
  }

  const enterClickHandler =() => {
    if(inputNum == userCreds) {
      setDisp("Open");
      console.log(inputNum +'|'+disp +'|'+ userCreds);
    } 
    else {
      setDisp("Locked");
      console.log(inputNum +'|'+disp +'|'+ userCreds);
    }
    
  }
  
  const clearClickHandler =() => {
    setNumber(0);
    setDisp("Enter Code");
    console.log(inputNum +'|'+disp +'|'+ userCreds);
  }



  return (
    <div className = "calcContainer">
      <CalcDisplay display={disp}/>
        <div className ="calcButtonsContainer">
          <CalcButton value = "7" onClick={numberClickHandler}/>
          <CalcButton value = "8" onClick={numberClickHandler}/>
          <CalcButton value = "9" onClick={numberClickHandler}/>
          <CalcButton value = "4" onClick={numberClickHandler}/>
          <CalcButton value = "5" onClick={numberClickHandler}/>
          <CalcButton value = "6" onClick={numberClickHandler}/>
          <CalcButton value = "1" onClick={numberClickHandler}/>
          <CalcButton value = "2" onClick={numberClickHandler}/>
          <CalcButton value = "3" onClick={numberClickHandler}/>
          <CalcButton value = "Reset" onClick={clearClickHandler}/>
          <CalcButton value = "0" onClick={numberClickHandler}/>
          <CalcButton value = "Enter" onClick={enterClickHandler}/> 
        </div>
    </div>
  );
}
export default App;