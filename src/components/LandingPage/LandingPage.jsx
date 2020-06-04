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

  function compareIndexes (a, b) {
    return a.index - b.index
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
        {categories.sort(compareIndexes).map(category => (
          <LandingCategoryContainer key={category.id} id={category.id} />
        ))}

        <p>
          <b>Добро пожаловать! Gamardschoba!</b><br />
          Интернет-магазин Suneli სუნელი подготовил для Вас богатейший ассортимент специй, разнообразие приправ и свежих пряностей, прямиком из Грузии!<br />
          Грузия разнообразна своими травами и специями. Их бывает трудно найти в продуктовых магазинах нашей страны, но вы всегда можете купить грузинские специи в нашем интернет магазине с доставкой в любой город Украины.<br />
          Специи можно купить оптом или в розницу по выгодной цене в Украине. На страницах нашего сайта Вы найдете ароматные приправы и пряности, используемые в национальной кухне Грузии. В нашем интернет-магазине вы можете купить специи и пряности в Киеве или заказать доставку товаров в Киев, Харьков, Одессу, Запорожье, Львов или любой другой город Украины.<br />
          Все приправы и специи, которые можно купить в Украине при помощи нашего интернет-магазина, являются свежими и прошли строгий контроль качества.<br />
          Товары содержат только натуральные ингредиенты без добавок, ароматизаторов, красителей и усилителей вкуса, ГМО. Мы тщательно следим за соблюдением всех необходимых правил гигиены и хранения специй. У нас прямые поставки из Грузии и только свежие специи!<br />
          <b>Приятных Вам покупок и вкусовых изысков!</b>
        </p>
        <Link to='/price'><b>Прайс-лист</b></Link>
      </article>
    </>
  )
}
