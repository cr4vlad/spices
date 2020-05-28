import React from 'react'
import { Link } from 'react-router-dom'
import LandingCategoryContainer from '../../containers/LandingCategoryContainer'
import './LandingPage.css'

export default function LandingPage (props) {
  const { categories } = props

  if (!categories) {
    return (
      <p className='loading'>Loading categories...</p>
    )
  }

  return (
    <>
      <div className='hero-image'>
        <div className='hero-content-wrapper'>
          <p className='hero-content'>
            Грузинские специи<br />
            Оптовая продажа
          </p>
        </div>
      </div>
      <article className='after-hero'>
        {categories.map(category => (
          <LandingCategoryContainer key={category.id} id={category.id} />
        ))}

        <Link to='/price'>Таблица расценок</Link>
      </article>
    </>
  )
}
