import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar (props) {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementsByClassName('mobile-menu')[0]

    switch (window.getComputedStyle(mobileMenu).display) {
      case 'none':
        mobileMenu.style.display = 'block'
        break
      case 'block':
        mobileMenu.style.display = 'none'
        break
      default:
        console.log('Invalid display value of mobile-menu')
        break
    }
  }

  return (
    <header role='banner'>
      <div className='wrapper'>
        <div className='nav--desktop'>
          <div className='title'>
            <Link to='/'>
              <h1>Suneli</h1>
            </Link>
          </div>

          <div className='menu' onClick={(props.screenWidth <= 1000) ? toggleMobileMenu : undefined}>
            <div className='mobile-menu'>
              {props.categories.map(category => (
                <div key={category.id} className='category'>
                  <Link to={`/${category.id}`} className='link'>
                    {category.title}
                  </Link>
                </div>
              ))}

              <div className='category'>
                <Link to='/price' className='link'>
                  Прайс-лист
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
