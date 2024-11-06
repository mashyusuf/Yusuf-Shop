import React from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'

function Header() {
  return (
    <div>
        <TopHeader />
        <MiddleHeader />
        <p>Bottom  Header</p>
    </div>
  )
}

export default Header