import React from 'react'
import { Navbar } from './Navbar'
import { HeaderMiddle } from './HeaderMiddle'
export const Header = () => {
  return (
    <>
    <Navbar/>
    <HeaderMiddle mydata = {'E-commerce'} />
    </>
  )
}

