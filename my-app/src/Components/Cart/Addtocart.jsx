import React, { useEffect, useState } from 'react'
import {useProductcontext} from '../Context/Productcontext';
import './Addtocart.css';
import { Link } from 'react-router-dom';


export const Addtocart = () => {
     
    const  {cart , incdec } = useProductcontext();
      const [ how  , sethow] = useState(cart);
    const [cartdata , setcartdata] = useState( [cart])
  
       
      
        

       useEffect(() => {
         
         setcartdata( [...cartdata , how])
           
      } , [how])
      
      
    
    const [incdecdata , setincdecdata] = useState(incdec);
    const [shipiing  , setshiping] = useState(300);
  
    const [total , settotal] = useState(cart.price);


       
    
    
 

   const remove = (e) => {
        e.preventDefault();
         let a = cartdata.filter((e) => {
             return e.id === cartdata.id
         })
        setcartdata(a);

        settotal(0);
        setshiping(0);
   }
  
  return (
    <>
      <div className="container">
        <h1 className='text-center display-5 my-5'>ADD TO CART </h1>
      <table class="table my-5">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total-Amount</th>
      <th scope="col">Remove</th>

    </tr>
  </thead>
  


         {cartdata.map((e)=>{
         return (
          <>
          
     <thead key={e.id}>
    <tr>
    <th scope="col" className='table-h display-6 pt-4' >
  <img src={e.images} width={"100px"} class="figure-img img-fluid rounded" alt="..."/>
</th>
      <th scope="col" className='table-d display-6 pt-4'>{e.title}</th>
      <th scope="col" className='table-d display-6 pt-4'>{e.price}</th>
      <th scope="col" className='table-d display-6 pt-4'> {incdecdata}</th>
      <th scope="col" className='table-d display-6 pt-4'>{ incdecdata*e.price }</th>
      <th scope="col" className='table-d display-6 pt-4'><button className='btn btn-danger' onClick={remove}>Delete</button></th>
      
    </tr>
  </thead>
          </>
         )
     })} 
   <div className='d-flex justify-content-center'>   <Link className='btn btn-success' to={'/Products'} >CONTINUE SHPOOIND</Link> </div>
</table>
     <div className="contont">
     <div class="list-group">  
  <h3 className='display-6 dis list-group-item list-group-item-action my-2'><b>Sub-Total : {incdecdata*total} </b></h3>
  <h3 className='display-6 dis list-group-item list-group-item-action my-2'><b>Shiping fee : {shipiing}</b></h3>
  <h3 className='display-6 dis list-group-item list-group-item-action my-3'><b>Total-Amount : {(incdecdata*total) + shipiing}</b></h3>
</div>
        
        
      

     </div>
     </div>
    </>
  )
}
