import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import ProductPage from '../components/ProductPage'

function Product (props) {
  const product = props.product

  if (product) {
    return (
      <>
        <Helmet>
          <title>{`${product.title} | Suneli`}</title>
          {product.meta_description && (<meta name='description' content={product.meta_description} />)}
          {product.keywords && (<meta name='keywords' content={product.keywords} />)}
        </Helmet>

        <ProductPage product={product} />
      </>
    )
  }

  return (
    <>
      <Helmet title='Загрузка товара... | Suneli' />

      <p className='loading'>Загрузка товара...</p>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  try {
    return {
      product: state.data.products[ownProps.match.params.categoryId].filter(product => {
        return product.id === ownProps.match.params.productId
      })[0]
    }
  } catch {
    return {
      product: {}
    }
  }
}

export default connect(mapStateToProps, null)(Product)
