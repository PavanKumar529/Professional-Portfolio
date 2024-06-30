import React from 'react'
import { Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-3xl font-bold underline'>
      <h1>Hello, I am Layout of the website</h1>

      
      <Outlet/>
    </div>
  )
}

export default Header
