import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <div className="flex justify-center gap-x-10">
          <span>Home</span>
          <span>About</span>
          <span>Listings</span>
          <span>Blog</span>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Patterson. All rights reserved.</p>
      </footer>
    );
}

export default Footer