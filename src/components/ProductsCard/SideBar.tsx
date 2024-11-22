'use client'
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ProductType, StateType } from '../../../type';
import { addToFavorite } from '@/redux/Redux Reducer/ReduxReducer';
import toast from 'react-hot-toast';

function SideBar({ product }: { product: ProductType }) {
  const { favorite } = useSelector((state: StateType) => state.shofy);
  const dispatch = useDispatch();

  const existingProduct = favorite?.find((item) => item?.id === product?.id);

  const handleFavorite = () => {
    dispatch(addToFavorite(product));
    if (existingProduct) {
      toast.success('Removed From Favorite Successfully');
    } else {
      toast.success('Added To Favorite Successfully!');
    }
  };

  return (
    <div className='absolute right-2 bottom-44 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40'>
      <button className='p-2 hover:bg-sky-600 hover:text-white duration-200'>
        <FiShoppingCart />
      </button>
      <button className='p-2 hover:bg-sky-600 hover:text-white border-y border-y-borderColor duration-200'>
        <LuEye />
      </button>
      <button
        onClick={handleFavorite}
        className='p-2 hover:bg-sky-600 hover:text-white duration-200'
      >
        {existingProduct ? (
          <MdFavorite className='text-sky-600' />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
}

export default SideBar;
