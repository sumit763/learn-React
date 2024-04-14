/*

 import React , { useState,useRef,useEffect } from "react";
 

const App = ()=> {
const [name, setname] = useState("");
// mutable variable  useRef return a current....

const count = useRef(0);

//  console.log(count);

 useEffect(()=>{
  count.current = count.current + 1;
 });

  return (
    <div>
       <input type="text" onChange={(e)=> setname(e.target.value)} />
       <h2>Name : {name}</h2>
       <h2>Render : {count.current}</h2>
    </div>
  );
};

export default App

*/

/*
import React ,{useRef}from 'react'

// useRef used to focus on certain element like input , button etc..

function App() {
  const inputElement = useRef();
  const focusinput = ()=>{
    inputElement.current.focus();
  }
  
  return (
    <>
    <input type="text" ref={inputElement} />
    <button onClick={focusinput}>focus</button>
    </>
  )
}

export default App
*/


// useRef use to maintain the previous state

import React,{useRef,useState,useEffect} from 'react'

function App() {
  const [inputValue,setvalue] = useState(" ");
  const preInputValue = useRef(" ");
  useEffect(()=>{
    preInputValue.current = inputValue;
  },[inputValue]);

  return (
    <>
    <input type="text" value={inputValue} onChange={(e)=> setvalue(e.target.value)} />
    <h2>current value : {inputValue}</h2>
    <h2>previous value : {preInputValue.current}</h2>
    </>
  )
}

export default App