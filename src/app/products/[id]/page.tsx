// Components এবং Helper ফাইল ইমপোর্ট
import Container from "@/components/header/Container";
import { getData } from "@/helpers";
import { ProductType } from "../../../../type";
import ProductsImages from "@/components/ProductsCard/ProductsImages";
import ProductPrice from "@/components/ProductsCard/ProductPrice";
import { MdStar } from "react-icons/md";
import PriceFormate from "@/components/ProductsCard/PriceFormate";
import { FaRegEye } from "react-icons/fa";
import AddToCartButton from "@/components/ProductsCard/AddToCartButton";
import Image from "next/image";
import { paymentImg } from "@/app/assets/banner";

interface Props {
  params: { id: string }; 
}

const SingleProductsPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  let product: ProductType | null = null;

  try {
    product = await getData(endpoint); // API থেকে ডাটা ফেচ
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return (
      <Container>
        <div className="text-center text-red-500">Failed to fetch product data.</div>
      </Container>
    );
  }

  // যদি প্রোডাক্ট ডাটা না পাওয়া যায়
  if (!product) {
    return (
      <Container>
        <div className="text-center text-red-500">Product not found.</div>
      </Container>
    );
  }

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <ProductsImages images={product.images} />

      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        {/* Pricing & Ratings */}
        <div className="flex items-center justify-between">
          <ProductPrice product={product} />

          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            <div className="text-base text-lightText flex items-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(product.rating);
                const halfFilled =
                  index + 1 > Math.floor(product.rating) &&
                  index < Math.ceil(product.rating);

                return (
                  <MdStar
                    key={index}
                    className={`${
                      filled
                        ? "text-[#fa8900]"
                        : halfFilled
                        ? "text-[#f7ca00]"
                        : "text-lightText"
                    }`}
                  />
                );
              })}
            </div>
            <p className="text-base font-semibold">{`(${product.rating.toFixed(
              1
            )} reviews)`}</p>
          </div>
        </div>

        {/* Product Popularity */}
        <p className="flex items-center">
          <FaRegEye className="mr-1" />{" "}
          <span className="font-semibold mr-1">250+</span> people are viewing
          this right now
        </p>

        {/* Savings Information */}
        <p>
          You are saving{" "}
          <span className="text-base font-semibold text-green-500">
            <PriceFormate
              amount={(product.price * product.discountPercentage) / 100}
            />
          </span>{" "}
          upon purchase
        </p>

        {/* Description */}
        <div>
          <p className="text-sm tracking-wide">{product.description}</p>
          <p className="text-base">{product.warrantyInformation}</p>
        </div>

        {/* Additional Details */}
        <p>
          Brand: <span className="font-medium">{product.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-medium capitalize">{product.category}</span>
        </p>
        <p>
          Tags:{" "}
          {product.tags?.map((item, index) => (
            <span key={index} className="font-medium capitalize">
              {item}
              {index < product.tags.length - 1 && ", "}
            </span>
          ))}
        </p>

        {/* Add to Cart Button */}
        <AddToCartButton
          product={product}
          className="rounded-md uppercase font-semibold"
        />

        {/* Payment Guarantee Section */}
        <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
          <Image
            src={paymentImg}
            alt="payment"
            className="w-auto object-cover"
          />
          <p className="font-semibold">Guaranteed safe & secure checkout</p>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductsPage;
