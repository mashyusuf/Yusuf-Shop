"use client";
import React, { useEffect, useState } from "react";
import { ProductType, StateType } from "../../../type";
import PriceFormate from "./PriceFormate";
import { useDispatch, useSelector } from "react-redux";

function ProductPrice({ product }: { product: ProductType }) {
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  const { cart } = useSelector((state: StateType) => state?.shofy);
  const dispatch = useDispatch();
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;
  return (
    <div>
      <PriceFormate
        amount={
          existingProduct
            ? discountedPrice * existingProduct?.quantity!
            : discountedPrice
        }
        className="text-gray-500 line-through font-normal"
      />
      <PriceFormate
        amount={
          existingProduct
            ? regularPrice * existingProduct?.quantity!
            : regularPrice
        }
        className="font-semibold text-sky-600"
      />
    </div>
  );
}

export default ProductPrice;
