import React ,{useContext}from 'react';
import { LoginContext } from './App';

 const SinglePost = () => {
 const login = useContext(LoginContext);
 console.log(login);
    return <h1>Single Post</h1>
 }

export default SinglePost