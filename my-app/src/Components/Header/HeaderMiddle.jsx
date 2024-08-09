import React from 'react'
import './HeaderMiddle.css';

export const HeaderMiddle = (props) => {
  return (
    <div className='cont '>
       
        <div className='text-cont d-flex flex-column align-items-center justify-content-center text-center'>
         <h1>{props.mydata}</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis corrupti quaerat, beatae repellat non nulla qui dicta necessitatibus laborum id voluptatem cum nam?</p>
         <button className='btn btn-success'>GO TO PAGE</button>
        </div>

        <div className='img-cont text-cont d-flex flex-column align-items-center justify-content-center'>
             <figure>
                <img src='https://woovina.com/images/2020/07/25/best-ecommerce-website-templates.jpg' alt='img'  style={{width : '100%' , height : '260px'}}  />
             </figure>
        </div>
    </div>
    
  )
}
