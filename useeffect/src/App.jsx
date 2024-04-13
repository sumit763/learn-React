import React, { useState ,useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count5, setCount5] = useState(0);

  // use effect with no dependencies ... render every time  MOUNTED
/*
  useEffect(()=>{
    document.title =  `counter : ${count}`;``
  })

*/


 // use effect with empty array ... render only first time  ......... UPDATED usefull in fetching API

 /*
 useEffect(()=>{
  document.title = `counter by 5 ${count5}`;
 },[])

*/



// use effect with dependencies ... 

/*
useEffect(()=>{
  document.title = `counter by 5 ${count5}`;
 },[count5])
*/



// use effect with return or cleanup .... UNMOUNTED  .. when you wanted to stop repeative sideEffect
/*
useEffect(()=>{
  console.log('Run useEffect ',count);
  return () => {
    console.log('Clean up ',count);
  }
},[count])

*/



  return (
    <> 
    <div>
    <h1>Use effect</h1>
    <button onClick={()=>{setCount(count+1)}}> counter : {count}</button>
    <button onClick={()=>{setCount5(count5+5)}}> counter by 5 : {count5}</button>
    </div>
    </>
  )
}

export default App
