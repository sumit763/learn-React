// import React,{useState} from 'react'
import React,{useReducer} from 'react'

// read at the end 
// we use string in the dispatch para as value of type 
// it make casue spelling error 
const ACTION = {
  INCREASE : "increase",
  DECREASE : "decrease"
}


const InitialState = { value : 0};

const reducer = (state , action) =>{
  switch(action.type){
    case  ACTION.INCREASE  :
      return { value : state.value + 1}
    case ACTION.DECREASE :
      return {value : state.value - 1}

    default :
     return state
  }
}


function App() {

const [state , dispatch] = useReducer(reducer,InitialState);
  // const [value , setvalue] = useState(0);

  function Increase(){
    // whatever we pass in the dispatch parameter we access in the reducer using action.type 
     dispatch({type : ACTION.INCREASE})
  }
  function Decrease(){
    dispatch({type : ACTION.DECREASE})
  }

  return (
    <div>
      <h1>counter : {state.value}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App
