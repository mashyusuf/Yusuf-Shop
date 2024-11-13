import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function Button({children,className,href,onClick}) {
  return (
   <>
   {
    href ? <Link href={href}>
    <button className={twMerge("bg-themeColor/80 text-white py-2 px-6 hover:bg-themeColor cursor-pointer duration-200",className)}>
    {children}
   </button></Link> :
   <button onClick={onClick} className={twMerge("bg-themeColor/80 text-white py-2 px-6 hover:bg-themeColor cursor-pointer duration-200",className)}>
   {children}
  </button>
   }
   </>
  )
}

export default Button