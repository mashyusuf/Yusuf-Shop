import Container from '@/components/header/Container';
import { getData } from '@/helpers';
import { ProductType } from '../../../../type';
import ProductsImages from '@/components/ProductsCard/ProductsImages';

interface Props {
  params: { id: string };
}

const SingleProductsPage = async ({ params }: Props) => {
  // Ensure params destructuring is synchronous
  const { id } = params; // No need for async/await here as `params` is directly passed in by Next.js.

  const endpoint = `https://dummyjson.com/products/${id}`;
  let product: ProductType | null = null;

  try {
    product = await getData(endpoint);
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw new Error('Product data could not be fetched.');
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Product Image */}
      <ProductsImages images={product?.images} />
      {/* Product Details */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
      {/* Product Review */}
    </Container>
  );
};

export default SingleProductsPage;
