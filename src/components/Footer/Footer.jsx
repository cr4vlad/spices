import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer (props) {
  return (
    <footer>
      <div className='wrapper'>
        <div className='block'>
          <div className='title'>
            Разделы Сайта
          </div>
          <hr />
          <>
            <Link to='/' className='link'>
              Главная
            </Link>
            {props.categories && props.categories.map(category => (
              <Link key={category.id} to={`/${category.id}`} className='link'>
                {category.title}
              </Link>
            ))}
            <Link to='/price' className='link'>
              Цены
            </Link>
          </>
        </div>

        {(props.screenWidth > 600) && (
          <div className='block'>
            <div className='title'>
            О Нас
            </div>
            <hr />
            <div className='title'>
              <p>У нас Вы можете приобрести грузинские пряности, сухие смеси специй для разнообразных соусов и блюд. Мы отвечаем за безупречное качество и свежесть наших товаров.</p>
              <p>Доставка товаров осуществляется по всей Украине посредством популярных грузоперевозчиков.</p>
            </div>
          </div>
        )}

        <div className='block'>
          <div className='title'>
            Контакты
          </div>
          <hr />
          <>
            <p className='line'>Электронная почта: <a href='mailto:saneleblebi@gmail.com' className='email'>saneleblebi@gmail.com</a></p>
            <p className='line'>Телефон: +380982206029</p>
          </>
        </div>
      </div>

      <Link to='/' className='copyright'>
        © Copyright Suneli 2020
      </Link>
    </footer>
  )
}
