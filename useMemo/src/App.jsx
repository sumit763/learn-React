 import React,{useState,useMemo} from 'react'
 // useMemo is use to increase performance 
 const  App = () => {
  const [number , setNumber] = useState(0);
  const [dark,setDark] = useState(false);

 const memocalculation =  useMemo(()=>{
   return expensive(number)
  },[number])

  const calculation = expensive(number);

  const cssStyle = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black",
  }

   return (
     <div style={cssStyle}>
      <input 
      onChange={(e)=> setNumber(e.target.valueAsNumber)}
      type='number'
      value={number}
      />
      <h2>Calculation : { memocalculation}</h2>
      <button onClick={()=>setDark(!dark)}>Toggle</button>
       </div>
   )
 };

 function expensive(num)
 {
  console.log("loop started");
  for(let i = 0; i< 1000000000 ; i++) {}
  return num;
 }
 
 export default App
 
