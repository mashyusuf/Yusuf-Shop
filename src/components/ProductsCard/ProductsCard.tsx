import React from 'react'
import { ProductType } from '../../../type'
import Link from 'next/link'
import Image from 'next/image'
import SideBar from './SideBar'
import ProductPrice from './ProductPrice'
import AddToCartButton from './AddToCartButton'

function ProductsCard({product}:{product:ProductType}) {
  return (
    <div className='border border-gray-400 hover:shadow-lg overflow-hidden hover:shadow-black/30 duration-200 rounded-md group relative'>
      <Link href={'/products'}>
      <Image src={product?.images[0]} alt='product-img' width={500} height={500} priority={true} className='w-full h-64 object-contain hover:scale-110' />
      <p className='text-xs absolute top-2 right-2 bg-red-500 px-2 py-1 rounded-xl text-white'>{product.discountPercentage}%</p>
      </Link>
      {/* side Bar Section*/}
      <SideBar />
      {/* description */}
      <div className='border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-40'>
      <div>
        <p className='text-sm font-medium text-lightText capitalize'>{product?.category}</p>
        <h2 className='font-semibold text-base line-clamp-2'>{product?.title}</h2>
        {/* Product Price*/}
        <ProductPrice product={product} />
        {/* Product Add Too Cart*/}
        <AddToCartButton />
      </div>
      </div>
    </div>
  )
}

export default ProductsCard