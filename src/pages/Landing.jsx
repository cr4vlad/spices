import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import LandingPage from '../components/LandingPage'

function Landing (props) {
  if (!props.categories) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      <Helmet>
        <title>Suneli</title>
        <meta
          name='description'
          content='Оптовый магазин грузинских специй, пряностей, приправ. Прямые поставки из Грузии. Самые свежие специи в Украине.'
        />
        <meta
          name='keywords'
          content='грузинские приправы, грузинские приправы купить, приправа, специя, купить приправы, купить приправы украина, купить приправы киев, купить приправы оптом, suneli, сунели, специи, специи купить, грузинские специи, грузинские специи купить, пряности, пряности купить, пряные закуски, закуски, смеси специй, грузинские пряности, грузинские пряности купить, грузинские пряные закуски, грузинские закуски, грузинские смеси специй, грузинская смесь специй, мука, мука купить, мука купить оптом, кукурузная мука, кукурузная мука купить, кукурузная мука купить оптом, оптовый магазин, оптовые цены, закупка, грузинские специи оптом в украине'
        />
      </Helmet>

      <LandingPage categories={props.categories} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps, null)(Landing)
