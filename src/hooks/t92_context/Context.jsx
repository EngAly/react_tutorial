import React from 'react';


/**
 *  note that to make many imports in single file you need to use 
 *  export const without using <default> key word
 *  so that when you need to import it you need to import it in curly brackets as 
 *  {Provider,....} and so on
 *  but another note you should to know it you shoud import it with same exported name
 *  
 *  another note :-
 *  you can use default keyword when need to export but only one 
 *  export default Provider so when import it in another file you can  import it with any name
 */


const UserContext = React.createContext();
const UserContext1 = React.createContext();

export const Provider = UserContext.Provider;
export const Provider1 = UserContext1.Provider;

export const Consumer = UserContext.Consumer;
export const Consumer1 = UserContext1.Consumer;