

const reducer = (state , action) => {

    if( action.type  === "API-DATA" ){
         return {
            ...state,
            product :  action.payload 
         }
    }

    else if( action.type === "ADD_TO_CART"){
        let {  singledata , quantity  } = action.payload;
   
        return {
            ...state,
            cart :  singledata ,
            incdec : quantity
         }
     
 
     }
}

export default reducer;
