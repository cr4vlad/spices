import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import ProductPage from '../components/ProductPage'

function Product (props) {
  const productId = +props.match.params.productId

  //props.products

  return (
    <>
      <Helmet>
        <title>{'title | Грузинские приправы'}</title>
        <meta name='description' content='meta_description' />
        <meta name='keywords' content='keywords' />
      </Helmet>

      <ProductPage />
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.data.products[ownProps.match.params.categoryId][ownProps.match.params.productId]
  }
}

export default connect(mapStateToProps, null)(Product)
