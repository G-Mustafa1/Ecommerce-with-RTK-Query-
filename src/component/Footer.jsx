import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Shop</h2>
          <p className="text-sm">
            Elevate your style with our exclusive collections. High quality fashion at unbeatable prices.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Men's Clothing</a></li>
            <li><a href="#" className="hover:text-gray-300">Women's Clothing</a></li>
            <li><a href="#" className="hover:text-gray-300">Electronics</a></li>
            <li><a href="#" className="hover:text-gray-300">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: gmustufa1255@gmail.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-400 my-6"></div>

      <div className="text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
