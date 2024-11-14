import React from 'react';
import Container from '../header/Container';
import ProductsCard from '../ProductsCard/ProductsCard';
import { ProductType } from '../../../type';

interface Props {
  products: ProductType[] ;
}

function Products({ products }: Props) {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {
        products?.map((item:ProductType)=>(
          <ProductsCard key={item?.id} product={item} />
        )) }
    </Container>
  );
}

export default Products;
