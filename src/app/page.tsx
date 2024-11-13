import Banner from '@/components/header/banner/Banner'
import Products from '@/components/products/Products';
import { getData } from '@/helpers';
import React from 'react'

export default async function Home() {
  const endPoint = 'https://dummyjson.com/products';
  const {products} = await getData(endPoint);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  )
}
