import React from 'react'
import './ProductPage.css'
import { Link } from 'react-router-dom'

export default function ProductPage (props) {
  const product = props.product

  return (
    <article className='no-hero'>
      <h2>{product.title}</h2>
      <img alt={product.title} src={product.logo} />
      <p>Розничная цена: {product.price} грн/кг</p>
      {product.price100 && (<p>Оптовая цена: от {product.price100} грн/кг</p>)}
      <p><Link to='/price'>Смотреть все цены</Link></p>
      <p>Заказы принимаются по телефону: <b>+380982206029</b>, <b>+380990804364</b></p>
      {product.description && product.description.split('\n').map(function (item, index) {
        return (
          <span key={index}>
            {item}
            <br />
          </span>
        )
      })}
    </article>
  )
}
