import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between px-20 py-10 text-white">
    <span className="text-2xl font-bold cursor-pointer">Listing</span>
    <div className="flex flex-row gap-x-10">
      <span className="cursor-pointer">Home</span>
      <span className="cursor-pointer">About</span>
      <span className="cursor-pointer">Listings</span>
      <span className="cursor-pointer">Blog</span>
    </div>
  </nav>
  )
}

export default NavBar