import React ,{createContext}from 'react';
import Maincomponent from "./Maincomponent";

 export const LoginContext =  createContext();

 const App = () => {

  return(
    // whatever you provide in the provider it and its child components can access it .
    <LoginContext.Provider value={"sumit"}>
   
    <div>
      <Maincomponent />
    </div>


    </LoginContext.Provider>
  )
 }

export default App