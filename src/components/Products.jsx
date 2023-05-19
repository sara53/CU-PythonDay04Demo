import React from 'react'
import ProductItem from './ProductItem'

export default function Products() {
    let prododucts = [
        {
            id: 1,
            productName: "Sumsung",
            price: 100
        },
        {
            id: 2,
            productName: "Iphone",
            price:400
        },
        {
            id: 3,
            productName: "Book",
            price:10
        },
        {
            id: 4,
            productName: "Pen",
            price:9
        }
    ]
  return (
    <div className='bg-dark p-5 text-center text-ligh'>
          <h2 className='text-warning mb-4'>Our Products</h2>
          <div className="container">
              <div className="row">
                  {prododucts.map( ( product ) => {
                      return <ProductItem key={product.id} product={product} />
                  } )}
                  
              </div>
          </div>
    </div>
  )
}
