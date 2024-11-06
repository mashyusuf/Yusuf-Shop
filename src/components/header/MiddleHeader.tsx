import Image from "next/image";
import React from 'react'
import Container from '@/components/header/Container';
import { logo } from '@/app/assets/banner';
import SearchInput from "./SearchInput";

function MiddleHeader() {
  return (
    <div className='border-b-[1px] border-b-gray-400'>
        <Container className='py-3 flex items-center gap-4 md;gap-6 lg:gap-20 justify-between'>
           <Image src={logo} alt="logo" className="w-14 rounded-full" />
           <SearchInput />
           <div>NavigationBar</div>
        </Container>
    </div>
  )
}

export default MiddleHeader