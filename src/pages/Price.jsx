import React from 'react'
import { Helmet } from 'react-helmet'
import PricePage from '../components/PricePage'

export default function Price (props) {
  return (
    <>
      <Helmet>
        <title>{'Цены | Suneli'}</title>
        <meta name='description' content='Цены грузинских приправ' />
      </Helmet>

      <PricePage />
    </>
  )
}
