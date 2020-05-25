import React from 'react'
import { Helmet } from 'react-helmet'
import ProductPage from '../components/ProductPage'

export default function Product (props) {
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
