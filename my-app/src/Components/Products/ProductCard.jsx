import React, {   useState } from "react";
import { useProductcontext } from "../Context/Productcontext";
import { Link } from "react-router-dom";

import "./ProductCard.css";


export const ProductCard = () => {
  const { product } = useProductcontext();
   const [grid , setgrid] = useState(true);
   const [apidata , setapidata] = useState(product.products)
   const [search , setsearch] = useState(" ");
  const [ cate , setcate] = useState(" ")
  const [Company , setcompany] = useState(" ");
  const [pricerange , setpricerange] = useState(0);


 // this is for company options array 
 const a = apidata.map((e)=>{
     return e["brand"]
 })
 
let unique = [ ...new Set(a)]
 



// end if this
 
  

const handlevalue = (e) => {
  
    setsearch(e.target.value.toLowerCase());
    e.preventDefault()
    try {
        
      const  filterdata =   apidata.filter((e)=>{
             return    e.category.toLowerCase().includes(search)
    })   
       
                 if(search.length !== 0 ){
                  setapidata(filterdata)
                 }
                 else if(search.length === 0 ){
                  setapidata(product.products)
                 }         
     }  
     catch (error) {
       console.log(error)
     } 
}

const category = (e) => {
 
   e.preventDefault()
setcate(e.target.value)
    try {
       
       const catedata = apidata.filter((e)=>{
       return e.category.toLowerCase().includes(cate)
       })
       if(catedata.length === 0){
          setapidata(product.products)
       }
       else if(catedata.length > 0){
        setapidata(catedata)
       }
   
    } catch (error) {
      console.log(error)
    }
}

const handlecompany = (e) => {
     e.preventDefault()
     setcompany(e.target.value)
    
    
     
     try {
         const  comp = apidata.filter((e)=>{
             return e.brand.toLowerCase().includes(Company)
         })
       
          if(comp.length === 0){
            setapidata(apidata)
         }
         else if( comp.length > 0){
           setapidata(comp)
         }
        
        

        
        
     } 
    
     catch (error) {
      console.log(error)
     }
    
}

const allproducts = () => {
  setapidata(product.products)
}

const price = (e) => {
    e.preventDefault()
   

    try {
      
      const pricefilter = apidata.filter((e)=>{
            return ( e.price <= pricerange ) 
      })
      
      if(pricefilter.length > 0){
        setapidata(pricefilter)
       }
       else if(pricefilter.length === 0){
         setapidata(product.products)
       }
      
      
      
    } catch (error) {
      console.log(error)
    }
}

  return (
    <>
   <div className="all-cont"> 
    
   <div className="sidebar">
 
  
        <input class="form-control search-bar  me-2 my-5"  type="search" placeholder="Search" aria-label="Search" onChange={handlevalue}/>
       
        <div class="flex-shrink-0 p-3 mx-5" style={{width: "280px"}}>
    <Link class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
      <span class="fs-5 fw-semibold">Categories</span>
    </Link>
    <ul class="list-unstyled ps-0">
    <li class="mb-1 sidebar-text">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false" value={"smartphones"} onClick={allproducts}>
          All Products
        </button>
      </li>
      <li class="mb-1 sidebar-text">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false" value={"smartphones"} onClick={category}>
          Smartphones
        </button>
      </li>
      <li class="mb-1 sidebar-text">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" value={"laptops"} aria-expanded="false" onClick={category}>
          Laptops
        </button>
      </li>
      <li class="mb-1 sidebar-text">
        <button class="btn  d-inline-flex align-items-center rounded border-0 " value={"fragrances"} aria-expanded="false" onClick={category}>
          Fragrances
        </button>
      </li>
      <li class="border-top my-3 "></li>
      <li class="mb-1 ">
        
      
      <span class="fs-5 fw-semibold">Company</span>
   
  <select class="form-select my-3" id="brand" 
  onChange={handlecompany} 
   aria-label="Default select example">
  
  { unique.map((e)=>{
       return (
        
          <>
          <option  value={e} >{e}</option>
          </>
        

       )
  })}
</select>
   
      </li>
      <li class="mb-1 my-4 ">
        <span class="fs-5 fw-semibold">PRICE RANGE : {pricerange}</span>
        <input type="range" class="form-range my-2" min={0}  step={10} max={2000} value={pricerange} onChange={(e) =>setpricerange(e.target.value)}   id="customRange2" />
        </li>
       <button className="btn btn-primary my-2 mx-2" onClick={price}>Search</button>
    </ul>
  </div>
    
     </div>
  
     <div className="header my-3  ">
         <div>
        <Link  onClick={() => setgrid(true)} >
        <span className="mx-3"></span><svg className= ' layout mx-2  ' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
  <path className= ' layout mx-2  '  d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
</svg>
</Link>

<Link  onClick={() => setgrid(false)}>
<span className="mx-3"></span><svg className=' grid mx-2 ' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
  <path className=' grid mx-2 ' d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
</svg>
</Link>
</div>
         <div>{apidata.length} :  Avialable Products</div>
         <div>
        


<select class="form-select my-3" id="brand"  name="brand" aria-label="Default select example">

          <option  >Sort</option>
          <option  >A to Z</option>
          <option  >Z to A</option>

</select>


         </div>
    </div>
      
        <div className="products-card">
          {

   
     apidata.map((e) => {
    
     
     
    
    if(  grid === true) {
      return (
       
        < >
       
          <div class="card" style = {{ width: "15rem" , padding : "20px 10px 0px 10px" }} key={e.id}>
  <img src={e.images[0]} class="card-img-top" alt="..." style={{height : "200px"}}/>
  <div class="card-body">
  <h5 class="card-title">{e.title}</h5>
  <p class="card-text">RS : {e.price}</p>
  <Link to={`/Singleproduct/${e.id}`} class="btn btn-primary">MORE DETIALS</Link>
  </div>
  </div>
        </>
      );
    }    
  
   if( grid === false){
    return (
      <>
      <div class="card mb-3" style={{ width : "75%" ,  padding : "20px 10px 0px 10px"}}>
  <div class="row g-0">
  <div class="col-md-4">
  <img src={e.images[0]} class="img-fluid rounded-start" alt="..."  />
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <h5 class="card-title">{e.title}</h5>
  <p class="card-text">RS : {e.price}</p>
  <Link to={`/Singleproduct/${e.id}`} class="btn btn-primary">MORE DETIALS</Link>
  </div>
  </div>
  </div>
  </div>
      </>
    )
  }
            

 })}
      
        </div>
        </div>
    
    </>
     
  );

 

        }
    




