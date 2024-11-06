// Container.js
import React from 'react';
import { twMerge } from 'tailwind-merge';
interface Props{
    children: React.ReactNode;
    className?:string;
}
function Container({ children, className } : Props) {
  return (
    <div className={twMerge("max-w-[1140px] mx-auto px-4", className)}>
      {children}
    </div>
  );
}

export default Container;
