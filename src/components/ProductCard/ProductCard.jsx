import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard (props) {
  const { product } = props

  if (!product) {
    return (
      <p className='loading'>Loading product...</p>
    )
  }

  return (
    <div className='card'>
      <div className='img-block'>
        <img alt={product.title} src={product.logo} />
      </div>

      <h3 className='card-title'>{product.title}</h3>

      <div className='price-line'>
        {product.price100 ? (<p> От {product.price100} грн/кг</p>) : (
          <p> {product.price} грн/кг</p>
        )}
        <Link to={`/${product.category}/${product.id}`} className='order'>Подробнее</Link>
      </div>
    </div>
  )
}
