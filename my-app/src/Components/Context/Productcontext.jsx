import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducer/Reducer'; // yeh reducer folder ky function ka name hy jo chnage karky reducer ky name sy import kia hy 

const appcontext = createContext();


const  intialState = {
   product :  [] ,
   cart : [] ,
   incdec : " ",
}

export const Productcontext = ({children}) => {

   const [state , dispatch] = useReducer( reducer , intialState);
   // for All prodcts 
   const productai = async() => {

      try {
         let api2 = 'https://dummyjson.com/products';
         let res = await fetch(api2);
         let getres = await res.json();
         dispatch({ type: "API-DATA"  , payload: getres})
         
        
      } catch (error) {
          console.log(error)
      }

      
   }

   const addtocart = (  singledata , quantity  ) => {
      
      dispatch({ type : "ADD_TO_CART" ,  payload : {  singledata , quantity} })
} 

   

   useEffect(()=>{

      productai();

   },[])


  return (
     <>
     <appcontext.Provider value={{...state , addtocart }} >
        {children}
     </appcontext.Provider>
     </>
  )
}

const useProductcontext = () => {
   return useContext(appcontext);
}

export {appcontext , useProductcontext };
