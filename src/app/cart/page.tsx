import CartProducts from '@/components/cartPage/CartProducts'
import Container from '@/components/header/Container'
import React from 'react'

function Cartpage() {
  return (
    <Container className='py-10'>
        <CartProducts />
    </Container>
  )
}

export default Cartpage