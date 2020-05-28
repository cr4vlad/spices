import React from 'react'
import './ProductPage.css'

export default function ProductPage (props) {
  const product = props.product

  return (
    <article className='no-hero'>
      <h2>{product.title}</h2>
      <img alt={product.title} src={product.logo} />
      <p>Розничная цена: {product.price} грн/кг</p>
      {product.price100 && (<p>Оптовая цена: от {product.price100} грн/кг</p>)}
      {product.description && (<p>{product.description}</p>)}
    </article>
  )
}
