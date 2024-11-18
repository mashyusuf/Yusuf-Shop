import Container from "@/components/header/Container";
import { getData } from "@/helpers";
import { ProductType } from "../../../../type";
import ProductsImages from "@/components/ProductsCard/ProductsImages";
import ProductPrice from "@/components/ProductsCard/ProductPrice";
import { MdStar } from "react-icons/md";
import PriceFormate from "@/components/ProductsCard/PriceFormate";
import { FaRegEye } from "react-icons/fa";
import AddToCartButton from "@/components/ProductsCard/AddToCartButton";
import {  paymentImg } from "@/app/assets/banner";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const SingleProductsPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  let product: ProductType | null = null;

  try {
    product = await getData(endpoint);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Product data could not be fetched.");
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <ProductsImages images={product?.images} />
      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="flex items-center justify-between">
          <ProductPrice
            product={product}
          />

          <div className="flex items-center gap-1">
            <div className="text-base text-lightText flex items-center">
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);

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
            <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
              1
            )} reviews)`}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye className="mr-1" />{" "}
          <span className="font-semibold mr-1">250+</span> peoples are viewing
          this right now
        </p>
        <p>
          You are saving{" "}
          <span className="text-base font-semibold text-green-500">
            <PriceFormate amount={product?.discountPercentage / 100} />
          </span>{" "}
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{product?.description}</p>
          <p className="text-base">{product?.warrantyInformation}</p>
        </div>
        <p>
          Brand: <span className="font-medium">{product?.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-medium capitalize">{product?.category}</span>
        </p>
        <p>
          Tags:{" "}
          {product?.tags?.map((item, index) => (
            <span key={index} className="font-medium capitalize">
              {item}
              {index < product?.tags?.length - 1 && ", "}
            </span>
          ))}
        </p>
        <AddToCartButton product={product} className="rounded-md uppercase font-semibold" />
        <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
          <Image
            src={paymentImg}
            alt="payment"
            className="w-auto object-cover"
          />
          <p className="font-semibold">Guaranteed safe & secure checkout</p>
        </div>
        
      </div>
      <div className="p-10 bg-[#f7f7f7] col-span-2 flex items-center flex-wrap gap-10">
          {product?.reviews?.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 p-5 border-[1px] border-amazonOrangeDark/50 rounded-md hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-1"
            >
              <p className="text-base font-semibold">{item?.comment}</p>
              <div className="text-xs">
                <p className="font-semibold">{item?.reviewerName}</p>
                <p className="">{item?.reviewerEmail}</p>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <MdStar
                    key={idx}
                    className={`${
                      idx < item?.rating
                        ? "text-yellow-500"
                        : "text-lightText"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
    </Container>
  );
};

export default SingleProductsPage;
