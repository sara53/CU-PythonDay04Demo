import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
export default function ProductItem( props ) {
let navigate =  useNavigate()
  let { product } = props

  let goToProductDetails = (productId) => { 
    navigate(`/products/${productId}`);
  }
  


  return (
    <div className='col-sm-6 col-md-3'>
    <Card>
      <Card.Body>
                  <Card.Title>{ product.productName}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Text>
                      Price : { product.price}
          </Card.Text>
          <NavLink to={`/products/${product.id}`}><i className="mx-4 fs-2 text-warning bi bi-eye-fill"></i></NavLink>
          
          {/* onClick={()=>goToProductDetails(product.id)} */}
        <Button variant="success">Buy Now</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
