// TopHeader.js
import Container from '@/components/header/Container';
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
function TopHeader() {
  return (
    <div className='bg-[#010f1c] text-gray-200'>
      <Container className='flex justify-between items-center py-1'>
        <p className='w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1'>
         <TbTruckDelivery className='text-yellow-500 text-xl mr-2' />Free Express Shipping on orders $570+
        </p>
        <div className='hidden md:inline-flex items-center text-sm text-white'>
            <p className='headertopMenu'>English <FaAngleDown className='mt-1' /> </p>
            <p className='headertopMenu'>USD <FaAngleDown className='mt-1' /> </p>
            <p className='headertopMenu'>SETTING<FaAngleDown className='mt-1' /> </p>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;
