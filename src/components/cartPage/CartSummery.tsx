import React, { useEffect, useState } from 'react'
import { ProductType } from '../../../type'
import Title from '../Title';
import PriceFormate from '../ProductsCard/PriceFormate';
import Button from '../button/Button';
import toast from 'react-hot-toast';
interface Props {
  cart: ProductType[];
}
function CartSummery({cart}:Props) {
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountAmt, setDiscountAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    let discount = 0;
    cart?.map((item) => {
      amt += item?.price * item?.quantity!;
      discount +=
        ((item?.price * item?.discountPercentage) / 100) * item?.quantity!;
    });

    setTotalAmt(amt);
    setDiscountAmt(discount);
  }, [cart]);
  const handleCheckout = ()=>{
    toast.success('Check Out Page Will Comming Soon')
  }
  return (
    <section className="rounded-lg bg-gray-100 px-4 py-6 sm:p-10 lg:col-span-5 mt-16 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Sub Total</Title>
          <PriceFormate amount={totalAmt} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Discount</Title>
          <PriceFormate amount={discountAmt} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Payable Amount</Title>
          <PriceFormate
            amount={totalAmt - discountAmt}
            className="text-lg font-bold"
          />
        </div>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </section>
  )
}

export default CartSummery