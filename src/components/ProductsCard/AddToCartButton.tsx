'use client'

import { twMerge } from "tailwind-merge"
import { ProductType, StateType } from "../../../type";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/redux/Redux Reducer/ReduxReducer";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function AddToCartButton({product,className}:{product:ProductType;className?:string}) {
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  const {cart} = useSelector((state:StateType)=> state?.shofy)
  const dispatch = useDispatch()
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);
  const handleAddToCart = () =>{
    if(product){
      dispatch(addToCart(product));
      toast.success(`${product.title.substring(0,10)}... Added Succesfully!`)
    }
  }

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
         onClick={() => {
          dispatch(decreaseQuantity(product?.id));
          toast.success("Quantity decreased successfully");
        }}        
        disabled={existingProduct?.quantity! <= 1}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={() => {
              dispatch(increaseQuantity(product?.id));
              toast.success("Quantity increase successfully");
            }}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
      onClick={handleAddToCart}
      className={twMerge("bg-transparent w-full border border-sky-600 text-black rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2")}
    >
      Add To Cart
    </button>
      )}
    </>
  );
}

export default AddToCartButton;
