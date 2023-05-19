import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function ProductDetails() {

 let navigate = useNavigate();
  let {id} = useParams();


  let backToProducts = () => {
    navigate(
    '/products'
    )
  }
  return (
      <div className='alert alert-info'>
      <h2>Product Details {id}</h2>
          <p>Product Name</p>
          <button onClick={backToProducts} className='btn btn-outline-dark'>Back to Products</button>

    </div>
  )
}
